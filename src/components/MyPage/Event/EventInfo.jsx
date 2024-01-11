import React from 'react'

function EventInfo() {
    const contactData = [
        { label: '보증금', value: '2023.12.30(토) 07:00' },
        { label: '교통', value: '버스' },
        { label: '도착', value: '2023.12.31(일) 19:00' },
        { label: '가격', value: '199,000KRW' }
    ];

  return (
    <div className="w-full mt-8 custom-shadow-right-bottom rounded-xl overflow-hidden">
      <h1 className="text-[24px] font-bold bg-[#00CE3A] text-white pl-6 py-3">이벤트 정보</h1>
      <div className="flex flex-wrap p-6 md:p-12">
        {contactData.map((item, index) => (
          <div key={index} className="flex w-full md:w-1/2 my-2">
            <p className="w-1/2 text-[#00000080]">{item.label}</p>
            <p className="w-1/2 text-left">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventInfo