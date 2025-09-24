"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import {
  FaTwitter,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { MdMail, MdPhone } from "react-icons/md";

const Footer = () => {
  const t = useTranslations("HomeComponents.footer");
  const locale = useLocale();
  const date = new Date().getFullYear();

  return (
    <div className="w-full bg-slate-950 text-white pt-16 px-6 lg:px-10">
      <div className="w-full lg:w-[70vw] mx-auto flex flex-col gap-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="flex flex-col gap-4">
            <Link
              href={`/${locale}/contact`}
              className="text-2xl font-bold hover:text-red-600 transition-colors"
            >
              {t("about")}
            </Link>
            <p className="text-gray-400">{t("description")}</p>
            <div className="flex gap-4 mt-2">
              {[FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaWhatsapp].map(
                (Icon, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    target="_blank"
                    className="transition-transform hover:scale-110 hover:text-red-600"
                  >
                    <Icon className="text-white text-xl" />
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">{t("explore")}</h3>
            <div className="relative w-[200px] h-[2px] bg-gray-300 mb-2">
              <div className="absolute w-[70px] h-[2px] bg-red-600 top-0 left-0"></div>
            </div>
            {["link1", "link2", "link3", "link4"].map((linkKey, idx) => (
              <Link
                key={idx}
                href={`/${locale}/${linkKey === "link1" ? "about" : "#"}`}
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                {t(linkKey)}
              </Link>
            ))}
            <Link
              href={`/${locale}/contact`}
              className="text-gray-400 hover:text-red-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Contact</h3>
            <div className="relative w-[200px] h-[2px] bg-gray-300 mb-2">
              <div className="absolute w-[70px] h-[2px] bg-red-600 top-0 left-0"></div>
            </div>
            <address className="text-gray-400 not-italic">
              Goma, Himbi, Av du Lac N°59 <br /> Congo DRC
            </address>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex gap-3 items-center">
                <MdMail className="text-red-600 text-xl" />
                <Link
                  href="mailto:kaghenimbale@gmail.com"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  kaghenimbale@gmail.com
                </Link>
              </div>
              <div className="flex gap-3 items-center">
                <MdPhone className="text-red-600 text-xl" />
                <span className="text-gray-400">+243977813248</span>
              </div>
            </div>
          </div>

          {/* Gallery / Placeholder */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">{t("gallery")}</h3>
            <div className="relative w-[200px] h-[2px] bg-gray-300 mb-2">
              <div className="absolute w-[70px] h-[2px] bg-red-600 top-0 left-0"></div>
            </div>
            {/* You can add gallery images here */}
          </div>
        </div>

        {/* Footer Bottom */}
        <footer className="bg-slate-900 flex flex-col lg:flex-row gap-4 lg:gap-6 justify-center items-center p-4 text-gray-400 text-sm lg:text-base">
          <span>&copy; {date}</span>
          <span className="text-red-600 font-bold">Electrica</span>
          <div className="w-[1px] h-5 bg-slate-500"></div>
          <span>{t("right")}</span>
          <div className="w-[1px] h-5 bg-slate-500"></div>
          <Link
            href="kaghenimbale.vercel.app"
            target="_blank"
            className="text-red-600 font-bold"
          >
            CHRIMK34
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
