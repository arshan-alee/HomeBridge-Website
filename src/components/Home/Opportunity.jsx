import {  FaAngleRight } from "react-icons/fa6";

const Opportunity = () => {
  return (
    <div className="mt-32 w-[80%] mx-auto">
      {/* Toggle */}
      <div className="w-[40%] bg-[#f1f1f1] flex text-center mx-auto rounded-md p-[4px]">
        <div className="bg-[#00CE3A] w-1/2 rounded-md py-3">
          <h3 className="text-[#fff]">For Foreigners</h3>
        </div>

        <div className="bg-[#f1f1f1] w-1/2 rounded-md py-3">
          <h3 className="">제휴사</h3>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex justify-center items-center gap-32 mt-20">
        <div className="w-[30%] relative">
          <img
            src="/images/opportunity__image__1.png"
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

        <div className="w-[40%] ">
          <h3 className="text-lg font-medium text-[#00CE3A] mb-2">
            For Foreigners
          </h3>
          <h1 className="text-[40px] font-semibold text-[#2B2B2B] leading-[50px] mb-5">
            If you want to live in Korea, <br /> take the opportunity <br />{" "}
            through HomeBridge.
          </h1>
          <p className="font-nomral text-[#808080]">
            HomeBridge is a start-up that solves the problem of local manpower
            shortages and foreign employment problems.
          </p>

          <button className="bg-[#00CE3A] mx-auto w-[50%] mt-20 text-center text-[#fff] relative rounded-3xl px-4 py-3">
          <span>Apply</span>
          <FaAngleRight className="absolute right-5 top-4 text-[#fff]"/>




          </button>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
