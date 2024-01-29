import React from "react";

const Partnership = () => {
  return (
    <div className="relative lg:pt-10 w-full">
      <h1 className="text-center text-lg font-medium mb-5">Our Partnership </h1>

      {/* Ball */}
      <img
        src="/images/partnership__ball.svg"
        alt="logo"
        className="absolute -top-10 left-[10%] hidden sm:block"
      />

      <div className="flex md:flex-row flex-col justify-center items-center gap-12 lg:gap-20">
        <img
          src="/images/partnership_1.svg"
          alt="logo"
          className="w-[200px] md:w-fit"
        />
        {/* <img
          src="/images/partnership_2.svg"
          alt="logo"
          className="w-[140px] md:w-fit"
        /> */}
        <div className="relative">
          <img
            src="/images/partnership_3.svg"
            alt="logo"
            className="w-[135px] md:w-fit"
          />

          <img
            src="/images/partnership__ball__small.png"
            alt="logo"
            className="absolute -top-8 -left-12 block sm:hidden w-[60px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Partnership;
