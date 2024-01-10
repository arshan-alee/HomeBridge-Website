import React from "react";

const Advantages = () => {
  return (
    <div className="mt-40 w-[80%] mx-auto flex justify-between items-center gap-32">
      {/* Left */}
      <div className="w-1/2">
        <h3 className="text-lg font-medium text-[#00CE3A] mb-2">Advantages</h3>
        <h1 className="text-[40px] font-semibold text-[#2B2B2B] leading-[45px] mb-5">
          You can stay for a long time and then obtain a permanent residence
          visa for F-5
        </h1>
        <p className="font-nomral text-[#808080]">
          Although there is a regulation that an F-2-R visa requires employment
          only in areas where the population is declining, it is a visa that you
          cannot help but be interested in because you can stay for a long time
          and obtain an F-5 permanent resident visa thereafter.
        </p>
      </div>
      {/* Right */}
      <div className="w-1/2 relative ">
        {/* Ball */}
        <img
          src="/images/f2r__advantages__ellipse.png"
          alt="logo"
          className="absolute top-0 left-0 z-[-1]"
        />

        <img
          src="/images/f2r__advantages__img.png"
          alt="logo"
          className="rounded-[30px]"
        />
      </div>
    </div>
  );
};

export default Advantages;
