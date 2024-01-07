import React from "react";

const AboutTeamSection = () => {
  return (
    <div
      style={{
        background:
          "url(./images/about-team.png) no-repeat center center/cover",
      }}
      className="h-[570px] w-[100%] flex flex-col justify-center mx-auto items-center"
    >
      <h2 className="text-[#FFF] text-[56px] font-semibold">
        Are you curious about our team?
      </h2>
      <p className="text-[#FFF] text-lg font-medium">
        If you ask through the application form below,
      </p>
      <p className="text-[#FFF] text-lg font-medium">
        {" "}
        we will contact you after checking the person in charge.
      </p>
    </div>
  );
};

export default AboutTeamSection;
