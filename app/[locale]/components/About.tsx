import Image from "next/image";
import { useTranslations } from "next-intl";
import { FiArrowUpRight } from "react-icons/fi";
import { MdBolt } from "react-icons/md";
import { Link } from "@/i18n/navigation";

const About = () => {
  const t = useTranslations("HomeComponents.about");
  const services = useTranslations("HomeComponents.Offer.services");

  const serviceHighlights = [
    services("first"),
    services("second"),
    services("third"),
  ];

  return (
    <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-slate-950 text-white">
      <Image
        src="/1_Ntcxw4Uyx5m8SaJmS0OJrg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/25" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />
      <div className="absolute -right-24 top-1/4 z-0 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-12 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-red-400 md:text-base">
            <span className="h-px w-10 bg-red-500" aria-hidden="true" />
            {t("title.first")}
          </p>

          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {t("title.second")}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            {t("description")}
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-red-600 px-6 py-4 font-semibold text-white shadow-lg shadow-red-950/30 transition duration-200 hover:bg-red-500 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
          >
            {t("contactBtn")}
            <FiArrowUpRight className="text-xl" aria-hidden="true" />
          </Link>

          <ul className="mt-12 flex flex-wrap gap-3">
            {serviceHighlights.map((service) => (
              <li
                key={service}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-slate-100 backdrop-blur-sm sm:text-sm"
              >
                <MdBolt className="shrink-0 text-red-400" aria-hidden="true" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
