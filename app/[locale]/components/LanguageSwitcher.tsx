"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { ChangeEvent } from "react";
import { FiChevronDown } from "react-icons/fi";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("navbar");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    if (newLocale !== "en" && newLocale !== "fr") return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <label className="relative">
      <span className="sr-only">{t("language")}</span>
      <select
        value={locale}
        onChange={handleChange}
        className="h-10 cursor-pointer appearance-none rounded-lg border border-white/15 bg-slate-900 py-2 pl-3 pr-8 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 sm:text-sm"
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
      <FiChevronDown
        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-sm text-slate-400"
        aria-hidden="true"
      />
    </label>
  );
};

export default LanguageSwitcher;
