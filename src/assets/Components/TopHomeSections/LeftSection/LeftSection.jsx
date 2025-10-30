import React from "react";
import BoxLeftSection from "./BoxLeftSection/BoxLeftSection";
import { allProducts } from "../../../../Data";

export default function LeftSection() {
  return (
    <div className=" rounded-md bg-white  pt-4 pb-4 font-Morabba-Bold">
      <div className="flex gap-1 pr-2 items-center pb-4 border-b-slate-200 border-b-1 border-solid">
        <svg className="w-5 h-5">
          <use href="#chevron-left"></use>
        </svg>
        <span className="text-xs">پر فروش های این هفته</span>
      </div>
      <div className="flex flex-col gap-1 mt-2 h-full ">
        {allProducts.slice(3,6).map(item => (

        <BoxLeftSection key={item.id} {...item}/>
        ))}

      </div>
    </div>
  );
}
