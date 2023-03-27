import React from "react";
import { SliderData } from "./SliderData";
import Image from "next/image";
import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setcurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setcurrent(current === 0 ? length - 1 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }

  return (
    <div id="testimonial" className="max-w-[500px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Testimonies</h1>
          <div className="relative flex justify-center p-4">
        {SliderData.map((slide, index) => {
          return (
            <div
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000  "
                  : "opacity-0"
              }
              key={index}
            >
              <FaArrowCircleLeft onClick={prevSlide} size={30}  className="absolute top-[50%] left-[30px] text-black/70 cursor-pointer select-none z-[2] " />
              {index === current && (
                <Image width="500" height="600" src={slide.image} alt="" />
              )}
              <FaArrowAltCircleRight onClick={nextSlide} size={30} className="absolute top-[50%] right-[30px] text-black/70 cursor-pointer select-none z-[2] " />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
