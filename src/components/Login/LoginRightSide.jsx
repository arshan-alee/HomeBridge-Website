import React from 'react';
import { Link } from 'react-router-dom';

const LoginRightSide = () => {
  return (
    <div className="flex items-center justify-center w-full md:w-[40%]" style={{height: "calc(100vh - 4rem)"}}>
      <div className="bg-white p-4 md:p-8 rounded w-96">
        <h2 className="text-[26px] mb-1 font-bold">Hello Again!</h2>
        <p className="text-[#333333] text-[18px] mb-6 font-[400]">
          Welcome Back
        </p>
        <div>
          <p className="text-right text-[12px] text-[#00CE3A] cursor-pointer">Don't you have an ID?</p>
          <div className="relative mb-3">
            <input
              type="email"
              className="w-full pl-[48px] pr-[26px] py-[18px] border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Email Address"
            />
            <img src="/icons/mail.png" alt="icon" className="absolute left-[20px] top-[19px]" />
          </div>
          <div className="relative mb-3">
            <input
              type="password"
              className="w-full pl-[48px] pr-[26px] py-[18px] border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
            <img src="/icons/lock.png" alt="icon" className="absolute left-[20px] top-[19px]" />
          </div>
        </div>
        <button className="w-full bg-[#00CE3A] text-white px-[26px] py-[18px] rounded-full mt-6 focus:outline-none focus:shadow-outline">
          Login
        </button>
        <Link to="/auth/forgot-password">
          <p className="text-center text-[14px] py-2 cursor-pointer">Forgot Password</p>
        </Link>
      </div>
    </div>
  );
};

export default LoginRightSide;
