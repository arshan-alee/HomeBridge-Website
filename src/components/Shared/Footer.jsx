import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  const shouldHideFooterOnMobile = [
    "/mypage",
    "/f_2_r/application/:id",
    "/job_house/:jobId/:applicationId",
    "/event/:eventId/:applicationId",
    "/payment/success/:eventId",
    "/refund/:applicationId",
  ].some((path) => {
    const regex = new RegExp(path.replace(/:\w+/g, "\\w+"));
    return regex.test(pathname);
  });

  return (
    <div
      className={`w-full py-16 px-5 sm:py-20 sm:px-12 lg:py-24 lg:px-24 bg-[#e5faeb] gap-12 lg:gap-unset flex lg:flex-row flex-col justify-between items-center ${
        shouldHideFooterOnMobile ? "lg:flex hidden" : ""
      }`}
    >
      {/* Left */}
      <div>
        <h1 className="text-lg text-[#1B1C57] font-bold mb-2 sm:mb-3">
          HomeBridge
        </h1>
        <p className="text-[#8992a4] text-[14px] lg:w-[400px]">
          We are a start-up that is solving the growing shortage of local
          manpower through foreigners. If you have any suggestions or interest
          in collaboration with our team, please contact us.
        </p>
      </div>
      {/* Right */}
      <div className="flex justify-start items-start w-full lg:w-fit lg:gap-20">
        <div className="lg:block hidden ">
          <h1 className="text-lg text-[#0E1735] font-bold mb-3">Quick Links</h1>
          <div className="flex flex-col gap-3">
            <Link className="text-[#8992a4] text-[14px] " to="/">
              HOME
            </Link>
            <Link className="text-[#8992a4] text-[14px] " to="f_2_r">
              F-2-R
            </Link>
            <Link className="text-[#8992a4] text-[14px] " to="/job_house">
              Job & House
            </Link>
            <Link className="text-[#8992a4] text-[14px] " to="/event">
              Event
            </Link>
          </div>
        </div>

        <div className="">
          <h1 className="text-lg font-bold  mb-2 sm:mb-3 text-[#0E1735]">
            Contact
          </h1>
          <div className="flex flex-col gap-3">
            <p className="text-[#8992a4] text-[14px] ">
              B1 381, Uicheon-ro, Dobong-gu, Seoul
            </p>
            <p className="text-[#8992a4] text-[14px] ">thinkbig90@naver.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
