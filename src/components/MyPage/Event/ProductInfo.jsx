import React from "react";

function ProductInfo({ productInfo }) {
  return (
    <div className="w-full my-8 custom-shadow-right-bottom lg:rounded-[30px] overflow-hidden">
      <h1 className="text-[24px] font-bold bg-[#00CE3A] text-white pl-6 lg:pl-12 py-3">
        Product information
      </h1>
      <div
        className="flex flex-wrap p-6 lg:py-8 lg:px-12 break-words"
        dangerouslySetInnerHTML={{ __html: productInfo }}
      />
    </div>
  );
}

export default ProductInfo;
