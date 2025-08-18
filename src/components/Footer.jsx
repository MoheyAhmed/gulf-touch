"use client";
import { faF } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  const { t } = useTranslation();
  const links = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("services"), href: "/services" },
    { name: t("projects"), href: "/projects" },
    { name: t("contact"), href: "/contact" },
  ];
  return (
    <>
      <footer className="bg-white ">
        <div className="container mx-auto px-5 text-center md:max-w-[50%] py-12">
          <div className="flex  justify-around items-center mb-5">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="block text-xl transition duration-500 text-[#be9b3f]  font-medium py-2 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex  justify-around items-center md:max-w-[50%] mx-auto">
            <div>
              <Link href="https://www.facebook.com/GulfTouch" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  // size="2x"
                  className="text-gray-600 text-3xl mb-4 p-2 border rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition duration-300"
                />
              </Link>
            </div>
            <div>
              <Link
                href="https://api.whatsapp.com/send/?phone=966%2050%20802%205823&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D9%87%D9%84+%D9%8A%D9%85%D9%83%D9%86%D9%86%D9%8A+%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9%D8%9F&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  // size="2x"
                  className="text-gray-600 text-3xl mb-4 p-2 border rounded-full cursor-pointer hover:bg-green-600 hover:text-white transition duration-300"
                />
              </Link>
            </div>
            <div>
              <Link href="https://www.facebook.com/GulfTouch" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  // size="2x"
                  className="text-gray-600 text-3xl mb-4 p-2 border rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition duration-300"
                />
              </Link>
            </div>
            <div>
              <Link href="https://www.facebook.com/GulfTouch" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  // size="2x"
                  className="text-gray-600 text-3xl mb-4 p-2 border rounded-full cursor-pointer hover:bg-red-700 hover:text-white transition duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-gray-200  bg-[#0b3935] py-6 text-center">
          <div className="container">
            <p className="text-lg font-medium">{t("Footer")}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
