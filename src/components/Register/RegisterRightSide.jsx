import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { signUpSchema } from "../../utils/validation-schema";
import toast from "react-hot-toast";
import RequestLoader from "../Shared/RequestLoader";
import { useNavigate } from "react-router-dom";

const RegisterRightSide = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const RegisterUser = async (values, actions) => {
    setLoader(true);
    try {
      const response = await axios.post(
        `${baseUrl}/api/user/createUser`,
        values
      );
      console.log("response: ", response);
      if (response?.data?.status) {
        // localStorage.setItem("info", JSON.stringify(response.data.user));
        toast.success("Registeration Successfull");
        navigate("/auth/login");
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

  const onSubmit = async (values, actions) => {
    await RegisterUser(values, actions);
    // console.log("submit called", values);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit,
    });

  console.log({ errors });

  return (
    <div
      className="flex items-center justify-center w-full md:w-[40%]"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 md:p-8 rounded w-96"
      >
        <h2 className="text-[26px] font-bold mb-1">Hello!</h2>
        <p className="text-[18px] text-[#333333] mb-6 font-[400]">
          Sign Up to Get Started
        </p>
        <div className="space-y-4">
          <div className="relative items-center">
            <input
              type="text"
              name="userName"
              className={`w-full pl-[48px] pr-[26px] py-[18px] border rounded-full focus:outline-none focus:shadow-outline ${
                touched.userName || errors.userName ? "red-placeholder" : ""
              }`}
              placeholder={
                touched.userName || errors.userName
                  ? errors.userName
                  : "Full Name"
              }
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <img
              src="/icons/user.png"
              alt="icon"
              className="absolute left-[20px] top-[19px] w-[24px]"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              className={`w-full pl-[48px] pr-[26px] py-[18px] border rounded-full focus:outline-none focus:shadow-outline ${
                touched.email || errors.email ? "red-placeholder" : ""
              }`}
              placeholder={
                touched.email || errors.email ? errors.email : "Email Address"
              }
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <img
              src="/icons/mail.png"
              alt="icon"
              className="absolute left-[20px] top-[19px] w-[24px]"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              className={`w-full pl-[48px] pr-[26px] py-[18px] border rounded-full focus:outline-none focus:shadow-outline ${
                touched.password || errors.password ? "red-placeholder" : ""
              }`}
              placeholder={
                touched.password || errors.password
                  ? errors.password
                  : "Password"
              }
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <img
              src="/icons/lock.png"
              alt="icon"
              className="absolute left-[20px] top-[19px] w-[24px]"
            />
          </div>

          <div className="relative">
            <input
              type="password"
              name="confirmPassword"
              className={`w-full pl-[48px] pr-[26px] py-[18px] border rounded-full focus:outline-none focus:shadow-outline ${
                touched.confirmPassword || errors.confirmPassword
                  ? "red-placeholder"
                  : ""
              }
              
              ${
                errors.confirmPassword == "Passwords must match"
                  ? " border-red-500"
                  : ""
              }
              `}
              placeholder={
                touched.confirmPassword || errors.confirmPassword
                  ? errors.confirmPassword
                  : "Check your password"
              }
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <img
              src="/icons/lock.png"
              alt="icon"
              className="absolute left-[20px] top-[19px] w-[24px]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#00CE3A] text-white px-[26px] py-[18px] rounded-full mt-6 focus:outline-none focus:shadow-outline"
        >
          {loader ? <RequestLoader /> : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterRightSide;
