"use client";

import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdCloseCircle } from "react-icons/io";
import { SiThunderstore } from "react-icons/si";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Navbar = () => {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <nav className="flex justify-center bg-slate-900 text-white py-4 px-8 top-0 left-0 right-0 fixed z-10">
      <div className="flex justify-between w-full lg:w-[80vw] items-center">
        <h1 className="flex font-extrabold text-4xl">
          <Link
            href={`/${locale}`}
            className="flex hover:no-underline gap-2 items-center"
          >
            <SiThunderstore className="text-red-600" />
            Electrica
          </Link>
        </h1>
        <ul
          className={`${
            isOpen
              ? "backdrop-blur-3xl absolute left-0 top-0 w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-10"
              : "hidden lg:flex gap-4"
          }`}
        >
          <li onClick={() => setOpen(false)}>
            <Link
              href={`/${locale}`}
              className="font-thin lg:font-sans text-blue-950 lg:text-white text-xl"
            >
              {t("home")}
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link
              href={`/${locale}/about`}
              className="font-thin lg:font-sans text-blue-950 lg:text-white text-xl"
            >
              {t("about")}
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link
              href={`/${locale}/contact`}
              className="font-thin lg:font-sans text-blue-950 lg:text-white text-xl"
            >
              {t("contact")}
            </Link>
          </li>
          <button
            className="flex items-center justify-center lg:hidden absolute top-10 right-10"
            onClick={handleOpen}
          >
            <IoMdCloseCircle className="font-extrabold text-5xl text-red-700" />
          </button>
        </ul>
        <button className="hidden lg:block bg-white text-slate-900 p-3 rounded-md transition-all delay-100 hover:bg-red-700 hover:text-white">
          BOOKING NOW
        </button>
        <button className="block lg:hidden" onClick={handleOpen}>
          <BiMenu className="text-5xl" />
        </button>
      </div>
      <LanguageSwitcher />
    </nav>
  );
};

export default Navbar;
