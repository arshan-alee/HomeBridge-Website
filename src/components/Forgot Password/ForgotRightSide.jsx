import React from 'react'
import { useNavigate } from 'react-router-dom';

function ForgotRightSide() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/auth/new-password');
  };

  return (
    <div className="flex items-center justify-center w-full md:w-[40%]" style={{height: "calc(100vh - 4rem)"}}>
      <div className="bg-white p-4 md:p-8 rounded w-96">
        <h2 className="text-[26px] mb-2 font-bold">Did you forget <br /> your password?</h2>
        <p className="text-[#333333] text-[18px] mb-6 font-[400]">
        Please enter the information <br />you entered when you signed up.
        </p>
        <div className="space-y-4">
          <div className="relative">
            <input
              type="email"
              className="w-full pl-[48px] pr-[26px] py-[18px] border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Email Address"
            />
            <img src="/icons/mail.png" alt="icon" className="absolute left-[20px] top-[19px]" />
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full pl-[48px] pr-[26px] py-[18px] border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Full Name"
            />
            <img src="/icons/user.png" alt="icon" className="absolute left-[20px] top-[19px]" />
          </div>
        </div>
        <button className="w-full bg-[#00CE3A] text-white px-[26px] py-[18px] rounded-full mt-6 focus:outline-none focus:shadow-outline" onClick={handleButtonClick}>
          Check
        </button>
      </div>
    </div>
  )
}

export default ForgotRightSide