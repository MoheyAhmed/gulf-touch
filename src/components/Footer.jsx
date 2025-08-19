"use client";
import { faF } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faTiktok,
  faSnapchat,
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
      <footer className="bg-white">
        <div className="container mx-auto px-5 text-center md:max-w-[50%] py-12">
          {/* Navigation Links */}
          <nav aria-label="Footer navigation" className="mb-5">
            <ul className="flex justify-around items-center">
              {links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="block text-xl transition duration-500 text-[#be9b3f] font-medium py-2 hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div
            className="flex justify-around items-center md:max-w-[50%] mx-auto"
            aria-label="Social media links"
          >

            <Link
              href="https://api.whatsapp.com/send/?phone=966508025823&text=مرحباً+هل+يمكنني+الحصول+على+المساعدة؟"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-gray-600 text-2xl mb-4 p-2 border rounded-full cursor-pointer hover:bg-green-600 hover:text-white transition duration-300"
              />
            </Link>



            <Link
              href="https://t.snapchat.com/7onYO8u7h"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FontAwesomeIcon
                icon={faSnapchat}
                className="text-gray-600 text-2xl mb-4 p-2 border rounded-full cursor-pointer hover:bg-yellow-300 hover:text-white transition duration-300"
              />
            </Link>


            <Link
              href="http://www.tiktok.com/@gulftouch_solutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn profile"
            >
              <FontAwesomeIcon
                icon={faTiktok}
                className="text-gray-600 text-2xl mb-4 p-2 border rounded-full cursor-pointer hover:bg-black hover:text-white transition duration-300"
              />
            </Link>




            <Link
              href="https://www.instagram.com/gulftouch_solutions?igsh=YjRuNnNsdjdnd2Ns&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram profile"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-gray-600 text-2xl mb-4 p-2 border rounded-full cursor-pointer hover:bg-red-700 hover:text-white transition duration-300"
              />
            </Link>




          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-gray-200 bg-[#0b3935] py-6 text-center">
          <div className="container">
            <p className="text-lg font-medium">{t("Footer")}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
