import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePagination from "../../utils/usePagination";
import Pagination from "../Shared/Pagination";
import { GetAllData } from "../../axios/NetworkCalls";
import RequestLoader from "../Shared/RequestLoader";

const dummyData = [
  {
    id: 1,
    title: "Store management at a burger joint in Itaewon.",
    subtitle: "Yongsan-gu, Seoul",
    imageUrl: "/images/jobnhouse_card.png",
  },
];
// const data = [
//   {
//     id: 1,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 2,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 3,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 4,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 5,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 6,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 7,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 8,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 9,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 10,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 11,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 12,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 1,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 2,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 3,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 4,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 5,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 6,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 7,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 8,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 9,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 10,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 11,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 12,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 1,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 2,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 3,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 4,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 5,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 6,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 7,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 8,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 9,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 10,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 11,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 12,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 1,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 2,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 3,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 4,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 5,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 6,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 7,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 8,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 9,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 10,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 11,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 12,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 1,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 2,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 3,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 4,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 5,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 6,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 7,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 8,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 9,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 10,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 11,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 12,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 1,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 2,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 3,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 4,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 5,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 6,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 7,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 8,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 9,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 10,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 11,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 12,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 1,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 2,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 3,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 4,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 5,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 6,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 7,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 8,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 9,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 10,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 11,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 12,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 1,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 2,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 3,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 4,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 5,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 6,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 7,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 8,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 9,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 10,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 11,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 12,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 1,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 2,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 3,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 4,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 5,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 6,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 7,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 8,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 9,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 10,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 11,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
//   {
//     id: 12,
//     title: "Store management at a burger joint in Itaewon.",
//     subtitle: "Yongsan-gu, Seoul",
//     imageUrl: "/images/jobnhouse_card.png",
//   },
// ];

const PaginatedCards = () => {
  // const paginate = usePagination(1, 8);
  // const navigate = useNavigate();

  // const { currentPage, totalPages, visibleItems, goToPage, pageNumbersToShow } =
  //   paginate(data);

  const paginate = usePagination(1, 8);
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { currentPage, totalPages, goToPage, pageNumbersToShow } = paginate(
    data,
    totalData
  );

  console.log("data--------------");
  console.log(data);

  console.log("currentPage");
  console.log(currentPage, "totalPages", totalPages);

  useEffect(() => {
    getData();
  }, [currentPage]);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await GetAllData(
        `/api/job_house/allWebsiteAnnouncements?page=${currentPage}&jobHousePerPage=${8}`
      );

      console.log("response->");
      console.log(response);

      if (response.success) {
        setData(response?.data?.jobHouse);
        setTotalData(response?.data?.totalJobHouse);
      } else {
        setError(response.message);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-12 md:mx-14 lg:mx-28 my-8">
      <h1 className="hidden lg:block text-[34px] font-extrabold my-12">
        Job & Accommodation
      </h1>

      {loading ? (
        <div className="w-full min-h-[60vh] flex justify-center items-center">
          <RequestLoader size="large" />
        </div>
      ) : data.length === 0 ? (
        <div className="w-full min-h-[90vh] flex justify-center items-center">
          <h1 className="text-2xl">{error}</h1>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 rounded-2xl">
            {data.map((card) => (
              <div
                key={card.id}
                className="p-4 bg-white card-shadow rounded-[32px] cursor-pointer mb-2"
                style={{
                  background:
                    "linear-gradient(161.47deg, #E7E9F3 -11.63%, #FFFFFF 91.02%)",
                }}
                onClick={() => navigate(`/job_house/${card?._id}`)}
              >
                <img
                  src={card?.jobHouseimages[0]}
                  alt={dummyData[0].title}
                  className="w-full h-[200px] object-cover mb-2 rounded-[10px]"
                />
                <h3 className="text-[20px] font-semibold mb-2 mt-4 leading-6 font-montserrat">
                  {card.announcementName}
                </h3>
                <p className="text-[#3A544F] text-[12px] font-normal mb-2">
                  {dummyData[0].subtitle}
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
        </>
      )}
    </div>
  );
};

export default PaginatedCards;
