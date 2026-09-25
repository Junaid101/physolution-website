export const DEFAULT_LANGUAGE = 'en' as const;

export const SUPPORTED_LANGUAGES = ['en', 'de'] as const;

export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'EN',
  de: 'DE',
};

export function isSupportedLanguage(language: string): language is Language {
  return SUPPORTED_LANGUAGES.includes(language as Language);
}

export function getSupportedLanguage(language?: string): Language {
  return language && isSupportedLanguage(language) ? language : DEFAULT_LANGUAGE;
}

export function getPathWithoutLocale(path = '') {
  const localePattern = new RegExp(`^/(${SUPPORTED_LANGUAGES.join('|')})(?=/|$)`);
  return path.replace(localePattern, '') || '/';
}

export function getLocalizedPath(language: Language, path = '') {
  const suffix = getPathWithoutLocale(path);
  return `/${language}${suffix === '/' ? '/' : suffix}`;
}