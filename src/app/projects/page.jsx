"use client";
import AchievementSection from "@/components/AchievementSection";
import OurClientsSection from "@/components/OurClientsSection";
import Branding from "@/components/OurProjectsComponents/Branding";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function page() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("branding");

  const tabs = [
    { id: "branding", label: t("Home_OurProjects_Category_Branding") },
    { id: "marketing", label: t("Home_OurProjects_DigitalMarketing") },
    { id: "printing", label: t("Home_OurProjects_Printing") },
    { id: "media", label: t("Home_OurProjects_MediaContentProduction") },
    { id: "web", label: t("Home_OurProjects_Category_Website") },
    { id: "events", label: t("Home_OurProjects_Event") },
  ];

  return (
    <>
      <div
        className={`flex justify-center items-center min-h-[85vh] bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://res.cloudinary.com/dab3mbbjb/image/upload/v1756023127/About_Header_BG_no1cu1.jpg')] bg-cover bg-fixed bg-center h-[500px] w-full`}
      >
        <h1
          id="about-title"
          className="text-6xl text-gray-200  font-bold  leading-snug mb-6"
        >
          {t("Home_OurProjects")}
        </h1>
      </div>

      {/* Achivements */}
      <AchievementSection />
      {/* Achivements */}

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto max-w-7xl">
          <div className="container mx-auto">
            <header className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 items-center ps-5 md:ps-0  md:text-start">
              <div className="md:border-e-2 md:border-[#333] md:pr-10">
                <h4 className="text-3xl font-semibold text-[#be9b3f] mb-4">
                  {t("Home_OurProjects")}
                </h4>
                <h2
                  id="our-projects-title"
                  className="text-3xl text-[#333] font-bold leading-snug mb-6"
                >
                  {t("Projects_Intro")}
                </h2>
              </div>
              <div>
                <div className="ps-7 text-start">
                  <p className="text-xl text-[#775e5e] font-medium mb-8">
                    {t("Projects_Mobile")}
                  </p>
                  <p className="text-xl text-[#775e5e] font-medium mb-8">
                    {t("Projects_Web")}
                  </p>
                  <p className="text-xl text-[#775e5e] font-medium mb-8">
                    {t("Projects_Brand")}
                  </p>
                  <p className="text-xl text-[#775e5e] font-medium mb-8">
                    {t("Projects_Marketing")}
                  </p>
                </div>
                <p className="text-xl text-[#be9b3f] font-medium mb-8">
                  {t("Projects_Closing")}
                </p>
              </div>
            </header>

            <section>

                {/* Buttons filtration */}
              <div className="flex flex-wrap gap-4 justify-center my-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2 rounded-xl font-medium transition cursor-pointer
              ${
                activeTab === tab.id
                  ? "bg-[#be9b3f] text-white shadow-lg"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>


              {/* Content */}

              <div className="text-center p-6  rounded-2xl shadow-md bg-white">

                {activeTab === "branding" && <Branding/>}

                {activeTab === "marketing" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Marketing</h2>
                    <p>Here goes the Marketing projects content...</p>
                  </div>
                )}

                {activeTab === "printing" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Printing</h2>
                    <p>Here goes the Printing projects content...</p>
                  </div>
                )}

                {activeTab === "media" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-3">
                      Media Content Production
                    </h2>
                    <p>Here goes the Media content projects...</p>
                  </div>
                )}

                {activeTab === "web" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-3">
                      Web & Development
                    </h2>
                    <p>Here goes the Web development projects...</p>
                  </div>
                )}

                {activeTab === "events" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-3">
                      Events & Exhibitions Management
                    </h2>
                    <p>Here goes the Events projects...</p>
                  </div>
                )}
              </div>


              
            </section>
          </div>
        </div>
      </section>




      {/* Our Clients */}
        <OurClientsSection />
      {/* Our Clients */}
    </>
  );
}
