import React from "react";
import { aboutCards, aboutCardsData } from "../../data";
import AboutCard from "./AboutCard";

const AboutInformation = () => {
  return (
    <div className="relative">
      <div className="w-full h-[200px] bg-white absolute top-0 left-0 z-10 hidden lg:block" />

      {/* Green bottom section */}
      <div className="lg:mt-[100px] mt-0 bg-[#00CE3A] pb-[100px]">
        <div className="lg:w-[70%] w-[100%] my-5 py-10 px-8 mx-auto relative z-20 bg-white">
          <h2 className="text-[#000] text-base mb-5 font-medium">WHO WE ARE</h2>
          <div className="flex flex-col lg:flex-row items-center  gap-3">
            <div className="lg:pt-10 pt-0 lg:w-[60%] w-[100%]">
              <p className="text-[#000] text-xs md:text-sm lg:text-lg font-medium pb-5">
                It is a start-up that solves the difficulties of foreigners
                living in Korea and matches the insufficient manpower in the
                provinces.
              </p>
              <p className="text-[#000] text-xs md:text-sm lg:text-lg font-medium pb-5 ">
                Foreigners and Korean team members from various countries are
                creating services together, and services are being created with
                domestic universities and local governments.
              </p>
              <p className="text-[#000]  text-xs md:text-sm lg:text-lg font-medium">
                If you want to join us to help foreigners face difficulties and
                solve Korea's workforce problems, please contact us through
                e-mail.
              </p>
            </div>
            <div className="w-[100%]  lg:w-[40%] lg:h-[350px] h-full">
              <img
                src="/images/whoweare.png"
                alt="Who We Are"
                className="w-full lg:h-full h-auto  "
              />
            </div>
          </div>
        </div>

        <div className="lg:mx-0 mx-5 flex flex-row flex-wrap justify-evenly mt-[100px] lg:gap-0 gap-12">
          {aboutCardsData.map((item, index) => (
            // The key should be here on the actual list item
            <AboutCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutInformation;
