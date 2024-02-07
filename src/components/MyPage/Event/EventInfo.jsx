import React from "react";
import { convertDate } from "../../../utils/helper";

function EventInfo({ data }) {
  const { departure, arrival, traffic, price } = data;
  return (
    <div className="w-full lg:mt-8 custom-shadow-right-bottom lg:rounded-[30px] overflow-hidden">
      <h1 className="text-[24px] font-bold bg-[#00CE3A] text-white pl-6 lg:pl-12 py-3">
        Event Information
      </h1>
      <div className="grid grid-cols-2  p-6 lg:p-12 break-words ">
        <div className="col-span-1 flex justify-between my-2">
          <p className={`w-1/2 text-[#00CE3A] font-semibold `}>Departure</p>
          <p
            className={`w-1/2 font-medium text-[16px] text-[#2B2B2B] mr-1 lg:mr-10`}
          >
            {convertDate(departure)}
          </p>
        </div>
        <div className="col-span-1 flex justify-between my-2">
          <p className={`w-1/2 text-[#00CE3A] font-semibold `}>traffic</p>
          <p
            className={`w-1/2 font-medium text-[16px] text-[#2B2B2B] mr-1 lg:mr-10`}
          >
            {traffic}
          </p>
        </div>
        <div className="col-span-1 flex justify-between my-2">
          <p className={`w-1/2 text-[#00CE3A] font-semibold `}>Arrival</p>
          <p
            className={`w-1/2 font-medium text-[16px] text-[#2B2B2B] mr-1 lg:mr-10`}
          >
            {convertDate(arrival)}
          </p>
        </div>
        <div className="col-span-1 flex justify-between my-2">
          <p className={`w-1/2 text-[#00CE3A] font-semibold `}>Price</p>
          <p
            className={`w-1/2 font-medium text-[16px] text-[#2B2B2B] mr-1 lg:mr-10`}
          >
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventInfo;
