# Kalendar Help Center

Static, bilingual (Spanish/English) help portal for [Kalendar](https://kalendar.kaminolabs.dev), deployed separately at `help-kalendar.kaminolabs.dev`.

## Stack

- Next.js 15 (App Router) + TypeScript + Tailwind CSS
- Content authored as Markdown/MDX files under `content/<locale>/<slug>.mdx`, rendered at build time with `remark`
- No database, no auth — fully static, deployable to Vercel as-is

## Structure

- `content/es/*.mdx`, `content/en/*.mdx` — one article per language, matched by filename (slug)
- `src/lib/articles.ts` — canonical list of article slugs
- `src/lib/mdx.ts` — reads and compiles article Markdown + frontmatter
- `src/app/[locale]/page.tsx` — article index with search
- `src/app/[locale]/[slug]/page.tsx` — individual article page
- `src/components/` — sidebar nav, search bar, language switcher

## Adding an article

1. Add the slug to `ARTICLE_SLUGS` in `src/lib/articles.ts`.
2. Create `content/es/<slug>.mdx` and `content/en/<slug>.mdx` with frontmatter (`title`, `description`, `order`) and Markdown body.

## Development

```bash
npm install
npm run dev
```
