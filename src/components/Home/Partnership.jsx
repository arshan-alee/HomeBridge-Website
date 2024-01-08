import React from "react";

const Partnership = () => {
  return (
    <div className="relative pt-10 w-full">
      <h1 className="text-center text-lg font-medium mb-5">Our Partnership </h1>

      {/* Ball */}
      <img
        src="/images/partnership__ball.svg"
        alt="logo"
        className="absolute -top-10 left-[10%]"
      />

      <div className="flex justify-center items-center gap-20">
        <img src="/images/partnership_1.svg" alt="logo" />
        <img src="/images/partnership_2.svg" alt="logo" />
        <img src="/images/partnership_3.svg" alt="logo" />
      </div>
    </div>
  );
};

export default Partnership;
