import React from "react";
import { useZoom } from "../../../../Context/ZoomContext";

export default function TopbarSlider({currentIndex , subImg}) {

    const {setIsZoomed} = useZoom()
  return (
    <div className="bg-slate-100">
      <div className="w-[95%] sm:w-[97%] flex justify-between mx-auto pt-2 pb-2">
        <div className="flex [&>*]:w-5 [&>*]:h-5 [&>*]:sm:w-7 [&>*]:sm:h-7 justify-center gap-3 [&>*]:cursor-pointer">
          <svg onClick={() => setIsShowSliderMoreOnOneProducts(false)}>
            <use href="#x-marks"></use>
          </svg>
          <svg>
            <use href="#magnifying-glass-minus"></use>
          </svg>
          <svg onClick={() => setIsZoomed(true)}>
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
  );
}
