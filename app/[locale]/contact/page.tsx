"use client";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosCall, IoMdCloseCircle } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import Form from "../components/Form";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("ContactComponent");
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "wrapper") {
      setOpen((prev) => !prev);
    }
  };
  return (
    <div className="mt-[5rem] w-[70vw] mx-auto py-10 ">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-16">
          <h2 className="text-4xl font-bold flex">{t("title")}</h2>
          <div className="flex flex-col gap-8 lg:w-[30rem]">
            <p className="text-gray-500">{t("description")}</p>

            <p className="text-gray-500">{t("description1")}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 justify-between lg:w-[40rem]">
            <div className="flex flex-col gap-2">
              <FaLocationDot className="text-4xl border border-gray-500 w-[60px] h-[60px] p-2 rounded-lg text-gray-500" />
              <div>
                <p className="font-bold">{t("Address")}:</p>
                <p className="text-gray-500">
                  Goma, Quartier Himbi <br /> Av du Lac N°59
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <MdEmail className="text-4xl border border-gray-500 w-[60px] h-[60px] p-2 rounded-lg text-gray-500" />
              <div>
                <p className="font-bold">Email:</p>
                <p className="text-gray-500">kaghenimbale@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <IoIosCall className="text-4xl border border-gray-500 w-[60px] h-[60px] p-2 rounded-lg text-gray-500" />
              <div>
                <p className="font-bold">{t("Phone")}:</p>
                <p className="text-gray-500">+243977813248</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-red-700 text-white p-3 w-fit rounded-md transition-all delay-100 hover:bg-white hover:text-red-700 hover:border hover:border-red-700 flex gap-2 items-center"
            onClick={handleClick}
          >
            {t("contactBtn")} <FaAngleRight />
          </button>
        </div>
      </div>
      {isOpen ? (
        <div
          id="wrapper"
          onClick={handleClose}
          className="absolute w-[100%] h-[100%] backdrop-blur-md top-0 left-0 z-10 flex items-center justify-center"
        >
          <Form />
          <button
            className="flex items-center justify-center absolute top-10 right-10"
            onClick={handleClick}
          >
            <IoMdCloseCircle className="font-extrabold text-5xl text-red-700" />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Page;
