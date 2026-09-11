import type { APIRoute } from "astro";
import { FALLBACK_SITE } from "../lib/seo";

function robotsTxt(sitemapURL: URL) {
	return `# 301 OA
# https://oa.kuon.top

User-agent: *
Allow: /

# Language splash at / is a client redirect (noindex). Locale pages are canonical.
# Do not Disallow it — crawlers should see noindex and follow hreflang.

# AI crawlers: same policy as search. Structured overview at /llms.txt

Sitemap: ${sitemapURL.href}
`;
}

export const GET: APIRoute = ({ site }) => {
	const origin = site ?? new URL(FALLBACK_SITE);
	const sitemapURL = new URL("sitemap-index.xml", origin);
	return new Response(robotsTxt(sitemapURL), {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
