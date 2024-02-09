import React from "react";
import { useNavigate } from "react-router-dom";

const NeedHelp = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full lg:w-[85%] mt-24  lg:my-24 h-[60vh] md:h-[315px] mx-auto lg:rounded-[40px] bg-[#00CE3A] relative flex flex-col justify-center items-center">
      {/* Balls */}
      <img
        src="/images/questions__ellipse__2.png"
        alt="logo"
        className="absolute -top-7 -right-5 lg:block hidden"
      />

      <img
        src="/images/questions__ellipse__2.png"
        alt="logo"
        className="absolute -bottom-10 left-10 lg:block hidden"
      />

      <h1 className="text-[#fff]  text-[28px] md:text-[32px] lg:text-[40px] text-center font-semibold leading-[45px] lg:leading-[50px]">
        If you need help with the F-2-R visa, <br /> please apply.
      </h1>

      <button
        onClick={() => navigate("/f_2_r/application")}
        className="mt-6 py-3 px-7 rounded-3xl font-semibold bg-[#fff] text-[#00CE3A]"
      >
        To apply
      </button>
    </div>
  );
};

export default NeedHelp;
