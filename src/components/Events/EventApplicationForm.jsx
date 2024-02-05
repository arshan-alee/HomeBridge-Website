import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../Shared/Input";
import Textarea from "../Shared/Textarea";
import { PostData } from "../../axios/NetworkCalls";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { eventApplicationSchema } from "../../utils/validation-schema";
import RequestLoader from "../Shared/RequestLoader";

function EventApplicationForm({ title, type }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  };

  const EventApplication = async (values, actions) => {
    try {
      setLoading(true);

      const response = await PostData(
        `/api/createEventApplication/${id}`,
        values
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
    await EventApplication(values, actions);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: eventApplicationSchema,
      onSubmit,
    });

  return (
    <div className="w-full lg:w-1/3 md:px-6">
      <form
        onSubmit={handleSubmit}
        className="mx-2 pb-4 text-xl custom-shadow-right-bottom px-4 lg:px-8 rounded-xl lg:rounded-[30px] bg-white"
      >
        <h3 className="font-semibold text-[16px] py-3">Event application</h3>
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
            rows={10}
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={(touched.message || errors.message) && errors.message}
          />
        </div>

        <div className="flex justify-between border-t pt-4">
          <p className="text-[12px] font-medium">Price</p>
          <p className="text-[24px] font-semibold text-[#00CE3A]">199,000KRW</p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-[#00CE3A] text-white px-8 py-2 rounded-3xl text-[16px] w-full"
          >
            {loading ? <RequestLoader /> : " Payment"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EventApplicationForm;
