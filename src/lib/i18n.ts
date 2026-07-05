export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export const UI_STRINGS: Record<Locale, {
  helpCenter: string;
  searchPlaceholder: string;
  noResults: string;
  home: string;
  backToArticles: string;
  poweredBy: string;
  tagline: string;
}> = {
  es: {
    helpCenter: "Centro de ayuda",
    searchPlaceholder: "Buscar en la ayuda…",
    noResults: "No se encontraron artículos.",
    home: "Inicio",
    backToArticles: "Volver a todos los artículos",
    poweredBy: "Un producto de",
    tagline: "Todo lo que necesitas saber para gestionar tu negocio en Kalendar.",
  },
  en: {
    helpCenter: "Help Center",
    searchPlaceholder: "Search help articles…",
    noResults: "No articles found.",
    home: "Home",
    backToArticles: "Back to all articles",
    poweredBy: "A product by",
    tagline: "Everything you need to know to run your business on Kalendar.",
  },
};
