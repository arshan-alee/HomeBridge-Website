import React from "react";

const InfoTable = ({ data }) => {
  return (
    <div className="w-full mt-4 lg:mt-8 custom-shadow-right-bottom p-6 md:p-12 rounded-2xl bg-white">
      {data?.generationInformation && (
        <div className="mb-6">
          <h1 className="text-[22px] font-normal mb-2">General Information</h1>

          <div
            className="flex flex-wrap  break-words text-[#00000080]"
            dangerouslySetInnerHTML={{ __html: data?.generationInformation }}
          />
        </div>
      )}

      {data?.explanation && (
        <div className="my-6 lg:mb-12">
          <h1 className="text-[22px] font-normal mb-2">Explanation</h1>

          <p
            className="flex flex-wrap  break-words text-[#00000080]"
            dangerouslySetInnerHTML={{ __html: data?.explanation }}
          />
        </div>
      )}

      {data?.externalFeatures && (
        <div>
          <h1 className="text-[22px] font-normal mb-2">External Features</h1>

          <div
            className="flex flex-wrap  break-words text-[#00000080]"
            dangerouslySetInnerHTML={{ __html: data?.externalFeatures }}
          />
        </div>
      )}
    </div>
  );
};

export default InfoTable;
