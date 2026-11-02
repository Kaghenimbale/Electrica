import type { Metadata } from "next";

export function createPageMetadata(
  locale: string,
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | Electrica`,
      description,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
  };
}
