import React from 'react'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

function ForgotRightSide() {
  return (
    <div className="min-h-screen flex items-center justify-center w-[40%]">
      <div className="bg-white p-8 rounded w-96">
        <h2 className="text-3xl mb-2 font-bold">Did you forget <br /> your password?</h2>
        <p className="text-gray-600 mb-6 font-[400]">
        Please enter the information <br />you entered when you signed up.
        </p>
        <div className="space-y-4">
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
              type="text"
              className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Full Name"
            />
            <FaUser className="absolute left-3 top-3 text-gray-500" />
          </div>
        </div>
        <button className="w-full bg-[#00CE3A] text-white py-4 rounded-full mt-6 focus:outline-none focus:shadow-outline">
          Check
        </button>
      </div>
    </div>
  )
}

export default ForgotRightSide