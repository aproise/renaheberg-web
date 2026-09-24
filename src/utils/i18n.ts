import fr from '../content/fr.json';
import en from '../content/en.json';

export type Locale = 'fr' | 'en';
export type Translations = typeof fr;

export const translations: Record<Locale, Translations> = { fr, en };

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.fr;
}

export function detectLocale(acceptLanguage: string): Locale {
  const primary = acceptLanguage.split(',')[0].trim().toLowerCase();
  return primary.startsWith('fr') ? 'fr' : 'en';
}

export function getAlternateUrls(pathname: string): { hreflang: string; href: string }[] {
  return [
    { hreflang: 'fr', href: `https://renaheberg.fr/fr${pathname}` },
    { hreflang: 'en', href: `https://renaheberg.fr/en${pathname}` },
    { hreflang: 'x-default', href: 'https://renaheberg.fr/' },
  ];
}