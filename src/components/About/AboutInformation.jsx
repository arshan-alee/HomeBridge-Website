import React from "react";
import { aboutCards, aboutCardsData } from "../../data";
import AboutCard from "./AboutCard";

const AboutInformation = () => {
  return (
    <div className="relative">
      {/* White top section */}
      <div className="w-full h-[200px] bg-white absolute top-0 left-0 z-10" />

      {/* Green bottom section */}
      <div className="mt-[100px] bg-[#00CE3A] pb-[100px]">
        {/* Ensuring the text appears above the white block */}
        <div className="w-[60%] my-5 py-10 px-8 mx-auto relative z-20 bg-white">
          <h2 className="text-[#000] text-base mb-5 font-medium">WHO WE ARE</h2>
          <div className="flex flex-row gap-3">
            <div className="pt-10">
              <p className="text-[#000] text-lg font-medium pb-5">
                It is a start-up that solves the difficulties of foreigners
                living in Korea and matches the insufficient manpower in the
                provinces.
              </p>
              <p className="text-[#000] text-lg font-medium pb-5 ">
                Foreigners and Korean team members from various countries are
                creating services together, and services are being created with
                domestic universities and local governments.
              </p>
              <p className="text-[#000] text-lg font-medium">
                If you want to join us to help foreigners face difficulties and
                solve Korea's workforce problems, please contact us through
                e-mail.
              </p>
            </div>
            <img src="/images/whoweare.png" alt="Who We Are" />
          </div>
        </div>

        {/* Content in green */}
        <div className=" flex flex-row flex-wrap justify-evenly mt-[100px]">
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
