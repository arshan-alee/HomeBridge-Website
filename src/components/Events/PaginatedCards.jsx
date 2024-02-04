import { useNavigate } from "react-router-dom";
import usePagination from "../../utils/usePagination";
import Pagination from "../Shared/Pagination";

const data = [
  {
    id: 1,
    title: "2 nights and 3 days, Tongyeong German village tour",
    subtitle:
      "Best natural scenery, accommodation with a panoramic view of the sea",
    price: "199,000KRW",
    imageUrl: "/images/event_card.png",
  },
  {
    id: 2,
    title: "2 nights and 3 days, Tongyeong German village tour",
    subtitle:
      "Best natural scenery, accommodation with a panoramic view of the sea",
    price: "199,000KRW",
    imageUrl: "/images/event_card.png",
  },
  {
    id: 3,
    title: "2 nights and 3 days, Tongyeong German village tour",
    subtitle:
      "Best natural scenery, accommodation with a panoramic view of the sea",
    price: "199,000KRW",
    imageUrl: "/images/event_card.png",
  },
  {
    id: 4,
    title: "2 nights and 3 days, Tongyeong German village tour",
    subtitle:
      "Best natural scenery, accommodation with a panoramic view of the sea",
    price: "199,000KRW",
    imageUrl: "/images/event_card.png",
  },
  {
    id: 5,
    title: "2 nights and 3 days, Tongyeong German village tour",
    subtitle:
      "Best natural scenery, accommodation with a panoramic view of the sea",
    price: "199,000KRW",
    imageUrl: "/images/event_card.png",
  },
  {
    id: 6,
    title: "2 nights and 3 days, Tongyeong German village tour",
    subtitle:
      "Best natural scenery, accommodation with a panoramic view of the sea",
    price: "199,000KRW",
    imageUrl: "/images/event_card.png",
  },
  {
    id: 7,
    title: "2 nights and 3 days, Tongyeong German village tour",
    subtitle:
      "Best natural scenery, accommodation with a panoramic view of the sea",
    price: "199,000KRW",
    imageUrl: "/images/event_card.png",
  },
  {
    id: 8,
    title: "2 nights and 3 days, Tongyeong German village tour",
    subtitle:
      "Best natural scenery, accommodation with a panoramic view of the sea",
    price: "199,000KRW",
    imageUrl: "/images/event_card.png",
  },
  {
    id: 9,
    title: "2 nights and 3 days, Tongyeong German village tour",
    subtitle:
      "Best natural scenery, accommodation with a panoramic view of the sea",
    price: "199,000KRW",
    imageUrl: "/images/event_card.png",
  },
  {
    id: 10,
    title: "2 nights and 3 days, Tongyeong German village tour",
    subtitle:
      "Best natural scenery, accommodation with a panoramic view of the sea",
    price: "199,000KRW",
    imageUrl: "/images/event_card.png",
  },
  {
    id: 11,
    title: "2 nights and 3 days, Tongyeong German village tour",
    subtitle:
      "Best natural scenery, accommodation with a panoramic view of the sea",
    price: "199,000KRW",
    imageUrl: "/images/event_card.png",
  },
  {
    id: 12,
    title: "2 nights and 3 days, Tongyeong German village tour",
    subtitle:
      "Best natural scenery, accommodation with a panoramic view of the sea",
    price: "199,000KRW",
    imageUrl: "/images/event_card.png",
  },
  {
    id: 13,
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

  const { currentPage, totalPages, visibleItems, goToPage, pageNumbersToShow } =
    paginate(data);

  return (
    <div className="mx-12 md:mx-14 lg:mx-24 my-8">
      <h1 className="hidden lg:block text-[34px] font-extrabold my-12">
        Experiencing Korea
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 rounded-md">
        {visibleItems.map((card) => (
          <div
            key={card.id}
            className="p-4 bg-white card-shadow rounded-[32px] cursor-pointer mb-4"
            style={{
              background:
                "linear-gradient(161.47deg, #E7E9F3 -11.63%, #FFFFFF 91.02%)",
            }}
            onClick={() => navigate("/event/123")}
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-[200px] object-cover lg:object-contain mb-2 rounded-[10px]"
            />
            <h3 className="text-[20px] font-semibold mb-2 mt-4 leading-6 font-montserrat">
              {card.title}
            </h3>
            <p className="text-[#3A544F] text-[12px] font-normal mb-2">
              {card.subtitle}
            </p>
            <p className="text-[12px] text-[#232323] font-medium">Price</p>
            <p className="text-[#00CE3A] text-[24px] font-bold">{card.price}</p>
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
