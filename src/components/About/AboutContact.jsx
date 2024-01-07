import React from "react";
import AboutInputContainer from "./AboutInputContainer";

const AboutContact = () => {
  return (
    <div className="bg-white">
      <div
        className="w-[80%] my-[100px] mx-auto min-h-[600px] p-2 flex flex-row relative"
        style={{
          borderRadius: "10px",
          background: "#FFF",
          boxShadow: "0px 0px 60px 30px rgba(0, 0, 0, 0.03)",
        }}
      >
        <div className=" bg-red-500 w-10 h-10 absolute top-[-30px] left-[-30px] rounded-3xl items-center flex justify-center">
          <p className="text-[#000] text-2xl font-semibold">1</p>
        </div>

        {/* Left Container */}
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

        {/* Right Container */}

        <div className="bg-[#fff] w-[60%] px-10 pt-10">
          <div className="flex flex-row gap-10">
            <div className="flex-1">
              <AboutInputContainer label="First Name" />
            </div>
            <div className="flex-1">
              <AboutInputContainer label="Last Name" />
            </div>
          </div>

          <div className="flex flex-row gap-10 mt-5">
            <div className="flex-1">
              <AboutInputContainer label="Email" />
            </div>
            <div className="flex-1">
              <AboutInputContainer label="Phone Number" />
            </div>
          </div>

          <div className="flex-1  mt-5">
            <AboutInputContainer
              label="Message"
              placeHolder="Write your message.."
            />
          </div>
          <div className="flex justify-end">
            <button className=" rounded-md bg-[#00CE3A] shadow-lg text-[#FFF] w-[200px] py-3 mt-5">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
