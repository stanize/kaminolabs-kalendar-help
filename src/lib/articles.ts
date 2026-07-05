// Canonical list of help article slugs, in display order. Slugs are shared
// between locales (English, code-style) — only the MDX content and frontmatter
// titles differ per language, per the project convention of English
// identifiers everywhere and localized copy only in content/UI strings.
export const ARTICLE_SLUGS = [
  "getting-started",
  "business",
  "services",
  "team",
  "availability",
  "calendar",
  "clients",
  "booking-page",
  "support",
] as const;

export type ArticleSlug = (typeof ARTICLE_SLUGS)[number];
