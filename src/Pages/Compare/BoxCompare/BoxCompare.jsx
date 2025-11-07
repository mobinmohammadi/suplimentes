import React from "react";

export default function BoxCompare({img , name , setIsShowModalProduct}) {
  return (
    <div className="rounded-md flex-col gap-5 text-center bg-white  flex justify-between">
      <div className="w-full justify-center flex items-center">
        <img className="w-26 h-26 rounded-md" src={img} alt="" />
      </div>
      <span onClick={() => setIsShowModalProduct(false)} className="text-xs h-10 line-clamp-1pr-2 pl-2">{name}</span>
    </div>
  );
}
