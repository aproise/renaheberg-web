import type { Translations, LegalTranslations, Locale } from './types';

export async function getTranslations(locale: Locale): Promise<Translations> {
  const module = await import(`../lang/${locale}/index.json`);
  return module.default as Translations;
}

export async function getLegalTranslations(
  locale: Locale,
  page: 'privacy' | 'legal' | 'cookies' | 'rgpd' | 'gdpr',
): Promise<LegalTranslations> {
  const module = await import(`../lang/${locale}/legal.json`);
  return module.default[page] as LegalTranslations;
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
