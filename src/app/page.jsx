"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import headerHomeImage from "../assets/images/home header image.svg";
import Home_About_Section from "../assets/images/Home_About_Section.jpg";
import Home_About_Vision from "../assets/images/Home_About_Vision.png";

import Home_OurServicesBG from "../assets/images/Home_About_Vision.png";
import {
  faChartLine,
  faLaptopCode,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TechSlider from "@/components/TechSlider";
import DigitalMarketingSlider from "@/components/DigitalMarketingSlider";
import MediaContentSlider from "@/components/MediaContentProductionSlider";
import Link from "next/link";
import OurProjectsSlider from "@/components/OurProjectsSlider";
import AchievementSection from "@/components/AchievementSection";
import WhyUsSection from "@/components/WhyUsSection";
import OurClientsSection from "@/components/OurClientsSection";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>



    
      <header className="relative flex justify-center items-center min-h-screen w-full bg-black/0">
        {/* الخلفية */}
        <div className="absolute inset-0 -z-10">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/headerHomeBG.webm"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/headerHomeBG.jpg"
            aria-hidden="true"
          />

          {/* <Image
            src="/HeaderHomeBG.webp" 
            alt="Background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60"></div> */}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* المحتوى */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-around gap-10 text-center text-white">
          {/* النصوص */}
          <div className="pt-10 md:pt-0 max-w-xl">
            <h2 className="text-lg md:text-xl font-medium mb-2">
              {t("HomeHeaderH5")}
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              {t("HomeHeaderH1")}
            </h1>
            <h3 className="text-2xl md:text-4xl font-semibold mb-3 leading-snug">
              {t("HomeHeaderH2")}
            </h3>
            <p className="text-base md:text-lg mb-6">{t("HomeHeaderP")}</p>
            <a
              href="#contact"
              className="inline-block bg-[#be9b3f] hover:bg-green-700 transition px-6 py-3 rounded-lg font-semibold shadow-md"
            >
              {t("HomeHeaderButton")}
            </a>
          </div>

          {/* الصورة */}
          <div className="pb-10 md:pb-0">
            <Image
              src={headerHomeImage}
              alt="Gulf Touch header visual showing innovation and digital solutions"
              width={400}
              height={300}
              loading="lazy"
              priority={false}
            />
          </div>
        </div>
      </header>





      {/* About US Section */}
      <section className="bg-gray-100" aria-labelledby="about-title">
        <div className="max-w-7xl mx-auto py-12 md:pb-30">
          <div className="container mx-auto px-5">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-10">
              {/* الصورة */}
              <div className="order-2 md:order-1">
                <div className="relative">
                  <Image
                    src={Home_About_Section}
                    alt="Gulf Touch company overview"
                    className="w-full h-auto border-4 border-gray-200 rounded-3xl shadow-lg"
                    priority
                  />
                  <Image
                    src={Home_About_Vision}
                    alt="Gulf Touch vision and mission"
                    className="border-4 md:absolute border-gray-200 rounded-3xl shadow-lg md:-mt-[40%] lg:start-1/2 transform"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* النصوص */}
              <div className="order-1 md:order-2 text-center">
                <h1
                  id="about-title"
                  className="text-3xl md:text-3xl font-bold leading-snug mb-6"
                >
                  {t("Home_About_Us_Title")}
                </h1>

                <p className="text-base mx-auto md:text-lg text-gray-700 max-w-2xl mb-8">
                  {t("Home_About_Us_Description")}
                </p>

                <a
                  href="#contact"
                  className="inline-block bg-[#be9b3f] hover:bg-[#a38434] transition px-6 py-3 rounded-lg font-semibold shadow-md text-white"
                  role="button"
                  aria-label="Contact Gulf Touch team"
                >
                  {t("Home_About_Us_Button")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Of About US Section */}




      {/* Why US Section */}
      <WhyUsSection />
      {/* End Of Why US Section */}




      {/* Our Services */}
      <section
        className="py-12 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${Home_OurServicesBG.src})`,
        }}
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
                className="text-3xl md:text-3xl font-bold leading-snug mb-6"
              >
                {t("Home_OurServices_Title")}
              </h2>
            </div>
            <div>
              <p className="text-2xl text-gray-200 mb-8">
                {t("Home_OurServices_Description")}
              </p>
            </div>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* Service 1 */}
            <div className="hover:scale-105 p-6 rounded-3xl shadow-2xl cursor-pointer border-4 border-gray-400 transition-all duration-500">
              <div>
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  size="3x"
                  className="text-white mb-4 p-6 rounded-full border-gray-300"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-7 text-[#be9b3f]">
                  {t("Home_OurServices_web")}
                </h3>
                <p className="text-xl text-gray-300">
                  {t("Home_OurServices_web_Title")}
                </p>
              </div>
              <div>
                <TechSlider />
              </div>
            </div>

            {/* Service 2 */}
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
                  {t("Home_OurServices_DigitalMarketing")}
                </h3>
                <p className="text-xl text-gray-300">
                  {t("Home_OurServices_DigitalMarketing_Title")}
                </p>
              </div>
              <div>
                <DigitalMarketingSlider />
              </div>
            </div>

            {/* Service 3 */}
            <div className="hover:scale-105 p-6 rounded-3xl shadow-2xl cursor-pointer border-4 border-gray-400 transition-all duration-500">
              <div>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  size="3x"
                  className="text-white mb-4 p-6 rounded-full border-gray-300"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-7 text-[#be9b3f]">
                  {t("Home_OurServices_MediaContentProduction")}
                </h3>
                <p className="text-xl text-gray-300">
                  {t("Home_OurServices_MediaContentProduction_Title")}
                </p>
              </div>
              <div>
                <MediaContentSlider />
              </div>
            </div>
          </div>
        </div>

        {/* All Services Link */}
        <div className="flex justify-center">
          <Link
            href="/services"
            className="mt-10 py-2 px-4 text-xl hover:bg-blue-500 hover:border-0 transition duration-500 border rounded-xl text-gray-200"
            aria-label="View all services offered by Gulf Touch"
          >
            {t("Home_AllServices_Button")}
          </Link>
        </div>
      </section>
      {/* End Of Our Services */}




      {/* Our Projects */}
      <section
        id="our-projects"
        className="py-10 bg-gray-100"
        aria-labelledby="our-projects-title"
      >
        <div className="container mx-auto px-5 text-center md:max-w-7xl">
          {/* Section Header */}
          <header className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 items-center text-center md:text-start">
            <div className="md:border-e-2 md:border-[#333] md:pr-10">
              <h4 className="text-3xl font-semibold text-[#be9b3f] mb-4">
                {t("Home_OurProjects")}
              </h4>
              <h2
                id="our-projects-title"
                className="text-3xl text-[#333] font-bold leading-snug mb-6"
              >
                {t("Home_OurProjects_Title")}
              </h2>
            </div>
            <p className="text-2xl text-[#333] mb-8">
              {t("Home_OurProjects_Description")}
            </p>
          </header>

          {/* Projects Slider */}
          <div className="PojectSlider">
            <OurProjectsSlider />
          </div>
        </div>
      </section>
      {/* End Of Our Projects */}




      {/* Our Achievements */}
      <AchievementSection />
      {/* End Of Our Achievements */}




      {/* Our Clients */}
        <OurClientsSection/>
      {/* End Of Our Clients */}



      {/* Contact US */}

      {/* <section className="pb-12 bg-white">
        <div className="container mx-auto px-5 text-center md:max-w-7xl">

          <div className="bg-white py-12 rounded-3xl shadow-2xl mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-5">
              
            </div>
          </div>

        </div>
      </section> */}

      {/* End Of Contact US */}
    </>
  );
}
