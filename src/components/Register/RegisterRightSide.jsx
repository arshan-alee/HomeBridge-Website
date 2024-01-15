import React from 'react';

const RegisterRightSide = () => {
  return (
    <div className="flex items-center justify-center w-full md:w-[40%]" style={{height: "calc(100vh - 4rem)"}}>
      <div className="bg-white p-4 md:p-8 rounded w-96">
        <h2 className="text-[26px] font-bold mb-1">Hello!</h2>
        <p className="text-[18px] text-[#333333] mb-6 font-[400]">
          Sign Up to Get Started
        </p>
        <div className="space-y-4">
          <div className="relative items-center">
            <input
              type="text"
              className="w-full pl-[48px] pr-[26px] py-[18px] border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Full Name"
            />
            <img src="/icons/user.png" alt="icon" className="absolute left-[20px] top-[19px] w-[24px]" />
          </div>
          <div className="relative">
            <input
              type="email"
              className="w-full pl-[48px] pr-[26px] py-[18px] border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Email Address"
            />
            <img src="/icons/mail.png" alt="icon" className="absolute left-[20px] top-[19px] w-[24px]" />
          </div>
          <div className="relative">
            <input
              type="password"
              className="w-full pl-[48px] pr-[26px] py-[18px] border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
            <img src="/icons/lock.png" alt="icon" className="absolute left-[20px] top-[19px] w-[24px]" />
          </div>
          <div className="relative">
            <input
              type="password"
              className="w-full pl-[48px] pr-[26px] py-[18px] border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Check your password"
            />
            <img src="/icons/lock.png" alt="icon" className="absolute left-[20px] top-[19px] w-[24px]" />
          </div>
        </div>
        <button className="w-full bg-[#00CE3A] text-white px-[26px] py-[18px] rounded-full mt-6 focus:outline-none focus:shadow-outline">
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterRightSide;
