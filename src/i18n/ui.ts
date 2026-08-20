export const languages = {
	en: "English",
	zh: "中文",
	ja: "日本語",
} as const;

export type Lang = keyof typeof languages;

/** SEO / unknown-URL fallback (x-default still points at English). */
export const defaultLang: Lang = "en";

/** Same as console / kiosk when there is no stored or browser locale. */
export const detectFallbackLang: Lang = "zh";

export const locales: Lang[] = ["en", "zh", "ja"];

/** BCP 47 tags for html lang + hreflang */
export const localeTags: Record<Lang, string> = {
	en: "en",
	zh: "zh-CN",
	ja: "ja",
};

/** Shared with console so the same browser keeps one preference. */
export const STORAGE_KEY = "oa.locale";

export function isLang(value: string | null | undefined): value is Lang {
	return !!value && locales.includes(value as Lang);
}

export function normalizeLang(value: string | null | undefined): Lang {
	if (!value) return detectFallbackLang;
	const base = value.split("-")[0]?.toLowerCase();
	return isLang(base) ? base : detectFallbackLang;
}

/** localStorage → navigator.language → zh (console / kiosk). */
export function detectLang(): Lang {
	try {
		if (typeof localStorage !== "undefined") {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored) return normalizeLang(stored);
		}
	} catch {
		/* ignore */
	}
	if (typeof navigator !== "undefined" && navigator.language) {
		return normalizeLang(navigator.language);
	}
	return detectFallbackLang;
}

export function persistLang(lang: Lang): void {
	try {
		localStorage.setItem(STORAGE_KEY, lang);
	} catch {
		/* ignore */
	}
}

export function getLangFromUrl(url: URL): Lang {
	const [, maybe] = url.pathname.split("/");
	if (maybe && isLang(maybe)) return maybe;
	return defaultLang;
}

export function pathForLang(lang: Lang, path = ""): string {
	const clean = path.replace(/^\/+/, "").replace(/\/+$/, "");
	return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}
