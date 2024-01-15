import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useImageSlider from "../../utils/useImageSlider";

const ImageShowcase = ({ images, type }) => {
  const { currentImageIndex, prevImage, nextImage, selectImage } =
    useImageSlider(0, images);

  return (
    <div className="flex flex-col items-center lg:px-6 lg:py-8 rounded-2xl lg:bg-white lg:custom-shadow-right-bottom">
      <div className="relative w-full mb-2">
        <img
          src={images[currentImageIndex]}
          alt={`${currentImageIndex + 1}`}
          className="w-full h-auto"
        />
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 focus:outline-none bg-[#FFFFFF80] p-2 rounded-full"
        >
          <FaChevronLeft className="w-4 md:w-6 h-4 md:h-6 text-[#00000080]" />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none bg-[#FFFFFF80] p-2 rounded-full"
        >
          <FaChevronRight className="w-4 md:w-6 h-4 md:h-6 text-[#00000080]" />
        </button>
      </div>
      <div className="w-full hidden lg:flex space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => selectImage(index)}
            className={`w-1/4 md:h-[200px] lg:h-[105px] overflow-hidden focus:outline-none ${
              index === currentImageIndex ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageShowcase;
