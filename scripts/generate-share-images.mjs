/**
 * Rasterize Open Graph + app icons from SVG + the hero screenshot.
 * Run: bun scripts/generate-share-images.mjs
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fonts = [
	join("C:", "Windows", "Fonts", "segoeuib.ttf"),
	join("C:", "Windows", "Fonts", "segoeui.ttf"),
	join("C:", "Windows", "Fonts", "NotoSans-Bold.ttf"),
	join("C:", "Windows", "Fonts", "NotoSans-Regular.ttf"),
	join("C:", "Windows", "Fonts", "NotoSansSC-VF.ttf"),
];

function resvg(svg, width) {
	return new Resvg(svg, {
		fitTo: { mode: "width", value: width },
		font: {
			fontFiles: fonts,
			loadSystemFonts: true,
			defaultFontFamily: "Segoe UI",
		},
		background: "rgba(0,0,0,0)",
	})
		.render()
		.asPng();
}

const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="badge" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#6366f1"/>
      <stop offset="1" stop-color="#7c3aed"/>
    </linearGradient>
    <linearGradient id="headline" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#c7d2fe"/>
      <stop offset="0.5" stop-color="#bae6fd"/>
      <stop offset="1" stop-color="#ddd6fe"/>
    </linearGradient>
    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="1.2" cy="1.2" r="1.1" fill="#ffffff" fill-opacity="0.07"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="#0b1220"/>
  <circle cx="180" cy="-20" r="340" fill="#4f46e5" fill-opacity="0.38"/>
  <circle cx="1080" cy="40" r="300" fill="#0ea5e9" fill-opacity="0.22"/>
  <circle cx="640" cy="720" r="320" fill="#a855f7" fill-opacity="0.20"/>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <rect x="72" y="168" width="72" height="72" rx="18" fill="url(#badge)"/>
  <text x="108" y="214" text-anchor="middle" font-family="Segoe UI" font-weight="700" font-size="22" fill="#ffffff">301</text>
  <text x="160" y="214" font-family="Segoe UI" font-weight="600" font-size="34" fill="#ffffff">OA</text>

  <text x="72" y="292" font-family="Segoe UI" font-weight="700" font-size="40" fill="#ffffff">Team operations,</text>
  <text x="72" y="348" font-family="Segoe UI" font-weight="700" font-size="40" fill="url(#headline)">beautifully</text>
  <text x="72" y="398" font-family="Segoe UI" font-weight="700" font-size="40" fill="url(#headline)">organized</text>

  <text x="72" y="448" font-family="Segoe UI" font-size="18" fill="#94a3b8">Schools · Factories · Companies</text>

  <rect x="72" y="488" width="54" height="32" rx="16" fill="#ffffff" fill-opacity="0.08"/>
  <text x="99" y="509" text-anchor="middle" font-family="Segoe UI" font-weight="600" font-size="13" fill="#c7d2fe">EN</text>
  <rect x="134" y="488" width="62" height="32" rx="16" fill="#ffffff" fill-opacity="0.08"/>
  <text x="165" y="509" text-anchor="middle" font-family="Noto Sans SC" font-weight="600" font-size="13" fill="#c7d2fe">中文</text>
  <rect x="204" y="488" width="78" height="32" rx="16" fill="#ffffff" fill-opacity="0.08"/>
  <text x="243" y="509" text-anchor="middle" font-family="Noto Sans SC" font-weight="600" font-size="13" fill="#c7d2fe">日本語</text>
</svg>`;

async function roundedImage(input, width, height, radius) {
	const resized = await sharp(input)
		.resize(width, height, { fit: "cover", position: "top" })
		.png()
		.toBuffer();
	const mask = Buffer.from(
		`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="${width}" height="${height}" rx="${radius}" fill="#fff"/></svg>`,
	);
	return sharp(resized)
		.composite([{ input: mask, blend: "dest-in" }])
		.png()
		.toBuffer();
}

async function main() {
	const imagesDir = join(root, "public", "images");
	const iconsDir = join(root, "public", "icons");
	await mkdir(iconsDir, { recursive: true });

	const card = await sharp(resvg(ogSvg, 1200)).png().toBuffer();
	const shotPath = join(imagesDir, "hero-console.webp");
	const shot = await roundedImage(shotPath, 580, 328, 20);
	const shadow = await sharp({
		create: {
			width: 588,
			height: 336,
			channels: 4,
			background: { r: 0, g: 0, b: 0, alpha: 0 },
		},
	})
		.composite([
			{
				input: Buffer.from(
					`<svg xmlns="http://www.w3.org/2000/svg" width="588" height="336"><rect x="4" y="4" width="580" height="328" rx="20" fill="rgba(0,0,0,0.45)"/></svg>`,
				),
			},
		])
		.blur(8)
		.png()
		.toBuffer();

	const og = await sharp(card)
		.composite([
			{ input: shadow, left: 584, top: 148 },
			{ input: shot, left: 588, top: 146 },
		])
		.png({ compressionLevel: 9 })
		.toBuffer();

	const ogPngPath = join(imagesDir, "og-default.png");
	const ogWebpPath = join(imagesDir, "og-default.webp");
	await writeFile(ogPngPath, og);
	await sharp(og).webp({ quality: 86 }).toFile(ogWebpPath);

	const favicon = await readFile(join(root, "public", "favicon.svg"), "utf8");
	const icon512 = resvg(favicon, 512);
	const icon192 = await sharp(icon512).resize(192, 192).png().toBuffer();
	const icon180 = await sharp(icon512).resize(180, 180).png().toBuffer();
	await writeFile(join(iconsDir, "icon-512.png"), icon512);
	await writeFile(join(iconsDir, "icon-192.png"), icon192);
	await writeFile(join(root, "public", "apple-touch-icon.png"), icon180);

	const ogMeta = await sharp(og).metadata();
	console.log("Wrote", ogPngPath, `${ogMeta.width}x${ogMeta.height}`, `${(og.length / 1024).toFixed(1)}KB`);
	console.log("Wrote", ogWebpPath);
	console.log("Wrote icons 192/512 and apple-touch-icon.png");
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
