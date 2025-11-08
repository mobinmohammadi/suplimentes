import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ComparseContext from "../../../Context/ComparseContext/ComparseContext";
import { Toaster } from "react-hot-toast";

export default function StatusBoxCompare({ img, name, price, id }) {
  const { removeInComparse } = useContext(ComparseContext);

  return (
    <div className="border-l-2 relative flex text-center PR-5 gap-5 flex-col border-l-slate-200 items-center justify-center">
      <div
        onClick={() => {
          removeInComparse(id);
        }}
        className="absolute left-2 cursor-pointer top-0"
      >
        <svg className="w-5 h-5">
          <use href="#z-mark"></use>
        </svg>
      </div>
      <img className="w-25 h-25 " src={img} alt="" />
      <span className="text-xs max-w-48">{name}</span>
      <span>{price.toLocaleString()} تومان</span>
      <div className="bg-[#4E12A4] hover:bg-teal-600 transition-all cursor-pointer pt-1 pb-1 pr-3 pl-3 rounded-md">
        <Link to={`/onspageproduct/${id}`} className="text-x text-white">مشاهده محصول</Link>
      </div>
    </div>
  );
}
