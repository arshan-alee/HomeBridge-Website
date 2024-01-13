import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
const RowsPerPage = 3;

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
    <div className="mx-4 md:mx-14 lg:mx-28 my-8">
        <h1 className="text-[34px] font-extrabold my-12">Job & Accommodation</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-2xl">
        {currentCards.map((card) => (
          <div key={card.id} className="p-4 bg-white shadow-lg shadow-[#0858D02B] rounded-md cursor-pointer" onClick={()=> navigate('/job_house/123')}>
            <img src={card.imageUrl} alt={card.title} className="w-full h-[200px] object-cover mb-2 rounded-md" />
            <h3 className="text-[20px] font-semibold mb-2">{card.title}</h3>
            <p className="text-[#3A544F] text-[12px] font-normal mb-2">{card.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="my-4 md:my-12 flex justify-center py-2">
        <nav className="relative z-0 inline-flex -space-x-px" aria-label="Pagination">
          <div
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="relative inline-flex items-center px-4 py-2 bg-white text-lg font-medium text-gray-500 hover:text-white cursor-pointer"
          >
            <img src="/icons/left.png" alt="" />
          </div>
          {renderPageNumbers()}
          <div
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="relative inline-flex items-center px-4 py-2 bg-white text-lg font-medium text-gray-500 hover:text-white cursor-pointer"
          >
            <img src="/icons/right.png" alt="" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default PaginatedCards;
