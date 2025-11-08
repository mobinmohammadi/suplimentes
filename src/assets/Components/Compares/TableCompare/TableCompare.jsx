import React, { useContext } from "react";
import ComparseContext from "../../../Context/ComparseContext/ComparseContext";

export default function TableCompare() {
  const { arrayComparse } = useContext(ComparseContext);


  return (
    <div className="flex flex-col items-center gap-1 bg-white">
      <div className="flex items-center p-3 text-right w-full">
        <svg className="w-5 h-5">
          <use href="#chevron-left"></use>
        </svg>
        <span className="text-md">جدول مشخصات محصول</span>
      </div>
      <div className="w-full overflow-x-scroll sm:overflow-x-auto & > *:border-r-2 flex flex-col gap-2 & > *:rounded-l-md & > *:rounded-r-md">
        <div className="bg-[#EAEAEA] border-r-amber-500 border-solid border-r-2 text-sm w-full p-2">
          تاریخ انقضا
        </div>
        <div className="flex w-full & > *:w-32 & > *:sm:w-[25%] border-sky-500">
          {arrayComparse.map((item) => (
            <span className="text-xs border-l-2 border-slate-200 last:border-l-0 text-center p-5 ">{item.expiration}</span>
          ))}
        </div>
        <div className="bg-[#EAEAEA] text-sm w-full p-2 ">تعداد سروینگ</div>
        <div className="& > *:w-32 & > *:sm:w-[25%] flex border-sky-500">
          {arrayComparse.map((item) => (
            <span className="text-xs border-l-2 border-slate-200 last:border-l-0 text-center p-5 ">
              {item.info.servings} سروینگ
            </span>
          ))}
        </div>
        <div className="bg-[#EAEAEA] text-sm w-full p-2">کشور سازنده</div>
        <div className="& > *:w-32 & > *:sm:w-[25%] flex w-full p-2 rounded-sm border-sky-500">
          {arrayComparse.map((item) => (
            <span className="text-xs border-l-2 border-slate-200 last:border-l-0 text-center p-5 ">{item.info.origin}</span>
          ))}
        </div>
        <div className="bg-[#EAEAEA] text-sm w-full p-2">شرکت سازنده</div>
        <div className="flex w-full p-2 rounded-sm & > *:w-32 & > *:sm:w-[25%] border-sky-500">
          {arrayComparse.map((item) => (
            <span className="text-xs border-l-2 border-slate-200 last:border-l-0 text-center p-5 ">{item.brand}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
