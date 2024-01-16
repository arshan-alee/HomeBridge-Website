import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import GeneralSection from "../components/MyPage/JobPage/GeneralSection";
import ApplicationForm from "../components/MyPage/JobPage/ApplicationForm";
import JobDetail from "../components/MyPage/JobPage/JobDetail";

function JobDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <div className="py-6 lg:py-12 bg-white">
      <div className="flex flex-col items-center justify-center my-4 md:mt-8 mb-4 lg:mb-12">
        <h1 className="text-[32px] font-semibold">UX / UI Designer</h1>
        <h5 className="text-[14px] font-normal">
          <b className="mr-2">₩</b> company name
        </h5>
      </div>
      <div className="flex flex-row px-2 lg:px-6">
        <JobDetail />
        {isLargeScreen && (
          <ApplicationForm title="Job application" type="job" />
        )}
      </div>
      <GeneralSection />
      <div className="flex md:mx-16 lg:hidden">
        <ApplicationForm title="Job application" type="job" />
      </div>
    </div>
  );
}

export default JobDetails;
