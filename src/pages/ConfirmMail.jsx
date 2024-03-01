import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import RequestLoader from "../components/Shared/RequestLoader";
import baseUrl from "../utils/baseUrl";
import LoginLeft from "../components/Shared/LoginLeft";

const ConfirmMail = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();

  const handleClick = async () => {
    setLoader(true);
    try {
      const response = await axios.put(`${baseUrl}/api/user/confirmEmail`, {
        token: token,
      });
      console.log("response: ", response);
      if (response?.data?.status) {
        // localStorage.setItem("info", JSON.stringify(response.data.user));
        toast.success(response?.data?.message);
        navigate("/auth/login");
        // actions.resetForm();
      } else if (!response?.data?.status) {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.response?.data?.message);

      setLoader(true);
    } finally {
      setLoader(false);
    }
  };

  return (
    // <div className="flex">
    //   <LoginLeft />
    //   <div className="flex flex-col items-center justify-center min-h-[60vh] gap-5 mx-6">
    //     <div>Email Confirmation</div>
    //     <p>To complete email verification, please press the button below</p>
    //     <button className="bg-green-500 text-white p-2 px-8" onClick={handleClick}>
    //       {loader ? <RequestLoader /> : "Confirm Email Address"}
    //     </button>
    //   </div>
    // </div>

    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-5 mx-6">
      <div>Email Confirmation</div>
      <p className="text-center">To complete email verification, please press the button below</p>
      <button className="bg-green-500 text-white p-2 px-8" onClick={handleClick}>
        {loader ? <RequestLoader /> : "Confirm Email Address"}
      </button>
    </div>
  );
};

export default ConfirmMail;
