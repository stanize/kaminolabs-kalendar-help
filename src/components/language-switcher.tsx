"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { LOCALES } from "@/lib/i18n";

const LOCALE_LABEL: Record<Locale, string> = { es: "ES", en: "EN" };

// Swaps the leading /es or /en segment of the current path for the target
// locale, preserving the rest of the route (e.g. staying on the same article).
function pathForLocale(pathname: string, target: Locale): string {
  const segments = pathname.split("/");
  segments[1] = target;
  return segments.join("/") || `/${target}`;
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 rounded-full border border-line bg-surface p-1 text-[13px] font-medium">
      {LOCALES.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={pathForLocale(pathname, code)}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              active ? "bg-brand text-white" : "text-ink-soft hover:text-ink"
            }`}
            aria-current={active ? "true" : undefined}
          >
            {LOCALE_LABEL[code]}
          </Link>
        );
      })}
    </div>
  );
}
