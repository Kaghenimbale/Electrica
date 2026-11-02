import type { Metadata } from "next";
import Image from "next/image";
import { FaCheckCircle, FaRegLightbulb } from "react-icons/fa";
import { getTranslations } from "next-intl/server";
import coffret from "../../../public/coffret.jpg";
import { FaComputer } from "react-icons/fa6";
import { TbNetwork, TbShoppingCartBolt } from "react-icons/tb";
import { useTranslations } from "next-intl";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "@/i18n/navigation";
import { createPageMetadata } from "@/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutComponent" });
  return createPageMetadata(locale, t("title"), t("description"));
}

const Page = () => {
  const t = useTranslations("AboutComponent");

  const iconMap: Record<number, React.ElementType> = {
    1: FaComputer,
    2: TbNetwork,
    3: FaRegLightbulb,
    4: TbShoppingCartBolt,
  };

  const rawServices = t.raw("services") as {
    id: number;
    title: string;
    description: string;
  }[][];

  const datas = rawServices.map((group) =>
    group.map((data) => ({
      ...data,
      Icon: iconMap[data.id],
    }))
  );

  return (
    <div className="pt-20">
      <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-slate-950 text-white">
        <Image
          src="/worker-red-uniform-operating-control-panel-industrial-machine-night_753333-6558.jpg"
          alt="Electrical technician inspecting an industrial control panel"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 z-0 bg-slate-950/55" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              <span className="h-px w-10 bg-red-500" aria-hidden="true" />
              {t("service")}
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              {t("description")}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center gap-3 rounded-lg bg-red-600 px-6 py-4 font-semibold text-white shadow-lg shadow-red-950/30 transition-colors hover:bg-red-500 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
            >
              {t("btntext")}
              <FiArrowUpRight className="text-xl" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative min-h-[320px] overflow-hidden rounded-lg sm:min-h-[440px]">
            <Image
              src={coffret}
              alt={t("panelAlt")}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
              {t("title")}
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
              {t("title1")}
            </h2>
            <p className="mt-5 leading-7 text-slate-600">{t("description1")}</p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {["service1", "service2", "service3", "service4"].map((key) => (
                <li key={key} className="flex items-start gap-3 text-slate-700">
                  <FaCheckCircle
                    className="mt-1 shrink-0 text-red-700"
                    aria-hidden="true"
                  />
                  <span className="leading-6">{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20 md:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 border-b border-slate-300 pb-6">
            <h2 className="text-3xl font-extrabold text-slate-950 sm:text-4xl">
              {t("service")}
            </h2>
          </div>

          <div className="grid gap-x-12 md:grid-cols-2">
            {datas.flat().map((data, index) => (
              <article
                key={data.id}
                className="grid grid-cols-[3.5rem_1fr] gap-5 border-b border-slate-300 py-7 first:pt-0 md:[&:nth-child(-n+2)]:pt-0"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-700 text-2xl text-white">
                  <data.Icon aria-hidden="true" />
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-red-700">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-bold text-slate-950">{data.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {data.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
