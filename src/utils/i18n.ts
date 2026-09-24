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

export function getAlternateUrls(pathname: string, site: string | URL): { hreflang: string; href: string }[] {
  const base = String(site).replace(/\/$/, '');
  return [
    { hreflang: 'fr', href: `${base}/fr${pathname}` },
    { hreflang: 'en', href: `${base}/en${pathname}` },
    { hreflang: 'x-default', href: `${base}/` },
  ];
}