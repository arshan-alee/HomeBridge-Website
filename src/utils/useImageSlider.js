import { useState } from "react";

const useImageSlider = (initialIndex = 0, images) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  return { currentImageIndex, prevImage, nextImage, selectImage };
};

export default useImageSlider;
