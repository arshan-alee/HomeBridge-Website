import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import RequestLoader from "../components/Shared/RequestLoader";
import baseUrl from "../utils/baseUrl";

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
    <>
      <div>ConfirmMail</div>
      <button className="bg-green-500 text-white p-2" onClick={handleClick}>
        {loader ? <RequestLoader /> : "Confirm mail"}
      </button>
    </>
  );
};

export default ConfirmMail;
