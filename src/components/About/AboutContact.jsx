import React from "react";
import AboutInputContainer from "./AboutInputContainer";

const AboutContact = () => {
  return (
    <div className="bg-white">
      <div className="w-[80%] my-[100px]  mx-auto min-h-[600px] p-2 bg-white flex flex-col md:flex-row relative shadow-md rounded-lg">
        {/* Left Container */}
        <div className="bg-[#00CE3A] md:w-[40%]  w-[100%] h-[470px] md:h-auto rounded-lg md:text-left text-center relative">
          <div className="md:pl-10 pt-10">
            <h2 className="text-[#FFF] text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
              Contact Information
            </h2>
            <p className="text-[#C9C9C9] md:text-[#011C2A] text-xs md:text-sm lg:text-lg  font-normal mt-2">
              Say something to start a live chat!
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center mt-10">
              <img src="./images/email.svg" />
              <p className="text-[#FFF] text-xs md:text-sm lg:text-base  font-normal">
                thinkbig90@naver.com
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center mt-10">
              <img src="./images/location.svg" width="30" height="30" />

              <p className="text-[#FFF] text-xs md:text-sm lg:text-base font-normal">
                B1 381, Uicheon-ro, Dobong-gu, Seoul
              </p>
            </div>
          </div>

          <div>
            <img
              src="./images/about-ellipse.svg"
              className="absolute bottom-[-40px] right-[-40px]"
            />
          </div>
        </div>

        {/* Right Container */}

        <div className="bg-white md:w-[60%] w-[100%] mx-auto py-4 px-4 rounded-lg ">
          <div className="flex flex-1 flex-col gap-4 sm:flex-row md:gap-8 sm:pr-2 md:pr-6 lg:pr-0 ">
            <div className="flex-1 md:w-1/2">
              <AboutInputContainer label="First Name" />
            </div>
            <div className="flex-1 md:w-1/2">
              <AboutInputContainer label="Last Name" />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4 sm:flex-row md:gap-8 sm:pr-2 md:pr-6 lg:pr-0 ">
            <div className="flex-1 md:w-1/2">
              <AboutInputContainer label="Email" />
            </div>
            <div className="flex-1 md:w-1/2">
              <AboutInputContainer label="Phone Number" />
            </div>
          </div>

          <div className="mt-4">
            <AboutInputContainer
              label="Message"
              placeHolder="Write your message..."
            />
          </div>

          <div className="flex md:justify-end justify-center">
            <button className="rounded-md bg-[#00CE3A] shadow-lg text-white px-4 py-2 mt-4 w-full md:w-auto">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
