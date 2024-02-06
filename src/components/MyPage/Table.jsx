import { useState, useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TableComponent = ({ columns, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

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
              ? "text-[#00CE3A]"
              : "text-black hover:text-[#00CE3A]"
          } relative inline-flex items-center px-3 py-2 bg-white text-sm font-medium`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const handleClick = (jobId, applicationId) => {
    // console.log("data: ", jobId, applicationId);
    navigate(`/job_house/${jobId}/${applicationId}`);
  };

  return (
    <div className="overflow-x-auto max-w-3/4 custom-shadow-right-bottom rounded-b-xl">
      <table className="min-w-full">
        <thead className="bg-[#00CE3A]" style={{ border: "none" }}>
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                scope="col"
                className="px-4 py-3 text-[16px] font-normal font-hind text-white text-left tracking-wider"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white" style={{ border: "none" }}>
          {paginatedData.map((row, index) => (
            <tr
              onClick={() => handleClick(row?.job?._id, row?._id)}
              key={index}
              className="custom-shadow-right-bottom rounded-2xl"
            >
              {/* {columns.map((column) => (
                <td key={column} onClick={handleClick} className="px-4 py-4 whitespace-nowrap overflow-hidden text-[12px] cursor-pointer font-hind font-medium">
                  <div className="truncate text-[12px]">{row[column]}</div>
                </td>
              ))} */}
              <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-[12px] cursor-pointer font-hind font-medium">
                <div className="truncate text-[12px]">
                  {row.job.announcementName || "-"}
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-[12px] cursor-pointer font-hind font-medium">
                <div className="truncate text-[12px]">{row.name || "-"}</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-[12px] cursor-pointer font-hind font-medium">
                <div className="truncate text-[12px]">
                  {row.job.isAccomodated ? "Yes" : "No"}
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-[12px] cursor-pointer font-hind font-medium">
                <div className="truncate text-[12px]">
                  {row.nationality || "-"}
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-[12px] cursor-pointer font-hind font-medium">
                <div className="truncate text-[12px]">
                  {row.job.salary || "-"}
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-[12px] cursor-pointer font-hind font-medium">
                <div className="truncate text-[12px]">
                  {row.job.rent || "-"}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center py-2">
        <nav
          className="relative z-0 inline-flex -space-x-px"
          aria-label="Pagination"
        >
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="relative inline-flex items-center px-4 py-2 bg-white text-lg font-medium text-gray-500 hover:text-white"
          >
            <FaChevronLeft
              className={`w-4 h-[12px] ${
                currentPage === 1 ? "text-[#00000080]" : "text-[#000000]"
              }`}
            />
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="relative inline-flex items-center px-4 py-2 bg-white text-lg font-medium text-gray-500 hover:text-white"
          >
            <FaChevronRight
              className={`w-4 h-[12px] ${
                currentPage === totalPages
                  ? "text-[#00000080]"
                  : "text-[#000000]"
              }`}
            />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default TableComponent;
