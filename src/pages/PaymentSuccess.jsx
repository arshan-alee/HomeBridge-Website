import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import { GetSingleData } from "../axios/NetworkCalls";
import { convertDate } from "../utils/helper";
import RequestLoader from "../components/Shared/RequestLoader";

function PaymentSuccess() {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  const { eventId } = useParams();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await GetSingleData(`/api/getSingleEvent/${eventId}`);

      if (response.success) {
        setData(response?.data);
      } else {
        setError(response?.message);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-[90vh] flex justify-center items-center">
        <RequestLoader size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-[90vh] flex justify-center items-center">
        <h1 className="text-2xl">{error}</h1>
      </div>
    );
  }

  return (
    <div className="lg:mx-56 my-8 lg:my-16">
      <h1 className="text-[28px] lg:text-[36px] text-center font-semibold mb-8 text-[#00CE3A] whitespace-pre-line">
        결제가 정상적으로 완료 {!isLargeScreen && <br />}
        <span className="text-[#2B2B2B]"> 되었습니다.</span>
      </h1>
      <div className="w-full my-8 custom-shadow-right-bottom lg:rounded-xl overflow-hidden">
        <h1 className="text-[24px] font-bold bg-[#00CE3A] text-white pl-4 lg:pl-12 py-3">
          상품 정보
        </h1>
        <h1 className="lg:hidden text-[24px] font-semibold p-6">
          {data?.productIntroduction}
        </h1>
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between lg:p-12">
          <div className="w-full lg:w-1/2 p-4">
            <h1 className="hidden lg:block text-[24px] font-semibold">
              {data?.productIntroduction}
            </h1>
            <div className="flex flex-col flex-wrap mt-4">
              <div className="w-full flex my-2 px-6 lg:px-0">
                <p className="w-1/2 text-[#00CE3A] text-left">Departure Date</p>
                <p className="w-1/2 text-left">
                  {convertDate(data?.departure)}
                </p>
              </div>
              <div className="w-full flex my-2 px-6 lg:px-0">
                <p className="w-1/2 text-[#00CE3A] text-left">Arrival Date</p>
                <p className="w-1/2 text-left">{convertDate(data?.arrival)}</p>
              </div>
              <div className="w-full flex my-2 px-6 lg:px-0">
                <p className="w-1/2 text-[#00CE3A] text-left">Price</p>
                <p className="w-1/2 text-left">{data?.price}</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[300px] flex items-center justify-center">
            <img
              src={data?.eventImages[0]}
              alt="Event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
