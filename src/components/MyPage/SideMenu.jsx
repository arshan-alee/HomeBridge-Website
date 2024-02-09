import React, { useEffect, useState } from "react";
import { GetAllData } from "../../axios/NetworkCalls";
import RequestLoader from "../Shared/RequestLoader";

function SideMenu({ selectedOption, setSelectedOption }) {
  function handleOptionSelection(index) {
    setSelectedOption(index);
  }
  const [data, setData] = useState();
  const [loader, setLoader] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoader(true);
      const Info = localStorage.getItem("Info");

      const response = await GetAllData(
        `/api/user?id=${JSON.parse(Info)?.userId}`
      );
      console.log("response: ", response);
      if (response.success) {
        setData(response.data);
      } else {
        // console.error("Error or no data:", response.message);
        setError(response.message);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-w-1/4 lg:px-8">
      <div className="flex lg:flex-col items-center justify-center rounded-2xl px-4 mx-4 lg:mx-0 py-2 lg:py-6 custom-shadow-right-bottom gap-3 mb-6">
        <img src="/icons/user_circle.png" alt="" className="lg:mb-4" />
        {loader ? (
          <div>...</div>
        ) : (
          <>
            {error ? (
              <div className="text-black text-center ">{error}</div>
            ) : (
              <div className="flex flex-col items-center">
                <h1 className="text-[20px] font-medium">Jason kim</h1>
                <p className="text-[#333333] text-[14px] font-normal">
                  kim9999@gmail.com
                </p>
              </div>
            )}
          </>
        )}
      </div>
      <div className="hidden lg:flex flex-col rounded-2xl p-8 custom-shadow-right-bottom space-y-4">
        <h1
          className={`text-[18px] font-semibold cursor-pointer ${
            selectedOption === 0 ? "text-[#00CE3A]" : "text-[#607092]"
          }`}
          onClick={() => handleOptionSelection(0)}
        >
          F-2-R application
        </h1>
        <h1
          className={`text-[18px] font-semibold cursor-pointer ${
            selectedOption === 1 ? "text-[#00CE3A]" : "text-[#607092]"
          }`}
          onClick={() => handleOptionSelection(1)}
        >
          Job & House
        </h1>
        <h1
          className={`text-[18px] font-semibold cursor-pointer ${
            selectedOption === 2 ? "text-[#00CE3A]" : "text-[#607092]"
          }`}
          onClick={() => handleOptionSelection(2)}
        >
          Event
        </h1>
      </div>
      <div className="lg:hidden">
        <ul className="flex nav nav-tabs mb-6 justify-around">
          <li className="nav-item" onClick={() => handleOptionSelection(0)}>
            <a
              className={`nav-link px-2 ${
                selectedOption === 0 ? "active" : ""
              }`}
              href
            >
              F-2-R{" "}
            </a>
          </li>
          <li className="nav-item" onClick={() => handleOptionSelection(1)}>
            <a
              className={`nav-link px-2 ${
                selectedOption === 1 ? "active" : ""
              }`}
              href
            >
              Job&House
            </a>
          </li>
          <li className="nav-item" onClick={() => handleOptionSelection(2)}>
            <a
              className={`nav-link px-2 ${
                selectedOption === 2 ? "active" : ""
              }`}
              href
            >
              Event
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
