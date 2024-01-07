"use client";

const Input = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  require,
}) => {
  return (
    <div className="">
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={require}
        placeholder={placeholder}
        className="outline-none text-sm  p-4 w-full rounded-md border-2 border-[#d9e4df] "
      />
    </div>
  );
};

export default Input;
