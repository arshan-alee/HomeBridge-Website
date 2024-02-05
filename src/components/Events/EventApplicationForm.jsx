import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Shared/Input";
import Select from "../Shared/Select";
import Textarea from "../Shared/Textarea";

function EventApplicationForm({ title, type }) {
  const navigate = useNavigate();

  return (
    <div className="w-full lg:w-1/3 md:px-6">
      <div className="mx-2 pb-4 text-xl custom-shadow-right-bottom px-4 lg:px-8 rounded-xl lg:rounded-[30px] bg-white">
        <h3 className="font-semibold text-[16px] py-3">Event application</h3>
        <div className="py-1 w-full">
          <Input placeholder="Name" type="text" />
        </div>

        <div className="py-1 w-full">
          <Input placeholder="Phone number" type="tel" />
        </div>
        <div className="py-1 w-full">
          <Input placeholder="E-mail" type="email" />
        </div>
        <div className="w-full mb-4">
          <Textarea
            placeholder="Message"
            rows={10}
            onChange={() => console.log("abc")}
          />
        </div>

        <div className="flex justify-between border-t pt-4">
          <p className="text-[12px] font-medium">Price</p>
          <p className="text-[24px] font-semibold text-[#00CE3A]">199,000KRW</p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-[#00CE3A] text-white px-8 py-2 rounded-3xl text-[16px] w-full"
            onClick={() => navigate("/payment/success")}
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventApplicationForm;
