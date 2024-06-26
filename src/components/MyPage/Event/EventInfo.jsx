import React from 'react'

function EventInfo() {
    const contactData = [
        { label: '보증금', value: '2023.12.30(토) 07:00' },
        { label: '교통', value: '버스' },
        { label: '도착', value: '2023.12.31(일) 19:00' },
        { label: '가격', value: '199,000KRW' }
    ];

  return (
    <div className="w-full lg:mt-8 custom-shadow-right-bottom lg:rounded-[30px] overflow-hidden">
      <h1 className="text-[24px] font-bold bg-[#00CE3A] text-white pl-6 lg:pl-12 py-3">Event Information</h1>
      <div className="flex flex-wrap p-6 lg:p-12">
        {contactData.map((item, index) => (
          <div key={index} className="flex w-full lg:w-1/2 my-2">
            <p className={`w-1/2 text-[#00CE3A] ${(index+1) % 2 === 0 ? 'ml-6 lg:ml-8' : 'ml-6 lg:ml-0'}`}>{item.label}</p>
            <p className={`w-1/2 font-medium text-[16px] ${(index+1) % 2 === 0 ? 'text-right lg:text-left' : 'text-right lg:text-center'} text-[#2B2B2B] mr-1 lg:mr-10`}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventInfo