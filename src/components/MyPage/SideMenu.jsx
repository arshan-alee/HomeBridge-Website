import React from 'react'

function SideMenu({selectedOption, setSelectedOption}) {

    function handleOptionSelection(index) {
        setSelectedOption(index)
    }

  return (
    <div className="min-w-1/4 px-2 md:px-12 space-y-8">
        <div className="w-full md:w-[225px] flex md:flex-col items-center justify-center rounded-xl py-6 custom-shadow-right-bottom gap-3">
            <img src="/icons/user_circle.png" alt="" className="mb-4"/>
            <div className="flex flex-col items-center">
                <h1 className='text-[20px] font-medium'>Jason kim</h1>
                <p className='text-[#333333] text-[14px] font-normal'>kim9999@gmail.com</p>
            </div>
        </div>
        <div className="hidden md:flex flex-col rounded-xl py-8 custom-shadow-right-bottom space-y-4">
            <h1 className={`text-[18px] font-semibold cursor-pointer ${selectedOption === 0 ? 'text-[#00CE3A]' : 'text-[#607092]'}`} onClick={()=> handleOptionSelection(0)}>F-2-R application</h1>
            <h1 className={`text-[18px] font-semibold cursor-pointer ${selectedOption === 1 ? 'text-[#00CE3A]' : 'text-[#607092]'}`} onClick={()=> handleOptionSelection(1)}>Job & House</h1>
            <h1 className={`text-[18px] font-semibold cursor-pointer ${selectedOption === 2 ? 'text-[#00CE3A]' : 'text-[#607092]'}`} onClick={()=> handleOptionSelection(2)}>Event</h1>
        </div>
        <div className='md:hidden'>
            <ul className="flex nav nav-tabs mb-3 px-2 justify-around"> 
                <li className="nav-item" onClick={()=> handleOptionSelection(0)}> 
                    <a className={`nav-link px-2 ${selectedOption === 0 ? 'active' : ''}`} href>F-2-R </a> 
                </li> 
                <li className="nav-item" onClick={()=> handleOptionSelection(1)}> 
                    <a className={`nav-link px-2 ${selectedOption === 1 ? 'active' : ''}`} href>Job&House</a> 
                </li> 
                <li className="nav-item" onClick={()=> handleOptionSelection(2)}> 
                    <a className={`nav-link px-2 ${selectedOption === 2 ? 'active' : ''}`} href>Event</a> 
                </li> 
            </ul>
        </div>
    </div>
  )
}

export default SideMenu