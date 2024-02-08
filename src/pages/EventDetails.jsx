import React, { useEffect, useState } from "react";
import ImageShowcase from "../components/MyPage/ImageShowcase";
import EventInfo from "../components/MyPage/Event/EventInfo";
import ProductInfo from "../components/MyPage/Event/ProductInfo";
import Day from "../components/MyPage/Event/Day";
import { GetSingleData } from "../axios/NetworkCalls";
import { useParams } from "react-router-dom";
import RequestLoader from "../components/Shared/RequestLoader";
import EventApplicationForm from "../components/Events/EventApplicationForm";

const images = [
  "/images/image_catalogue.png",
  "/images/image_catalogue.png",
  "/images/image_catalogue.png",
  "/images/image_catalogue.png",
];

function EventDetails() {
  const { id } = useParams();

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
      const response = await GetSingleData(`/api/getSingleEvent/${id}`);

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

  // ==========

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
    <>
      <div className="py-6 lg:py-12">
        <h1 className="text-center text-[26px] md:text-[32px] font-semibold mb-6 md:mb-12 px-10 lg:px-4">
          {data?.productIntroduction}
        </h1>
        <div className="w-full lg:px-12 flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/3 mr-2">
            <div className="rounded-[30px] pt-3 lg:py-3 custom-shadow-right-bottom">
              <ImageShowcase images={data?.eventImages} />
            </div>

            <EventInfo
              data={{
                departure: data?.departure,
                arrival: data?.arrival,
                traffic: data?.traffic,
                price: data?.price,
              }}
            />

            {data?.productInformation && (
              <ProductInfo productInfo={data?.productInformation} />
            )}
            {data?.schedules &&
              data?.schedules.length > 0 &&
              data?.schedules.map((schedule, index) => (
                <Day day={index} schedule={schedule} />
              ))}
          </div>
          <EventApplicationForm price={data?.price} />
        </div>
      </div>
    </>
  );
}

export default EventDetails;
