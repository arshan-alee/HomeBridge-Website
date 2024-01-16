import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const data = [
  { id: 1, title: 'Store management at a burger joint in Itaewon.', subtitle: 'Yongsan-gu, Seoul', imageUrl: '/images/jobnhouse_card.png' },
  { id: 2, title: 'Store management at a burger joint in Itaewon.', subtitle: 'Yongsan-gu, Seoul', imageUrl: '/images/jobnhouse_card.png' },
  { id: 3, title: 'Store management at a burger joint in Itaewon.', subtitle: 'Yongsan-gu, Seoul', imageUrl: '/images/jobnhouse_card.png' },
  { id: 4, title: 'Store management at a burger joint in Itaewon.', subtitle: 'Yongsan-gu, Seoul', imageUrl: '/images/jobnhouse_card.png' },
  { id: 5, title: 'Store management at a burger joint in Itaewon.', subtitle: 'Yongsan-gu, Seoul', imageUrl: '/images/jobnhouse_card.png' },
  { id: 6, title: 'Store management at a burger joint in Itaewon.', subtitle: 'Yongsan-gu, Seoul', imageUrl: '/images/jobnhouse_card.png' },
  { id: 7, title: 'Store management at a burger joint in Itaewon.', subtitle: 'Yongsan-gu, Seoul', imageUrl: '/images/jobnhouse_card.png' },
  { id: 8, title: 'Store management at a burger joint in Itaewon.', subtitle: 'Yongsan-gu, Seoul', imageUrl: '/images/jobnhouse_card.png' },
  { id: 9, title: 'Store management at a burger joint in Itaewon.', subtitle: 'Yongsan-gu, Seoul', imageUrl: '/images/jobnhouse_card.png' },
  { id: 10, title: 'Store management at a burger joint in Itaewon.', subtitle: 'Yongsan-gu, Seoul', imageUrl: '/images/jobnhouse_card.png' },
  { id: 11, title: 'Store management at a burger joint in Itaewon.', subtitle: 'Yongsan-gu, Seoul', imageUrl: '/images/jobnhouse_card.png' },
  { id: 12, title: 'Store management at a burger joint in Itaewon.', subtitle: 'Yongsan-gu, Seoul', imageUrl: '/images/jobnhouse_card.png' },
];

const CardsPerPage = 4;
const RowsPerPage = 2;

const PaginatedCards = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalCards = data.length;
  const totalPages = Math.ceil(totalCards / (CardsPerPage * RowsPerPage));

  const startIndex = (currentPage - 1) * CardsPerPage * RowsPerPage;
  const endIndex = startIndex + CardsPerPage * RowsPerPage;

  const currentCards = data.slice(startIndex, endIndex);
  const navigate = useNavigate();

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${
            currentPage === i
              ? 'text-[#00CE3A]'
              : 'text-black hover:text-[#00CE3A]'
          } relative inline-flex items-center px-4 py-2 bg-white font-semibold text-[16px]`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="mx-12 md:mx-14 lg:mx-28 my-8">
        <h1 className="hidden lg:block text-[34px] font-extrabold my-12">Job & Accommodation</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 rounded-2xl">
        {currentCards.map((card) => (
          <div key={card.id} className="p-4 bg-white card-shadow rounded-[32px] cursor-pointer mb-2" style={{background: "linear-gradient(161.47deg, #E7E9F3 -11.63%, #FFFFFF 91.02%)"}} onClick={()=> navigate('/job_house/123')}>
            <img src={card.imageUrl} alt={card.title} className="w-full h-[200px] object-cover mb-2 rounded-[10px]" />
            <h3 className="text-[20px] font-semibold mb-2 mt-4" style={{fontFamily: "Montserrat"}}>{card.title}</h3>
            <p className="text-[#3A544F] text-[12px] font-normal mb-2">{card.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="my-4 md:my-12 flex justify-center py-2">
        <nav className="relative z-0 inline-flex -space-x-px" aria-label="Pagination">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="relative inline-flex items-center px-4 py-2 bg-white text-lg font-medium text-gray-500 hover:text-white cursor-pointer"
          >
            <FaChevronLeft className={`w-4 h-[12px] ${currentPage === 1 ? 'text-[#00000080]' : 'text-[#000000]'}`} />
          </button>
          {renderPageNumbers()}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="relative inline-flex items-center px-4 py-2 bg-white text-lg font-medium text-gray-500 hover:text-white cursor-pointer"
          >
            <FaChevronRight className={`w-4 h-[12px] ${currentPage === totalPages ? 'text-[#00000080]' : 'text-[#000000]'}`} />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default PaginatedCards;
