import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/i18n/metadata";
import About from "./components/About";
import Presentation from "./components/Presentation";
import Offer from "./components/Offer";
import Objectives from "./components/Objectives";
import Benefits from "./components/Benefits";
import Work from "./components/Work";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "HomeComponents.about",
  });
  return createPageMetadata(locale, t("title.second"), t("description"));
}

export default function Home() {
  return (
    <div className="mt-[4.5rem] flex w-full flex-col">
      <About />
      <Presentation />
      <Offer />
      <Objectives />
      <Benefits />
      <Work />
      <Portfolio />
      <Contact />
      <Testimonial />
    </div>
  );
}
