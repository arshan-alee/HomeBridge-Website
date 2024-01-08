import { useEffect, useState } from "react";

const testimonialsData = [
  {
    testimonial:
      "I recommend it. I solved the problem from employment to visa through an expert, not a broker. I was burdened with getting a job because I lived in a rural area, but I'm fully satisfied.",
    givenBy: "Barbara ",
    rating: "/images/testimonials__rating1.png",
  },
  {
    testimonial:
      "It is an essential service for foreigners. Most foreigners want to prepare for employment and make money, but it is difficult and difficult to get help, but they got the opportunity to get an f-visa through Homebridge.",
    givenBy: "Antonio ",
    rating: "/images/testimonials_rating2.png",
  },
  {
    testimonial:
      "It was very helpful when I was worried about going to school and not getting a job in Seoul. I was not lonely because I had a person from the same country in my accommodation.",
    givenBy: "Nguyen ",
    rating: "/images/testimonials__rating1.png",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(
        (current) => (current + 1) % testimonialsData.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Functions to handle manual review change
  const goPrev = () =>
    setCurrentTestimonial((current) =>
      current === 0 ? testimonialsData.length - 1 : current - 1
    );

  const goNext = () =>
    setCurrentTestimonial((current) => (current + 1) % testimonialsData.length);

  return (
    <div className="my-32 w-[80%] mx-auto flex justify-between items-center gap-20">
      {/* Left */}
      <div className="w-1/2">
        <h3 className="text-lg font-medium text-[#00CE3A] mb-2">
          TESTIMONIALS
        </h3>
        <h1 className="text-[40px] font-semibold text-[#2B2B2B] leading-[45px] mb-5">
          Look What Our <br /> Customers Say!
        </h1>
        <p className="font-nomral text-[#2B2B2B]">
          We will create a service that will help both <br /> foreigners and
          business owners.
        </p>
        <div className="w-fit flex justify-start items-center gap-10 mt-10">
          <img
            src="/images/testimonials__backward.png"
            alt="logo"
            className="cursor-pointer"
            onClick={goPrev}
          />
          <img
            src="/images/testimonials__forward.png"
            alt="logo"
            className="cursor-pointer"
            onClick={goNext}
          />
        </div>
      </div>
      {/* Right */}
      <div className=" w-1/2 flex justify-center items-center gap-5 ">
        <div
          className="relative  p-10 rounded-[30px]"
          style={{
            boxShadow: " 10px 10px 30px 0px rgba(0, 0, 0, 0.10)",
          }}
        >
          {/* Ball */}
          <img
            src="/images/testimonials__ellipse.png"
            alt="logo"
            className="absolute z-[-1] -top-6 -left-6"
          />

          <p className="text-[#2B2B2B]">
            {testimonialsData[currentTestimonial].testimonial}
          </p>

          <hr className="bg-[#D4D4D4] mt-10" />

          <div className="flex justify-between items-center mt-7">
            <p className="text-lg font-medium">
              {testimonialsData[currentTestimonial].givenBy}
            </p>

            <img src={testimonialsData[currentTestimonial].rating} alt="logo" />
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 flex-col">
          {[1, 2, 3].map((_, i) => (
            <div
              className={`w-[3px] rounded-md h-[50px] ${
                currentTestimonial === i ? "bg-[#808080]" : "bg-[#AAAAAA]"
              }`}
            ></div>
          ))}
          {/* <div className="w-[3px] rounded-md h-[50px] bg-[#AAAAAA]"></div> */}
          {/* <div className="w-[3px] rounded-md h-[50px] bg-[#AAAAAA]"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
