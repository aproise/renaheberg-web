export type Locale = 'fr' | 'en';

export interface Hero {
  eyebrow: string;
  brand: string;
  rna: string;
  claim: string;
  scrollCta: string;
  scrollAria: string;
}

export interface Intro {
  title: string;
  text: string;
  factsHeading: string;
  period: string;
  facts: { value: string; label: string }[];
  status: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  text: string;
}

export interface Services {
  eyebrow: string;
  title: string;
  items: ServiceItem[];
}

export interface Archive {
  eyebrow: string;
  title: string;
  text: string;
}

export interface Footer {
  copyright: string;
  author: string;
}

export interface Ui {
  theme: string;
  language: string;
  themeLight: string;
  themeDark: string;
  langSwitchToEn: string;
  langSwitchToFr: string;
}

export interface Meta {
  title: string;
  description: string;
}

export interface CookieBanner {
  text: string;
  accept: string;
  refuse: string;
  learnMore: string;
}

export interface CookieLinks {
  privacy: string;
  cookies: string;
}

export interface MirrorBanner {
  text: string;
  button: string;
}

export interface Cookie {
  banner: CookieBanner;
  links: CookieLinks;
  mirrorBanner: MirrorBanner;
}

export interface Error404 {
  title: string;
  subtitle: string;
  backHome: string;
  backHomeAria: string;
}

export interface Translations {
  hero: Hero;
  intro: Intro;
  services: Services;
  archive: Archive;
  footer: Footer;
  ui: Ui;
  meta: Meta;
  cookie: Cookie;
  error404: Error404;
}

/* ------------------------------------------------------------------ */
/*  Legal pages (src/lang/<locale>/legal.json)                        */
/*  Type unique avec tous les champs optionnels                       */
/* ------------------------------------------------------------------ */

export interface LegalBase {
  title: string;
  lastUpdated: string;
  disclaimer: string;
}

export interface LegalContentItem {
  name: string;
  url: string;
}

export interface LegalContent extends LegalBase {
  /* Privacy */
  controller?: { title: string; text: string };
  dpo?: { title: string; text: string };
  purposes?: { title: string; items: { purpose: string; basis: string; details: string }[] };
  dataCategories?: { title: string; items: string[] };
  recipients?: { title: string; text: string };
  transfers?: { title: string; text: string };
  retention?: { title: string; items: string[] };
  rights?: {
    title: string;
    items: { right: string; description: string }[];
    exercise: string;
  };
  complaint?: { title: string; text: string };

  /* Legal */
  publisher?: { title: string; items: string[] };
  director?: { title: string; text: string };
  hosting?: { title: string; items: string[] };
  processor?: { title: string; text: string };
  ip?: { title: string; text: string };
  liability?: { title: string; text: string };
  law?: { title: string; text: string };
  contact?: { title: string; text: string };

  /* Cookies */
  intro?: { title: string; text: string };
  categories?: {
    title: string;
    items: {
      name: string;
      description: string;
      consent: string;
      cookies: { name: string; purpose: string; duration: string; domain: string }[];
      note?: string;
    }[];
  };
  consent?: { title: string; text: string };
  withdraw?: { title: string; text: string };
  refuseConsequence?: { title: string; text: string };
  browserSettings?: {
    title: string;
    text: string;
    links: LegalContentItem[];
  };

  /* RGPD */
  gdprRights?: {
    title: string;
    items: { article: string; name: string; description: string }[];
  };
  exercise?: {
    title: string;
    steps: string[];
    timeline: string;
  };
  verification?: { title: string; text: string };
  refusal?: { title: string; text: string };
  representative?: { title: string; text: string };
}

export type LegalTranslations = LegalContent;
