import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const Opportunity = () => {
  const [currentTab, setCurrentTab] = useState("foreigners");

  const handleCurrentTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="my-32 w-[80%] mx-auto">
      {/* Toggle */}
      <div className="w-[45%] bg-[#f1f1f1] flex text-center mx-auto rounded-md p-[4px]">
        <div
          className={`${
            currentTab === "foreigners"
              ? "bg-[#00CE3A] text-[#fff]"
              : "bg-[#f1f1f1] text-[#000]"
          } w-1/2 rounded-md py-3 cursor-pointer`}
          onClick={() => setCurrentTab("foreigners")}
        >
          <h3 className="">For Foreigners</h3>
        </div>

        <div
          className={`${
            currentTab === "korean"
              ? "bg-[#00CE3A] text-[#fff]"
              : "bg-[#f1f1f1]  text-[#000]"
          } w-1/2 rounded-md py-3 cursor-pointer`}
          onClick={() => setCurrentTab("korean")}
        >
          <h3 className="">제휴사</h3>
        </div>
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-5 gap-24 mt-20">
        <div className="col-span-2 relative">
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
            className="absolute -top-10 -left-10 z-[-1]"
          />
        </div>

        <div className="col-span-3">
          <h3 className="text-lg font-medium text-[#00CE3A] mb-2">
            {currentTab === "foreigners" ? "For Foreigners" : "업무제휴"}
          </h3>
          <h1 className="text-[40px] font-semibold text-[#2B2B2B] leading-[50px] mb-5">
            {currentTab === "foreigners" ? (
              <>
                If you want to live in Korea,
                <br />
                take the opportunity
                <br />
                through HomeBridge.
              </>
            ) : (
              <>
                외국인 근로자 혹은 숙소가 <br /> 필요하신가요?
              </>
            )}
          </h1>

          <div className="flex justify-center items-center">
            <button className="bg-[#00CE3A] mx-auto w-[43%] mt-12  text-center text-[#fff] relative rounded-3xl px-4 py-3">
              <span> {currentTab === "foreigners" ? "Apply" : "연락하기"}</span>
              <FaAngleRight className="absolute right-5 top-4 text-[#fff]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
