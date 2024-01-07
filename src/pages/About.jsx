import React from "react";
import AboutInformation from "../components/About/AboutInformation";
import AboutTeamSection from "../components/About/AboutTeamSection";

const About = () => {
  return (
    <>
      <div
        style={{
          background: "url(./images/about.png) no-repeat center center/cover",
        }}
        className="h-[960px] w-[100%] relative"
      >
        <div className="absolute bottom-32 ml-[100px] w-[60%]">
          <div className="flex flex-row gap-6 items-center">
            <p className="text-[#00CE3A] h-[2px] w-[72px] border-solid border-2 border-green-500"></p>

            <p className="text-[#00CE3A] text-lg">TEAM</p>
          </div>
          <div>
            <h2 className="text-[#fff] text-[88px] font-extrabold">
              Real Korean Experience for Foreigners
            </h2>
          </div>
        </div>
      </div>
      {/* AboutInformation */}
      <AboutInformation />
      {/* Team */}
      <AboutTeamSection />
    </>
  );
};

export default About;
