"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const locales = ["en", "fr"];

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Determine current locale from URL or default to "en"
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = locales.includes(pathSegments[0])
    ? pathSegments[0]
    : "en";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    if (!newLocale) return;

    const segments = pathname.split("/");
    if (locales.includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.unshift("", newLocale); // add locale at start
    }
    router.replace(segments.join("/"));
  };

  return (
    <div className="relative inline-flex items-center text-red-600 top-20 right-8">
      <HiOutlineGlobeAlt className="absolute left-2 text-red-600 text-xl pointer-events-none" />
      <select
        className="pl-8 pr-2 py-1 rounded-md border border-gray-300 bg-white text-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-600"
        value={currentLocale}
        onChange={handleChange}
      >
        <option value="en">En</option>
        <option value="fr">Fr</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
