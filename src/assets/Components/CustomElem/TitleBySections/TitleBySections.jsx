import React from "react";

export default function TitleBySections({ title, width  , isBorder  ,font , size}) {
  return (
    <div className="flex w-full items-center justify-between h-1 font-Dana ">
      <span className={`w-${[width]} text-${size} font-${font}`}>{title}</span>
      {isBorder ? (
        <span className="w-full h-[2px] bg-slate-400 rounded-full inline-block"></span>
      ) : null}
    </div>
  );
}
