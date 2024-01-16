import React from "react";

const Hero = () => {
  return (
    <div className="h-96 lg:min-h-screen w-full relative flex justify-start items-center">
      {/* Background */}
      <img
        alt="logo"
        src="/images/job_house.png"
        className="top-0 left-0 absolute bottom-0 right-0 w-full h-full"
      />

      <div className="absolute bottom-[10%] md:bottom-[20%] lg:bottom-[15%] left-[6%]">
        <div className="lg:hidden flex flex-row gap-6 items-center mb-2">
          <p className="text-[#00CE3A] h-[2px] w-[72px] border-solid border-2 border-green-500"></p>

          <p className="text-[#00CE3A] font-bold text-lg uppercase">JOb & House</p>
        </div>
        <h2 className="text-[#fff] md:text-[60px] lg:text-[88px] text-[34px] sm:text-[50px] leading-[50px] sm:leading-[60px] md:leading-[70px] lg:leading-[100px] font-extrabold capitalize">
            Get a job and <br /> accommodation <br /> at the same time.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
