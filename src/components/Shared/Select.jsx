import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Select = ({ options, onChange, value, name, placeholder, error }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Wrapper function to integrate with Formik
  const handleSelect = (option) => {
    // Construct a synthetic event object
    const changeEvent = {
      target: {
        name: name, // Use the 'name' prop to identify the form field
        value: option, // The selected option's value
      },
    };
    onChange(changeEvent); // Call Formik's onChange handler
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="relative w-full">
      <div className="">
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-xl bg-[#D4D4D433] text-sm p-3 font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          {value ? (
            <span className="text-[#9ca3af]">{value}</span>
          ) : (
            <span className={` ${error ? "text-[#ffb8b8]" : "text-[#9ca3af]"}`}>
              {placeholder}
            </span>
          )}
          {isOpen ? (
            <IoIosArrowUp className="text-[22px] text-[#9ca3af] m-0" />
          ) : (
            <IoIosArrowDown className="text-[22px] text-[#9ca3af] m-0" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0  w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                className="block w-full text-left px-4 py-2 text-sm text-[#6c7571] hover:bg-gray-100 hover:text-gray-900"
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
