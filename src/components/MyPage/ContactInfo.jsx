import React from "react";

function ContactInfo({ data }) {
  return (
    <>
      {data?.contractInformation && (
        <div className="w-full lg:mt-8 custom-shadow-right-bottom p-6 md:p-12 lg:rounded-2xl bg-white">
          <h1 className="text-[22px] mb-2 lg:mb-4">Contract information</h1>

          <div
            className="flex flex-wrap  break-words text-[#00000080]"
            dangerouslySetInnerHTML={{ __html: data?.contractInformation }}
          />
        </div>
      )}
    </>
  );
}

export default ContactInfo;
