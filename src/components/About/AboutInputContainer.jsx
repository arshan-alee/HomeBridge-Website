import React from "react";

const AboutInputContainer = ({ label, placeHolder }) => {
  return (
    <div className="flex flex-col my-2 gap-1">
      <label className="text-[#181C23] text-[14px] font-semibold font-urbanist">
        {label}
      </label>
      <input
        className={` bg-transparent border-b-2 text-[14px] text-[#011C2A] "border-[#8D8D8D] py-1 focus:outline-none`}
        // name={name}
        // type={type}
        // id={id}
        placeholder={placeHolder}
        // className={`bg-transparent border-b-2 text-[12px] sm:text-[14px] ${
        //   error ? "border-red-500" : "border-[#757B85]"
        // }  py-1 focus:outline-none font-urbanist`}
        // value={value}
        // onChange={onChange}
        // onBlur={onBlur}
      />
      {/* {error && <p className="text-sm text-[#ff0000]">{error}</p>} */}
    </div>
  );
};

export default AboutInputContainer;
