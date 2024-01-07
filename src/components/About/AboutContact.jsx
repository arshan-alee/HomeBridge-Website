import React from "react";

const AboutContact = () => {
  return (
    <div className="bg-white">
      <div
        className="w-[80%] my-[100px] mx-auto min-h-[600px] p-2 flex flex-row"
        style={{
          borderRadius: "10px",
          background: "#FFF",
          boxShadow: "0px 0px 60px 30px rgba(0, 0, 0, 0.03)",
        }}
      >
        <div className="bg-[#00CE3A] w-[40%] rounded-lg">
          <div className="pl-10 pt-10">
            <h2 className="text-[#FFF] text-[28px] font-semibold">
              Contact Information
            </h2>
            <p className="text-[#011C2A] text-lg font-normal mt-2">
              Say something to start a live chat!
            </p>

            <div className="flex flex-row gap-4 mt-10">
              <img src="./images/email.svg" />
              <p className="text-[#FFF] text-base font-normal">
                thinkbig90@naver.com
              </p>
            </div>
            <div className="flex flex-row gap-4 mt-10">
              <img src="./images/location.svg" />
              <p className="text-[#FFF] text-base font-normal">
                B1 381, Uicheon-ro, Dobong-gu, Seoul
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] w-[40%]"></div>
      </div>
    </div>
  );
};

export default AboutContact;
