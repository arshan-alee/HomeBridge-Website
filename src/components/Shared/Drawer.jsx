import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Drawer = ({ isLoggedIn, isOpen, onClose }) => {
  return (
    <div
      className={`fixed z-50 top-0 right-0 h-full w-[80%] bg-[#00CE3A] text-white px-6 pt-7 ${
        isOpen ? "transform translate-x-0" : "transform translate-x-full"
      } transition-transform ease-in-out duration-300`}
    >
      <div className="relative  ">
        {isLoggedIn ? null : (
          <Link to="/auth/login" className="text-[20px] " onClick={onClose}>
            Login/Register
          </Link>
        )}
        <div
          className="text-white absolute top-0 right-0 bg-[#00a52e] w-[40px] h-[40px] grid place-items-center rounded-md"
          onClick={onClose}
        >
          <RxCross1 className="text-[25px]" />
        </div>
      </div>

      <div className="flex flex-col text-[20px]">
        <Link className="mb-5 mt-2" to="/" onClick={onClose}>
          Home
        </Link>
        <Link className="mb-5" to="/f_2_r" onClick={onClose}>
          F-2-R
        </Link>
        <Link className="mb-5" to="/job_house" onClick={onClose}>
          Job&House
        </Link>
        <Link className="mb-5" to="/event" onClick={onClose}>
          Event
        </Link>
        <Link to="/about" onClick={onClose}>
          About
        </Link>
      </div>

      <div className="mt-12 flex flex-col gap-2">
        <Link className="font-light text-[14px]">Privacy Policy</Link>
        <Link className="font-light text-[14px]">Terms of Service</Link>
      </div>

      {/* Add other drawer content here */}
    </div>
  );
};

export default Drawer;
