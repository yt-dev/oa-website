import type { APIRoute } from "astro";
import { CONTACT_EMAIL, FALLBACK_SITE } from "../lib/seo";
import { pathForLang } from "../i18n/ui";
import { getDictionary } from "../i18n";

export const GET: APIRoute = ({ site }) => {
	const origin = site ?? new URL(FALLBACK_SITE);
	const en = getDictionary("en");
	const zh = getDictionary("zh");
	const ja = getDictionary("ja");
	const enUrl = new URL(pathForLang("en"), origin).href;
	const zhUrl = new URL(pathForLang("zh"), origin).href;
	const jaUrl = new URL(pathForLang("ja"), origin).href;
	const home = new URL("/", origin).href;

	const features = en.features.items.map((i) => `- ${i.title}: ${i.body}`).join("\n");

	const body = `# 301 OA

> ${en.footer.tagline}

301 OA is a team-oriented office automation product for schools, campuses, factories, and companies. Staff book meeting rooms, submit leave and business trips, register visitors, reserve vehicles, and drive lobby TV dashboards from one console. Deployments can stay kiosk-friendly on a site LAN, then require sign-in when the same app is exposed to the Internet.

## Site

- [Home](${home}): language detection, then one of the locales below
- [English](${enUrl}): ${en.meta.description}
- [中文](${zhUrl}): ${zh.meta.description}
- [日本語](${jaUrl}): ${ja.meta.description}

## Product

${features}

## Security model

- LAN profile: ${en.security.lanBody}
- Internet profile: ${en.security.netBody}

## Contact

- Email: ${CONTACT_EMAIL}
- Website: ${home}
`;

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
