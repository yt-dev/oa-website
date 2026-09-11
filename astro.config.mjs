// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

/** Production origin. Set SITE_URL on Cloudflare Pages (or any host). */
const site =
	process.env.SITE_URL ||
	process.env.CF_PAGES_URL ||
	"https://oa.kuon.top";

// https://astro.build/config
export default defineConfig({
	site,
	// Trailing slash helps consistent absolute URLs in sitemap / hreflang
	trailingSlash: "always",
	prefetch: true,
	i18n: {
		defaultLocale: "en",
		locales: ["en", "zh", "ja"],
		routing: {
			prefixDefaultLocale: true,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: "en",
				locales: {
					en: "en",
					zh: "zh-CN",
					ja: "ja",
				},
			},
			filter: (page) => {
				const { pathname } = new URL(page);
				if (pathname === "/") return false;
				if (/(^|\/)404\/?$/.test(pathname)) return false;
				return true;
			},
			namespaces: {
				news: false,
				video: false,
				image: false,
				xhtml: true,
			},
			serialize(item) {
				const en = item.links?.find(
					(l) => l.lang === "en" || l.hreflang === "en",
				);
				if (
					en &&
					!item.links.some(
						(l) => l.lang === "x-default" || l.hreflang === "x-default",
					)
				) {
					item.links.push({ lang: "x-default", url: en.url });
				}
				return item;
			},
		}),
	],
});
