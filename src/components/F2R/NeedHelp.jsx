import React from "react";

const NeedHelp = () => {
  return (
    <div className="w-[80%] my-24 h-[315px] mx-auto rounded-[40px] bg-[#00CE3A] relative flex flex-col justify-center items-center">
      {/* Balls */}
      <img
        src="/images/questions__ellipse__2.png"
        alt="logo"
        className="absolute -top-7 -right-5"
      />

      <img
        src="/images/questions__ellipse__2.png"
        alt="logo"
        className="absolute -bottom-10 left-10"
      />

      <h1 className="text-[#fff] text-[40px] text-center font-semibold leading-[50px]">
        If you need help with the F-2-R visa, <br /> please apply.
      </h1>

      <button className="mt-6 py-3 px-7 rounded-3xl font-semibold bg-[#fff] text-[#00CE3A]">
        To apply
      </button>
    </div>
  );
};

export default NeedHelp;
