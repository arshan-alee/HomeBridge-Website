import React from 'react'

function LoginLeft({fullHeight}) {
  return (
    <div className="relative w-[60%] bg-[#00CE3A] hidden md:flex flex-col items-center justify-center" style={{height: fullHeight ? "100vh" : "calc(100vh - 4rem)"}}>
        <div>
            <h1 className="text-white text-left text-[40px] font-[700]">Go HomeBridge</h1>
            <p className="text-white text-[18px] font-[500]">Find work and residence at the same time at Homebridge.</p>
        </div>
        <img src="/images/Auth.png" alt="" className="absolute bottom-0 left-0 w-[300px]" />
    </div>
  )
}

export default LoginLeft