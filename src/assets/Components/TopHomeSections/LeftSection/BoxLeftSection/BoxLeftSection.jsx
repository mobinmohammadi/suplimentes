import React from "react";
import { Link } from "react-router-dom";

export default function BoxLeftSection({id ,img , name , price}) {
  return (
    <div className="flex gap-2 relative group pr-4 cursor-pointer">
      <img
        className="w-14 h-14 rounded-sm"
        src={img}
        alt=""
      />
      <div className="flex flex-col font-Dana-Bold mt-2 ">
        <Link to={`/onspageproduct/${id}`} className="text-xs">{name}</Link>
        <div className="text-x  flex gap-0.5">
          <span className="">{price}</span>
          <span>تومان</span>
        </div>
      </div>
      <span className="w-[3px] rounded-full h-full absolute bg-red-900 -right-1"></span>
      <div className="absolute top-[35%] left-20 border-b-1 border-b-red-800 bg-red-800 text-white rounded-full border-solid opacity-0 group-hover:opacity-100 group-hover:left-5 transition-all">
        <svg className="w-5 h-5">
          <use href="#chevron-left "></use>
        </svg>
      </div>
    </div>
  );
}
