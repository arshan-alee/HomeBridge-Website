import React from 'react'
import Input from '../Shared/Input'
import Textarea from '../Shared/Textarea'
import Select from '../Shared/Select'

function JobPage() {
  return (
    <div className="py-12">
        <div className="flex flex-col items-center justify-center my-12">
            <h1 className="text-[32px] font-semibold">UX / UI Designer</h1>
            <h5 className="text-[14px] font-normal"><b>₩</b> company name</h5>
        </div>
        <div className="flex">
            <div className='w-2/3 mx-12'>
              <div className='py-4 border-b'>
                <h3 className="font-semibold mb-2">JOB INFO</h3>
                <p>Job main categories: Lorem</p>
                <p>Job subcategories: Sagittis</p>
                <p>types of jobs:  We are</p>
                <p>Work start date:  We are</p>
                <p>Application Deadline:  We are</p>
                <p>Visa type:  We are</p>
                <p>Language:  We are</p>
                <p>Gender:  We are</p>
                <p>Age:  20 ~ 32</p>
              </div>
              <div className='py-4 border-b'>
                <h3 className="font-semibold mb-2">Salary & Fringe benefits</h3>
                <div>
                  <p>Hourly wage: 10,000KRW</p>
                  <p>A working day: Monday, Tuesday, Wednesday</p>
                  <p>Working hours: 9</p>
                  <p>Bonus: 0</p>
                </div>
              </div>
              <div className='py-4 border-b'>
                <h3 className="font-semibold mb-2">JOB DETAILS</h3>
                <div className='mb-2'>
                  <h2 className="font-medium">Responsabilities:</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus odio eget sed egestas. Tortor elementum, auctor vitae sapien aliquam consectetur eget interdum. Rhoncus vitae tristique porta aliquam. Sagittis a faucibus venenatis porta semper vulputate in neque luctus. Nunc sed metus risus posuere. </p>
                </div>
                <div className='mb-2'>
                  <h2 className="font-medium">Qualifications:</h2>
                  <p>Sagittis a faucibus venenatis porta semper vulputate in neque luctus. Nunc sed metus risus posuere.</p>
                </div>
                <div>
                  <h2 className="font-medium">Required:</h2>
                  <p>We are looking for those who can advanced in - Adobe XD, FIgma, Sketch - HTML, CSS, JS</p>
                </div>
              </div>
            </div>
            <div className="w-1/3 px-6">
              <div className="mx-2 pb-4 text-xl custom-shadow-right-bottom px-4 rounded-lg">
                  <h3 className="font-semibold text-[16px]">Job application</h3>
                  <div className='py-2 w-full'>
                      <Input 
                          placeholder='Jason Kim'
                          type="text"
                      />
                  </div>
                  <div className='py-2 w-full'>
                      <Select 
                          placeholder='Country'
                          options={['Japan', 'South Korea']}
                      />
                  </div>
                  <div className='py-2 w-full'>
                      <Select
                          placeholder='Gender'
                          options={['Male', 'Female']}
                      />
                  </div>
                  <div className='py-2 w-full'>
                      <Input 
                          placeholder='Phone number'
                          type="tel"
                      />
                  </div>
                  <div className='py-2 w-full'>
                      <Input 
                          placeholder='E-mail'
                          type="mail"
                      />
                  </div>
                  <div className='py-2 w-full mb-4'>
                      <Textarea
                          placeholder='Message'
                          rows={8}
                      />
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default JobPage