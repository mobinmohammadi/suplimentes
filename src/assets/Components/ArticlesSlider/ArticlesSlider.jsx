import React, { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ArticlesItems from "../ArticlesItems/ArticlesItems";
import { allArticles } from "../../../Data";

export default function ArticlesSlider() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    mode: "free-snap",
  });

  const autoplayRef = useRef();

  // Autoplay با توقف در تعامل
  useEffect(() => {
    if (!slider) return;
    let timeout;

    const clear = () => clearTimeout(timeout);
    const autoplay = () => {
      clear();
      timeout = setTimeout(() => {
        slider.current?.next();
        autoplay();
      }, 5000);
    };

    autoplayRef.current = autoplay;
    autoplay();

    return () => clear();
  }, [slider]);

  const handleNext = () => {
    slider.current?.next();
    autoplayRef.current?.();
  };

  const handlePrev = () => {
    slider.current?.prev();
    autoplayRef.current?.();
  };

  return (
    <div className="relative mt-10 ">
      <div ref={sliderRef} className="keen-slider h-full bg-white pt-5 rounded-md ">
        {allArticles.slice(0, 4).map((articles) => (
          <div key={articles.id} className="keen-slider__slide number-slide1  h-full flex items-center justify-center text-white text-2xl font-bold">
            <ArticlesItems  {...articles} />
          </div>
        ))}
      </div>
      <div className="absolute border-b-slate-200 border-solid border-b-1 pb-2   -top-10 w-full pt-3  pr-2 pl-2 bg-white ">
        <div className="flex justify-between items-center w-full ">
          <button
            onClick={handleNext}
            className=" right-2  p-2 transition"
          >
            <svg className="w-3 h-3 rotate-180">
              <use href="#chevron-left"></use>
            </svg>
          </button>
          <span className="text-sm font-Morabba  ">مطالب اخیر وبلاگ</span>
          <button
            onClick={handlePrev}
            className="  left-2  p-2 transition"
          >
            <svg className="w-3 h-3">
              <use href="#chevron-left"></use>
            </svg>
          </button>
        </div>
      </div>
      {/* دکمه‌های کنترل */}
    </div>
  );
}
