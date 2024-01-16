import React from 'react'

function JobDetail() {
    const jobInfo = {
        'Job main categories': 'Lorem',
        'Job subcategories': 'Sagittis',
        'Types of jobs': 'We are',
        'Work start date': 'We are',
        'Application Deadline': 'We are',
        'Visa type': 'We are',
        'Language': 'We are',
        'Gender': 'We are',
        'Age': '20 ~ 32',
    };
    
    const jobBenefits = {
        'Hourly wage': '10,000KRW',
        'A working day': 'Monday, Tuesday, Wednesday',
        'Working hours': '9',
        'Bonus': '0',
    };

  return (
    <div className='w-full lg:w-2/3 mx-4 md:mx-12'>
              <div className='lg:py-4 border-b border-[#E2E2E2] py-8'>
                <h3 className="font-semibold mb-2">JOB INFO</h3>
                {Object.entries(jobInfo).map(([label, value]) => (
                  <div key={label} className="flex mr-4 mb-2 text-[14px]">
                    <p className="font-semibold mr-1">{label}:</p>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
              <div className='lg:py-4 border-b border-[#E2E2E2] py-8'>
                <h3 className="font-semibold mb-2">Salary & Fringe benefits</h3>
                {Object.entries(jobBenefits).map(([label, value]) => (
                  <div key={label} className="flex mr-4 mb-2 text-[14px]">
                    <p className="font-semibold mr-1">{label}:</p>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
              <div className='py-12 lg:py-4'>
                <h3 className="font-semibold mb-2">JOB DETAILS</h3>
                <div className='mb-2'>
                  <h2 className="font-semibold">Responsabilities:</h2>
                  <p className="text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus odio eget sed egestas. Tortor elementum, auctor vitae sapien aliquam consectetur eget interdum. Rhoncus vitae tristique porta aliquam. Sagittis a faucibus venenatis porta semper vulputate in neque luctus. Nunc sed metus risus posuere. </p>
                </div>
                <div className='mb-2'>
                  <h2 className="font-semibold">Qualifications:</h2>
                  <p className="text-[14px]">Sagittis a faucibus venenatis porta semper vulputate in neque luctus. Nunc sed metus risus posuere.</p>
                </div>
                <div>
                  <h2 className="font-semibold">Required:</h2>
                  <p className="text-[14px]">We are looking for those who can advanced in <br/> - Adobe XD, FIgma, Sketch <br />- HTML, CSS, JS</p>
                </div>
              </div>
            </div>
  )
}

export default JobDetail