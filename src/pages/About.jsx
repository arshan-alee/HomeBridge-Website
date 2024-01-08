import React from "react";
import AboutInformation from "../components/About/AboutInformation";
import AboutTeamSection from "../components/About/AboutTeamSection";
import AboutContact from "../components/About/AboutContact";

const About = () => {
  return (
    <>
      <div
        style={{
          background: "url(./images/about.png) no-repeat center center/cover",
        }}
        className="h-[800px] sm:h-[860px] md:h-[960px] w-[100%] relative"
      >
        <div className="absolute bottom-32 ml-[30px] sm:ml-[60px] md:ml-[100px] w-[70%] sm:w-[85%] md:w-[60%]">
          <div className="flex flex-row gap-6 items-center">
            <p className="text-[#00CE3A] h-[2px] w-[72px] border-solid border-2 border-green-500"></p>

            <p className="text-[#00CE3A] text-lg">TEAM</p>
          </div>
          <div>
            <h2 className="text-[#fff] md:text-[70px] lg:text-[88px] text-[36px] sm:text-[50px] font-extrabold">
              Real Korean Experience for Foreigners
            </h2>
          </div>
        </div>
      </div>
      {/* AboutInformation */}
      <AboutInformation />

      {/* Team */}
      <AboutTeamSection />

      {/* Contact Information */}
      <AboutContact />
    </>
  );
};

export default About;
