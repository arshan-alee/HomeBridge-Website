import React from "react";
import LoginLeft from "../components/Shared/LoginLeft";
import RegisterRightSide from "../components/Register/RegisterRightSide";
import Header from "../components/Shared/Header";

function Register() {
  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-row">
        <LoginLeft />
        <RegisterRightSide />
      </div>
    </>
  );
}

export default Register;
