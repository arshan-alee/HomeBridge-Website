import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const linksArray = [
  {
    linkText: "Home",
    linkTo: "/",
  },
  {
    linkText: "F-2-R",
    linkTo: "/f_2_r",
  },
  {
    linkText: "Job&House",
    linkTo: "/job_house",
  },
  {
    linkText: "Event",
    linkTo: "/event",
  },
  {
    linkText: "About us",
    linkTo: "/about",
  },
];

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[80%] bg-[#00CE3A] text-white px-6 pt-7 ${
        isOpen ? "transform translate-x-0" : "transform translate-x-full"
      } transition-transform ease-in-out duration-300`}
    >
      <div className="flex justify-between items-center  ">
        <Link to="/login">Login/Register</Link>
        <div
          className="text-white bg-[#00a52e] w-[40px] h-[40px] grid place-items-center rounded-md"
          onClick={onClose}
        >
          <RxCross1 className="text-[25px]" />
        </div>
      </div>

      <div className="flex flex-col">
        <Link className="mb-5 mt-2" to="/">
          Home
        </Link>
        <Link className="mb-5" to="/f_2_r">
          F-2-R
        </Link>
        <Link className="mb-5" to="/job_house">
          Job&House
        </Link>
        <Link to="/event">Event</Link>
      </div>

      {/* Add other drawer content here */}
    </div>
  );
};

const Header = () => {
  const location = useLocation();

  const [openNavbar, setOpenNavbar] = useState(false);

  const handleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <div className="px-5 sm:px-10 lg:px-20 py-4 flex lg:flex-row flex-row-reverse justify-between items-center">
      {/* Hamburger */}
      <img
        src="/icons/hamburger__icon.png"
        alt="logo"
        className="lg:hidden block cursor-pointer"
        onClick={handleNavbar}
      />

      {/* Left */}
      <h1 className="font-semibold text-lg">HOMEBRIDGE</h1>
      {/* Right */}
      <div className="flex justify-end items-center gap-7">
        {linksArray.map((item, i) => (
          <Link
            key={i}
            to={item.linkTo}
            className={`lg:block hidden py-1 px-3 rounded-[30px] ${
              location.pathname === item.linkTo && "bg-[#00CE3A]"
            }`}
          >
            {item.linkText}
          </Link>
        ))}

        <div className="flex justify-center items-center gap-2">
          <img
            src="/icons/header__profile.svg"
            alt="logo"
            className="cursor-pointer"
          />
          <Link to="/login" className="lg:block hidden">
            Login/Register
          </Link>
        </div>
      </div>

      {/* Drawer */}
      <Drawer isOpen={openNavbar} onClose={handleNavbar} />
    </div>
  );
};

export default Header;
