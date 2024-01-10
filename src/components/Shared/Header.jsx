import React, { useEffect, useRef, useState } from "react";
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

// Profile DropDown
const ProfileDropDown = ({
  isMobile,
  setOpenProfileDropdown,
  openProfileDropDown,
}) => {
  return (
    <div
      className={`absolute ${
        isMobile
          ? " -left-7 top-10 lg:hidden block"
          : "right-0 top-10 lg:block hidden"
      } z-50 rounded-md w-[200px] sm:w-[220px] bg-[#fff]  `}
    >
      <div className="pt-4 pb-5 sm:pt-5 sm:pb-6 border-b-[0.5px] border-[#AAA]">
        <img
          src="/icons/user_circle .png"
          alt="logo"
          className="w-[40px] sm:w-[60px] mx-auto mb-1"
        />
        <p className="font-semibold text-center">Jason</p>
      </div>
      <div className="w-full flex ">
        <div className="w-1/2 py-3 sm:py-4 text-center border-r-[0.5px] border-[#AAA]">
          <Link
            className="text-[#2B2B2B] text-[12px]"
            to="/mypage"
            onClick={() => setOpenProfileDropdown(!openProfileDropDown)}
          >
            Mypage{" "}
          </Link>
        </div>
        <div className="w-1/2 py-3 sm:py-4 text-center">
          <Link
            className="text-[#2B2B2B] text-[12px]"
            onClick={() => setOpenProfileDropdown(!openProfileDropDown)}
          >
            logout{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

// Mobile Devices
const Drawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed z-50 top-0 right-0 h-full w-[80%] bg-[#00CE3A] text-white px-6 pt-7 ${
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
        <Link className="mb-5 mt-2" to="/" onClick={onClose}>
          Home
        </Link>
        <Link className="mb-5" to="/f_2_r" onClick={onClose}>
          F-2-R
        </Link>
        <Link className="mb-5" to="/job_house" onClick={onClose}>
          Job&House
        </Link>
        <Link to="/event" onClick={onClose}>
          Event
        </Link>
      </div>

      {/* Add other drawer content here */}
    </div>
  );
};

const Header = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openProfileDropDown, setOpenProfileDropdown] = useState(false);

  const dropdownRef = useRef(null);

  // const handleClickOutsideDropdown = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setOpenProfileDropdown(false);
  //   }
  // };

  // useEffect(() => {
  //   if (openProfileDropDown) {
  //     window.addEventListener("click", handleClickOutsideDropdown);
  //   }

  //   return () => {
  //     window.removeEventListener("click", handleClickOutsideDropdown);
  //   };
  // }, [openProfileDropDown]);

  // Mobile
  const handleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <div className="px-5 sm:px-10 lg:px-20 py-6 flex lg:flex-row flex-row-reverse justify-between items-center">
      {/* Hamburger */}
      <img
        src="/icons/hamburger__icon.png"
        alt="logo"
        className="lg:hidden block cursor-pointer"
        onClick={handleNavbar}
      />

      {/* Left */}
      <h1 className="font-semibold text-base sm:text-lg lg:ml-unset -ml-12">
        HOMEBRIDGE
      </h1>
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
          <div className="flex gap-2">
            <img
              src="/icons/header__profile.svg"
              alt="logo"
              className="cursor-pointer "
            />
            {isLoggedIn && (
              <div className="relative">
                <p
                  onClick={() => setOpenProfileDropdown(!openProfileDropDown)}
                  className="lg:hidden block cursor-pointer"
                >
                  Jason
                </p>
                {openProfileDropDown && (
                  <ProfileDropDown
                    isMobile={true}
                    openProfileDropDown={openProfileDropDown}
                    setOpenProfileDropdown={setOpenProfileDropdown}
                  />
                )}
              </div>
            )}
          </div>
          <div className="relative w-fit">
            {isLoggedIn ? (
              <p
                onClick={() => setOpenProfileDropdown(!openProfileDropDown)}
                className="lg:block hidden cursor-pointer"
              >
                Jason
              </p>
            ) : (
              <Link to="/login" className="lg:block hidden">
                Login/Register
              </Link>
            )}

            {/* DropDown */}
            {openProfileDropDown && (
              <ProfileDropDown
                isMobile={false}
                openProfileDropDown={openProfileDropDown}
                setOpenProfileDropdown={setOpenProfileDropdown}
              />
            )}
          </div>
        </div>
      </div>

      {/* Drawer */}
      <Drawer isOpen={openNavbar} onClose={handleNavbar} />
    </div>
  );
};

export default Header;
