import { IoMdCheckmark } from "react-icons/io";

const Day = () => {
  return (
    <div className="w-full my-8 custom-shadow-right-bottom rounded-xl overflow-hidden">
      <div className="bg-[#00CE3A] text-white pl-6 py-3 flex justify-start items-center gap-7">
        <h1 className="text-[24px] font-bold   ">1일차</h1>

        <h3 className="text-base font-normal">
          2023.12.30(토)-서울/전주/순천/광양
        </h3>
      </div>

      <div className="p-6 md:p-12">
        {/* Schedules */}
        {/* Row 1 */}
        <div className="grid grid-cols-5 gap-3 mb-3">
          <div className="col-span-1"></div>
          <div className="col-span-4 flex justify-start item-center gap-4">
            {/* Left */}
            <div className="flex flex-col justify-center items-center w-[24px] gap-2 h-full">
              <div className="bg-[#00CE3A] rounded-full p-1 ">
                <IoMdCheckmark className="text-[#fff] text-[16px]" />
              </div>
              <div className="bg-[#EAEAEA] rounded-sm h-full w-[4px]"></div>
            </div>
            {/* Right */}
            <div className="">
              <h1 className="text-[20px] font-semibold text-[#0F5780] mb-2">
                서울
              </h1>
              <p className="text-[#384247] mb-1">
                07:00 광화문사거리 동화면세점 앞(10분전 집결)
              </p>
              <p className="text-[#384247] mb-8">-5호선 광화문역 6번출구</p>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-5 gap-3 mb-3">
          <div className="col-span-1">
            <img src="/images/day__pic.png" alt="logo" className="w-full" />
            <img src="/images/day__pic.png" alt="logo" className="w-full" />
          </div>

          <div className="col-span-4 flex justify-start item-center gap-4 mb-3">
            {/* Left */}
            <div className="flex flex-col justify-center items-center gap-2 h-full w-[24px]">
              <div className="bg-[#00CE3A] rounded-full p-[7px]"></div>
              <div className="bg-[#EAEAEA] rounded-sm h-full w-[4px]"></div>
            </div>
            {/* Right */}
            <div className="">
              <h1 className="text-[20px] font-semibold text-[#0F5780] mb-2">
                전주
              </h1>
              <p className="mb-1 text-[#384247]">
                10:00 천년의 풍경-전주한옥마을
              </p>
              <p className="text-[#384247]">
                -천년의 풍경을 간직한 다양한 볼거리와 체험이 가득한 전주한옥마을{" "}
                <br />
                -경기전,전동성당,풍남문,전주향교,오목대 명소 탐방 -풍년제과{" "}
                <br />
                -왕초코파이, 왕오징어튀김,바게트버거, 새우만두등 먹거리 탐방{" "}
                <br />
              </p>
              <p className="text-[#384247] mt-2 mb-8">12:00 중식(전주비빔밥)</p>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-5 gap-3 mb-3">
          <div className="col-span-1">
            <img src="/images/day__pic.png" alt="logo" className="w-full" />
          </div>

          <div className="col-span-4 flex justify-start item-center gap-4 mb-3">
            {/* Left */}
            <div className="flex flex-col justify-center items-center gap-2 h-full w-[24px]">
              <div className="bg-[#00CE3A] rounded-full p-[7px]"></div>
              <div className="bg-[#EAEAEA] rounded-sm h-full w-[4px]"></div>
            </div>
            {/* Right */}
            <div className="">
              <h1 className="text-[20px] font-semibold text-[#0F5780] mb-2">
                순천
              </h1>
              <p className="text-[#384247] mb-1">
                15:30 타임머신타고 조선시대로-낙안읍성 민속마을
              </p>
              <p>
                -마치 타임머신을 타고 조선시대로 돌아간 느낌이에요. <br />{" "}
                -세월의 흐름이 그대로 묻어있는 성곽을 따라, 가볍게 산책해보세요.
              </p>
              <p className="text-[#384247] mt-2 mb-8">12:00 중식(전주비빔밥)</p>
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-5 gap-3 mb-3">
          <div className="col-span-1">
            {" "}
            <img src="/images/day__pic.png" alt="logo" className="w-full" />
          </div>
          <div className="col-span-4 flex justify-start item-center gap-4">
            {/* Left */}
            <div className="flex flex-col justify-center items-center gap-2 h-full w-[24px]">
              <div className="bg-[#00CE3A] rounded-full p-[7px]"></div>
              <div className="bg-[#EAEAEA] rounded-sm h-full w-[4px]"></div>
            </div>
            {/* Right */}
            <div className="">
              <h1 className="text-[20px] font-semibold text-[#0F5780] mb-2">
                광양
              </h1>
              <p className="text-[#384247] mb-1">
                19:30 광양숙소(일반호텔급) 도착 및 1박
              </p>
              <p className="text-[#384247] mb-8">이후 자유시간</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day;
