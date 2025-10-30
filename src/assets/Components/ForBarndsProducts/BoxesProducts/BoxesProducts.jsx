
import React from "react";

export default function BoxesProducts({ name, img, price }) {
  return (
    <div className="bg-slate-200 rounded-md pb-2 min-h-16 sm:min-h-24   flex flex-col gap-3">
      <img className="w-[170px]" src={`../${img}`} alt="" />
      <div className="pr-2 pl-2 flex gap-5 flex-col ">
        <span className="font-bold sm:text-sm text-xs font-Dana">{name}</span>
        <div className="flex text-xs justify-between items-center">
          <span>4 نفر</span>
          <div className="flex & > *:text-amber-500">
            <svg className="w-4 h-4">
              <use href="#star"></use>
            </svg>
            <svg className="w-4 h-4">
              <use href="#star"></use>
            </svg>
            <svg className="w-4 h-4">
              <use href="#star"></use>
            </svg>
            <svg className="w-4 h-4">
              <use href="#star"></use>
            </svg>
            <svg className="w-4 h-4">
              <use href="#star"></use>
            </svg>
          </div>
        </div>
        <div className="flex font-Dana text-zinc-800 font-bold gap-0.5">
          <span className="text-xs ">{price}</span>
          <span className="text-xs ">تومان</span>
        </div>
      </div>
    </div>
  );
}
