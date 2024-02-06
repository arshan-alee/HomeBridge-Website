import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TableComponent from "./Table";
import { GetAllData } from "../../axios/NetworkCalls";
import RequestLoader from "../Shared/RequestLoader";

function JobHouse() {
  const columns = [
    "Job",
    "Name",
    "Accommodation",
    "Country",
    "Message",
    // , "Salary", "Rent"
  ];
  // const data = [
  //   { Job: 'Engineer', Name: 'John Doe', Accommodation: 'Apartment', City: 'New York', Salary: 80000, Rent: 1500 },
  //   { Job: 'Designer', Name: 'Jane Smith', Accommodation: 'House', City: 'Los Angeles', Salary: 75000, Rent: 2000 },
  //   { Job: 'Developer', Name: 'Bob Johnson', Accommodation: 'Condo', City: 'San Francisco', Salary: 90000, Rent: 1800 },
  //   { Job: 'Manager', Name: 'Alice Williams', Accommodation: 'Townhouse', City: 'Seattle', Salary: 95000, Rent: 1700 },
  //   { Job: 'Analyst', Name: 'Charlie Brown', Accommodation: 'Apartment', City: 'Chicago', Salary: 70000, Rent: 1600 },
  //   { Job: 'Architect', Name: 'Eva Davis', Accommodation: 'House', City: 'Boston', Salary: 85000, Rent: 2200 },
  //   { Job: 'Accountant', Name: 'Frank White', Accommodation: 'Condo', City: 'Austin', Salary: 80000, Rent: 2000 },
  //   { Job: 'Marketing', Name: 'Grace Miller', Accommodation: 'Townhouse', City: 'Denver', Salary: 90000, Rent: 1800 },
  //   { Job: 'Sales', Name: 'Harry Lee', Accommodation: 'Apartment', City: 'Miami', Salary: 75000, Rent: 1600 },
  //   { Job: 'HR', Name: 'Ivy Wang', Accommodation: 'House', City: 'Phoenix', Salary: 70000, Rent: 1700 },
  //   { Job: 'Engineer', Name: 'Jack Turner', Accommodation: 'Condo', City: 'Atlanta', Salary: 85000, Rent: 1900 },
  //   { Job: 'Designer', Name: 'Lily Chen', Accommodation: 'Townhouse', City: 'Dallas', Salary: 80000, Rent: 2000 },
  //   { Job: 'Developer', Name: 'Mark Davis', Accommodation: 'Apartment', City: 'Houston', Salary: 90000, Rent: 1800 },
  // ];

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
