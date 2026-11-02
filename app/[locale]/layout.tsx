import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { createPageMetadata } from "@/i18n/metadata";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFrench = locale === "fr";
  const title = isFrench
    ? "Électricité, réseaux et informatique"
    : "Electrical, networking and IT services";
  const description = isFrench
    ? "Electrica accompagne les particuliers et les entreprises pour leurs projets électriques, réseau et informatiques."
    : "Electrica helps homes and businesses with electrical, networking and computer projects.";

  return {
    ...createPageMetadata(locale, title, description),
    title: {
      default: `${title} | Electrica`,
      template: "%s | Electrica",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "a11y" });

  return (
    <html lang={locale}>
      <body
        className={`flex min-h-screen flex-col ${geistSans.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <a
            href="#main-content"
            className="sr-only z-[60] rounded-md bg-white px-4 py-3 font-semibold text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            {t("skipToContent")}
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
