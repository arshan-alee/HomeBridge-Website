import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="h-96 lg:min-h-screen w-full relative flex justify-start items-center">
      {/* Background */}
      <img
        alt="logo"
        src="/images/f2r__hero.png"
        className="top-0 left-0 absolute bottom-0 right-0 w-full h-full"
      />

      <div className="absolute sm:bottom-[15%] md:bottom-[20%] lg:bottom-[10%] left-[6%]  ">
        <div className="flex flex-row gap-6 items-center">
          <p className="text-[#00CE3A] h-[2px] w-[72px] border-solid border-2 border-green-500"></p>

          <p className="text-[#00CE3A] font-bold text-lg">F-2-R Visa</p>
        </div>
        <h2 className="text-[#fff] md:text-[60px] lg:text-[88px] text-[36px] sm:text-[50px] leading-[50px] sm:leading-[60px] md:leading-[70px] lg:leading-[100px] font-extrabold">
          Get an F visa and <br /> have a stable <br /> stay in Korea.
        </h2>
        <button
          className="mt-12 py-3 px-20 rounded-3xl border-[1px] border-[#BFBDC1] font-medium bg-[#00CE3A] text-[#fff]"
          onClick={() => navigate("/f_2_r/application")}
        >
          To apply
        </button>
      </div>
    </div>
  );
};

export default Hero;
