import React from 'react';

const RegisterRightSide = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full md:w-[40%]">
      <div className="bg-white p-4 md:p-8 rounded w-96">
        <h2 className="text-3xl font-bold mb-2">Hello!</h2>
        <p className="text-gray-600 mb-6 font-[400]">
          Sign Up to Get Started
        </p>
        <div className="space-y-4">
          <div className="relative items-center">
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Full Name"
            />
            <img src="/icons/user.png" alt="icon" className="absolute left-3 top-2 text-gray-500 w-[24px]" />
          </div>
          <div className="relative">
            <input
              type="email"
              className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Email Address"
            />
            <img src="/icons/mail.png" alt="icon" className="absolute left-3 top-2 text-gray-500 w-[24px]" />
          </div>
          <div className="relative">
            <input
              type="password"
              className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
            <img src="/icons/lock.png" alt="icon" className="absolute left-3 top-2 text-gray-500 w-[24px]" />
          </div>
          <div className="relative">
            <input
              type="password"
              className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Check your password"
            />
            <img src="/icons/lock.png" alt="icon" className="absolute left-3 top-2 text-gray-500 w-[24px]" />
          </div>
        </div>
        <button className="w-full bg-[#00CE3A] text-white py-4 rounded-full mt-6 focus:outline-none focus:shadow-outline">
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterRightSide;
