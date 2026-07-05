import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, UI_STRINGS, LOCALES, type Locale } from "@/lib/i18n";
import { getCompiledArticle } from "@/lib/mdx";
import { ARTICLE_SLUGS, type ArticleSlug } from "@/lib/articles";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    ARTICLE_SLUGS.map((slug) => ({ locale, slug }))
  );
}

function isArticleSlug(value: string): value is ArticleSlug {
  return (ARTICLE_SLUGS as readonly string[]).includes(value);
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug: rawSlug } = await params;
  if (!isLocale(rawLocale) || !isArticleSlug(rawSlug)) notFound();

  const locale = rawLocale as Locale;
  const slug = rawSlug as ArticleSlug;
  const t = UI_STRINGS[locale];

  const { html, frontmatter } = await getCompiledArticle(locale, slug);

  return (
    <article>
      <Link
        href={`/${locale}`}
        className="mb-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-soft hover:text-ink"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="m15 18-6-6 6-6" />
        </svg>
        {t.backToArticles}
      </Link>

      <h1 className="mb-1 text-[28px] font-semibold tracking-tight text-ink">
        {frontmatter.title}
      </h1>
      <p className="mb-8 text-[15px] text-ink-soft">{frontmatter.description}</p>

      <div
        className="prose prose-neutral max-w-none prose-headings:font-semibold prose-a:text-brand prose-a:no-underline hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
