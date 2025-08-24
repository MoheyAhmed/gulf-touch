"use client";
import AchievementSection from "@/components/AchievementSection";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import WhyUsSection from "@/components/WhyUsSection";
import Link from "next/link";

export default function page() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`flex justify-center items-center min-h-[85vh] bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://res.cloudinary.com/dab3mbbjb/image/upload/v1756023127/About_Header_BG_no1cu1.jpg')] bg-cover bg-fixed bg-center h-[500px] w-full`}
      >
        <h1
          id="about-title"
          className="text-6xl text-gray-200  font-bold  leading-snug mb-6"
        >
          {t("Home_About_Us")}
        </h1>
      </div>

      <AchievementSection />

      {/* About US Section */}
      <section className="bg-gray-100" aria-labelledby="about-title">
        <div className="max-w-7xl mx-auto py-12 md:pb-30">
          <div className="container mx-auto px-5">
            <div className="flex flex-col lg:flex-row  items-center md:justify-around gap-10">
              {/* الصورة */}
              <div className="md:w-[70%]">
                <div className="relative ">
                  <div>
                    <Image
                      src={
                        "https://res.cloudinary.com/dab3mbbjb/image/upload/v1756022835/About_Us_Magic_fwxla8.jpg"
                      }
                      alt="Gulf Touch vision and mission"
                      className="border-4 hidden lg:block lg:w-[50%] md:flex lg:absolute border-gray-200 rounded-3xl shadow-lg lg:-mt-[5%] top-0 lg:-start-[20%] transform"
                      loading="lazy"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div>
                    <Image
                      src={
                        "https://res.cloudinary.com/dab3mbbjb/image/upload/v1756022854/Home_About_Section_mkt6ae.png"
                      }
                      alt="Gulf Touch company overview"
                      className="w-full h-auto border-4 border-gray-200 rounded-3xl shadow-lg"
                      width={400}
                      height={300}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <Image
                      src={
                        "https://res.cloudinary.com/dab3mbbjb/image/upload/v1756023115/About_Us_services_wegrlk.jpg"
                      }
                      alt="Gulf Touch vision and mission"
                      className="border-4 hidden lg:block lg:w-[80%] lg:absolute border-gray-200 rounded-3xl shadow-lg lg:-bottom-[10%] lg:start-1/3 transform"
                      loading="lazy"
                      width={800}
                      height={500}
                    />
                  </div>
                </div>
              </div>

              {/* النصوص */}
              <div className="md-w-[40%]">
                <h4 className="text-3xl  font-semibold text-[#be9b3f] mb-4">
                  {t("Home_About_Us")}
                </h4>
                <h1
                  id="about-title"
                  className="text-2xl  font-bold leading-snug mb-6"
                >
                  {t("About_Title")}
                </h1>

                <p className="text-base mx-auto md:text-lg text-gray-700 max-w-2xl mb-9">
                  {t("About_Title_Description1")}
                </p>
                <p className="text-base mx-auto md:text-lg text-gray-700 max-w-2xl mb-9">
                  {t("About_Title_Description2")}
                </p>
                <div className="text-center">
                  <p className="text-base mx-auto md:text-lg text-gray-700 max-w-2xl mb-9">
                    {t("About_Title_Description3")}
                  </p>
                </div>

                <div className="text-center">
                  <Link
                    href=""
                    className="inline-block bg-[#be9b3f] hover:bg-[#a38434] transition px-6 py-3 rounded-lg font-semibold shadow-md text-white"
                    role="button"
                    aria-label="Contact Gulf Touch team"
                  >
                    {t("Home_AllServices_Button")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Of About US Section */}

      {/* Why US Section */}
      <div className="bg-gray-200">
        <WhyUsSection />
      </div>
      {/* End Of Why US Section */}
    </>
  );
}
