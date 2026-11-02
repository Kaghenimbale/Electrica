import Image from "next/image";
import { useTranslations } from "next-intl";
import type { IconType } from "react-icons";
import { FaComputer, FaRegLightbulb } from "react-icons/fa6";
import { MdEngineering, MdElectricBolt } from "react-icons/md";
import { TbNetwork } from "react-icons/tb";
import img1 from "../../../public/a-man-with-a-white-helmet-and-glasses-is-smiling-he-is-wearing-an-orange-shirt-with-a-pattern-photo.jpg";
import img2 from "../../../public/worker-red-uniform-operating-control-panel-industrial-machine-night_753333-6558.jpg";
import img3 from "../../../public/electrical-engineer_762625-3025.avif";

const Offer = () => {
  const t = useTranslations("HomeComponents.Offer");

  const services: {
    key: "first" | "second" | "third";
    image: typeof img1;
    icon: IconType;
  }[] = [
    { key: "first", image: img1, icon: FaComputer },
    { key: "second", image: img2, icon: TbNetwork },
    { key: "third", image: img3, icon: FaRegLightbulb },
  ];

  return (
    <section className="w-full bg-slate-950 px-6 py-20 text-white md:px-10 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-5 flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-400 md:text-base">
            <MdEngineering className="text-xl" aria-hidden="true" />
            {t("title")}
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t("description")}
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ key, image, icon: Icon }, index) => (
            <article
              key={key}
              className="group relative isolate min-h-[22rem] overflow-hidden rounded-2xl bg-slate-800 shadow-lg shadow-black/20 sm:min-h-[25rem]"
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-slate-950/5"
                aria-hidden="true"
              />
              <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-slate-950/45 text-sm font-semibold text-white backdrop-blur-sm">
                0{index + 1}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-2xl text-white shadow-lg shadow-red-950/30">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">
                  {t(`services.${key}`)}
                </h3>
                <div
                  className="mt-4 h-1 w-10 rounded-full bg-red-500 transition-all duration-300 group-hover:w-16 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>

        <blockquote className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 px-6 py-8 sm:mt-16 sm:px-10 sm:py-10 lg:px-14">
          <div
            className="absolute -right-8 -top-10 text-[10rem] font-black leading-none text-white/[0.03]"
            aria-hidden="true"
          >
            “
          </div>
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600/10 text-3xl text-red-400">
              <MdElectricBolt aria-hidden="true" />
            </span>
            <p className="max-w-4xl text-xl font-semibold leading-relaxed text-white sm:text-2xl">
              {t("OurPrinciple")}
            </p>
          </div>
        </blockquote>
      </div>
    </section>
  );
};

export default Offer;
