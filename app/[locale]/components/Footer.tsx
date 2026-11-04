import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";
import { SiThunderstore } from "react-icons/si";

const Footer = () => {
  const t = useTranslations("HomeComponents.footer");
  const nav = useTranslations("navbar");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16 lg:px-12 lg:py-20">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight text-white hover:text-white hover:no-underline"
          >
            <SiThunderstore className="text-3xl text-red-500" aria-hidden="true" />
            Electrica
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-slate-400">
            {t("description")}
          </p>
          <a
            href="https://wa.link/iz116d"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("whatsapp")}
            className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
          >
            <FaWhatsapp className="text-xl" aria-hidden="true" />
          </a>
        </div>

        <nav aria-label={t("explore")}>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            {t("explore")}
          </h2>
          <div className="mb-5 mt-3 h-0.5 w-12 bg-red-600" aria-hidden="true" />
          <ul className="flex flex-col items-start gap-4">
            <li>
              <Link
                href="/"
                className="text-slate-400 transition-colors hover:text-white hover:no-underline"
              >
                {nav("home")}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-slate-400 transition-colors hover:text-white hover:no-underline"
              >
                {nav("services")}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-slate-400 transition-colors hover:text-white hover:no-underline"
              >
                {nav("about")}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-slate-400 transition-colors hover:text-white hover:no-underline"
              >
                {nav("contact")}
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            {nav("contact")}
          </h2>
          <div className="mb-5 mt-3 h-0.5 w-12 bg-red-600" aria-hidden="true" />
          <address className="flex not-italic flex-col gap-4 text-slate-400">
            <span className="flex items-start gap-3">
              <MdLocationOn
                className="mt-1 shrink-0 text-lg text-red-500"
                aria-hidden="true"
              />
              <span>
                Goma, Himbi, Av du Lac N°59
                <br />
                Congo DRC
              </span>
            </span>
            <a
              href="mailto:kaghenimbale@gmail.com"
              className="flex items-center gap-3 transition-colors hover:text-white hover:no-underline"
            >
              <MdMail className="shrink-0 text-lg text-red-500" aria-hidden="true" />
              kaghenimbale@gmail.com
            </a>
            <a
              href="tel:+243977813248"
              className="flex items-center gap-3 transition-colors hover:text-white hover:no-underline"
            >
              <MdPhone className="shrink-0 text-lg text-red-500" aria-hidden="true" />
              +243 977 813 248
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-center text-sm text-slate-500 sm:px-10 md:flex-row md:px-12 md:text-left">
          <p>
            &copy; {year} <span className="font-semibold text-slate-300">Electrica</span>
            . {t("right")}.
          </p>
          <p>
            Built by <span className="font-semibold text-red-400">CHRIMK34</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
