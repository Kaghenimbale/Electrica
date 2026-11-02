import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import Form from "../components/Form";
import { createPageMetadata } from "@/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactComponent" });
  return createPageMetadata(locale, t("title"), t("description"));
}

const Page = () => {
  const t = useTranslations("ContactComponent");

  const contactDetails = [
    {
      label: t("Address"),
      icon: FaLocationDot,
      content: (
        <>
          Goma, Quartier Himbi
          <br />
          Av du Lac N°59
        </>
      ),
    },
    {
      label: t("Email"),
      icon: MdEmail,
      content: (
        <a
          href="mailto:kaghenimbale@gmail.com"
          className="break-all text-slate-600 transition-colors hover:text-red-700 hover:no-underline"
        >
          kaghenimbale@gmail.com
        </a>
      ),
    },
    {
      label: t("Phone"),
      icon: IoIosCall,
      content: (
        <a
          href="tel:+243977813248"
          className="text-slate-600 transition-colors hover:text-red-700 hover:no-underline"
        >
          +243 977 813 248
        </a>
      ),
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50 px-6 pb-20 pt-32 md:px-10 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            {t("eyebrow")}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {t("description")}
          </p>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            {t("description1")}
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="rounded-2xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-900/10 sm:p-8 lg:p-10">
            <h2 className="text-xl font-bold sm:text-2xl">{t("detailsTitle")}</h2>
            <p className="mt-3 leading-7 text-slate-300">{t("detailsDescription")}</p>

            <ul className="mt-8 space-y-3">
              {contactDetails.map(({ label, icon: Icon, content }) => (
                <li
                  key={label}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-600/15 text-xl text-red-400">
                    <Icon aria-hidden="true" />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="font-semibold text-white">{label}</h3>
                    <div className="mt-1 text-sm leading-6 text-slate-300">
                      {content}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Form />
        </div>
      </div>
    </section>
  );
};

export default Page;
