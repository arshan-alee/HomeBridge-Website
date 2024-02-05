import React from "react";

function ContactInfo({ data }) {
  const contactData = [
    { label: "보증금", value: "200,000KRW" },
    { label: "월세", value: "199,000KRW" },
    { label: "계약기간", value: "근무지 결정 후 계약" },
  ];

  return (
    <div className="w-full lg:mt-8 custom-shadow-right-bottom p-6 md:p-12 lg:rounded-2xl bg-white">
      <h1 className="text-[22px] mb-2 lg:mb-4">Contract information</h1>
      {/* <div className="flex flex-wrap">
        {contactData.map((item, index) => (
          <div key={index} className="flex w-full md:w-1/2 my-2">
            <p className="w-1/2 text-[#00000080]">{item.label}</p>
            <p className="w-1/2 text-left">{item.value}</p>
          </div>
        ))}
      </div> */}
      <div
        className="flex flex-wrap  break-words text-[#00000080]"
        dangerouslySetInnerHTML={{ __html: data.contractInformation }}
      />
    </div>
  );
}

export default ContactInfo;
