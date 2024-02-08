import React from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../Shared/Input";
import Textarea from "../../Shared/Textarea";
import Select from "../../Shared/Select";

function ApplicationForm({ title, type }) {
  const navigate = useNavigate();

  return (
    <div className="w-full lg:w-1/3 md:px-6">
      <div className="mx-2 pb-4 text-xl custom-shadow-right-bottom px-4 lg:px-8 rounded-xl lg:rounded-[30px] bg-white">
        <h3 className="font-semibold text-[16px] py-3">{title}</h3>
        <div className="py-2 w-full">
          <Input placeholder="Jason Kim" type="text" />
        </div>
        {type === "job" && (
          <div className="py-2 w-full">
            <Select
              placeholder="japan"
              options={["Japan", "South Korea"]}
              onChange={() => console.log("abc")}
            />
          </div>
        )}
        {type === "job" && (
          <div className="py-2 w-full">
            <Select
              placeholder="man"
              options={["Male", "Female"]}
              onChange={() => console.log("abc")}
            />
          </div>
        )}
        <div className="py-2 w-full">
          <Input placeholder="010-1111-1111" type="tel" />
        </div>
        <div className="py-2 w-full">
          <Input placeholder="test@gmail.com" type="mail" />
        </div>
        <div className="w-full mb-4">
          <Textarea
            placeholder={
              type === "job"
                ? "Message"
                : "How long is the rent?................."
            }
            rows={10}
          />
        </div>
        {type === "event" ? (
          <>
            <div className="flex justify-between border-t pt-4">
              <p className="text-[12px] font-medium">Price</p>
              <p className="text-[24px] font-semibold text-[#00CE3A]">
                199,000
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="bg-[#00CE3A] text-white px-8 py-2 rounded-3xl text-[16px] w-full"
                onClick={() => navigate("/payment/success")}
              >
                Payment
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center mt-4 mb-2">
              <button className="w-full bg-[#00CE3A] text-white px-8 py-2 rounded-3xl text-[16px]">
                To apply
              </button>
            </div>
            <p className="text-center text-[12px] font-medium mb-2">
              The person in charge will contact you after checking.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default ApplicationForm;
