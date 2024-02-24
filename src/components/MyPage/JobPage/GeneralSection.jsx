import React from "react";
import ImageShowcase from "../ImageShowcase";
import InfoTable from "../InfoTable";
import ContactInfo from "../ContactInfo";

function GeneralSection({ data }) {
  const images = [
    "/images/image_catalogue.png",
    "/images/image_catalogue.png",
    "/images/image_catalogue.png",
    "/images/image_catalogue.png",
  ];

  return (
    <div className="md:mx-24 lg:mx-36 my-12 md:my-24">
      {data?.isAccomodated ? (
        <>
          <h1 className="text-[32px] font-semibold text-center mb-4 md:mb-8 px-6 lg:px-12">
            {data?.accomodationName}
          </h1>
          <div className="lg:bg-white lg:rounded-[30px] custom-shadow-right-bottom">
            <ImageShowcase
              images={
                data.jobHouseimages.length == 0 ? images : data.jobHouseimages
              }
              type="job"
            />
          </div>
          <InfoTable data={data} />
          <ContactInfo data={data} />
        </>
      ) : (
        <p className="text-3xl font-semibold text-center">
          The current accommodation is undecided.
        </p>
      )}
    </div>
  );
}

export default GeneralSection;
