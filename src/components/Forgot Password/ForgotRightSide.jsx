import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { forgotPasswordSchema } from "../../utils/validation-schema";
import RequestLoader from "../Shared/RequestLoader";
import { PostData } from "../../axios/NetworkCalls";

function ForgotRightSide() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    userName: "",
  };

  const ForgotPass = async (values, actions) => {
    try {
      setLoading(true);

      const response = await PostData("/api/user/forgotPassword", values);

      if (response?.status) {
        toast.success(response?.message);
        setLoading(false);
        actions.resetForm();
      } else {
        toast.error(response);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setLoading(true);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (values, actions) => {
    await ForgotPass(values, actions);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: forgotPasswordSchema,
      onSubmit,
    });

  return (
    <div
      className="flex items-center justify-center w-full md:w-[40%]"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 md:p-8 rounded w-96"
      >
        <h2 className="text-[26px] mb-2 font-bold">
          Did you forget <br /> your password?
        </h2>
        <p className="text-[#333333] text-[18px] mb-6 font-[400]">
          Please enter the information <br />
          you entered when you signed up.
        </p>
        <div className="space-y-4">
          <div className="relative">
            <input
              type="email"
              name="email"
              className={`w-full pl-[48px] pr-[26px] py-[18px] border rounded-full focus:outline-none focus:shadow-outline ${
                touched.email && errors.email ? "red-placeholder" : ""
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
              className="absolute left-[20px] top-[19px]"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="userName"
              className={`w-full pl-[48px] pr-[26px] py-[18px] border rounded-full focus:outline-none focus:shadow-outline ${
                touched.userName && errors.userName ? "red-placeholder" : ""
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
              className="absolute left-[20px] top-[19px]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#00CE3A] text-white px-[26px] py-[18px] rounded-full mt-6 focus:outline-none focus:shadow-outline"
        >
          {loading ? <RequestLoader /> : "Check"}
        </button>
      </form>
    </div>
  );
}

export default ForgotRightSide;
