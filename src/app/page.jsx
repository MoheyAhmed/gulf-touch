"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import headerHomeImage from "../assets/images/home header image.svg";
import Home_About_Section from "../assets/images/Home_About_Section.jpg";
import Home_About_Vision from "../assets/images/Home_About_Vision.png";
import Home_WhyUS_OurVision from "../assets/images/Home_WhyUS_OurVision.jpg";
import Home_WhyUS_OurValue from "../assets/images/Home_WhyUS_OurValue.jpg";
import Home_WhyUS_OurMessage from "../assets/images/Home_WhyUS_OurMessage.jpg";
import Home_OurServicesBG from "../assets/images/Home_About_Vision.png";
import {
  faAward,
  faChartLine,
  faGear,
  faLaptopCode,
  faListCheck,
  faPenToSquare,
  faRibbon,
  faSpa,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TechSlider from "@/components/TechSlider";
import DigitalMarketingSlider from "@/components/DigitalMarketingSlider";
import MediaContentSlider from "@/components/MediaContentProductionSlider";
import Link from "next/link";
import OurProjectsSlider from "@/components/OurProjectsSlider";
import CounterBox from "@/components/CounterBox";
import OurClientsSlider from "@/components/OurClientsSlider";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <header className="relative flex justify-center items-center min-h-screen w-full bg-black/0">
        {/* الخلفية */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/HeaderHomeBG.webp" // حوّل الصورة لـ WebP مضغوط
            alt="Background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* المحتوى */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-around gap-10 text-center text-white">
          {/* النصوص */}
          <div className="pt-10 md:pt-0 max-w-xl">
            <h3 className="text-lg md:text-xl font-medium mb-2">
              {t("HomeHeaderH5")}
            </h3>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              {t("HomeHeaderH1")}
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-3 leading-snug">
              {t("HomeHeaderH2")}
            </h2>
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
      <section className="bg-white py-12">
        <div className="container mx-auto px-5 md:max-w-7xl">
          {/* العناوين */}
          <div className="text-center">
            <h4 className="text-3xl font-semibold text-[#be9b3f] mb-4">
              {t("Home_Why_Us")}
            </h4>
            <h2 className="text-3xl md:text-3xl font-bold leading-snug mb-6">
              {t("Home_Why_Us_Title")}
            </h2>
          </div>

          {/* الكروت */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* Vision */}
            <article>
              <div className="cursor-pointer relative group overflow-hidden rounded-3xl">
                <Image
                  src={Home_WhyUS_OurVision}
                  alt="Gulf Touch - Vision for the future"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="w-full h-[500px] border-4 border-gray-200 rounded-3xl shadow-lg object-cover"
                />
                <div className="overlay absolute bg-black/50 rounded-3xl flex items-center justify-center inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <div className="text-white text-center p-6">
                    <FontAwesomeIcon
                      icon={faRibbon}
                      size="3x"
                      className="mb-5 text-gray-200"
                    />
                    <h3 className="text-2xl font-semibold mb-2">
                      {t("Home_WhyUS_OurVision")}
                    </h3>
                    <p className="text-base md:text-lg max-w-md mx-auto">
                      {t("Home_WhyUS_OurVision_Description")}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Value */}
            <article>
              <div className="cursor-pointer relative group overflow-hidden rounded-3xl">
                <Image
                  src={Home_WhyUS_OurValue}
                  alt="Gulf Touch - Core values"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="w-full h-[500px] border-4 border-gray-200 rounded-3xl shadow-lg object-cover"
                />
                <div className="overlay absolute bg-black/50 rounded-3xl flex items-center justify-center inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <div className="text-white text-center p-6">
                    <FontAwesomeIcon
                      icon={faGear}
                      size="3x"
                      className="mb-5 text-gray-200"
                    />
                    <h3 className="text-2xl font-semibold mb-2">
                      {t("Home_WhyUS_OurValue")}
                    </h3>
                    <p className="text-base md:text-lg max-w-md mx-auto">
                      {t("Home_WhyUS_OurValue_Description")}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Message */}
            <article>
              <div className="cursor-pointer relative group overflow-hidden rounded-3xl">
                <Image
                  src={Home_WhyUS_OurMessage}
                  alt="Gulf Touch - Our mission statement"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="w-full h-[500px] border-4 border-gray-200 rounded-3xl shadow-lg object-cover"
                />
                <div className="overlay absolute bg-black/50 rounded-3xl flex items-center justify-center inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <div className="text-white text-center p-6">
                    <FontAwesomeIcon
                      icon={faSpa}
                      size="3x"
                      className="mb-5 text-gray-200"
                    />
                    <h3 className="text-2xl font-semibold mb-2">
                      {t("Home_WhyUS_OurMessage")}
                    </h3>
                    <p className="text-base md:text-lg max-w-md mx-auto">
                      {t("Home_WhyUS_OurMessage_Description")}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
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
      <section
        id="our-achievements"
        className="py-12 bg-white"
        aria-labelledby="our-achievements-title"
      >
        <div className="container mx-auto px-5 text-center md:max-w-7xl">
          <div className="bg-white py-12 rounded-3xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-5">
              <CounterBox
                icon={faListCheck}
                target={30}
                label={t("Home_OurAchivement_Services")}
                duration={1000}
              />
              <CounterBox
                icon={faAward}
                target={300}
                label={t("Home_OurAchivement_Projects")}
                duration={500}
              />
              <CounterBox
                icon={faStar}
                target={10}
                label={t("Home_OurAchivement_Experience")}
                duration={1000}
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Of Our Achievements */}

      {/* Our Clients */}
      <section
        id="our-clients"
        className="pt-12 bg-gray-100"
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
