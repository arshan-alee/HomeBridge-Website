import React from "react";

const AboutInputContainer = ({
  label,
  placeholder,
  name,
  type,
  onBlur,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col my-2 gap-1">
      <label className="text-[#181C23] text-[14px] font-semibold font-urbanist">
        {label}
      </label>
      <input
        className={`${
          error && "red-placeholder"
        } bg-transparent border-b-2 text-[14px] text-[#011C2A] "border-[#8D8D8D] py-1 focus:outline-none`}
        name={name}
        type={type}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={error ? error : placeholder}
      />
    </div>
  );
};

export default AboutInputContainer;
