import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../Shared/Input";
import Textarea from "../Shared/Textarea";
import { PostData } from "../../axios/NetworkCalls";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { eventApplicationSchema } from "../../utils/validation-schema";
import RequestLoader from "../Shared/RequestLoader";
import { useStateContext } from "../../context/StateContext";
// import { PaymentWidgetInstance, loadPaymentWidget, ANONYMOUS } from "@tosspayments/payment-widget-sdk";
import {
  PaymentWidgetInstance,
  loadPaymentWidget,
  ANONYMOUS,
} from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import PaymentModal from "../Modal/PaymentModal";

function EventApplicationForm({ formData, isFilled, price }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setPreviousRoute } = useStateContext();
  const [loading, setLoading] = useState(false);
  const [askModalShow, setAskModalShow] = useState(false);

  const [paymentInitialized, setPaymentInitialized] = useState(false);
  const [widgetInstance, setWidgetInstance] = useState(null);
  const clientKey = "test_ck_26DlbXAaV0O65WmpvGPn3qY50Q9R";

  const initialValues = {
    name: formData?.name || "",
    phoneNumber: formData?.phoneNumber || "",
    email: formData?.email || "",
    message: formData?.message || "",
  };

  const EventApplication = async (values, actions) => {
    try {
      setLoading(true);

      const response = await PostData(
        `/api/createEventApplication/${id}`,
        values
      );

      console.log("response: ", response);

      if (response?.status) {
        toast.success(response?.message);
        setLoading(false);
        actions.resetForm();
        navigate(`/payment/success/${id}`);
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

  // const onSubmit = async (values, actions) => {
  //   if (isFilled) {
  //     // reserve cancellation:
  //     navigate(`/refund/${formData?._id}`);
  //   } else {
  //     await EventApplication(values, actions);
  //   }
  // };

  const onSubmit = async (values, actions) => {
    if (isFilled) {
      navigate(`/refund/${formData?._id}`);
    } else {
      // await EventApplication(values, actions);
      // After a successful event application, set paymentInitialized to true to load the payment widget
      // setPaymentInitialized(true);
      setAskModalShow(true);

      // Here, instead of immediately navigating away, wait for payment to be completed
      // handlePaymentClick();
    }
  };

  const handlePaymentClick = async () => {
    if (widgetInstance) {
      try {
        await widgetInstance.requestPayment({
          orderId: nanoid(),
          orderName: "Your Order Name",
          customerName: "Customer's Name",
          customerEmail: "customer@example.com",
          customerMobilePhone: "01012345678",
          amount: price,
          successUrl: `${window.location.origin}/payment/success`,
          failUrl: `${window.location.origin}/payment/fail`,
        });
      } catch (error) {
        console.error("Payment request error:", error);
      }
    }
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
            isDisable={isFilled}
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
            isDisable={isFilled}
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
            isDisable={isFilled}
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
            isDisable={isFilled}
            onChange={handleChange}
            onBlur={handleBlur}
            error={(touched.message || errors.message) && errors.message}
          />
        </div>

        <div className="flex justify-between border-t pt-4">
          <p className="text-[12px] font-medium">Price</p>
          <p className="text-[24px] font-semibold text-[#00CE3A]">
            {price} KRW
          </p>
        </div>
        {isFilled ? (
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-[#00CE3A] text-white px-8 py-2 rounded-3xl text-[16px] w-full"
            >
              {loading ? <RequestLoader /> : " Reservation cancellation"}
            </button>
          </div>
        ) : (
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-[#00CE3A] text-white px-8 py-2 rounded-3xl text-[16px] w-full"
            >
              {loading ? <RequestLoader /> : " Payment"}
            </button>
          </div>
        )}
      </form>

      {askModalShow && (
        <PaymentModal
          setAskModalShow={setAskModalShow}
          price={price}
          clientKey={clientKey}
        />
      )}
    </div>
  );
}

export default EventApplicationForm;
