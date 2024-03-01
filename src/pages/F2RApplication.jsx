import React, { useEffect, useState } from "react";
import Input from "../components/Shared/Input";
import Textarea from "../components/Shared/Textarea";
import Select from "../components/Shared/Select";
import toast from "react-hot-toast";
import { PostData } from "../axios/NetworkCalls";
import { useFormik } from "formik";
import { f2RApplicationSchema } from "../utils/validation-schema";
import { useNavigate } from "react-router-dom";
import RequestLoader from "../components/Shared/RequestLoader";
import { countryNames } from "../utils/countiresList";

function F2RApplication() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    gender: "",
    nationality: "",
    address: "",
    phoneNumber: "",
    email: "",
    message: "",
  };

  const F2RApplication = async (values, actions) => {
    try {
      setLoading(true);
      const Info = localStorage.getItem("Info");
      const updatedData = {
        ...values,

        user: JSON.parse(Info)?.userId,
      };
      const response = await PostData(
        "/api/f_2_r/createApplication",
        updatedData
      );

      if (response?.status) {
        toast.success(response?.message);
        setLoading(false);
        actions.resetForm();
      } else {
        toast.error(response);
        if (response == "You're not logged in. Please login first") {
          navigate("/auth/login");
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setLoading(true);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (values, actions) => {
    await F2RApplication(values, actions);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: f2RApplicationSchema,
      onSubmit,
    });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-12 md:my-24">
      <h2 className="px-36 text-[38px] font-bold mb-16 hidden lg:block">
        F-2-R Application
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mx-2 md:mx-16 lg:mx-72 pb-4 text-xl custom-shadow-right-bottom px-4 rounded-2xl"
      >
        <h3 className="font-600 text-[16px] font-bold lg:font-normal pt-6 pb-4">
          F-2-R Application
        </h3>
        <div className="py-2 w-full">
          <Input
            placeholder="Jason Kim"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={(touched.name || errors.name) && errors.name}
          />
        </div>
        <div className="py-2 flex flex-col md:flex-row w-full gap-2">
          <Select
            name="gender"
            options={["Male", "Female"]}
            value={values.gender} // Formik state value
            onChange={handleChange} // Formik handleChange function
            placeholder="Gender"
            error={(touched.gender || errors.gender) && errors.gender}
          />
          <Select
            name="nationality"
            options={countryNames}
            value={values.nationality} // Formik state value
            onChange={handleChange} // Formik handleChange function
            placeholder="Country"
            error={
              (touched.nationality || errors.nationality) && errors.nationality
            }
          />
        </div>
        <div className="py-2 w-full">
          <Input
            placeholder="seoul"
            type="text"
            name="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            error={(touched.address || errors.address) && errors.address}
          />
        </div>
        <div className="py-2 w-full">
          <Input
            placeholder="010-1111-1111"
            type="tel"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              (touched.phoneNumber || errors.phoneNumber) && errors.phoneNumber
            }
          />
        </div>
        <div className="py-2 w-full">
          <Input
            placeholder="test@gmail.com"
            type="mail"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={(touched.email || errors.email) && errors.email}
          />
        </div>
        <div className="w-full mb-4">
          <Textarea
            placeholder="How much is the f-2-r visa ap........."
            rows={8}
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={(touched.message || errors.message) && errors.message}
          />
        </div>
        <div className="py-2 w-full mb-1 text-center">
          <button
            type="submit"
            className="bg-[#00CE3A] text-white px-8 py-2 rounded-3xl"
          >
            {loading ? <RequestLoader /> : "To apply"}
          </button>
        </div>
        <p className="text-center text-[12px] text-[#000000]">
          The person in charge will contact you after checking.
        </p>
      </form>
    </div>
  );
}

export default F2RApplication;
