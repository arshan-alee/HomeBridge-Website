import React from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const RegisterRightSide = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-[40%]">
      <div className="bg-white p-8 rounded w-96">
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
            <FaUser className="absolute left-3 top-3 text-gray-500" />
          </div>
          <div className="relative">
            <input
              type="email"
              className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Email Address"
            />
            <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
          </div>
          <div className="relative">
            <input
              type="password"
              className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
            <FaLock className="absolute left-3 top-3 text-gray-500" />
          </div>
          <div className="relative">
            <input
              type="password"
              className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Check your password"
            />
            <FaLock className="absolute left-3 top-3 text-gray-500" />
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
