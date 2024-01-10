const servicesData = [
  {
    imgSrc: "/images/services__search.png",
    title: "Search For a Job",
    para: "Find local jobs and offer them to suitable foreign applicants",
  },
  {
    imgSrc: "/images/services__home.png",
    title: "Rent a House",
    para: "Provide accommodation for foreigners at a reasonable price to resolve difficulties in their place of residence at work",
  },
  {
    imgSrc: "/images/services__file.png",
    title: "Visa support",
    para: "Find local jobs and offer them to suitable foreign applicants",
  },
];

const Services = () => {
  return (
    <div className=" pt-16 pb-20 bg-[#f2f2f2] w-full px-5 sm:px-24 md:px-36 lg:px-24">
      <h3 className="text-lg font-medium text-center text-[#00CE3A] mb-2">
        OUR SERVICES
      </h3>
      <h1 className="text-[33px] sm:text-[37px] font-semibold text-left sm:text-center text-[#2B2B2B] leading-[40px] sm:leading-[50px] mb-5">
        It solves foreigners' concerns at once.
      </h1>

      {/* Cards Section */}
      <div className="mt-12 sm:mt-16 grid lg:grid-cols-3 gap-10">
        {servicesData.map((item, i) => (
          <div
            key={i}
            className="col-span-1 pt-16 sm:pt-20 pb-10 px-12 sm:px-16 lg:px-10 bg-[#fff] rounded-[30px] text-center"
            style={{
              boxShadow: "4px 10px 30px 0px rgba(0, 0, 0, 0.03)",
            }}
          >
            <div className="w-[75px] sm:w-[65px] h-[75px] sm:h-[65px] grid place-items-center rounded-full bg-[#00CE3A] mb-5 mx-auto">
              <img src={item.imgSrc} alt={item.title} className="w-[30px]" />
            </div>

            <h1 className="text-lg font-medium mb-1">{item.title}</h1>

            <p className="text-[#808080] font-light text-[15px]">{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
