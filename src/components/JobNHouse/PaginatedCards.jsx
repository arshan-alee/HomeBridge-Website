import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePagination from "../../utils/usePagination";
import Pagination from "../Shared/Pagination";

const data = [
  {
    id: 1,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 2,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 3,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 4,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 5,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 6,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 7,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 8,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 9,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 10,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 11,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 12,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 1,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 2,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 3,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 4,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 5,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 6,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 7,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 8,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 9,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 10,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 11,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 12,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 1,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 2,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 3,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 4,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 5,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 6,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 7,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 8,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 9,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 10,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 11,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 12,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 1,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 2,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 3,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 4,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 5,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 6,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 7,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 8,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 9,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 10,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 11,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 12,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 1,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 2,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 3,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 4,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 5,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 6,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 7,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 8,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 9,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 10,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 11,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 12,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 1,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 2,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 3,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 4,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 5,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 6,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 7,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 8,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 9,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 10,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 11,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 12,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 1,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 2,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 3,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 4,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 5,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 6,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 7,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 8,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 9,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 10,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 11,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 12,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 1,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 2,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 3,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 4,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 5,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 6,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 7,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 8,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 9,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 10,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 11,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 12,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 1,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 2,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 3,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 4,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 5,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 6,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 7,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 8,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 9,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 10,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 11,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
  {
    id: 12,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
];

const PaginatedCards = () => {
  const paginate = usePagination(1, 8);
  const navigate = useNavigate();

  const { currentPage, totalPages, visibleItems, goToPage, pageNumbersToShow } =
    paginate(data);

  return (
    <div className="mx-12 md:mx-14 lg:mx-28 my-8">
      <h1 className="hidden lg:block text-[34px] font-extrabold my-12">
        Job & Accommodation
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 rounded-2xl">
        {visibleItems.map((card) => (
          <div
            key={card.id}
            className="p-4 bg-white card-shadow rounded-[32px] cursor-pointer mb-2"
            style={{
              background:
                "linear-gradient(161.47deg, #E7E9F3 -11.63%, #FFFFFF 91.02%)",
            }}
            onClick={() => navigate("/job_house/123")}
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-[200px] object-cover mb-2 rounded-[10px]"
            />
            <h3 className="text-[20px] font-semibold mb-2 mt-4 leading-6 font-montserrat">
              {card.title}
            </h3>
            <p className="text-[#3A544F] text-[12px] font-normal mb-2">
              {card.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={goToPage}
        pageNumbersToShow={pageNumbersToShow}
      />
    </div>
  );
};

export default PaginatedCards;
