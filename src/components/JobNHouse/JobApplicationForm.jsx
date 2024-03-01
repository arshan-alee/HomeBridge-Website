import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../Shared/Input";
import Select from "../Shared/Select";
import Textarea from "../Shared/Textarea";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { PostData } from "../../axios/NetworkCalls";
import { jobApplicationSchema } from "../../utils/validation-schema";
import RequestLoader from "../Shared/RequestLoader";
import { useStateContext } from "../../context/StateContext";
import { countryNames } from "../../utils/countiresList";

function JobApplicationForm({ formData, isFilled }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setPreviousRoute } = useStateContext();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: formData?.name || "",
    gender: formData?.gender || "",
    nationality: formData?.nationality || "",
    phoneNumber: formData?.phoneNumber || "",
    email: formData?.email || "",
    message: formData?.message || "",
  };

  const JobHouseApplication = async (values, actions) => {
    try {
      setLoading(true);
      const Info = localStorage.getItem("Info");
      const updatedData = {
        ...values,
        job: id,
        user: JSON.parse(Info)?.userId,
      };
      const response = await PostData(
        "/api/job_house_application/createApplication",
        updatedData
      );

      if (response?.status) {
        toast.success(response?.message);
        setLoading(false);
        actions.resetForm();
      } else {
        toast.error(response);
        if (response == "You're not logged in. Please login first") {
          setPreviousRoute("go_back");
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
    await JobHouseApplication(values, actions);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: jobApplicationSchema,
      onSubmit,
    });

  return (
    <div className="w-full lg:w-1/3 md:px-6">
      <form
        onSubmit={handleSubmit}
        className="mx-2 pb-4 text-xl custom-shadow-right-bottom px-4 lg:px-8 rounded-xl lg:rounded-[30px] bg-white"
      >
        <h3 className="font-semibold text-[16px] py-3">Job application</h3>
        <div className="py-1 w-full">
          <Input
            placeholder="Name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={(touched.name || errors.name) && errors.name}
          />
        </div>

        <div className="py-1 w-full">
          <Select
            name="gender"
            options={["Male", "Female"]}
            value={values.gender} // Formik state value
            onChange={handleChange} // Formik handleChange function
            placeholder="Select Gender"
            error={(touched.gender || errors.gender) && errors.gender}
          />
        </div>

        <div className="py-1 w-full">
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

        <div className="py-1 w-full">
          <Input
            placeholder="Phone number"
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
        <div className="py-1 w-full">
          <Input
            placeholder="E-mail"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={(touched.email || errors.email) && errors.email}
          />
        </div>
        <div className="w-full mb-4">
          <Textarea
            placeholder="Message"
            rows={15}
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={(touched.message || errors.message) && errors.message}
          />
        </div>
        {isFilled ? null : (
          <>
            <div className="flex justify-center mt-4 mb-2">
              <button
                type="submit"
                className="w-full bg-[#00CE3A] text-white px-8 py-2 rounded-3xl text-[16px]"
              >
                {loading ? <RequestLoader /> : "To apply"}
              </button>
            </div>
            <p className="text-center text-[10px] font-medium mb-2">
              The person in charge will contact you after checking.
            </p>
          </>
        )}
      </form>
    </div>
  );
}

export default JobApplicationForm;
