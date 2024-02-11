import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import ProfileDropDown from "../Shared/ProfileDropDown";

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

const RefundHeader = ({
  isLoggedIn,
  userName,
  condition,
  setCondition,
  precautions,
  setPrecautions,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openProfileDropDown, setOpenProfileDropdown] = useState(false);

  const isActiveLink = (linkPath) => {
    return (
      location.pathname === linkPath ||
      location.pathname.startsWith(`${linkPath}/`)
    );
  };

  const isRefundPage = (pathname) => {
    return pathname.match(/^\/refund\/\w+/);
  };

  const handleNavigation = () => {
    if (!precautions && !condition) {
      navigate(-1);
      return;
    }
    if (!condition && precautions) {
      setPrecautions(false);
    }

    if (!precautions && condition) {
      setCondition(false);
    }
  };

  return (
    <>
      <div className="lg:block hidden px-20 py-6 flex justify-between items-center">
        <img
          onClick={() => navigate("/")}
          src="/icons/header__logo.png"
          alt="logo"
          className="w-[130px] cursor-pointer"
        />
        <div className="flex justify-end items-center gap-7">
          {linksArray.map((item, i) => (
            <Link
              key={i}
              to={item.linkTo}
              className={`py-1 px-3 rounded-[30px] ${
                isActiveLink(item.linkTo) && "bg-[#00CE3A]"
              } `}
            >
              {item.linkText}
            </Link>
          ))}
          <div
            className={`flex justify-center items-center py-1 px-3 rounded-[30px] gap-2 ${
              location.pathname === "/mypage" || isRefundPage(location.pathname)
                ? "bg-[#00CE3A] text-[#fff]"
                : ""
            } `}
          >
            <img
              src={
                location.pathname === "/mypage" ||
                isRefundPage(location.pathname)
                  ? "/icons/header__profile__white.png"
                  : "/icons/header__profile.svg"
              }
              alt="logo"
              className="cursor-pointer"
            />
            <div className="relative w-fit">
              {isLoggedIn ? (
                <>
                  <p
                    onClick={() => setOpenProfileDropdown(!openProfileDropDown)}
                    className="cursor-pointer"
                  >
                    {userName}
                  </p>
                  {openProfileDropDown && (
                    <ProfileDropDown
                      openProfileDropDown={openProfileDropDown}
                      setOpenProfileDropdown={setOpenProfileDropdown}
                    />
                  )}
                </>
              ) : (
                <Link to="/auth/login">Login/Register</Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden bg-[#fbfbfb] px-10 py-6 flex items-center justify-between">
        <button
          onClick={handleNavigation}
          //   onClick={() => navigate(-1)}
          className="flex text-sm items-center text-black font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
        {!condition && !precautions && (
          <h1 className="text-base font-bold">Refund application</h1>
        )}
        {!condition && precautions && (
          <h1 className="text-base font-bold">Refund Regulations</h1>
        )}
        <div></div> {/* Placeholder for spacing */}
      </div>
      <hr className="lg:hidden block" />
      {/* </div> */}
    </>
  );
};

export default RefundHeader;
