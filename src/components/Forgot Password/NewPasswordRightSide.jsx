import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostData } from "../../axios/NetworkCalls";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordSchema } from "../../utils/validation-schema";
import RequestLoader from "../Shared/RequestLoader";

function NewPasswordRightSide() {
  const navigate = useNavigate();
  const { token } = useParams();

  const [loading, setLoading] = useState(false);

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const ResetPass = async (values, actions) => {
    try {
      setLoading(true);
      const { password } = values;
      const body = {
        token,
        newPassword: password,
      };
      // console.log("body: ", body);
      const response = await PostData("/api/user/resetPassword", body);

      if (response?.status) {
        toast.success(response?.message);
        setLoading(false);
        actions.resetForm();
        navigate("/auth/login");
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
    await ResetPass(values, actions);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: resetPasswordSchema,
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
        <h2 className="text-[26px] mb-1 font-bold">This is the last step!</h2>
        <p className="text-[18px] text-[#333333] mb-6 font-[400]">
          Please create a new password
        </p>
        <div className="space-y-4">
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
              className="absolute left-[20px] top-[19px]"
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
              className="absolute left-[20px] top-[19px]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#00CE3A] text-white px-[26px] py-[18px] rounded-full mt-6 focus:outline-none focus:shadow-outline"
        >
          {loading ? <RequestLoader /> : "Change Password"}
        </button>
      </form>
    </div>
  );
}

export default NewPasswordRightSide;
