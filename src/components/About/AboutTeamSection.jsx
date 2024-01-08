import React from "react";

const AboutTeamSection = () => {
  return (
    <div
      style={{
        background:
          "url(./images/about-team.png) no-repeat center center/cover",
      }}
      className="h-[570px] w-[100%] flex flex-col justify-center px-5 items-center"
    >
      <h2 className="text-[#FFF] text-[36px] md:text-[56px] font-semibold text-center">
        Are you curious about our team?
      </h2>
      <p className="text-[#FFF] text-base sm:text-lg font-medium text-center">
        If you ask through the application form below,
      </p>
      <p className="text-[#FFF] text-base sm:text-lg font-medium text-center">
        {" "}
        we will contact you after checking the person in charge.
      </p>
    </div>
  );
};

export default AboutTeamSection;
