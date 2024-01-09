import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const heroSliderData = [
  {
    imgSrc: "/images/hero__slider__1.png",
  },
  {
    imgSrc: "/images/hero__slider__2.png",
  },
  {
    imgSrc: "/images/hero__slider__2.png",
  },
  {
    imgSrc: "/images/hero__slider__2.png",
  },
];

const Hero = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider((current) => (current + 1) % heroSliderData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const goPrev = () =>
    setCurrentSlider((current) =>
      current === 0 ? heroSliderData.length - 1 : current - 1
    );

  const goNext = () =>
    setCurrentSlider((current) => (current + 1) % heroSliderData.length);

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center"
      style={{
        borderRadius: "0px 0px 800px 800px",
        background:
          "linear-gradient(180deg, rgba(76, 201, 240, 0.00) 0%, rgba(0, 206, 58, 0.30) 100%)",
      }}
    >
      <div className="w-[75%] flex justify-between items-center gap-10 mb-16">
        {/* Left Container */}
        <div className="w-[55%]">
          <h1 className="text-[55px] font-bold leading-[60px]">
            Get a job and <br /> accommodation <br /> in Korea .
          </h1>
          <p className="text-[#808080] font-normal leading-[24px] mt-3">
            HomeBridge is a service that provides jobs and accommodation for
            foreigners at the same time.
          </p>
        </div>
        {/* Right Container */}
        <div className="w-[45%]">
          <div className="w-full h-[300px]  relative">
            {/* Ball */}
            <img
              src="/icons/hero_ball.svg"
              alt="logo"
              className="absolute -top-10 -right-10"
            />
            {/* Slider */}
            <img
              src={heroSliderData[currentSlider].imgSrc}
              alt="logo"
              className="rounded-[20px] shadow-[10px 10px 40px 0px rgba(0, 0, 0, 0.20)] w-full h-full "
            />

            {/* Chevrons */}

            <div
              onClick={goPrev}
              className="absolute top-[45%] -left-5 w-[40px] h-[40px] bg-[#fff] rounded-full grid place-items-center cursor-pointer"
            >
              <FaAngleLeft className="text-[#aaaaaa]" />
            </div>

            <div
              onClick={goNext}
              className="absolute top-[45%] -right-5 w-[40px] h-[40px] bg-[#fff] rounded-full grid place-items-center cursor-pointer"
            >
              <FaAngleRight className="text-[#aaaaaa]" />
            </div>
          </div>
          {/* Indicators */}
          <div className="grid grid-cols-4 gap-5 w-full px-5 mt-3">
            {[1, 2, 3, 4].map((item, i) => (
              <div
                key={i}
                className={`col-span-1 ${
                  currentSlider === i ? "bg-[#00CE3A]" : "bg-[#fff]"
                } h-[5px] rounded-xl`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
