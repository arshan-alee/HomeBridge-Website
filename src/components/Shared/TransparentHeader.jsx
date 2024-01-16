import React, { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import Drawer from "./Drawer";
import ProfileDropDown from "./ProfileDropDown";

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

const TransparentHeader = () => {
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
    <div className="lg:absolute z-20 w-full lg:text-white px-5 sm:px-10 lg:px-20 py-6 flex lg:flex-row flex-row-reverse justify-between items-center">
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
              src="/icons/header__profile__white.png"
              alt="logo"
              className="cursor-pointer lg:block hidden "
            />

            <img
              src="/icons/header__profile.svg"
              alt="logo"
              className="cursor-pointer lg:hidden block "
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
              <Link to="/auth/login" className="lg:block hidden">
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

export default TransparentHeader;
