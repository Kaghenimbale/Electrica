import Image from "next/image";
import { useTranslations } from "next-intl";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { MdEngineering } from "react-icons/md";
import image2 from "../../../public/worker-red-uniform-operating-control-panel-industrial-machine-night_753333-6558.jpg";

const benefits = [
  { key: "first", number: "01" },
  { key: "second", number: "02" },
  { key: "third", number: "03" },
] as const;

const Benefits = () => {
  const t = useTranslations("HomeComponents.benefits");

  return (
    <section className="w-full bg-slate-50 px-6 py-20 md:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 flex flex-col lg:order-1">
          <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-700 md:text-base">
            <MdEngineering className="text-xl" aria-hidden="true" />
            {t("title")}
          </p>

          <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            {t("question")}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {t("description")}
          </p>

          <ul className="mt-8 space-y-3">
            {benefits.map(({ key, number }) => (
              <li
                key={key}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md sm:p-5"
              >
                <BsArrowRightCircleFill
                  className="mt-0.5 shrink-0 text-xl text-red-600"
                  aria-hidden="true"
                />
                <span className="flex-1 text-sm leading-6 text-slate-700 sm:text-base">
                  {t(`goals.${key}`)}
                </span>
                <span
                  className="hidden text-sm font-semibold tracking-wider text-slate-300 sm:block"
                  aria-hidden="true"
                >
                  {number}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-xl">
            <div
              className="absolute -bottom-4 -right-4 h-2/3 w-2/3 rounded-3xl bg-red-600"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-200 shadow-xl sm:aspect-[5/4]">
              <Image
                src={image2}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-white/20 bg-slate-950/70 px-4 py-3 text-white shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7">
                <MdEngineering
                  className="text-2xl text-red-400"
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  {t("title")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
