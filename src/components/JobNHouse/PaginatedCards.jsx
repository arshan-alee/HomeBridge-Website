import React, { useState } from 'react';

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

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="mx-28 my-8">
        <h1 className="text-[34px] font-extrabold my-12">Job & Accommodation</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-xl">
        {currentCards.map((card) => (
          <div key={card.id} className="p-4 bg-white shadow-lg shadow-[#0858D02B] rounded-md">
            <img src={card.imageUrl} alt={card.title} className="w-full h-[200px] object-contain mb-2" />
            <h3 className="text-[20px] font-semibold mb-2">{card.title}</h3>
            <p className="text-[#3A544F] text-[12px] font-normal mb-2">{card.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`bg-blue-500 text-white px-4 py-2 rounded ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`bg-blue-500 text-white px-4 py-2 rounded ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedCards;
