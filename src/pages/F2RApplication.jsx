import React from 'react'
import Input from '../components/Shared/Input'
import Textarea from '../components/Shared/Textarea'
import Select from '../components/Shared/Select'

function F2RApplication() {
  return (
    <div className="my-12 md:my-24">
        <h2 className="px-36 text-[38px] font-bold mb-16 hidden lg:block">F-2-R Application</h2>
        <div className="mx-2 md:mx-16 lg:mx-72 pb-4 text-xl custom-shadow-right-bottom px-4 rounded-2xl">
            <h3 className="font-600 text-[16px] font-bold lg:font-normal pt-6 pb-4">F-2-R Application</h3>
            <div className='py-2 w-full'>
                <Input 
                    placeholder='Jason Kim'
                    type="text"
                />
            </div>
            <div className='py-2 flex flex-col md:flex-row w-full gap-2'>
                <Select 
                    placeholder='japan'
                    options={['Japan', 'South Korea']}
                />
                <Select 
                    placeholder='man'
                    options={['Male', 'Female']}
                />
            </div>
            <div className='py-2 w-full'>
                <Input 
                    placeholder='seoul'
                    type="text"
                />
            </div>
            <div className='py-2 w-full'>
                <Input 
                    placeholder='010-1111-1111'
                    type="tel"
                />
            </div>
            <div className='py-2 w-full'>
                <Input 
                    placeholder='test@gmail.com'
                    type="mail"
                />
            </div>
            <div className='w-full mb-4'>
                <Textarea 
                    placeholder='How much is the f-2-r visa ap.........'
                    rows={8}
                />
            </div>
            <div className='py-2 w-full mb-1 text-center'>
                <button className='bg-[#00CE3A] text-white px-8 py-2 rounded-3xl'>To apply</button>
            </div>
            <p className='text-center text-[12px] text-[#000000]'>The person in charge will contact you after checking.</p>
        </div>
    </div>
  )
}

export default F2RApplication