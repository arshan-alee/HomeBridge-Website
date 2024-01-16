import React from "react";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full lg:w-[85%] lg:mb-20 h-[60vh] md:h-[315px] mx-auto lg:rounded-[40px] bg-[#00CE3A] relative flex flex-col justify-center items-center">
      {/* Balls */}
      <img
        src="/images/questions__ellipse__2.png"
        alt="logo"
        className="absolute -top-10 right-10 lg:block hidden"
      />

      <img
        src="/images/questions__ellipse__2.png"
        alt="logo"
        className="absolute -bottom-10 left-10 lg:block hidden"
      />

      <h1 className="text-[#fff] text-[28px] md:text-[32px] lg:text-[40px] text-center font-semibold leading-[45px] lg:leading-[50px]">
        Do you have any questions for <br className="sm:block hidden" /> the
        HomeBridge team?
      </h1>

      <button
        onClick={() => navigate("/about")}
        className="mt-6 py-3 px-7 rounded-3xl font-semibold bg-[#fff] text-[#00CE3A]"
      >
        Register Now
      </button>
    </div>
  );
};

export default Question;
