"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import type { ArticleMeta } from "@/lib/mdx";

export function Sidebar({
  locale,
  articles,
}: {
  locale: Locale;
  articles: ArticleMeta[];
}) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {articles.map((a) => {
        const href = `/${locale}/${a.slug}`;
        const active = pathname === href;
        return (
          <Link
            key={a.slug}
            href={href}
            className={`rounded-lg px-3 py-2 text-[14px] font-medium transition-colors ${
              active
                ? "bg-brand-weak text-brand-strong"
                : "text-ink-soft hover:bg-canvas hover:text-ink"
            }`}
          >
            {a.title}
          </Link>
        );
      })}
    </nav>
  );
}
