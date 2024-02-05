import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const Info = localStorage.getItem("Info");
    const userToken = JSON.parse(Info)?.token;

    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      return navigate("/auth/login");
    } else {
      if (location.pathname === "/" || location.pathname === "/login") {
        setIsLoggedIn(true);
        navigate("/");
      }
    }
  };

  useEffect(() => {
    checkUserToken();
  }, []);

  return <>{props.children}</>;
};

export default ProtectedRoute;
