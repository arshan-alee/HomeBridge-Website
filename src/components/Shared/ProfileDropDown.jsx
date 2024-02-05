import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";
import { useEffect, useState } from "react";

const ProfileDropDown = ({
  isMobile,
  setOpenProfileDropdown,
  openProfileDropDown,
}) => {
  const { setIsLoggedIn } = useStateContext();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleLogout = () => {
    console.log("handle logout");
    setOpenProfileDropdown(!openProfileDropDown);
    localStorage.removeItem("Info");
    navigate("/");
  };
  // () => {
  //   setOpenProfileDropdown(!openProfileDropDown);
  //   // setIsLoggedIn(false);
  //   navigate("/");
  // }}

  const checkUserToken = () => {
    const Info = localStorage.getItem("Info");
    const userToken = JSON.parse(Info)?.token;

    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      return;
    }
    const userName = JSON.parse(Info)?.userName;

    // console.log("userName", JSON.parse(Info)?.userName);
    setUserName(userName);

    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, []);
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
          src="/icons/user_circle.png"
          alt="logo"
          className="w-[40px] sm:w-[60px] mx-auto mb-1"
        />
        <p className="font-semibold text-center text-[#000]">{userName}</p>
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
          <div className="text-[#2B2B2B] text-[12px]" onClick={handleLogout}>
            logout{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropDown;
