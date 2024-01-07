const Textarea = ({ value, onChange, placeholder, label, rows }) => {
  return (
    <div className="mt-5 ">
      <textarea
        className="w-full resize-none text-sm  p-4 outline-none rounded-md border-2 border-[#d9e4df]"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
      />
    </div>
  );
};

export default Textarea;
