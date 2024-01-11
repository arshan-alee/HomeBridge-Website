import React from 'react'

function ProductInfo() {
    const productInfo = [
        {
            label: '포함사항',
            value: '-왕복교통비, 1박 3식, 해상케이블카, 입장료, 여행가이드, 차량보험'
        },
        {
            label: '불포함사항',
            value: '-2일차 개별조식, 여행자보험'
        },
        {
            label: '참고사항',
            value: '-여행일정은 계약 체결시 예상하지 못한 부득이한 사정 등이 발생하는 경우 여행자의 사전 동의를 거쳐 변경 될 수 있음을 양지하여 주시기 바랍니다.'
        }
    ];

  return (
    <div className="w-full my-8 custom-shadow-right-bottom rounded-xl overflow-hidden">
      <h1 className="text-[24px] font-bold bg-[#00CE3A] text-white pl-6 py-3">상품정보</h1>
      <div className="flex flex-wrap p-6 md:p-12">
        {productInfo.map((item, index) => (
          <div key={index} className="w-full my-2">
            <p className="text-[#00000080]">{item.label}</p>
            <p className="text-left">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductInfo