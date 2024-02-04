import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usePagination from "../../utils/usePagination";
import Pagination from "../Shared/Pagination";
import { GetAllData } from "../../axios/NetworkCalls";
import RequestLoader from "../Shared/RequestLoader";

const dummyData = [
  {
    id: 1,
    title: "2 nights and 3 days, Tongyeong German village tour",
    subtitle:
      "Best natural scenery, accommodation with a panoramic view of the sea",
    price: "199,000KRW",
    imageUrl: "/images/event_card.png",
  },
];

const PaginatedCards = () => {
  const paginate = usePagination(1, 12);
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
  console.log(currentPage);

  useEffect(() => {
    getData();
  }, [currentPage]);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await GetAllData(
        `/api/getAllEventsWebsite?page=${currentPage}&eventsPerPage=${12}`
      );

      console.log("response->");
      console.log(response);

      if (response.success) {
        setData(response?.data?.events);
        setTotalData(response?.data?.totalEvents);
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
    <div className="mx-12 md:mx-14 lg:mx-24 my-8">
      <h1 className="hidden lg:block text-[34px] font-extrabold my-12">
        Experiencing Korea
      </h1>

      {loading ? (
        <div className="w-full min-h-[60vh] flex justify-center items-center">
          <RequestLoader size="large" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 rounded-md">
            {data.map((card) => (
              <div
                key={card?._id}
                className="p-4 bg-white card-shadow rounded-[32px] cursor-pointer mb-4"
                style={{
                  background:
                    "linear-gradient(161.47deg, #E7E9F3 -11.63%, #FFFFFF 91.02%)",
                }}
                onClick={() => navigate(`/event/${card?._id}`)}
              >
                <img
                  src={dummyData[0].imageUrl}
                  alt={dummyData[0].title}
                  className="w-full h-[200px] object-cover lg:object-contain mb-2 rounded-[10px]"
                />
                <h3 className="text-[20px] font-semibold mb-2 mt-4 leading-6 font-montserrat">
                  {card?.productIntroduction}
                </h3>
                <p className="text-[#3A544F] text-[12px] font-normal mb-2">
                  {dummyData[0].subtitle}
                </p>
                <p className="text-[12px] text-[#232323] font-medium">Price</p>
                <p className="text-[#00CE3A] text-[24px] font-bold">
                  {dummyData[0].price}
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
