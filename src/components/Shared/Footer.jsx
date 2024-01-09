import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full py-24 px-24 bg-[#e5faeb] flex justify-between items-center">
      {/* Left */}
      <div>
        <h1 className="text-lg font-bold mb-3">HomeBridge</h1>
        <p className="text-[#8992a4] text-[14px] w-[400px]">
          We are a start-up that is solving the growing shortage of local
          manpower through foreigners. If you have any suggestions or interest
          in collaboration with our team, please contact us.
        </p>
      </div>
      {/* Right */}
      <div className="flex justify-start items-start gap-20">
        <div>
          <h1 className="text-lg font-bold mb-3">Quick Links</h1>
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

        <div>
          <h1 className="text-lg font-bold mb-3">Contact</h1>
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
