import en from './en.json';
import it from './it.json';

export const locales = ['en', 'it'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const translations = { en, it } as const;

export type TranslationKeys = typeof en;

function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((acc, part) => acc?.[part], obj) ?? path;
}

export function useTranslations(locale: Locale) {
  const t = translations[locale] ?? translations[defaultLocale];

  return {
    t: (key: string) => getNestedValue(t, key),
    locale,
    otherLocale: locale === 'en' ? 'it' : ('en' as Locale),
  };
}
