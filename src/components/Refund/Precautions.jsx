import React from 'react'

function Precautions() {
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
    <div className="lg:mx-72 pb-4 text-xl custom-shadow-right-bottom p-6 md:p-12 rounded-[12px]">
            <h1 className="mb-2 text-[#2C406E] text-[20px] lg:text-[14px]">Precautions</h1>
          <div className="mb-12 px-6 lg:px-0">
            <ul className="list-disc">
              {
                precautions.map((item, index)=> (
                  <li className="text-[14px]">{item}</li>
                ))
              }
            </ul>
          </div>
            <h1 className="mb-2 text-[#2C406E] text-[20px] lg:text-[16px]">Refund Regulations</h1>
          <div className="mb-12 px-6 lg:px-0">
            <ul className="list-disc">
              {
                refundRegulations.map((item, index)=> (
                  <li className="text-[14px]">{item}</li>
                ))
              }
            </ul>
          </div>
        </div>
  )
}

export default Precautions