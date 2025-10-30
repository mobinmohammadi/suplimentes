import React from "react";
import { useParams } from "react-router-dom";
import { allBrandLogo } from "../../../../Data";

export default function AboutBrands() {

  const param = useParams().BrandName
  const brandTitleAbout = allBrandLogo.filter(brand => brand.name == param)
  
  
  
  return (
    <div className="w-58 sm:flex flex-col hidden rounded-t-md overflow-hidden bg-zinc-800">
      <div className="h-20 relative bg-[#6216cd] flex justify-center">
        <img
        
          className="w-20 h-20 rounded-full border-2 border-solid bg-white object-contain border-b-emerald-500 absolute top-5"
          src={`../${brandTitleAbout[0].img}`}
          alt=""
        />
      </div>
      <div className="flex items-center justify-center flex-col  gap-5">
        <span className="text-white font-Dana-Bold text-xs max-w-24 text-center leading-5 mt-6 ">
          {brandTitleAbout[0].title}
        </span>
        <span className="text-x pr-3 pl-3 font-Dana text-white leading-5">
          {brandTitleAbout[0].desc}
        </span>
      </div>
    </div>
  );
}
