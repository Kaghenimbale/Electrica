"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdMail, MdPhone } from "react-icons/md";

const Footer = () => {
  const t = useTranslations("HomeComponents.footer");
  const date = Date().slice(11, 15);
  return (
    <div className="w-full px-10 pt-10 bg-slate-950 text-white">
      <div className="w-full lg:w-[70vw] mx-auto flex flex-col gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-4">
            <Link href="/contact" className="text-2xl font-bold">
              {t("about")}
            </Link>
            <p className="text-gray-400">{t("description")}</p>
            <div className="flex gap-4">
              <Link href="http://" target="_blank">
                <FaInstagram className="text-white hover:text-red-600 hover:cursor-pointer" />
              </Link>
              <Link href="http://" target="_blank">
                <FaTwitter className="text-white hover:text-red-600 hover:cursor-pointer" />
              </Link>
              <Link href="http://" target="_blank">
                <FaFacebook className="text-white hover:text-red-600 hover:cursor-pointer" />
              </Link>
              <Link href="http://" target="_blank">
                <FaLinkedin className="text-white hover:text-red-600 hover:cursor-pointer" />
              </Link>
              <Link href="https://wa.link/iz116d" target="_blank">
                <FaWhatsapp className="text-white hover:text-red-600 hover:cursor-pointer" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold">{t("explore")}</h3>
            <div className="lg:w-[200px] h-[1px] bg-gray-300">
              <div className="lg:w-[70px] h-[2px] bg-red-600"></div>
            </div>
            <Link href="/about" className="text-gray-400 hover:underline">
              {t("link1")}
            </Link>
            <Link href="#" className="text-gray-400 hover:underline">
              {t("link2")}
            </Link>
            <Link href="#" className="text-gray-400 hover:underline">
              {t("link3")}
            </Link>
            <Link href="#" className="text-gray-400 hover:underline">
              {t("link4")}
            </Link>
            <Link href="/contact" className="text-gray-400 hover:underline">
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <Link href="/contact" className="font-bold">
              Contact
            </Link>
            <div className="lg:w-[200px] h-[1px] bg-gray-300">
              <div className="lg:w-[70px] h-[2px] bg-red-600"></div>
            </div>
            <address className="text-gray-400">
              Goma, Himbi, Av du Lac N°59 <br /> Congo DRC
            </address>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <MdMail className="text-red-600" />
                <Link
                  href="mailto:kaghenimbale@gmail.com"
                  className="text-gray-400"
                >
                  kaghenimbale@gmail.com
                </Link>
              </div>
              <div className="flex gap-4 items-center">
                <MdPhone className="text-red-600" />
                <span className="text-gray-400">+243977813248</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold">{t("gallery")}</h3>
            <div className="lg:w-[200px] h-[1px] bg-gray-300">
              <div className="lg:w-[70px] h-[2px] bg-red-600"></div>
            </div>
          </div>
        </div>
        <footer className="bg-slate-900 flex gap-2 justify-center lg:p-4 whitespace-nowrap">
          &copy; {date}
          <span className="text-red-600 font-bold hidden md:block">
            Electrica
          </span>
          <div className="w-[1px] h-8px bg-slate-400"></div>
          <p className="lg:text-xl whitespace-nowrap">{t("right")}</p>
          <div className="w-[1px] h-8px bg-slate-400"></div>
          <span className="text-red-600 font-bold">CHRIMK34</span>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
