import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen w-full relative flex justify-start items-center">
      {/* Background */}
      <img
        alt="logo"
        src="/images/job_house.png"
        className="top-0 left-0 absolute bottom-0 right-0 w-full h-full"
      />

      <div className="absolute sm:bottom-[15%] md:bottom-[20%] lg:bottom-[15%] left-[6%]  ">
        <h2 className="text-[#fff] md:text-[60px] lg:text-[88px] text-[36px] sm:text-[50px] leading-[50px] sm:leading-[60px] md:leading-[70px] lg:leading-[100px] font-extrabold capitalize">
            Get a job and <br /> accommodation <br /> at the same time.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
