import React from "react";

export default function SectionsTitle({ title }) {
  return (
    <>
      <div className="relative flex flex-col ">
        <span className="font-bold"> {title}</span>
        <div className="w-full mt-3 h-[2px] flex gap-10 ">
          <span className="w-full h-[2px] absolute bg-slate-200"></span>
          <span className="top-[93%] absolute w-[2rem] bg-red-500 h-[2px]"></span>
        </div>
      </div>
    </>
  );
}
