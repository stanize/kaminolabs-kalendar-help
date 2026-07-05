import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/lib/i18n";

// The root path always redirects into the default locale (Spanish). The
// language switcher inside the /[locale] routes lets visitors move to English.
export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
