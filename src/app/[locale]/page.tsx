import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, UI_STRINGS, type Locale } from "@/lib/i18n";
import { getAllArticlesMeta } from "@/lib/mdx";
import { SearchBar } from "@/components/search-bar";

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;

  const articles = getAllArticlesMeta(locale);
  const t = UI_STRINGS[locale];

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col items-start gap-5">
        <h1 className="text-[32px] font-semibold tracking-tight text-ink sm:text-[40px]">
          {t.helpCenter}
        </h1>
        <p className="max-w-lg text-[15px] text-ink-soft">{t.tagline}</p>
        <SearchBar locale={locale} articles={articles} />
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/${locale}/${a.slug}`}
            className="group rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand"
          >
            <h2 className="text-[16px] font-semibold text-ink group-hover:text-brand-strong">
              {a.title}
            </h2>
            <p className="mt-1.5 text-[14px] text-ink-soft">{a.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
