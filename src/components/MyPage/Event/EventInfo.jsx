import React from "react";

function EventInfo({ data }) {
  const { departure, arrival, traffic, price } = data;
  return (
    <div className="w-full lg:mt-8 custom-shadow-right-bottom lg:rounded-[30px] overflow-hidden">
      <h1 className="text-[24px] font-bold bg-[#00CE3A] text-white pl-6 lg:pl-12 py-3">
        Event Information
      </h1>
      <div className="flex flex-wrap p-6 lg:p-12 break-words ">
        <div className="flex w-full lg:w-1/2 my-2">
          <p className={`w-1/2 text-[#00CE3A] `}>Departure</p>
          <p
            className={`w-1/2 font-medium text-[16px] text-[#2B2B2B] mr-1 lg:mr-10`}
          >
            {departure}
            {price}
            {arrival}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventInfo;
