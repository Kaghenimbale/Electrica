import Image from "next/image";
import { useTranslations } from "next-intl";
import { MdEngineering } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "@/i18n/navigation";
import Engineer1 from "../../../public/360_F_782265344_F5Xl72Q4g09e97Zl2q9iTa0CfHdCIAli.jpg";
import Engineer2 from "../../../public/360_F_855658388_mhAf6KOoCuzVNG0wuz8cobAnm2qFnHA1.jpg";
import Engineer3 from "../../../public/OTC-Electricity-1020x615-1.jpg";

const Portfolio = () => {
  const t = useTranslations("HomeComponents.portfolio");
  const nav = useTranslations("navbar");
  const images = [
    { image: Engineer1, caption: "first" },
    { image: Engineer2, caption: "second" },
    { image: Engineer3, caption: "third" },
  ] as const;

  return (
    <section className="w-full bg-white px-6 py-20 md:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-5 flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-700 md:text-base">
            <MdEngineering className="text-xl" aria-hidden="true" />
            {t("title")}
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {t("description")}
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map(({ image, caption }, index) => (
            <figure
              key={caption}
              className="group relative isolate aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-lg shadow-slate-900/10"
            >
              <Image
                src={image}
                alt={t(`images.${caption}`)}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent"
                aria-hidden="true"
              />
              <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-slate-950/35 text-sm font-semibold text-white backdrop-blur-sm">
                0{index + 1}
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                <span className="max-w-[18rem] text-base font-semibold leading-snug text-white sm:text-lg">
                  {t(`images.${caption}`)}
                </span>
                <span
                  className="h-1 w-8 shrink-0 rounded-full bg-red-500 transition-all duration-300 group-hover:w-12 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-red-700 px-6 py-3 font-semibold text-white shadow-md shadow-red-950/10 transition-colors hover:bg-red-600 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
          >
            {nav("contact")}
            <FiArrowUpRight className="text-xl" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
