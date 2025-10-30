import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function  OnsPageSliderProduct({
  filtredOnsProducts,
  setIsShowSliderMoreOnOneProducts,
}) {
  const { name, img, subImg } = filtredOnsProducts;
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 1]);
  const brekedSubimagesProducts = subImg.map(items => items.img);

  const nextSlide = () => {
    setCurrentIndex([(currentIndex + 1) % subImg.length, 1]);
  };

  const prevSlide = () => {
    setCurrentIndex([
      currentIndex === 0 ? subImg.length - 1 : currentIndex - 1,
      -1
    ]);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: { duration: 0.3 }
    })
  };

  return (
    <div className="relative h-full">
      {/* Header controls */}
      <div className="bg-slate-100">
        <div className="w-[95%] sm:w-[97%] flex justify-between mx-auto pt-2 pb-2">
          <div className="flex [&>*]:w-5 [&>*]:h-5 [&>*]:sm:w-7 [&>*]:sm:h-7 justify-center gap-3 [&>*]:cursor-pointer">
            <svg onClick={() => setIsShowSliderMoreOnOneProducts(false)}>
              <use href="#x-marks"></use>
            </svg>
            <svg>
              <use href="#magnifying-glass-minus"></use>
            </svg>
            <svg>
              <use href="#magnifying-glass-plus"></use>
            </svg>
          </div>
          <div className="text-[17px] flex gap-0.5 items-center">
            <span className="text-red-500">{currentIndex + 1}</span>
            <span>/</span>
            <span className="text-zinc-700">{subImg.length}</span>
          </div>
        </div>
      </div>

      {/* Main slider */}
      <div className="flex flex-col h-[85%] mt-12 justify-between">
        <div className="flex justify-between px-3 sm:px-7 items-center mb-5 h-full">
          {/* Next button */}
          <div
            onClick={nextSlide}
            className="bg-red-700 text-white flex justify-center items-center cursor-pointer rounded-full hover:bg-red-800 transition-all w-7 h-7 sm:w-10 sm:h-10 z-10"
          >
            <svg className="w-5 sm:w-7 h-5 sm:h-7">
              <use href="#arrow-right"></use>
            </svg>
          </div>

          {/* Slide content */}
          <div className="relative w-full h-full mx-4">
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${brekedSubimagesProducts[currentIndex]})`,
                  backgroundSize: 'contain'
                }}
              />
            </AnimatePresence>
          </div>
          {/* Prev button */}
          <div
            onClick={prevSlide}
            className="bg-red-700 text-white flex justify-center items-center cursor-pointer rounded-full hover:bg-red-800 transition-all w-7 h-7 sm:w-10 sm:h-10 z-10"
          >
            <svg className="w-5 sm:w-7 h-5 sm:h-7">
              <use href="#arrow-left"></use>
            </svg>
          </div>



        </div>

        {/* Product info and thumbnails */}
        <div className="flex flex-col justify-center">
          <span className="text-sm sm:text-base bg-zinc-700 text-center text-white p-5">
            {name}
          </span>
          <div className="flex gap-2 pr-5 mt-2 overflow-x-auto py-2 [&>*]:w-24 [&>*]:h-24 [&>*]:border-solid  [&>*]:rounded-md ">
            {subImg.map((item, index) => (
              <img
                key={index}
                src={item.img}
                alt=""
                className={`cursor-pointer ${currentIndex === index ? 'opacity-100' : 'opacity-70 border-4   border-blue-600 border-solid'}`}
                onClick={() => setCurrentIndex([index, index > currentIndex ? 1 : -1])}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}