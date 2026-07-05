import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, UI_STRINGS, LOCALES, type Locale } from "@/lib/i18n";
import { getAllArticlesMeta } from "@/lib/mdx";
import { Sidebar } from "@/components/sidebar";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Logo } from "@/components/logo";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;

  const articles = getAllArticlesMeta(locale);
  const t = UI_STRINGS[locale];

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 sm:px-8">
      <header className="flex items-center justify-between border-b border-line py-5">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Logo />
          <span className="hidden text-[13px] font-medium text-ink-soft sm:inline">
            {t.helpCenter}
          </span>
        </Link>
        <LanguageSwitcher locale={locale} />
      </header>

      <div className="flex flex-1 gap-10 py-8">
        <aside className="hidden w-56 shrink-0 md:block">
          <div className="sticky top-8">
            <Sidebar locale={locale} articles={articles} />
          </div>
        </aside>

        <main className="min-w-0 flex-1">{children}</main>
      </div>

      <footer className="border-t border-line py-8 text-[13px] text-ink-soft">
        {t.poweredBy}{" "}
        <span className="font-medium text-ink">KaminoLabs</span>
      </footer>
    </div>
  );
}
