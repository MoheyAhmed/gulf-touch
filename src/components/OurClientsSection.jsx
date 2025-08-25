import React from "react";
import { useTranslation } from "react-i18next";
import OurClientsSlider from "./OurClientsSlider";

export default function OurClientsSection() {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="our-clients"
        className="pt-12"
        aria-labelledby="our-clients-title"
      >
        <div className="container mx-auto px-5 text-center md:max-w-7xl">
          <header className="mb-8">
            <p className="text-3xl font-semibold text-[#be9b3f] mb-2">
              {t("Home_OurClients")}
            </p>
            <h2
              id="our-clients-title"
              className="text-3xl md:text-3xl font-bold leading-snug text-[#333]"
            >
              {t("Home_OurClients_Title")}
            </h2>
          </header>

          {/* Clients Slider */}
          <div
            className="clients-slider"
            aria-label="Our clients logos carousel"
          >
            <OurClientsSlider />
          </div>
        </div>
      </section>
    </>
  );
}
