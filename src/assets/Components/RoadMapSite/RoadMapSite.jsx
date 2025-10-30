import React from "react";
import { Link } from "react-router-dom";

export default function RoadMapSite({ categury = [],linkCategury, name, titleBreadCrumb }) {
  return ( 
    <div className="bg-slate-300 w-[97%] mx-auto pt-2 pb-2 font-Dana font-bold overflow-x-auto rounded-md px-4">
      <div className="flex gap-5 items-center min-w-max scroll-smooth snap-x snap-mandatory">
        <Link
          to="/"
          className="flex items-center justify-center text-gray-700 snap-start shrink-0"
        >
          <svg className="w-5 h-5">
              <use href="#home"></use>
          </svg>
        </Link>

        <span className="text-xs text-gray-700 snap-start shrink-0 whitespace-nowrap">
          {categury.length ? "دسته‌بندی‌ها" : "مکمل‌ها"}
        </span>

        {titleBreadCrumb && linkCategury && (
          <Link to={linkCategury} className="text-xs text-gray-700 snap-start shrink-0 whitespace-nowrap">
            {titleBreadCrumb}
          </Link>
        )}

        <span className="text-xs text-red-500 snap-start shrink-0 whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  );
}
