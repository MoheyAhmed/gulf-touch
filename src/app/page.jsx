"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import headerHomeImage from "../../public/home header image.svg";
import Home_About_Section from "../../public/Home_About_Section.jpg";
import Home_About_Vision from "../../public/Home_About_Vision.png";
import Home_WhyUS_OurVision from "../../public/Home_WhyUS_OurVision.jpg";
import Home_WhyUS_OurValue from "../../public/Home_WhyUS_OurValue.jpg";
import Home_WhyUS_OurMessage from "../../public/Home_WhyUS_OurMessage.jpg";

export default function HomePage() {
  const { t } = useTranslation();
  const { dir } = useLanguage(); // rtl / ltr

  return (
    <>
      <header className="relative flex flex-row  justify-center items-center inset-0 min-h-screen w-full">
        {/* الخلفية فيديو */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/headerHomeBG.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true" // علشان الفيديو مش محتاج SEO
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* المحتوى */}
        <div className="relative  z-10 h-full flex justify-between w-full items-center text-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row w-full items-center text-center justify-around gap-10 mx-auto px-6">
              {/* النصوص */}
              <div className="text-white pt-10 md:pt-0">
                <h3 className="text-lg md:text-xl font-medium mb-2">
                  {t("HomeHeaderH5")}
                </h3>

                <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
                  {t("HomeHeaderH1")}
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold mb-3 leading-snug">
                  {t("HomeHeaderH2")}
                </h2>

                <p className="text-base md:text-lg max-w-xl mx-auto md:mx-0 mb-6">
                  {t("HomeHeaderP")}
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-[#be9b3f] hover:bg-green-700 transition px-6 py-3 rounded-lg font-semibold shadow-md"
                  role="button"
                >
                  {t("HomeHeaderButton")}
                </a>
              </div>

              {/* الصورة */}
              <div className="pb-10 md:pb-0">
                <Image
                  src={headerHomeImage}
                  alt="Gulf Touch header visual showing innovation and digital solutions"
                  width={600}
                  height={400}
                  className="w-full max-w-md h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 md:pb-30 ">
          <div className="container mx-auto px-5">
            <section className="relative z-10  text-center">
              <div className="flex flex-col md:flex-row items-center md:justify-between gap-10">
                {/* الصورة */}
                <div className="order-2 md:order-1">
                  <div className="relative">
                    <Image
                      src={Home_About_Section}
                      alt="Gulf Touch - About our company and vision"
                      className="w-full h-auto border-4 border-gray-200 rounded-3xl shadow-lg"
                    />
                    <Image
                      src={Home_About_Vision}
                      alt="Gulf Touch - Our vision and mission"
                      className="border-4 md:absolute  border-gray-200 rounded-3xl shadow-lg md:-mt-[40%] lg:start-1/2 transform "
                    />
                  </div>
                </div>

                {/* النصوص */}
                <div className="order-1 md:order-2">
                  <h4 className="text-xl md:text-xl font-semibold text-green-700 mb-4">
                    {t("Home_About_Us")}
                  </h4>

                  <h2
                    id="about-title"
                    className="text-3xl md:text-3xl font-bold leading-snug mb-6"
                  >
                    {t("Home_About_Us_Title")}
                  </h2>

                  <p className=" text-base mx-auto md:text-lg text-gray-700 max-w-2xl mb-8">
                    {t("Home_About_Us_Description")}
                  </p>

                  <a
                    href="#contact"
                    className="inline-block bg-[#be9b3f] hover:bg-[#a38434] transition px-6 py-3 rounded-lg font-semibold shadow-md text-white"
                    role="button"
                  >
                    {t("Home_About_Us_Button")}
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <section className="bg-white py-12">
        <div className="container mx-auto px-5 md:max-w-7xl">
          <div className="text-center">
            <h4 className="text-xl md:text-xl font-semibold text-green-700 mb-4">
              {t("Home_Why_Us")}
            </h4>

            <h2 className="text-3xl md:text-3xl font-bold leading-snug mb-6">
              {t("Home_About_Us_Title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              <div>
                  <div className="cursor-pointer relative group/why_us overflow-hidden rounded-3xl">
                    <Image
                      src={Home_WhyUS_OurVision}
                      alt="Gulf Touch - Our vision and mission"
                      
                      className="w-full h-[500px]  border-4 border-gray-200 rounded-3xl shadow-lg"
                    />
                    <div className="overlay absolute bg-black/50 rounded-3xl flex items-center justify-center left-0 right-0 bottom-0 top-[120%] group-hover/why_us:top-0 transition-all duration-500 ease-in-out">
                      <div className="text-white text-center p-6">

                        <h3 className="text-2xl font-semibold mb-2">
                          {t("Home_WhyUS_OurVision")}
                        </h3>
                        <p className="text-base md:text-lg max-w-md mx-auto">
                          {t("Home_WhyUS_OurVision_Description")}
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
              <div>
                  <div className="cursor-pointer relative group/why_us overflow-hidden rounded-3xl">
                    <Image
                      src={Home_WhyUS_OurValue}
                      alt="Gulf Touch - Our vision and mission"
                      
                      className="w-full h-[500px]  border-4 border-gray-200 rounded-3xl shadow-lg"
                    />
                    <div className="overlay absolute bg-black/50 rounded-3xl flex items-center justify-center left-0 right-0 bottom-0 top-[120%] group-hover/why_us:top-0 transition-all duration-500 ease-in-out">
                      <div className="text-white text-center p-6">

                        <h3 className="text-2xl font-semibold mb-2">
                          {t("Home_WhyUS_OurValue")}
                        </h3>
                        <p className="text-base md:text-lg max-w-md mx-auto">
                          {t("Home_WhyUS_OurValue_Description")}
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
              <div>
                  <div className="cursor-pointer relative group/why_us overflow-hidden rounded-3xl">
                    <Image
                      src={Home_WhyUS_OurMessage}
                      alt="Gulf Touch - Our vision and mission"
                      
                      className="w-full h-[500px]  border-4 border-gray-200 rounded-3xl shadow-lg"
                    />
                    <div className="overlay absolute bg-black/50 rounded-3xl flex items-center justify-center left-0 right-0 bottom-0 top-[120%] group-hover/why_us:top-0 transition-all duration-500 ease-in-out">
                      <div className="text-white text-center p-6">

                        <h3 className="text-2xl font-semibold mb-2">
                          {t("Home_WhyUS_OurMessage")}
                        </h3>
                        <p className="text-base md:text-lg max-w-md mx-auto">
                          {t("Home_WhyUS_OurMessage_Description")}
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
          </div>



        </div>
      </section>
    </>
  );
}
