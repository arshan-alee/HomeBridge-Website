import React, { useEffect, useState } from "react";
import Input from "../components/Shared/Input";
import Textarea from "../components/Shared/Textarea";
import Select from "../components/Shared/Select";
import toast from "react-hot-toast";
import { GetSingleData, PostData } from "../axios/NetworkCalls";
import { useFormik } from "formik";
import { f2RApplicationSchema } from "../utils/validation-schema";
import { useNavigate, useParams } from "react-router-dom";
import RequestLoader from "../components/Shared/RequestLoader";

function EditF2RApplication() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState();
  const [formLoading, setFormLoading] = useState(true);
  const [formError, setFormError] = useState(null);

  const getData = async () => {
    try {
      setFormLoading(true);
      const response = await GetSingleData(`/api/f_2_r/application?id=${id}`);

      console.log("response->");

      if (response.success) {
        setFormData(response?.data);
      } else {
        setFormError(response?.message);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setFormError(err);
    } finally {
      setFormLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-12 md:my-24">
      <h2 className="px-36 text-[38px] font-bold mb-16 hidden lg:block">
        F-2-R Application
      </h2>
      <div className="mx-2 md:mx-16 lg:mx-72 pb-4 text-xl custom-shadow-right-bottom px-4 rounded-2xl">
        <h3 className="font-600 text-[16px] font-bold lg:font-normal pt-6 pb-4">
          F-2-R Application
        </h3>
        <div className="py-2 w-full">
          <Input
            placeholder="Jason Kim"
            type="text"
            name="name"
            value={formData?.name || ""}
          />
        </div>
        <div className="py-2 flex flex-col md:flex-row w-full gap-2">
          <Select
            name="gender"
            options={["Male", "Female"]}
            value={formData?.gender || ""}
          />
          <Select
            name="nationality"
            options={["South Korea", "China", , "Pakistan"]}
            value={formData?.nationality || ""}
          />
        </div>
        <div className="py-2 w-full">
          <Input
            placeholder="seoul"
            type="text"
            name="address"
            value={formData?.address || ""}
          />
        </div>
        <div className="py-2 w-full">
          <Input
            placeholder="010-1111-1111"
            type="tel"
            name="phoneNumber"
            value={formData?.phoneNumber || ""}
          />
        </div>
        <div className="py-2 w-full">
          <Input
            placeholder="test@gmail.com"
            type="mail"
            name="email"
            value={formData?.email || ""}
          />
        </div>
        <div className="w-full mb-4">
          <Textarea
            placeholder="How much is the f-2-r visa ap........."
            rows={8}
            name="message"
            value={formData?.message || ""}
          />
        </div>
      </div>
    </div>
  );
}

export default EditF2RApplication;
