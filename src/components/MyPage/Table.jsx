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

  return (
    <div className="overflow-x-auto max-w-3/4 custom-shadow-right-bottom rounded-b-xl">
      <table className="min-w-full divide-y divide-gray-200">
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
        <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`${
                currentPage === index + 1
                  ? 'text-white bg-indigo-600'
                  : 'text-gray-500 hover:bg-indigo-500 hover:text-white'
              } relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium`}
            >
              {index + 1}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TableComponent;
