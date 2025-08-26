import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import ServicesSlider from "../ServicesSlider/ServicesSlider";
import { branding } from "@/components/ServicesSlider/servicesSliderImages";

export default function ServicesBranding() {
    const { t } = useTranslation();
    
  return (
    <>
      <div className="hover:scale-105 p-6 rounded-3xl shadow-2xl cursor-pointer border-4 border-gray-400 transition-all duration-500">
        <div>
          <FontAwesomeIcon
            icon={faChartLine}
            size="3x"
            className="text-white mb-4 p-6 rounded-full border-gray-300"
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-7 text-[#be9b3f]">
            {t("Services_Branding")}
          </h3>
          <p className="text-xl text-gray-300">
            {t("Services_Branding_Description")}
          </p>
        </div>
        <div>
          <ServicesSlider  items={branding}/>
        </div>
      </div>
    </>
  );
}
