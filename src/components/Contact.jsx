"use client";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <section className="p-10 rounded-4xl shadow-xl ">
        <div className="container mx-auto mt-15">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
            <div className="data">
              <div className="text-center md:text-start">
                <h2 className="text-3xl font-semibold text-[#be9b3f] mb-4">
                  {t("Contact_Us_Head")}
                </h2>
                <h3 className="text-2xl  font-bold leading-snug mb-4">
                  {t("Contact_Us_Head_Title")}
                </h3>
                <p className="text-base mx-auto  md:text-lg leading-relaxed text-gray-500 max-w-2xl mb-9">
                  {t("Contact_Us_Head_Description")}
                </p>
              </div>

              <div className="social flex-col md:ps-6 space-y-7 items-center justify-center">
                <div className="flex  md:justify-start  gap-6 items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="2x"
                    className="text-[#be9b3f] cursor-pointer hover:text-white hover:bg-[#be9b3f] transition duration-500 p-2 border-2 rounded-full "
                  />
                  <div>
                    <h3 className="text-2xl  font-bold mb-2 leading-snug">
                      {t("Contact_Email")}
                    </h3>
                    <Link href="mailto:gulftouch97@gmail.com">
                      <h4 className="text-base mx-auto md:text-lg leading-relaxed text-gray-500 max-w-2xl cursor-pointer hover:text-blue-600 duration-500 transition">
                        gulftouch97@gmail.com
                      </h4>
                    </Link>
                  </div>
                </div>
                <div className="flex  md:justify-start  gap-6 items-center">
                  <FontAwesomeIcon
                    icon={faPhoneVolume}
                    size="2x"
                    className="text-[#be9b3f] cursor-pointer hover:text-white hover:bg-[#be9b3f] transition duration-500 p-2 border-2 rounded-full "
                  />
                  <div>
                    <h3 className="text-2xl  font-bold mb-2 leading-snug">
                      {t("Contact_Phone")}
                    </h3>
                    <Link href="tel:+966508025823">
                      <h4 className="text-base text-left mx-auto md:text-lg leading-relaxed text-gray-500 max-w-2xl cursor-pointer hover:text-blue-600 duration-500 transition">
                        {t("Contact_Phone_Details")}
                      </h4>
                    </Link>
                  </div>
                </div>
                <div className="flex  md:justify-start  gap-6 items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="2x"
                    className="text-[#be9b3f] cursor-pointer hover:text-white hover:bg-[#be9b3f] transition duration-500 p-2 border-2 rounded-full "
                  />
                  <div>
                    <h3 className="text-2xl  font-bold mb-2 leading-snug">
                      {t("Contact_Location")}
                    </h3>
                    <h4 className="text-base mx-auto md:text-lg leading-relaxed text-gray-500 max-w-2xl cursor-pointer hover:text-blue-600 duration-500 transition">
                      {t("Contact_Location_Details")}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="Contact_form">
              <form className="pt-15">
                <div className="grid lg:grid-cols-2 lg:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-1  border-[#9b9b9c] appearance-none  focus:outline-none focus:ring-0 focus:border-[#be9b3f]  peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_first_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#be9b3f]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      {t("Form_fName")}
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="floating_last_name"
                      id="floating_last_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-1  border-[#9b9b9c] appearance-none  focus:outline-none focus:ring-0 focus:border-[#be9b3f]  peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#be9b3f]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      {t("Form_lName")}
                    </label>
                  </div>
                </div>

                <div className="grid gap-6 mb-8">
                  <div className="relative z-0 w-full group">
                    <input
                      type="tel"
                      name="floating_phone"
                      id="floating_phone"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-1  border-[#9b9b9c]  appearance-none  focus:outline-none focus:ring-0 focus:border-[#be9b3f]  peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_phone"
                      className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#be9b3f]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      {t("Form_Phone")}
                    </label>
                  </div>
                  <div className="relative z-0 w-full  group">
                    <input
                      type="email"
                      name="Email"
                      id="Email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-1  border-[#9b9b9c]  appearance-none  focus:outline-none focus:ring-0 focus:border-[#be9b3f]  peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="Email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#be9b3f]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      {t("Form_Email")}
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <textarea
                    id="message"
                    rows={4}
                    className="block p-2.5 w-full bg-gray-50 rounded-xl border resize-none focus-visible:border-[#be9b3f] border-[#be9b3f]  focus:border-[#be9b3f] focus:border-2 "
                    placeholder={t("Form_Message")}
                    defaultValue={""}
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="text-white cursor-pointer transition duration-500 bg-blue-700 hover:bg-[#be9b3f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    {t("Form_SendMessage")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
