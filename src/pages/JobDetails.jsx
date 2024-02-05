import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import GeneralSection from "../components/MyPage/JobPage/GeneralSection";
import JobDetail from "../components/MyPage/JobPage/JobDetail";
import JobApplicationForm from "../components/JobNHouse/JobApplicationForm";
import { useParams } from "react-router-dom";
import { GetSingleData } from "../axios/NetworkCalls";
import RequestLoader from "../components/Shared/RequestLoader";

function JobDetails() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  const { id } = useParams();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // console.log("data--------------");
  // console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // =================

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await GetSingleData(
        `/api/job_house/announcement?id=${id}`
      );

      console.log("response->");
      console.log(response);

      if (response.success) {
        setData(response?.data);
      } else {
        setError(response?.message);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // ==========

  if (loading) {
    return (
      <div className="w-full min-h-[90vh] flex justify-center items-center">
        <RequestLoader size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-[90vh] flex justify-center items-center">
        <h1 className="text-2xl">{error}</h1>
      </div>
    );
  }

  return (
    <div className="py-6 lg:py-12 bg-white">
      <div className="flex flex-col items-center justify-center my-4 md:mt-8 mb-4 lg:mb-12">
        <h1 className="text-[32px] font-semibold">UX / UI Designer</h1>
        <h5 className="text-[14px] font-normal">
          <b className="mr-2">₩</b> company name
        </h5>
      </div>
      <div className="flex flex-row px-2 lg:px-6">
        <JobDetail data={data} />
        {isLargeScreen && <JobApplicationForm />}
      </div>
      <GeneralSection data={data} />
      <div className="flex md:mx-16 lg:hidden">
        <JobApplicationForm />
      </div>
    </div>
  );
}

export default JobDetails;
