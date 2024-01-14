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
    <div className="flex-grow">
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={require}
        placeholder={placeholder}
        className="outline-none text-sm p-3 w-full rounded-xl bg-[#D4D4D433]"
      />
    </div>
  );
};

export default Input;
