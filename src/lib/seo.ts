import { localeTags, locales, pathForLang } from "../i18n/ui";

export const BRAND_NAME = "301 OA";
export const THEME_COLOR = "#4f46e5";
export const BACKGROUND_COLOR = "#0b1220";
export const FALLBACK_SITE = "https://oa.kuon.top";
export const CONTACT_EMAIL = "ytzhbit@gmail.com";

export const OG_IMAGE = {
	path: "/images/og-default.png",
	type: "image/png",
	width: 1200,
	height: 630,
} as const;

export function siteUrl(site: URL | undefined): URL {
	return site ?? new URL(FALLBACK_SITE);
}

export function abs(site: URL, path: string): string {
	return new URL(path, site).href;
}

export function alternateLinks(site: URL, path = "") {
	return locales.map((lang) => ({
		lang: localeTags[lang],
		href: abs(site, pathForLang(lang, path)),
	}));
}

export function ogLocale(localeTag: string): string {
	return localeTag.replaceAll("-", "_");
}

export function buildJsonLd(input: {
	site: URL;
	canonical: string;
	title: string;
	description: string;
	localeTag: string;
	featureNames: string[];
	ogImageAlt: string;
}) {
	const origin = abs(input.site, "/");
	const orgId = `${origin}#organization`;
	const siteId = `${origin}#website`;
	const appId = `${origin}#software`;
	const logo = abs(input.site, "/icons/icon-512.png");
	const og = abs(input.site, OG_IMAGE.path);

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Organization",
				"@id": orgId,
				name: BRAND_NAME,
				url: origin,
				email: CONTACT_EMAIL,
				logo: {
					"@type": "ImageObject",
					url: logo,
					width: 512,
					height: 512,
				},
				image: og,
			},
			{
				"@type": "WebSite",
				"@id": siteId,
				url: origin,
				name: BRAND_NAME,
				alternateName: "301 Office Automation",
				description: input.description,
				publisher: { "@id": orgId },
				inLanguage: locales.map((l) => localeTags[l]),
			},
			{
				"@type": "WebPage",
				"@id": `${input.canonical}#webpage`,
				url: input.canonical,
				name: input.title,
				description: input.description,
				inLanguage: input.localeTag,
				isPartOf: { "@id": siteId },
				about: { "@id": appId },
				primaryImageOfPage: {
					"@type": "ImageObject",
					"@id": `${og}#primary`,
					url: og,
					contentUrl: og,
					width: OG_IMAGE.width,
					height: OG_IMAGE.height,
					caption: input.ogImageAlt,
				},
			},
			{
				"@type": "SoftwareApplication",
				"@id": appId,
				name: BRAND_NAME,
				url: origin,
				applicationCategory: "BusinessApplication",
				operatingSystem: "Web",
				description: input.description,
				inLanguage: locales.map((l) => localeTags[l]),
				image: og,
				screenshot: abs(input.site, "/images/hero-console.webp"),
				publisher: { "@id": orgId },
				featureList: input.featureNames,
				audience: {
					"@type": "Audience",
					audienceType: "Schools, campuses, factories, and companies",
				},
			},
		],
	};
}


