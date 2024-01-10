import React from "react";

const WhoWeAre = () => {
  return (
    <div className="mt-24 lg:mt-32 w-[90%] sm:w-[80%] lg:w-[85%] mx-auto flex lg:flex-row flex-col-reverse justify-between items-center gap-16 lg:gap-10">
      {/* Left Container */}

      <div className="w-full lg:w-1/2">
        <h3 className="text-lg font-medium text-[#00CE3A] mb-2">WHO ARE WE</h3>
        <h1 className="text-[36px] lg:text-[40px] font-semibold text-[#2B2B2B] leading-[45px] lg:leading-[50px] mb-5">
          Solve problems with <br className="lg:block hidden" /> foreigners
          through <br className="lg:block hidden" /> technology.
        </h1>
        <p className="font-nomral text-[#808080] lg:w-[90%]">
          HomeBridge is a start-up that solves the problem of local manpower
          shortages and foreign employment problems.
        </p>
        {/* About */}
        <div className="mt-10 flex flex-col gap-5">
          {/* 1st */}
          <div
            className="flex justify-start items-center gap-5 rounded-[30px] w-full lg:w-fit  py-5 pl-7 lg:pl-10 lg:pr-16"
            style={{
              boxShadow: "4px 10px 30px 0px rgba(0, 0, 0, 0.06)",
            }}
          >
            <img src="/images/who__we__are__icon__1.svg" alt="logo" />
            <div>
              <h1 className="text-[14px] sm:text-lg font-medium text-[#00CE3A] mb-2">
                Foreigner want work
              </h1>
              <p className="font-nomral sm:text-base text-[12px] text-[#808080]">
                provision of local employment <br /> and accommodation
              </p>
            </div>
          </div>
          {/* 2nd */}
          <div
            className="flex justify-start items-center gap-5 rounded-[30px] w-full lg:w-fit  py-5 pl-7 lg:pl-10 lg:pr-16"
            style={{
              boxShadow: "4px 10px 30px 0px rgba(0, 0, 0, 0.06)",
            }}
          >
            <img src="/images/who__we__are__icon__2.svg" alt="logo" />
            <div>
              <h1 className="text-[14px] sm:text-lg font-medium text-[#00CE3A] mb-2">
                A local shortage of workers
              </h1>
              <p className="font-nomral sm:text-base text-[12px] text-[#808080]">
                Securing workers in Seoul and <br /> overseas regions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}

      <div className="w-full lg:w-1/2 flex gap-2">
        <img
          src="/images/who__we__are__gallery__1.png"
          alt="logo "
          className="w-1/2  mt-10"
        />

        <div className="w-1/2 flex flex-col gap-2">
          <img
            src="/images/who__we__are__gallery__2.png"
            alt="logo "
            className=""
          />

          <div className="relative">
            <img
              src="/images/who__we__are__gallery__3.png"
              alt="logo "
              className=""
            />

            {/* Ball */}

            <img
              src="/images/who__we__are__ball.svg"
              alt="logo "
              className="absolute -bottom-8 left-[22%] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
