import React from "react";
import ImageShowcase from "../components/MyPage/ImageShowcase";
import ApplicationForm from "../components/MyPage/JobPage/ApplicationForm";
import EventInfo from "../components/MyPage/Event/EventInfo";
import ProductInfo from "../components/MyPage/Event/ProductInfo";
import Day from "../components/MyPage/Event/Day";

function EventDetails() {
  const images = [
    "/images/image_catalogue.png",
    "/images/image_catalogue.png",
    "/images/image_catalogue.png",
    "/images/image_catalogue.png",
  ];

  return (
    <div className="py-6 lg:py-12">
      <h1 className="text-center text-[26px] md:text-[32px] font-semibold mb-6 md:mb-12 px-10 lg:px-4">
        [신년일출] 전라도 별미와 함께하는 여수 향일암 일출, 순천 전주 1박2일
      </h1>
      <div className="w-full lg:px-12 flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 mr-2">
          <div className="rounded-[30px] pt-3 lg:py-3 custom-shadow-right-bottom">
            <ImageShowcase images={images} />
          </div>
          <EventInfo />
          <ProductInfo />
          <Day />
        </div>
        <ApplicationForm title="Event application" type="event" />
      </div>
    </div>
  );
}

export default EventDetails;
