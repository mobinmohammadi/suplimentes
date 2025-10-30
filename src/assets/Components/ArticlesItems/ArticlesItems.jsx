import React from "react";
import { Link } from "react-router-dom";

export default function ArticlesItems({ title, img, disc }) {
  return (
    <div
      className="
      flex flex-col h-72 gap-3 border-2 border-slate-100 text-black border-solid "
    >
      <img
        className="object-cover rounded-b-md w-full x:w-[450px] sm:w-auto "
        src={img}
        alt=""
      />
      <div className=" pr-4 pl-4 pb-2">
        <Link to="Articles" href="#" className="text-xs font-bold line-clamp-1">
          {title}...
        </Link>
        <span className="line-clamp-2 sm:line-clamp-4 text-x pt-2 sm:pt-4 leading-6">
          {disc}
        </span>
      </div>
    </div>
  );
}
