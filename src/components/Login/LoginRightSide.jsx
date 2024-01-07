import React from 'react';

const LoginRightSide = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full md:w-[40%]">
      <div className="bg-white p-4 md:p-8 rounded w-96">
        <h2 className="text-3xl mb-2 font-bold">Hello Again!</h2>
        <p className="text-gray-600 mb-6 font-[400]">
          Welcome Back
        </p>
        <div className="space-y-4">
          <div className="relative">
            <input
              type="email"
              className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Email Address"
            />
            <img src="/icons/mail.png" alt="icon" className="absolute left-3 top-2 text-gray-500" />
          </div>
          <div className="relative">
            <input
              type="password"
              className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
            <img src="/icons/lock.png" alt="icon" className="absolute left-3 top-2 text-gray-500" />
          </div>
        </div>
        <button className="w-full bg-[#00CE3A] text-white py-4 rounded-full mt-6 focus:outline-none focus:shadow-outline">
          Login
        </button>
        <p className="text-center text-[14px] py-2 cursor-pointer">Forgot Password</p>
      </div>
    </div>
  );
};

export default LoginRightSide;
