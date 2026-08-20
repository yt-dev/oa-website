import type { Lang } from "./ui";
import en from "./en";
import zh from "./zh";
import ja from "./ja";

const dictionaries = { en, zh, ja } as const;

export type Dictionary = typeof en;

export function getDictionary(lang: Lang): Dictionary {
	return dictionaries[lang] ?? dictionaries.en;
}

export { en, zh, ja };
