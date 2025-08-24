import Image from "next/image";
import React from "react";
import Home_WhyUS_OurVision from "../assets/images/Home_WhyUS_OurVision.jpg";
import Home_WhyUS_OurValue from "../assets/images/Home_WhyUS_OurValue.jpg";
import Home_WhyUS_OurMessage from "../assets/images/Home_WhyUS_OurMessage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faRibbon, faSpa } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function WhyUsSection() {
  const { t } = useTranslation();
  return (
    <>
      <section className="py-12">
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
                  src={'https://res.cloudinary.com/dab3mbbjb/image/upload/v1756022834/Home_WhyUS_OurVision_ums6c7.png'}
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
                  src={'https://res.cloudinary.com/dab3mbbjb/image/upload/v1756022834/Home_WhyUS_OurValue_t7p7x8.png'}
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
                  src={'https://res.cloudinary.com/dab3mbbjb/image/upload/v1756022835/Home_WhyUS_OurMessage_sn3yas.png'}
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
    </>
  );
}
