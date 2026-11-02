"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FiMenu, FiX } from "react-icons/fi";
import { SiThunderstore } from "react-icons/si";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./components/LanguageSwitcher";

const Navbar = () => {
  const t = useTranslations("navbar");
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  const links = [
    { href: "/", label: t("home") },
    { href: "/services", label: t("services") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ] as const;

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white shadow-lg shadow-slate-950/10 backdrop-blur-md">
      <nav
        className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12"
        aria-label={t("navigation")}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight text-white hover:text-white hover:no-underline sm:text-3xl"
        >
          <SiThunderstore className="text-2xl text-red-500 sm:text-3xl" aria-hidden="true" />
          Electrica
        </Link>

        <ul
          id="primary-navigation"
          className={`${
            isOpen
              ? "absolute inset-x-0 top-full flex flex-col gap-2 border-b border-white/10 bg-slate-950 px-6 py-5 shadow-xl md:px-10"
              : "hidden"
          } lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {links.map(({ href, label }) => {
            const active = pathname === href;

            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:no-underline lg:px-0 lg:py-2 ${
                    active
                      ? "bg-white/5 text-white lg:bg-transparent lg:text-red-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-white lg:hover:bg-transparent"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2 lg:hidden">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="flex min-h-12 items-center justify-center rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-red-500 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
            >
              {t("btn")}
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3 sm:gap-5">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="hidden min-h-11 items-center justify-center rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-950/25 transition-colors hover:bg-red-500 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 lg:inline-flex"
          >
            {t("btn")}
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-2xl text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 lg:hidden"
            onClick={() => setOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label={t(isOpen ? "closeMenu" : "openMenu")}
          >
            {isOpen ? (
              <FiX aria-hidden="true" />
            ) : (
              <FiMenu aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
