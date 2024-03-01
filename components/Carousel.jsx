"use client";
import Image from "next/image";
import React, { useState } from "react";

const Carousel = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`${className} relative my-10`}>
      <div className="overflow-hidden w-full min-h-[400px]">
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className={`duration-500 absolute ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <Image
                src={image}
                alt={`slide-${index}`}
                className={`w-[100vw] object-contain h-[400px]`}
                width={300}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-yellow-400 text-white px-4 py-2 rounded-l"
        onClick={prevSlide}
      >
        &#10096;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-yellow-400 text-white px-4 py-2 rounded-r"
        onClick={nextSlide}
      >
        &#10097;
      </button>
    </div>
  );
};

export default Carousel;
