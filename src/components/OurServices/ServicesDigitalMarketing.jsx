import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import ServicesSlider from "../ServicesSlider/ServicesSlider";
import { marketing } from "@/components/ServicesSlider/servicesSliderImages";

export default function ServicesDigitalMarketing() {
    const { t } = useTranslation();
    
  return (
    <>
      <div className="hover:scale-105 p-6 bg-gray-100 rounded-3xl shadow-2xl cursor-pointer border-4 border-gray-400 transition-all duration-500">
        <div>
          <FontAwesomeIcon
            icon={faChartLine}
            size="3x"
            className="text-[#be9b3f] mb-4 p-6 rounded-full border-gray-300"
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-7 text-[#be9b3f]">
            {t("Home_OurServices_DigitalMarketing")}
          </h3>
          <p className="text-xl text-gray-600">
            {t("Home_OurServices_DigitalMarketing_Title")}
          </p>
        </div>
        <div>
          <ServicesSlider items={marketing} />
        </div>
      </div>
    </>
  );
}
