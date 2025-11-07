import React, { useState } from "react";
import BradCrumb from "../../assets/Components/CustomElem/BradCrumb/BradCrumb";
import TopBarMobile from "../../assets/Components/TopBarMobile/TopBarMobile.";
import Footer from "../../assets/Components/Footer/Footer";
import { allProducts } from "../../Data";
import BoxCompare from "./BoxCompare/BoxCompare";

export default function Compare() {
  const [isShowModalProduct, setIsShowModalProduct] = useState(false);
  return (
    <div className="conatiner-custom relative flex  flex-col gap-10 font-Dana">
      <TopBarMobile />
      <BradCrumb />
      <div className="bg-white mt-10 & > *:rounded-md overflow-hidden grid-cols-1 x:grid-cols-2 xs:grid-cols-2 rounded-md mr-3 ml-3 grid sm:grid-cols-4 & > *:h-full conatiner-custom gap-5 pt-5 pb-5">
        <div
          onClick={() => setIsShowModalProduct(true)}
          className="    border-slate-100 cursor-pointer flex items-center justify-center"
        >
          <div className="p-4 flex transition-all hover:text-sky-600  items-center flex-col group gap-4 border-r-2 hover:rounded-2xl border-l-2 rounded-sm ">
            <svg className="w-17 h-17 group-hover:text-red-800 transition-all">
              <use href="#svg-plus"></use>
            </svg>
            <span className="text-xs transition-all pb-2 w-32 leading-5  text-center font-Morabba">
              برای افزودن کالا به لیست مقایسه کلیک کنید
            </span>
          </div>
        </div>
      </div>

      <div
        className={`${
          isShowModalProduct
            ? "opacity-100 w-full top-1/2 visible h-full sm:h-[60%] "
            : "opacity-0 invisible h-0 top-full"
        } w-[90%] transition-md pb-6 p overflow-hidden bg-slate-200  left-1/2 -translate-x-1/2 -translate-y-1/2 fixed  z-50 rounded-sm `}
      >
        <div className="flex relative pr-2 pl-2 bg-white items-center w-full pt-2 pb-2">
          <div className="flex sm:w-[90%] sm:border-zinc-400 rounded-md border-slate-200 border-2 pt-1 pb-1">
            <span className="pt-1 pr-2 pl-2 pb-1 text-zinc-800 sm:block hidden">جستوجو</span>
            <div className="  flex  justify-between  w-full sm:w-[70%] sm:border-l-2 border-l-slate-300">
              <input
                type="text"
                className="border-0   outline-0 text-xs w-60 pr-2"
                placeholder="نام محصول برای جستوجو وارد کنید ..."
              />
            </div>
            <div className=" items-center pr-3 pl-4 sm:flex hidden">
              <select name="" id="">
                <option value="">ناتریشن | nutrishion</option>
                <option value="">ناتریشن | nutrishion</option>
                <option value="">ناتریشن | nutrishion</option>
                <option value="">ناتریشن | nutrishion</option>
              </select>
            </div>
          </div>
          <div
            onClick={() => setIsShowModalProduct(false)}
            className="cursor-pointer absolute left-4 top-1/"
          >
            <svg className="w-6 h-6">
              <use href="#z-mark"></use>
            </svg>
          </div>
        </div>
        {/* <div className="flex items-center h-64 flex-col w-full justify-center">
          <svg className="w-25 h-25 text-zinc-800">
            <use href="#magnifying-glass"></use>
          </svg>
          <span>محصولی یافت نشد 😥</span>
        </div> */}
        <div className="h-[90%] overflow-y-scroll pr-3 pt-2 pl-3 pb-3">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 mmd:grid-cols-4 gap-5 pt-3">
            {allProducts.map((item) => (
              <BoxCompare {...item} setIsShowModalProduct={setIsShowModalProduct}/>
            ))}
          </div>
        </div>
      </div>
      {isShowModalProduct ? (
        <div
          onClick={() => setIsShowModalProduct(false)}
          className="blur-sm w-full h-full fixed bg-black/30 z-20"
        ></div>
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}
