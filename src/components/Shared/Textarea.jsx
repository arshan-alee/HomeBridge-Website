const Textarea = ({
  value,
  onChange,
  placeholder,
  label,
  rows,
  error,
  name,
}) => {
  return (
    <div className="mt-3 ">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`w-full resize-none text-sm  p-4 outline-none rounded-2xl bg-[#D4D4D433] ${
          error ? "red-placeholder" : ""
        }`}
        placeholder={error ? error : placeholder}
      />
    </div>
  );
};

export default Textarea;
