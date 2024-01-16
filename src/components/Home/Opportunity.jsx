import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Opportunity = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("foreigners");

  const handleCurrentTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="my-24 md:my-32 w-[90%] sm:w-[70%] md:w-[55%] lg:w-[75%] mx-auto">
      {/* Toggle */}
      <div className="w-full lg:w-[45%] bg-[#f1f1f1] flex text-center mx-auto rounded-md p-[4px]">
        <div
          className={`${
            currentTab === "foreigners"
              ? "bg-[#00CE3A] text-[#fff]"
              : "bg-[#f1f1f1] text-[#000]"
          } w-1/2 rounded-md py-3 cursor-pointer`}
          onClick={() => setCurrentTab("foreigners")}
        >
          <h3 className="sm:text-base text-[14px]">For Foreigners</h3>
        </div>

        <div
          className={`${
            currentTab === "korean"
              ? "bg-[#00CE3A] text-[#fff]"
              : "bg-[#f1f1f1]  text-[#000]"
          } w-1/2 rounded-md py-3 cursor-pointer`}
          onClick={() => setCurrentTab("korean")}
        >
          <h3 className="sm:text-base text-[14px]">제휴사</h3>
        </div>
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 mt-20">
        <div className=" lg:col-span-2 relative">
          <img
            src={
              currentTab === "foreigners"
                ? "/images/opportunity__image__2.png"
                : "/images/opportunity__image__1.png"
            }
            alt="logo"
            className="w-full h-full z-10"
          />
          {/* Ball */}
          <img
            src="/images/opportunity__ellipse__1.png"
            alt="logo"
            className="absolute -top-10 sm:-top-10 -left-5 sm:-left-10 z-[-1]"
          />
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-lg font-medium text-[#00CE3A] mb-2">
            {currentTab === "foreigners" ? "For Foreigners" : "업무제휴"}
          </h3>
          <h1 className="text-[34px] sm:text-[40px] font-semibold text-[#2B2B2B] leading-[45px] sm:leading-[50px] mb-5">
            {currentTab === "foreigners" ? (
              <>
                If you want to live in Korea,
                <br className="lg:block hidden" />
                take the opportunity <br className="lg:block hidden" />
                through HomeBridge.
              </>
            ) : (
              <>
                외국인 근로자 혹은 숙소가 <br className="lg:block hidden" />{" "}
                필요하신가요?
              </>
            )}
          </h1>

          <div className="flex justify-center items-center">
            <button
              onClick={() =>
                navigate(
                  `${currentTab === "foreigners" ? "/job_house" : "about"}`
                )
              }
              className="bg-[#00CE3A] mx-auto w-full lg:w-[43%] mt-5 lg:mt-12  text-center text-[#fff] relative rounded-3xl px-4 py-4 lg:py-3"
            >
              <span> {currentTab === "foreigners" ? "Apply" : "연락하기"}</span>
              <FaAngleRight className="absolute right-5 top-5 lg:top-4 text-[#fff]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
