"use client";

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2019/06/11/10/56/girl-4266712_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg",
    "https://media.istockphoto.com/id/1317641777/photo/portrait-of-beautiful-black-haired-woman-in-a-splendid-makeup-dressed-in-a-traditional-indian.jpg?s=1024x1024&w=is&k=20&c=hvors6AMFHImu5p0M3ZfVsL_gXodZXshzbqem9OTT9o=",
    "https://cdn.pixabay.com/photo/2016/11/18/17/14/cloth-1835894_1280.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManualChange, setIsManualChange] = useState(false);

  useEffect(() => {
    if (isManualChange) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isManualChange, images.length]);

  const nextImage = () => {
    setIsManualChange(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIsManualChange(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (isManualChange) {
      const resetManualChange = setTimeout(() => {
        setIsManualChange(false);
      }, 1000);
      return () => clearTimeout(resetManualChange);
    }
  }, [isManualChange]);

  return (
    <div className="relative bg-white h-[400px]">
      {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl font-semibold z-10">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 via-pink-500 via-orange-500 via-green-400 via-teal-500 to-yellow-300">
          FIRST FEMALE
        </h2>
      </div> */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black p-2 rounded-full shadow-lg hover:bg-opacity-80"
        onClick={prevImage}
      >
        <FaChevronLeft size={24} />
      </button>

     
      <div className="w-full h-full overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 hover:brightness-90"
        />
      </div>

 
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black p-2 rounded-full shadow-lg hover:bg-opacity-80"
        onClick={nextImage}
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default ImageSlider;
