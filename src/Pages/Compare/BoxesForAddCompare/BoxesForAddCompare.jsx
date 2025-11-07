import React, { useContext } from "react";
import ComparseContext from "../../../assets/Context/ComparseContext/ComparseContext";
import StatusBoxCompare from "./../StatusBoxCompare/StatusBoxCompare"
export default function BoxesForAddCompare({setIsShowModalProduct}) {
  const { arrayComparse } = useContext(ComparseContext);
  return (
    <div className="bg-white mt-10 & > *:rounded-md overflow-hidden grid-cols-1 x:grid-cols-2 xs:grid-cols-2 rounded-md mr-3 ml-3 grid sm:grid-cols-4 & > *:h-full conatiner-custom gap-5 pt-5 pb-5">
      {arrayComparse.map((item) => (
        <StatusBoxCompare key={item.id} {...item} />
      ))}
      {arrayComparse.length >= 4 ? (
        ""
      ) : (
        <div
          onClick={() => setIsShowModalProduct(true)}
          className=" h-full  w-full border-slate-100 cursor-pointer flex items-center justify-center"
        >
          <div className="p-4 w-full h-full justify-center flex transition-all hover:text-sky-600  items-center flex-col group gap-4 border-r-2 hover:rounded-2xl border-l-2 rounded-sm ">
            <svg className="w-17 h-17 group-hover:text-red-800 transition-all">
              <use href="#svg-plus"></use>
            </svg>
            <span className="text-xs transition-all pb-2 w-32 leading-5  text-center font-Morabba">
              برای افزودن کالا به لیست مقایسه کلیک کنید
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
