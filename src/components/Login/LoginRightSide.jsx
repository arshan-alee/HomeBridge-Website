import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";
import { useFormik } from "formik";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { loginSchema } from "../../utils/validation-schema";
import toast from "react-hot-toast";
import RequestLoader from "../Shared/RequestLoader";

const LoginRightSide = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const { setIsLoggedIn } = useStateContext();

  const initialValues = {
    email: "",
    password: "",
  };

  const LoginUser = async (values, actions) => {
    setLoader(true);
    try {
      const response = await axios.post(`${baseUrl}/api/user/login`, values);
      if (response?.data?.status) {
        localStorage.setItem("Info", JSON.stringify(response.data.user));
        toast.success("Login Successfull");
        // setIsLoggedIn(true);
        window.dispatchEvent(new CustomEvent("login"));
        navigate(-1);
        // navigate(previousRoute);
      } else if (!response?.data?.status) {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.message);
      setLoader(true);
    } finally {
      setLoader(false);
    }
  };

  const onSubmit = async (values, actions) => {
    await LoginUser(values, actions);
    // console.log("submit called", values);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
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
        <h2 className="text-[26px] mb-1 font-bold">Hello Again!</h2>
        <p className="text-[#333333] text-[18px] mb-6 font-[400]">
          Welcome Back
        </p>
        <div>
          <p
            className="text-right text-[12px] text-[#00CE3A] cursor-pointer"
            onClick={() => navigate("/auth/register")}
          >
            Don't you have an ID?
          </p>
          <div className="relative mb-3">
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

          <div className="relative mb-3">
            <input
              type="password"
              name="password"
              className={`w-full pl-[48px] pr-[26px] py-[18px] border rounded-full focus:outline-none focus:shadow-outline ${
                touched.password && errors.password ? "red-placeholder" : ""
              }`}
              placeholder={
                touched.password || errors.password
                  ? errors.password
                  : "Email Address"
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
        </div>
        <button
          type="submit"
          className="w-full bg-[#00CE3A] text-white px-[26px] py-[18px] rounded-full mt-6 focus:outline-none focus:shadow-outline"
        >
          {loader ? <RequestLoader /> : "Login"}
        </button>
        <Link to="/auth/forgot-password">
          <p className="text-center text-[14px] py-2 cursor-pointer">
            Forgot Password
          </p>
        </Link>
      </form>
    </div>
  );
};

export default LoginRightSide;

// const handleSubmit = async (event) => {
//   event.preventDefault();
//   setLoader(true);
//   setError("");
//   try {
//     const response = await axios.post(`${baseUrl}/api/user/adminLogin`, user);
//     if (response?.data?.status) {
//       localStorage.setItem("info", JSON.stringify(response.data.user));
//       navigate("/admin/dashboard");
//     } else if (!response?.data?.status) {
//       setError(response?.data?.message);

//       setTimeout(() => {
//         setError("");
//       }, 5000);
//     }
//   } catch (error) {
//     setLoader(true);
//     setError(error.message);

//     setTimeout(() => {
//       setError("");
//     }, 5000);
//   } finally {
//     setLoader(false);
//   }
// };

// <button
//           className="w-full bg-[#111C44] text-white py-3 rounded-full mt-6 focus:outline-none focus:shadow-outline"
//           type="submit"
//           disabled={loader ? true : false}
//         >
//           {loader ? <RequestLoader /> : "Login"}
//         </button>
//         {Error && (
//           <div className="text-[#E12F2F] font-medium text-center text-sm mt-3">
//             {Error}
//           </div>
//         )}
