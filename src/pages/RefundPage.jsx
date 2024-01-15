import React, { useState } from 'react'
import Input from '../components/Shared/Input'

function RefundPage() {
  const purchaseInfo = [
    { label: 'Payment date', value: '2023.12.08' },
    { label: 'Product', value: "[New Year's Day] With ...." },
    { label: 'Date', value: '2023.12.30 ~ 2023.12.31 ' },
    { label: 'Payment method', value: 'Credit Card (Kukmin Card)' },
    { label: 'Payment amount', value: '199,000KRW' },
  ];

  const [condition, setCondition] = useState(false);

  const refundInfo = [
    { label: 'Application date', value: '2023.12.18 15:50' },
    { label: 'Refund amount', value: '199,000KRW' },
  ];

  const precautions = [
    "If the traveler cancels the reservation before the start date of the trip after the reservation is confirmed, a cancellation fee will be charged according to the time of notification of cancellation.",
    "The cancellation time is based on the time when the cancellation notification was recorded through the reservation inquiry window on the Zoom platform.",
    "In the case of entrance/ticket products, there is no refund after purchase.",
    "The date and time is based on the local time of the service destination (or service destination).",
    "Travel (including tours) or experience dates are based on 00:00 on the day of reservation.",
    "When paying with an overseas card, some fees may be charged depending on the card company even if it is set as a full refund.",
    "Refunds after overseas card payments may be displayed more or less than the amount you paid, depending on the exchange rate application of the payment card company."
  ];

  const refundRegulations = [
    "~ 7 days ago: Full refund of travel fees",
    "7 to 3 days ago: 50% cancellation fee applies to the total travel fee",
    "2~1 days ago: 100% cancellation fee of travel fee applied (no refund)",
    "Day of travel: 100% cancellation fee of travel fee applied (no refund)"
  ];

  return (
    <div className="my-12 lg:my-22">
    {
      condition ? 
      <div className="w-full h-screen flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-[16px]">Your refund application has been completed.</h2>
        <p className="text-[14px] mb-8">(The refund may be completed 30 minutes to 1 hour depending on the payment method.)</p>
        <button className="bg-[#00CE3A] text-white rounded-[20px] px-8 py-4 btn-shadow">Move main page</button>
      </div>
      :
      <>
        <h2 className="mx-2 md:mx-16 lg:mx-72 text-[16px] font-bold mb-6 hidden lg:block">Refund application</h2>
        <div className="relative mx-2 md:mx-16 lg:mx-72 pb-4 text-xl custom-shadow-right-bottom p-6 md:p-12 rounded-lg mb-8">
          <div className='border-b pb-2'>
            <h2 className='mb-2 text-[#2C406E] text-[15px]'>Purchase information</h2>
            {
              purchaseInfo.map((item, index) => (
                <div className='flex justify-between'>
                  <h2 className='text-[#6A6A6A] text-[12px]'>{item.label}</h2>
                  <p className='text-[#181A1F] text-[12px]'>{item.value}</p>
                </div>
              ))
            }
          </div>
          <div className='border-b py-2'>
            <h2 className='mb-2 text-[#2C406E] text-[15px]'>Refund information</h2>
            {
              refundInfo.map((item, index) => (
                <div className='flex justify-between'>
                  <h2 className='text-[#6A6A6A] text-[12px]'>{item.label}</h2>
                  <p className='text-[#181A1F] text-[12px]'>{item.value}</p>
                </div>
              ))
            }
          </div>
          <div className="flex flex-col md:flex-row">
            <div className='w-full md:w-1/2 py-2'>
              <h2 className='mb-2 text-[#2C406E] text-[15px]'>Refund account</h2>
              <div className='relative space-y-4'>
                <Input placeholder="Bank account number" />
                <Input placeholder="Account name" />
                <Input placeholder="Bank" />
              </div>
            </div>
            <div className='w-full flex items-center md:items-end justify-center md:justify-end'>
              <button className="bg-[#00CE3A] text-white text-[16px] px-6 py-2 rounded-[20px] btn-shadow" onClick={()=> setCondition(true)}>Refund request</button>
            </div>
          </div>
        </div>
        <div className="mx-2 md:mx-16 lg:mx-72 pb-4 text-xl custom-shadow-right-bottom p-6 md:p-12 rounded-lg">
          <div className="mb-12">
            <h1 className="mb-2 text-[#2C406E] text-[10px] md:text-[14px]">Precautions</h1>
            <ul className="list-disc">
              {
                precautions.map((item, index)=> (
                  <li className="text-[14px]">{item}</li>
                ))
              }
            </ul>
          </div>
          <div className="mb-12">
            <h1 className="mb-2 text-[#2C406E] text-[16px]">Refund Regulations</h1>
            <ul className="list-disc">
              {
                refundRegulations.map((item, index)=> (
                  <li className="text-[14px]">{item}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </>
    }
    </div>
  )
}

export default RefundPage