import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GetAllData } from "../../../axios/NetworkCalls";
import RequestLoader from "../../Shared/RequestLoader";
import formatDate, { checkDeadline, convertDate } from "../../../utils/helper";
import toast from "react-hot-toast";

const EventTable = ({ columns }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const [loader, setLoader] = useState();
  const [data, setData] = useState([]);
  const [Error, setError] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoader(true);
      const response = await GetAllData(`/api/getAllMyApplication`);
      console.log("response: ", response);
      if (response.success) {
        setData(response.data);
      } else {
        setError(response.message);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoader(false);
    }
  };

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

  const handleClick = (eventId, applicationId, deadline) => {
    if (checkDeadline(deadline) === "Deadline Passed") {
      toast.error("event already passed");
      return;
    }
    navigate(`/event/${eventId}/${applicationId}`);
  };

  return (
    <>
      <h1 className="hidden lg:block text-[24px] font-semibold mb-12">Event</h1>
      {loader ? (
        <div className="w-full h-[60vh] flex items-center justify-center">
          <RequestLoader size="large" />
        </div>
      ) : (
        <>
          {Error ? (
            <div className="text-black text-center ">{Error}</div>
          ) : (
            <div className="overflow-x-auto max-w-3/4 custom-shadow-right-bottom rounded-b-xl">
              <table className="min-w-full">
                <thead className="bg-[#00CE3A]">
                  <tr>
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="px-4 py-3 text-[16px] font-hind font-normal text-white text-left tracking-wider"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {paginatedData.map((row, index) => (
                    <tr
                      key={index}
                      className="custom-shadow-right-bottom rounded-2xl"
                    >
                      <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-[12px] cursor-pointer font-hind font-medium">
                        <div className="truncate text-[12px]">
                          {row?.event?.productIntroduction?.slice(0, 20) || "-"}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-[12px] cursor-pointer font-hind font-medium">
                        <div className="truncate text-[12px]">
                          {convertDate(row?.event?.departure) || "-"}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-[12px] cursor-pointer font-hind font-medium">
                        <div className="truncate text-[12px]">
                          {convertDate(row?.event?.arrival) || "-"}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-[12px] cursor-pointer font-hind font-medium">
                        <div className="truncate text-[12px]">
                          {`${row?.event?.price} KRW` || "-"}
                        </div>
                      </td>
                      <td className="h-full min-w-[85px] flex items-end justify-center">
                        <div
                          onClick={() =>
                            handleClick(
                              row?.event?._id,
                              row?._id,
                              row?.event?.deadline
                            )
                          }
                          className={`w-full md:w-3/4 text-center rounded-2xl py-1 cursor-pointer text-white ${
                            checkDeadline(row?.event?.deadline) ===
                            "Deadline Passed"
                              ? "bg-[#FF7878]"
                              : "bg-[#00CE3A]"
                          }`}
                        >
                          {checkDeadline(row?.event?.deadline) ===
                          "Deadline Passed"
                            ? "마감"
                            : "등록중" || "-"}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {totalPages && totalPages === 1 ? null : (
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
                          currentPage === 1
                            ? "text-[#00000080]"
                            : "text-[#000000]"
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
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default EventTable;
