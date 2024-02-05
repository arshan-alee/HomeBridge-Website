import React from "react";

function EventInfo({ eventInfo }) {
  return (
    <div className="w-full lg:mt-8 custom-shadow-right-bottom lg:rounded-[30px] overflow-hidden">
      <h1 className="text-[24px] font-bold bg-[#00CE3A] text-white pl-6 lg:pl-12 py-3">
        Event Information
      </h1>
      <div
        className="flex flex-wrap p-6 lg:p-12 break-words "
        dangerouslySetInnerHTML={{ __html: eventInfo }}
      />
    </div>
  );
}

export default EventInfo;
