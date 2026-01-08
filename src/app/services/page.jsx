"use client";
import ServicesBranding from "@/components/OurServices/ServicesBranding";
import ServicesDigitalMarketing from "@/components/OurServices/ServicesDigitalMarketing";
import ServicesEvents from "@/components/OurServices/ServicesEvents";
import ServicesMediaContentProduction from "@/components/OurServices/ServicesMediaContentProduction";
import ServicesPrinting from "@/components/OurServices/ServicesPrinting";
import ServicesWebDesign from "@/components/OurServices/ServicesWebDesign";
import React from "react";
import { useTranslation } from "react-i18next";

export default function page() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`flex justify-center items-center min-h-[100vh] bg-no-repeat bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://res.cloudinary.com/dab3mbbjb/image/upload/v1756023127/About_Header_BG_no1cu1.jpg')] bg-cover bg-fixed bg-center h-[500px] w-full`}
      >
        <h1
          id="about-title"
          className="text-6xl text-gray-200  font-bold  leading-snug mb-6"
        >
          {t("Home_OurServices")}
        </h1>
      </div>

      <section
        // className="py-12 bg-fixed bg-cover bg-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://res.cloudinary.com/dab3mbbjb/image/upload/v1756023115/About_Us_services_wegrlk.jpg')]"
                // style={{
        //   backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${Home_OurServicesBG.src})`,
        // }}
        aria-labelledby="our-services-title"
      >
        <div className="container mx-auto px-5 text-center md:max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 text-gray-50 items-center text-center md:text-start ">
            <div className="md:border-e-2 md:border-slate-200 md:pr-10">
              <h4 className="text-3xl font-semibold text-[#be9b3f] mb-4">
                {t("Home_OurServices")}
              </h4>
              <h2
                id="our-services-title"
                className="text-3xl md:text-3xl font-bold leading-snug mb-6 text-gray-600"
              >
                {t("Services_Title")}
              </h2>
            </div>
            <div>
              <p className="text-2xl text-gray-600 mb-8">
                {t("Services_Description")}
              </p>
            </div>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 text-gray-600">
            {/* Service 1 */}
            <ServicesWebDesign />

            {/* Service 2 */}
            <ServicesDigitalMarketing />

            {/* Service 3 */}
            {/* <ServicesMediaContentProduction /> */}

            {/* Service 4 */}
            <ServicesBranding />

            {/* Service 5 */}
            <ServicesEvents />

            {/* Service 5 */}
            <ServicesPrinting/>

          </div>
        </div>
      </section>
    </>
  );
}
