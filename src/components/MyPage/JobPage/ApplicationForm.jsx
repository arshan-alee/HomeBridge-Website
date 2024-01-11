import React from 'react'
import Input from '../../Shared/Input'
import Textarea from '../../Shared/Textarea'
import Select from '../../Shared/Select'

function ApplicationForm({title, type}) {
  return (
    <div className="w-full md:w-1/3 px-6">
        <div className="mx-2 pb-4 text-xl custom-shadow-right-bottom px-4 rounded-lg">
            <h3 className="font-semibold text-[16px]">{title}</h3>
            <div className='py-2 w-full'>
                <Input 
                    placeholder='Jason Kim'
                    type="text"
                />
            </div>
            {type === 'job' && <div className='py-2 w-full'>
                <Select 
                    placeholder='Country'
                    options={['Japan', 'South Korea']}
                />
            </div>}
            {type === 'job' && <div className='py-2 w-full'>
                <Select
                    placeholder='Gender'
                    options={['Male', 'Female']}
                />
            </div>}
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
            <div className='w-full mb-4'>
                <Textarea
                    placeholder='Message'
                    rows={8}
                />
            </div>
            {
                type === 'event' && (
                    <>
                        <div className="flex justify-between border-t pt-4">
                            <p className="text-[12px] font-medium">Price</p>
                            <p className="text-[24px] font-semibold text-[#00CE3A]">199,000KRW</p>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className='bg-[#00CE3A] text-white px-8 py-2 rounded-3xl text-[16px]'>Reservation cancellation</button>
                        </div>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default ApplicationForm