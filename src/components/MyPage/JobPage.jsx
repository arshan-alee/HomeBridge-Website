import React from 'react'
import GeneralSection from './JobPage/GeneralSection'
import ApplicationForm from './JobPage/ApplicationForm'
import JobDetails from './JobPage/JobDetails'

function JobPage() {

  return (
    <div className="py-12">
        <div className="flex flex-col items-center justify-center my-6 md:my-12">
            <h1 className="text-[32px] font-semibold">UX / UI Designer</h1>
            <h5 className="text-[14px] font-normal"><b>₩</b> company name</h5>
        </div>
        <div className="flex flex-row">
          <JobDetails />
          <ApplicationForm title='Job application' type='job' />
        </div>
        <GeneralSection />
        <div className="flex lg:hidden"><ApplicationForm title='Job application' type='job' /></div>
    </div>
  )
}

export default JobPage