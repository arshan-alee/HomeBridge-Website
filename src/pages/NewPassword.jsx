import React from "react";
import LoginLeft from "../components/Shared/LoginLeft";
import NewPasswordRightSide from "../components/Forgot Password/NewPasswordRightSide";
import Header from "../components/Shared/Header";

function NewPassword() {
  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-row">
        <LoginLeft />
        <NewPasswordRightSide />
      </div>
    </>
  );
}

export default NewPassword;
