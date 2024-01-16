import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function PaymentSuccess() {
  const contactData = [
    { label: "출발일자", value: "2023.12.30(토) 07:00" },
    { label: "도착일자", value: "2023.12.31(일) 19:00" },
    { label: "결제비용", value: "199,000KRW" },
  ];

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lg:mx-56 my-8 lg:my-16">
      <h1 className="text-[28px] lg:text-[36px] text-center font-semibold mb-8 text-[#00CE3A] whitespace-pre-line">
        결제가 정상적으로 완료 {!isLargeScreen && <br />}
        <span className="text-[#2B2B2B]"> 되었습니다.</span>
      </h1>
      <div className="w-full my-8 custom-shadow-right-bottom lg:rounded-xl overflow-hidden">
        <h1 className="text-[24px] font-bold bg-[#00CE3A] text-white pl-4 lg:pl-12 py-3">
          상품 정보
        </h1>
        <h1 className="lg:hidden text-[24px] font-semibold p-6">
          [신년일출] 전라도 별미와 함께하는 여수 향일암 일출, 순천 전주 1박2일
        </h1>
        <div className="w-full flex flex-col-reverse lg:flex-row lg:p-12">
          <div className="w-full lg:w-1/2 p-4">
            <h1 className="hidden lg:block text-[24px] font-semibold">
              [신년일출] 전라도 별미와 함께하는 여수 향일암 일출, 순천 전주
              1박2일
            </h1>
            <div className="flex flex-wrap mt-4">
              {contactData.map((item, index) => (
                <div key={index} className="w-full flex my-2 px-6 lg:px-0">
                  <p className="w-1/2 text-[#00CE3A] text-left">{item.label}</p>
                  <p className="w-1/2 text-left">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              src="/images/payment_success.png"
              alt=""
              className="w-full lg:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
