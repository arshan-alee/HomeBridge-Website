const Textarea = ({ value, onChange, placeholder, label, rows }) => {
  return (
    <div className="mt-3 ">
      <textarea
        className="w-full resize-none text-sm  p-4 outline-none rounded-2xl bg-[#D4D4D433]"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
      />
    </div>
  );
};

export default Textarea;
