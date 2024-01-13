import { useState, useMemo } from 'react';

const TableComponent = ({ columns, data, handleClick }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 10;
  const totalPages = Math.ceil(data.length / recordsPerPage);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return data.slice(startIndex, endIndex);
  }, [currentPage, data, recordsPerPage]);

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
          } relative inline-flex items-center px-3 py-2 bg-white text-sm font-medium`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="overflow-x-auto max-w-3/4 custom-shadow-right-bottom rounded-b-xl">
      <table className="min-w-full">
        <thead className="bg-[#00CE3A]">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                scope="col"
                className="px-4 py-3 text-xs font-medium text-white text-left uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-gray-500">
          {paginatedData.map((row, index) => (
            <tr key={index} className='bg-white mb-2'>
              {columns.map((column) => (
                <td key={column} className="px-4 py-4 whitespace-nowrap overflow-hidden text-[12px] cursor-pointer">
                  <div className="truncate" onClick={handleClick}>{row[column]}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center py-2">
        <nav className="relative z-0 inline-flex -space-x-px" aria-label="Pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="relative inline-flex items-center px-4 py-2 bg-white text-lg font-medium text-gray-500 hover:text-white"
          >
            <img src="/icons/left.png" alt="" />
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="relative inline-flex items-center px-4 py-2 bg-white text-lg font-medium text-gray-500 hover:text-white"
          >
            <img src="/icons/right.png" alt="" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default TableComponent;
