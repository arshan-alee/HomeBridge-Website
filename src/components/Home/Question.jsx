import React from "react";

const Question = () => {
  return (
    <div className="w-[80%] mb-16 h-[315px] mx-auto rounded-[40px] bg-[#00CE3A] relative flex flex-col justify-center items-center">
      {/* Balls */}
      <img
        src="/images/questions__ellipse__2.png"
        alt="logo"
        className="absolute -top-10 right-10"
      />

      <img
        src="/images/questions__ellipse__2.png"
        alt="logo"
        className="absolute -bottom-10 left-10"
      />

      <h1 className="text-[#fff] text-[40px] text-center font-semibold leading-[50px]">
        Do you have any questions for <br /> the HomeBridge team?
      </h1>

      <button className="mt-6 py-3 px-7 rounded-3xl font-semibold bg-[#fff] text-[#00CE3A]">
        Register Now
      </button>
    </div>
  );
};

export default Question;
