import React from "react";
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

const Header = () => {
  const location = useLocation();

  return (
    <div className="px-20 py-4 flex justify-between items-center">
      {/* Left */}
      <h1 className="font-semibold text-lg">HOMEBRIDGE</h1>
      {/* Right */}
      <div className="flex justify-end items-center gap-7">
        {linksArray.map((item, i) => (
          <Link
            key={i}
            to={item.linkTo}
            className={`py-1 px-3 rounded-[30px] ${
              location.pathname === item.linkTo && "bg-[#00CE3A]"
            }`}
          >
            {item.linkText}
          </Link>
        ))}

        <div className="flex justify-center items-center gap-2">
          <img src="/icons/header__profile.svg" alt="logo" />
          <Link to="/login">Login/Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
