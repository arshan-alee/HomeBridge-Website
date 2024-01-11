import React from 'react'
import Input from '../components/Shared/Input'
import Textarea from '../components/Shared/Textarea'
import Select from '../components/Shared/Select'

function F2RApplication() {
  return (
    <div className="my-12 md:my-24">
        <h2 className="px-36 text-[38px] font-bold mb-16 hidden lg:block">F-2-R Application</h2>
        <div className="mx-2 md:mx-16 lg:mx-72 pb-4 text-xl custom-shadow-right-bottom px-4 rounded-lg">
            <h3 className="font-600 text-[16px]">F-2-R Application</h3>
            <div className='py-2 w-full'>
                <Input 
                    placeholder='Jason Kim'
                    type="text"
                />
            </div>
            <div className='py-2 flex flex-col md:flex-row w-full gap-2'>
                <Select 
                    placeholder='Country'
                    options={['Japan', 'South Korea']}
                />
                <Select 
                    placeholder='Gender'
                    options={['Male', 'Female']}
                />
            </div>
            <div className='py-2 w-full'>
                <Input 
                    placeholder='Address'
                    type="text"
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
            <div className='py-2 w-full mb-3 text-center'>
                <button className='bg-[#00CE3A] text-white px-8 py-2 rounded-3xl'>To apply</button>
            </div>
            <p className='text-center text-[12px]'>The person in charge will contact you after checking.</p>
        </div>
    </div>
  )
}

export default F2RApplication