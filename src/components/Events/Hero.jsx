import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen w-full relative flex justify-start items-center">
      {/* Background */}
      <img
        alt="logo"
        src="/images/events.png"
        className="top-0 left-0 absolute bottom-0 right-0 w-full h-full"
      />

      <div className="absolute sm:bottom-[15%] md:bottom-[20%] lg:bottom-[15%] right-[6%]  ">
        <div className="flex flex-row gap-6 items-center">
          <p className="text-[#00CE3A] h-[2px] w-[72px] border-solid border-2 border-green-500"></p>

          <p className="text-[#00CE3A] font-bold text-lg uppercase">trip in Korea</p>
        </div>
        <h2 className="text-[#fff] md:text-[60px] lg:text-[88px] text-[36px] sm:text-[50px] leading-[50px] sm:leading-[60px] md:leading-[70px] lg:leading-[100px] font-extrabold">
            Real Korean <br /> Experience <br /> For Foreigners
        </h2>
      </div>
    </div>
  );
};

export default Hero;
