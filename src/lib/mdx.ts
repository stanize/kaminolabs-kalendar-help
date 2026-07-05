import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Locale } from "./i18n";
import { ARTICLE_SLUGS, type ArticleSlug } from "./articles";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface ArticleMeta {
  slug: ArticleSlug;
  title: string;
  description: string;
  order: number;
}

function readRaw(locale: Locale, slug: ArticleSlug): string {
  const filePath = path.join(CONTENT_DIR, locale, `${slug}.mdx`);
  return fs.readFileSync(filePath, "utf8");
}

export function getArticleMeta(locale: Locale, slug: ArticleSlug): ArticleMeta {
  const raw = readRaw(locale, slug);
  const { data } = matter(raw);
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    order: (data.order as number) ?? 0,
  };
}

export function getAllArticlesMeta(locale: Locale): ArticleMeta[] {
  return ARTICLE_SLUGS.map((slug) => getArticleMeta(locale, slug)).sort(
    (a, b) => a.order - b.order
  );
}

export interface CompiledArticle {
  html: string;
  frontmatter: { title: string; description: string; order: number };
}

export async function getCompiledArticle(
  locale: Locale,
  slug: ArticleSlug
): Promise<CompiledArticle> {
  const raw = readRaw(locale, slug);
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return {
    html: processed.toString(),
    frontmatter: {
      title: data.title as string,
      description: data.description as string,
      order: (data.order as number) ?? 0,
    },
  };
}
