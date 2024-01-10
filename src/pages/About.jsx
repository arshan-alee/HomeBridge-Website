import React from "react";
import AboutInformation from "../components/About/AboutInformation";
import AboutTeamSection from "../components/About/AboutTeamSection";
import AboutContact from "../components/About/AboutContact";

const About = () => {
  return (
    <>
      <div
        style={
          {
            // background: "url(/images/about.png) no-repeat center center/cover",
          }
        }
        // className="h-[800px] sm:h-[860px] md:h-[960px] w-[100%] relative"
        className="min-h-screen w-full relative flex justify-start items-center"
      >
        {/* Background */}
        <img
          src="/images/about.png"
          className="top-0 left-0 absolute bottom-0 right-0 w-full h-full"
        />

        <div className="absolute sm:bottom-[15%] md:bottom-[20%] lg:bottom-[15%] left-[6%]  ">
          <div className="flex flex-row gap-6 items-center">
            <p className="text-[#00CE3A] h-[2px] w-[72px] border-solid border-2 border-green-500"></p>

            <p className="text-[#00CE3A] font-bold text-lg">TEAM</p>
          </div>
          <h2 className="text-[#fff] md:text-[60px] lg:text-[88px] text-[36px] sm:text-[50px] leading-[50px] sm:leading-[60px] md:leading-[70px] lg:leading-[100px] font-extrabold">
            Real Korean <br /> Experience <br /> for Foreigners
          </h2>
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
