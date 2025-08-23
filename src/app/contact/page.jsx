"use client";
import Contact from "@/components/Contact";
import React from "react";
import { useTranslation } from "react-i18next";

export default function page() {
  const { t } = useTranslation();
  return (
    <>
      <div
        className={`flex justify-center items-center min-h-[85vh] bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/contactBG.jpg')] bg-cover bg-fixed bg-center h-[500px] w-full`}
      >
        <h1
          id="contact-title"
          className="text-4xl text-gray-200  font-bold  leading-snug mb-6"
        >
          {t("Contact_Page_Title")}
        </h1>
      </div>

      <section className="bg-gray-100 py-25">
        <div className="container mx-auto md:max-w-[70%]">
            <div className="text-center">
              <h4 className="text-3xl font-semibold text-[#be9b3f] mb-4">
                {t("Contact_Us")}
              </h4>
              <h2
                id="our-services-title"
                className="text-3xl md:text-3xl font-bold leading-snug mb-6"
              >
                {t("Contact_Us_Title")}
              </h2>
            </div>
    

            <Contact/>
        </div>
      </section>
    </>
  );
}
