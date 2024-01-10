import React from "react";

const QualificationRequirements = () => {
  return (
    <div className="w-[90%] lg:w-[85%] mx-auto ">
      <h3 className="text-lg text-left sm:text-center font-medium text-[#00CE3A] mb-2">
        Qualification <br className="block sm:hidden" /> Requirements
      </h3>

      <div className="relative">
        {/* Large Ball */}
        <img
          src="/images/f2r__visa__ellipse.png"
          alt="logo"
          className="absolute -top-8 left-16 z-[-1] lg:block hidden"
        />

        <div className="relative">
          <h1 className="text-[36px] sm:text-[40px] w-fit mx-auto text-left lg:text-center font-semibold text-[#2B2B2B] leading-[45px] mb-5">
            A foreigner with educational background,{" "}
            <br className="lg:block hidden" /> residence, employment, basic
            qualifications
          </h1>
          {/* Small Ball */}
          <img
            src="/images/f2r__visa__ellipse.png"
            alt="logo"
            className="absolute bottom-0 right-5 lg:hidden block "
          />
        </div>
      </div>

      <div
        className="px-6 lg:px-20 py-10 lg:py-20 mt-16 rounded-[32px]"
        style={{
          background: "linear-gradient(161deg, #E7E9F3 -11.63%, #FFF 91.02%)",
          boxShadow: "34px 24px 77px 0px rgba(8, 88, 208, 0.17)",
        }}
      >
        <div className="mb-4">
          <h1 className="text-[12px] sm:text-[18px] font-bold mb-1">
            A. Only one of the educational background/income requirements needs
            to be met
          </h1>
          <p className="text-[12px] sm:text-[18px] ">
            1. Academic background: Those who have earned a degree or higher
            with a professional bachelor's degree or higher in Korea (D-2 or
            D-10)
          </p>
          <p className="text-[12px] sm:text-[18px] ">
            2. Income: Gross national income (GNI) per capita in the previous
            year or higher as of the application date
          </p>
        </div>
        {/* ======== */}
        <div className="mb-4">
          <h1 className="text-[12px] sm:text-[18px] font-bold mb-1">
            B. Residence requirements
          </h1>
          <p className="text-[12px] sm:text-[18px] ">
            1. As of the application date, actual residence in the relevant
            local government
          </p>
          <p className="text-[12px] sm:text-[18px] ">
            2. Convinced that he/she will continue to live in the relevant local
            government for at least five years
          </p>
        </div>
        {/* ============= */}
        <div className="mb-4">
          <h1 className="text-[12px] sm:text-[18px] font-bold mb-1">
            C. Employment requirements
          </h1>
          <p className="text-[12px] sm:text-[18px] ">
            1. Employment or employment in a business designated by the Ministry
            of Justice is confirmed
          </p>
          <p className="text-[12px] sm:text-[18px] ">
            2. Location of the place of work within the target local government
            (the place of residence and place of work will be the same)
          </p>
        </div>
        {/* ============== */}
        <div className="mb-4">
          <h1 className="text-[12px] sm:text-[18px] font-bold mb-1">
            D. Basic literacy (Only one of the two requirements needs to be met)
          </h1>
          <p className="text-[12px] sm:text-[18px] ">
            1. Completion of social integration program stage 3 or more
          </p>
          <p className="text-[12px] sm:text-[18px] ">
            2. Acquired level 3 or higher in Korean proficiency test
          </p>
        </div>
        {/* ============== */}
        <div className="">
          <h1 className="text-[12px] sm:text-[18px] font-bold mb-1">
            E. Conclusion of conduct
          </h1>
          <p className="text-[12px] sm:text-[18px] ">
            There is no violation of laws at home and abroad{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualificationRequirements;
