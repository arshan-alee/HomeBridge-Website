import React from "react";

const Visa = () => {
  return (
    <div className="my-28 w-[80%] mx-auto flex justify-between items-center gap-32">
      {/* Left */}
      <div className="w-1/2">
        <img
          src="/images/f2r__visa__img.png"
          alt="logo"
          className="rounded-[30px]"
        />
      </div>

      {/* Right */}
      <div className="w-1/2">
        <h3 className="text-lg font-medium text-[#00CE3A] mb-2">
          What if you don't live in the local government?
        </h3>
        <h1 className="text-[40px] font-semibold text-[#2B2B2B] leading-[45px] mb-5">
          If anyone doesn't live in the local government and wants to issue an
          F-2-R visa, please refer to the following order!
        </h1>
        <p className="font-nomral text-[#808080]">
          Employment must be confirmed at a company in the local government.
          (Each local government has different permitted industries, so you
          should get a job after checking!)Transfer the address.I apply for a
          recommendation letter from the local government.Change your visa to
          F-2-R at the foreign office.
        </p>
      </div>
    </div>
  );
};

export default Visa;
