import React from "react";

const AboutCard = ({ key, data }) => {
  return (
    <div key={key} className="flex lg:flex-row flex-col w-[350px] gap-2">
      <p className="text-[#eaeaea80] lg:text-9xl text-8xl font-semibold mt-[-12px]">
        {data.id}
      </p>
      <div className="flex flex-col gap-3">
        <h2 className="text-[#FFF] text-4xl font-semibold">{data.text}</h2>
        <p className="text-[#FFF] text-lg font-medium">{data.description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
