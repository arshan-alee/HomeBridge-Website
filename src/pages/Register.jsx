import React from "react";
import LoginLeft from "../components/Shared/LoginLeft";
import RegisterRightSide from "../components/Register/RegisterRightSide";
import Header from "../components/Shared/Header";

function Register() {
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <LoginLeft />
        <RegisterRightSide />
      </div>

      {/* <div>
        <Input
          name="area"
          label="Enter Your Area"
          type="text"
          // value={userData.area}
          placeholder="Please write you details"
          // onChange={handleInputChange}
        />
        <Textarea
          // value={textValue}
          // onChange={handleTextChange}
          placeholder="Enter your text here..."
          rows={6}
          label="Optional"
        />

        <Select
          options={["1", "2"]}
          // value={textValue}
          onChange={(e) => console.log(e)}
          placeholder="Enter your text here..."
          rows={6}
          label="Optional"
        />
      </div> */}
    </>
  );
}

export default Register;
