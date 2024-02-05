import React from "react";

function JobDetail({ data }) {
  const jobInfo = {
    "Job main categories": "Lorem",
    "Job subcategories": "Sagittis",
    "Types of jobs": "We are",
    "Work start date": "We are",
    "Application Deadline": "We are",
    "Visa type": "We are",
    Language: "We are",
    Gender: "We are",
    Age: "20 ~ 32",
  };

  const jobBenefits = {
    "Hourly wage": "10,000KRW",
    "A working day": "Monday, Tuesday, Wednesday",
    "Working hours": "9",
    Bonus: "0",
  };

  return (
    <div className="w-full lg:w-2/3 mx-4 md:mx-12">
      <div className="lg:py-4 border-b border-[#E2E2E2] py-8">
        <h3 className="font-semibold mb-2">JOB INFO</h3>

        <div
          className="flex flex-wrap  break-words "
          dangerouslySetInnerHTML={{ __html: data.jobInfo }}
        />
      </div>
      <div className="lg:py-4 border-b border-[#E2E2E2] py-8">
        <h3 className="font-semibold mb-2">Salary & Fringe benefits</h3>

        <div
          className="flex flex-wrap  break-words "
          dangerouslySetInnerHTML={{ __html: data.salaryBenefit }}
        />
      </div>
      <div className="py-12 lg:py-4">
        <h3 className="font-semibold mb-2">JOB DETAILS</h3>
        <div
          className="flex flex-wrap  break-words "
          dangerouslySetInnerHTML={{ __html: data.jobDetails }}
        />
      </div>
    </div>
  );
}

export default JobDetail;
