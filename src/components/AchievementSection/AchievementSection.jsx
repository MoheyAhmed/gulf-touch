import React from "react";
import { faAward, faListCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import CounterBox from "../CounterBox/CounterBox";

export default function AchievementSection() {
      const { t } = useTranslation();
    
  return (
    <>
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
    </>
  );
}
