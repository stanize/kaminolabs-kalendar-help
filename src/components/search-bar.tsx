"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { UI_STRINGS } from "@/lib/i18n";
import type { ArticleMeta } from "@/lib/mdx";

export function SearchBar({
  locale,
  articles,
}: {
  locale: Locale;
  articles: ArticleMeta[];
}) {
  const [query, setQuery] = useState("");
  const t = UI_STRINGS[locale];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q)
    );
  }, [query, articles]);

  return (
    <div className="relative w-full max-w-xl">
      <div className="flex items-center gap-2 rounded-xl border border-line bg-surface px-4 py-3 shadow-sm focus-within:border-brand">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="shrink-0 text-ink-soft"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="w-full bg-transparent text-[14px] text-ink placeholder:text-ink-soft focus:outline-none"
        />
      </div>

      {query.trim() && (
        <div className="absolute left-0 right-0 top-full z-10 mt-2 overflow-hidden rounded-xl border border-line bg-surface shadow-lg">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-[13px] text-ink-soft">{t.noResults}</p>
          ) : (
            <ul>
              {results.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/${locale}/${a.slug}`}
                    className="block px-4 py-3 hover:bg-canvas"
                    onClick={() => setQuery("")}
                  >
                    <p className="text-[14px] font-medium text-ink">{a.title}</p>
                    <p className="text-[13px] text-ink-soft">{a.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
