import React from 'react'

function NewPasswordRightSide() {
  return (
    <div className="flex items-center justify-center w-full md:w-[40%]" style={{height: "calc(100vh - 4rem)"}}>
      <div className="bg-white p-4 md:p-8 rounded w-96">
        <h2 className="text-3xl mb-2 font-bold">This is the last step!</h2>
        <p className="text-gray-600 mb-6 font-[400]">
        Please create a new password
        </p>
        <div className="space-y-4">
          <div className="relative">
            <input
              type="password"
              className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
            <img src="/icons/lock.png" alt="icon" className="absolute left-3 top-2 text-gray-500" />
          </div>
          <div className="relative">
            <input
              type="password"
              className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Check your password"
            />
            <img src="/icons/lock.png" alt="icon" className="absolute left-3 top-2 text-gray-500" />
          </div>
        </div>
        <button className="w-full bg-[#00CE3A] text-white py-4 rounded-full mt-6 focus:outline-none focus:shadow-outline">
          Change Password
        </button>
      </div>
    </div>
  )
}

export default NewPasswordRightSide