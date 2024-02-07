import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TableComponent from "./Table";
import { GetAllData } from "../../axios/NetworkCalls";
import RequestLoader from "../Shared/RequestLoader";

function JobHouse() {
  const columns = ["Job", "Name", "Accommodation", "Country", "Salary", "rent"];

  const navigate = useNavigate();
  const [loader, setLoader] = useState();
  const [data, setData] = useState([]);
  const [Error, setError] = useState();

  // function handleClick() {
  //   navigate("/job_house/123");
  // }

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoader(true);
      const response = await GetAllData(
        `/api/job_house_application/myApplications`
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
    <div className="flex-grow">
      <h1 className="hidden lg:block text-[24px] font-semibold mb-12">
        Job & House
      </h1>
      {loader ? (
        <div className="w-full h-[60vh] flex items-center justify-center">
          <RequestLoader size="large" />
        </div>
      ) : (
        <>
          {Error ? (
            <div className="text-black text-center ">{Error}</div>
          ) : (
            <TableComponent columns={columns} data={data} />
          )}
        </>
      )}
    </div>
  );
}

export default JobHouse;
