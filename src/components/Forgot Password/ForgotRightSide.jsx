import React from 'react'
import { useNavigate } from 'react-router-dom';

function ForgotRightSide() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/new-password');
  };

  return (
    <div className="flex items-center justify-center w-full md:w-[40%]" style={{height: "calc(100vh - 4rem)"}}>
      <div className="bg-white p-4 md:p-8 rounded w-96">
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
            <img src="/icons/mail.png" alt="icon" className="absolute left-3 top-2 text-gray-500" />
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Full Name"
            />
            <img src="/icons/user.png" alt="icon" className="absolute left-3 top-2 text-gray-500" />
          </div>
        </div>
        <button className="w-full bg-[#00CE3A] text-white py-4 rounded-full mt-6 focus:outline-none focus:shadow-outline" onClick={handleButtonClick}>
          Check
        </button>
      </div>
    </div>
  )
}

export default ForgotRightSide