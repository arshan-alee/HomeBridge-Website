import React, { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Drawer from "./Drawer";
import ProfileDropDown from "./ProfileDropDown";
import { useStateContext } from "../../context/StateContext";
import { useMediaQuery } from "react-responsive";

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

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn } = useStateContext();
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openProfileDropDown, setOpenProfileDropdown] = useState(false);
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  const [isLoggeIn, setIsLoggeIn] = useState(false);
  const [userName, setUserName] = useState("");

  const checkUserToken = () => {
    const Info = localStorage.getItem("Info");
    const userToken = JSON.parse(Info)?.token;

    console.log("userToken: ", userToken);

    if (!userToken || userToken === "undefined") {
      console.log("Its run:::::::");
      setIsLoggeIn(false);
      return;
    }
    const userName = JSON.parse(Info)?.userName;

    setUserName(userName.split(" ")[0]);

    setIsLoggeIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, []);

  const dropdownRef = useRef(null);

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

      <img
        onClick={() => navigate("/")}
        src="/icons/header__logo.png"
        alt="logo"
        className="w-[80px] lg:block hidden lg:w-[130px] cursor-pointer "
      />
      <h1
        className={`font-semibold lg:hidden block text-base sm:text-lg lg:ml-unset ${
          isLoggedIn ? "-ml-16" : "-ml-5"
        }`}
      >
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

        <div
          className={`flex justify-center items-center py-1 px-3 rounded-[30px] gap-2 ${
            location.pathname === "/mypage" && "bg-[#00CE3A] text-[#fff]"
          } `}
        >
          <div className="flex gap-2 ">
            <img
              src={
                location.pathname === "/mypage"
                  ? "/icons/header__profile__white.png"
                  : "/icons/header__profile.svg"
              }
              alt="logo"
              className="cursor-pointer "
            />
            {isLoggedIn && (
              <div className="relative">
                <p
                  onClick={() => setOpenProfileDropdown(!openProfileDropDown)}
                  className="lg:hidden block cursor-pointer"
                >
                  {isMediumScreen ? userName : userName.slice(0, 8)}
                  {/* Jason */}
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
                {userName}
                {/* Jason */}
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

export default Header;
