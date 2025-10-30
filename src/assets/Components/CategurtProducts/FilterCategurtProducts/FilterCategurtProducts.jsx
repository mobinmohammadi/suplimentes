import React, { useRef, useState } from "react";
import RangePrice from "./RangePrice/RangePrice";
import SearchInCategury from "./SearchInCategury/SearchInCategury";

export default function FilterCategurtProducts({setValueSearchInCateguryPage , setFilterByRange}) {
  const [isAvailableOnly, setIsAvailableOnly] = useState(false);

  function toggleAvailableOnly () {
    setIsAvailableOnly((prev) => !prev);
  }

  return (
    <div className=" w-full sm:w-52 flex gap-2 flex-col-reverse sm:flex-col  sm:h-[70vh] text-gray-800 ">
      <div className="flex bg-white pt-5 pb-5 rounded-sm gap-2 items-center justify-center">
        <div
          onClick={() => {
            toggleAvailableOnly();
          }}
          className={`${isAvailableOnly ? "border-1 border-solid border-green-800" : ""} w-10 h-5 cursor-pointer ring-1 pr-1 bg-slate-300 rounded-full relative pt-1 pb-1`}
        >
          <span 
            className={` transition-all duration-200  ${isAvailableOnly ? "left-1 bg-green-700 ring-1" : "left-6 bg-slate-500"} w-3 h-3 absolute rounded-full `}
          ></span>
        </div>
        <span className={`text-xs ${isAvailableOnly ? "border-dashed border-b-gray-800 border-b-1 pb-1 transition-all" :""}`}>فقط کالا های موجود</span>
      </div>
      <SearchInCategury setValueSearchInCateguryPage={setValueSearchInCateguryPage}/>
      <RangePrice setFilterByRange={setFilterByRange}/>
    </div>
  );
}
