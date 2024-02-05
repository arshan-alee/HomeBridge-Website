import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Shared/Input";
import Select from "../Shared/Select";
import Textarea from "../Shared/Textarea";

function JobApplicationForm({ title, type }) {
  const navigate = useNavigate();

  return (
    <div className="w-full lg:w-1/3 md:px-6">
      <div className="mx-2 pb-4 text-xl custom-shadow-right-bottom px-4 lg:px-8 rounded-xl lg:rounded-[30px] bg-white">
        <h3 className="font-semibold text-[16px] py-3">Job application</h3>
        <div className="py-1 w-full">
          <Input placeholder="Name" type="text" />
        </div>

        <div className="py-1 w-full">
          <Select
            placeholder="Gender"
            options={["Japan", "South Korea"]}
            onChange={() => console.log("abc")}
          />
        </div>

        <div className="py-1 w-full">
          <Select
            placeholder="Country"
            options={["Male", "Female"]}
            onChange={() => console.log("abc")}
          />
        </div>

        <div className="py-1 w-full">
          <Input placeholder="Phone number" type="tel" />
        </div>
        <div className="py-1 w-full">
          <Input placeholder="E-mail" type="email" />
        </div>
        <div className="w-full mb-4">
          <Textarea placeholder="Message" rows={15} />
        </div>

        <div className="flex justify-center mt-4 mb-2">
          <button className="w-full bg-[#00CE3A] text-white px-8 py-2 rounded-3xl text-[16px]">
            To apply
          </button>
        </div>
        <p className="text-center text-[10px] font-medium mb-2">
          The person in charge will contact you after checking.
        </p>
      </div>
    </div>
  );
}

export default JobApplicationForm;
