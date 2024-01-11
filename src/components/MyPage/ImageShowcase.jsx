import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageShowcase = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="flex flex-col items-center p-4 py-8 rounded-b-xl bg-white custom-shadow-right-bottom">
      <div className="relative mb-1">
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
      <div className="w-full px-8 hidden md:flex space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => selectImage(index)}
            className={`w-1/4 h-[105px] overflow-hidden focus:outline-none ${
              index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageShowcase;
