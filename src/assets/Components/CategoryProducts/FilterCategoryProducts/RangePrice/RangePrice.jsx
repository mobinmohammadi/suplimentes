import React, { useState } from "react";

export default function SinglePriceSlider({setFilterByRange}) {
  const [isshowPriceRange, setIsShowPriceRange] = useState(false);

  const showPriceRangeHandler = () => {
    setIsShowPriceRange(prev => !prev)
  };

  const min = 0;
  const max = 10000000;
  const step = 50000;

  const [price, setPrice] = useState(1000000);

  const handleChange = (e) => {
    setFilterByRange(Number(e.target.value))
    setPrice(Number(e.target.value));
  };

  const filledPercent = ((price - min) / (max - min)) * 100;

  return (
    <div className="bg-white p-4 flex font-Dana items-center justify-center flex-col rounded-sm w-full border-gray-400 border-1 border-solid text-sm">
      <div
        onClick={() => showPriceRangeHandler()}
        className={`${isshowPriceRange ? "" : ""} font-bold flex justify-between items-center cursor-pointer w-full  text-x text-center`}
      >
        <span>فیلتر بر اساس حداکثر قیمت </span>
        <svg className={`${isshowPriceRange ? "rotate-180 transition-all " : "rotate-0 transition-all"} w-3 h-3`}>
          <use href="#down-chevron"></use>
        </svg>
      </div>

      <div className={`${isshowPriceRange ? "h-full opacity-100  pt-6 transition-all" : "h-0 overflow-hidden transition-all pt-0"} ` }>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={price}
          onChange={handleChange}
          className="w-full appearance-none h-2 rounded-full outline-none 
          [&::-webkit-slider-thumb]:appearance-none 
          [&::-webkit-slider-thumb]:w-4 
          [&::-webkit-slider-thumb]:h-4 
          [&::-webkit-slider-thumb]:bg-blue-600 
          [&::-webkit-slider-thumb]:rounded-full 
          [&::-webkit-slider-thumb]:cursor-pointer"
          style={{
            background: `linear-gradient(to left, #3b82f6 ${filledPercent}%, #e5e7eb ${filledPercent}%)`,
          }}
        />

        <div className="text-center mt-2 text-xs text-gray-700">
          تا قیمت:{" "}
          <span className="font-bold text-blue-600">
            {price.toLocaleString()}
          </span>{" "}
          تومان
        </div>
      </div>
    </div>
  );
}
