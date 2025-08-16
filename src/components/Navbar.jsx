"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import SaudiIcon from "../../public/saudiIcon.png";
import EnglandIcon from "../../public/EnglandIcon.png";
import gulfTouchLogo from "../../public/logo Gulf Touch.svg";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("services"), href: "/services" },
    { name: t("projects"), href: "/projects" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <div className="container mx-auto">
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
      >
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-7">
            <Link aria-label="Gulf Touch Home" href={"/"}>
              <div className="text-2xl font-bold cursor-pointer hover:text-blue-500 transition">
                <Image
                  alt="Gulf Touch Logo"
                  width={150}
                  height={50}
                  src={gulfTouchLogo}
                />
              </div>
            </Link>
            <div className="hidden md:flex gap-6 items-center">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="hover:text-blue-600 transition text-xl letter-spacing-1.5 font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <button onClick={toggleLanguage} className="ml-4">
                {language === "en" ? (
                  <Image
                    className="cursor-pointer"
                    src={SaudiIcon}
                    alt="Switch to Arabic"
                    width={28}
                    height={20}
                  />
                ) : (
                  <Image
                    className="cursor-pointer"
                    src={EnglandIcon}
                    alt="Switch to English"
                    width={28}
                    height={20}
                  />
                )}
              </button>
            </div>
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-white shadow-md px-4 py-2">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="block py-2 hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button onClick={toggleLanguage} className="mt-2">
                {language === "en" ? (
                  <Image
                    className="cursor-pointer"
                    src={SaudiIcon}
                    alt="Switch to Arabic"
                    width={28}
                    height={20}
                  />
                ) : (
                  <Image
                    className="cursor-pointer"
                    src={EnglandIcon}
                    alt="Switch to English"
                    width={28}
                    height={20}
                  />
                )}
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
