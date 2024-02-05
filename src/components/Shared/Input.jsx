"use client";

const Input = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  require,
  onBlur,
  error,
}) => {
  return (
    <div className="flex-grow">
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={require}
        // placeholder={placeholder}
        onBlur={onBlur}
        // className="outline-none text-sm p-3 w-full rounded-xl bg-[#D4D4D433]"
        className={`outline-none text-sm p-3 w-full rounded-xl bg-[#D4D4D433] ${
          error ? "red-placeholder" : ""
        }`}
        placeholder={error ? error : placeholder}
      />
    </div>
  );
};

export default Input;
