import React from "react";
import { Link } from "react-router-dom";

export default function BrandsItem({ img, name }) {
  return (
    <Link
      to={`productsBrand/${name}`}
      className="pt-3 keen-slider__slide number-slide1"
    >
      <div className="border-l-2 border-solid border-l-slate-200 border-r-2 md:border-r-0  border-r-slate-200 max-w-36 pl-3 pr-3">
        <img
          className="w-42 h-[70px] hover:border-2 hover:border-sky-400 hover:border-solid object-cover opacity-60 hover:opacity-100 transition-all cursor-pointer  shadow-brands border rounded-full border-slate-200 border-solid "
          src={img}
          alt=""
        />
      </div>
    </Link>
  );
}
