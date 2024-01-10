import React from 'react'

function SideMenu({setSelectedOption}) {

    function handleOptionSelection(index) {
        setSelectedOption(index)
    }

  return (
    <div className="min-w-1/4 px-12 space-y-8">
        <div className="flex flex-col items-center rounded-xl py-6 custom-shadow-right-bottom w-[225px]">
            <img src="/icons/user_circle.png" alt="" className="mb-4"/>
            <h1 className='text-[20px] font-medium'>Jason kim</h1>
            <p className='text-[#333333] text-[14px] font-normal'>kim9999@gmail.com</p>
        </div>
        <div className="flex flex-col rounded-xl py-8 custom-shadow-right-bottom space-y-4">
            <h1 className='text-[#00CE3A] text-[18px] font-semibold cursor-pointer' onClick={()=> handleOptionSelection(0)}>F-2-R application</h1>
            <h1 className='text-[#607092] text-[18px] font-normal cursor-pointer' onClick={()=> handleOptionSelection(1)}>Job & House</h1>
            <h1 className='text-[#607092] text-[18px] font-normal cursor-pointer' onClick={()=> handleOptionSelection(2)}>Event</h1>
        </div>
    </div>
  )
}

export default SideMenu