import React, { useEffect, useState } from "react";
import Input from "../components/Shared/Input";
import Precautions from "../components/Refund/Precautions";
import { GetSingleData, PostData } from "../axios/NetworkCalls";
import { useNavigate, useParams } from "react-router-dom";
import RequestLoader from "../components/Shared/RequestLoader";
import {
  convertDate,
  formatDate,
  calculateRefundAmount,
} from "../utils/helper";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { refundSchema } from "../utils/validation-schema";

function RefundPage() {
  const { applicationId } = useParams();
  const { setPreviousRoute } = useStateContext();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [refundAmount, setRefundAmount] = useState("0KRW");
  const [condition, setCondition] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    accountNumber: "",
    accountName: "",
    bankName: "",
  };

  const [precautions, setPrecautions] = useState(false);
  const purchaseInfo = [
    { label: "Payment date", value: formatDate(data?.applicationDate) },
    {
      label: "Product",
      value: data?.event?.productIntroduction?.slice(0, 20) + "...",
    },
    {
      label: "Date",
      value:
        formatDate(data?.event?.arrival) +
        "~" +
        formatDate(data?.event?.departure),
    },
    {
      label: "Payment method",
      value: data?.paymentMethod + " (Kukmin Card)",
    },
    { label: "Payment amount", value: data?.event?.price + " KRW" },
  ];

  const refundInfo = [
    { label: "Application date", value: convertDate(data?.applicationDate) },
    { label: "Refund amount", value: `${refundAmount}` + " KRW" },
  ];

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data?.event?.departure && data?.event?.price) {
      const refundAmount = calculateRefundAmount(
        data.event.departure,
        data.event.price
      );
      setRefundAmount(refundAmount); // Assuming you have a state [refundAmount, setRefundAmount] to store the calculated refund amount
    }
  }, [data]);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await GetSingleData(
        `/api/getSingleApplication/${applicationId}`
      );

      console.log("response->");
      console.log(response);

      if (response.success) {
        setData(response?.data);
      } else {
        setError(response?.message);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const RefundApplication = async (values, actions) => {
    try {
      // setLoader(true);
      const { accountNumber, accountName, bankName } = values;
      const Info = localStorage.getItem("Info");
      const body = {
        accountNumber,
        accountName,
        bankName,
        refundAmount,
        user: JSON.parse(Info)?.userId,
        eventApplication: data?._id.toString(),
        event: data?.event?._id.toString(),
      };
      console.log("body: ", body);

      const response = await PostData(`/api/refund/createRefundRequest`, body);

      console.log("response: ", response);

      if (response?.status) {
        toast.success(response?.message);
        setLoader(false);
        actions.resetForm();
        // onClick={() => setCondition(true)}
        setCondition(true);
      } else {
        toast.error(response);
        if (response == "You're not logged in. Please login first") {
          setPreviousRoute("go_back");
          navigate("/auth/login");
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);

      setLoader(true);
    } finally {
      setLoader(false);
    }
  };

  const onSubmit = async (values, actions) => {
    await RefundApplication(values, actions);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: refundSchema,
      onSubmit,
    });

  return (
    <div className={`${!precautions && "mx-4"} my-6 lg:my-22`}>
      {condition ? (
        <div className="w-full h-screen flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-[16px]">
            Your refund application has been completed.
          </h2>
          <p className="text-[14px] mb-8">
            (The refund may be completed 30 minutes to 1 hour depending on the
            payment method.)
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#00CE3A] text-white rounded-[20px] px-8 py-4 btn-shadow"
          >
            Move main page
          </button>
        </div>
      ) : precautions ? (
        <Precautions />
      ) : (
        <>
          <h2 className="mx-2 md:mx-16 lg:mx-72 text-[16px] font-bold mb-6 hidden lg:block">
            Refund application
          </h2>

          {loading ? (
            <div className="w-full h-[60vh] flex items-center justify-center">
              <RequestLoader size="large" />
            </div>
          ) : (
            <>
              {error ? (
                <div className="text-black text-center ">{error}</div>
              ) : (
                <div className="relative mx-2 md:mx-16 lg:mx-72 pb-4 text-xl custom-shadow-right-bottom p-6 md:p-12 rounded-lg mb-8">
                  <div className="border-b pb-2">
                    <h2 className="mb-2 text-[#2C406E] text-[15px]">
                      Purchase information
                    </h2>
                    {purchaseInfo.map((item, index) => (
                      <div className="flex justify-between">
                        <h2 className="text-[#6A6A6A] text-[12px]">
                          {item.label}
                        </h2>
                        <p className="text-[#181A1F] text-[12px]">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="border-b py-2 mt-4">
                    <h2 className="mb-2 text-[#2C406E] text-[15px]">
                      Refund information
                    </h2>
                    {refundInfo.map((item, index) => (
                      <div className="flex justify-between">
                        <h2 className="text-[#6A6A6A] text-[12px]">
                          {item.label}
                        </h2>
                        <p className="text-[#181A1F] text-[12px]">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col md:flex-row mt-4"
                  >
                    <div className="lg:hidden flex justify-end">
                      <div
                        className="px-6 text-[12px] cursor-pointer border border-[#B2B2B2] text-[#B2B2B2] rounded-[10px]"
                        onClick={() => setPrecautions(true)}
                      >
                        Refund Regulations
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 py-2">
                      <h2 className="mb-2 text-[#2C406E] text-[15px]">
                        Refund account
                      </h2>
                      <div className="relative space-y-4">
                        <Input
                          placeholder="Bank account number"
                          name="accountNumber"
                          value={values.accountNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            (touched.accountNumber || errors.accountNumber) &&
                            errors.accountNumber
                          }
                        />
                        <Input
                          placeholder="Account name"
                          name="accountName"
                          value={values.accountName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            (touched.accountName || errors.accountName) &&
                            errors.accountName
                          }
                        />
                        <Input
                          placeholder="Bank"
                          name="bankName"
                          value={values.bankName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            (touched.bankName || errors.bankName) &&
                            errors.bankName
                          }
                        />
                      </div>
                    </div>
                    <div className="w-full flex items-center md:items-end justify-center md:justify-end">
                      <button
                        type="submit"
                        className="bg-[#00CE3A] text-white text-[16px] px-6 py-2 rounded-[20px] btn-shadow"
                      >
                        {loader ? <RequestLoader /> : "Refund request"}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </>
          )}
          <div className="hidden lg:flex">
            <Precautions />
          </div>
        </>
      )}
    </div>
  );
}

export default RefundPage;
