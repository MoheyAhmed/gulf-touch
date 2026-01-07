"use client";
import AchievementSection from "@/components/AchievementSection/AchievementSection";
import OurClientsSection from "@/components/OurClients/OurClientsSection";
import {
  brandingImages,
  digitalMarketingImages,
  eventsImages,
  mediaProductionImages,
  printingServicesImages,
  webAndDevelopmentImages,
} from "@/components/OurProjectsComponents/OurProjectsImages";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import OurProjects from "@/components/OurProjectsComponents/OurProjects";

export default function Page() {
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
      {/* Hero Section */}
      <div
        className="flex justify-center items-center min-h-[100vh]  w-full bg-cover bg-fixed bg-top"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://res.cloudinary.com/dab3mbbjb/image/upload/v1767233095/ChatGPT_Image_Jan_1_2026_04_04_06_AM_ei0sap.png')",
        }}
      >
        <h1
          id="about-title"
          className="text-6xl text-gray-200 font-bold leading-snug mb-6"
        >
          {t("Home_OurProjects")}
        </h1>
      </div>

      {/* Achievements */}
      <AchievementSection />

      {/* Our Projects Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto max-w-7xl">
          <header className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 items-center ps-5 md:ps-0 md:text-start">
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

          {/* Tabs */}
          <section>
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

            {/* Dynamic Projects */}
            <div className="text-center py-12 px-6 rounded-2xl shadow-md bg-white">
              {activeTab === "branding" && (
                <OurProjects images={brandingImages} />
              )}
              {activeTab === "marketing" && (
                <OurProjects images={digitalMarketingImages} />
              )}
              {activeTab === "printing" && (
                <OurProjects images={printingServicesImages} />
              )}
              {activeTab === "media" && (
                <OurProjects images={mediaProductionImages} />
              )}
              {activeTab === "web" && (
                <OurProjects images={webAndDevelopmentImages} />
              )}
              {activeTab === "events" && <OurProjects images={eventsImages} />}
            </div>
          </section>
        </div>
      </section>

      {/* Our Clients */}
      <OurClientsSection />
    </>
  );
}
