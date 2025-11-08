import React, { useContext, useEffect, useState } from "react";
import BradCrumb from "../../assets/Components/CustomElem/BradCrumb/BradCrumb";
import TopBarMobile from "../../assets/Components/TopBarMobile/TopBarMobile.";
import Footer from "../../assets/Components/Footer/Footer";
import { allProducts } from "../../Data";
import BoxCompare from "../../assets/Components/Compares/BoxCompare/BoxCompare";
import BoxesForAddCompare from "../../assets/Components/Compares/BoxesForAddCompare/BoxesForAddCompare";
import TableCompare from "../../assets/Components/Compares/TableCompare/TableCompare";

export default function Compare() {
  const [isShowModalProduct, setIsShowModalProduct] = useState(false);
  return (
    <div className="conatiner-custom relative flex  flex-col gap-10 font-Dana pr-2 pl-2">
      <TopBarMobile />
      <BradCrumb />
      <BoxesForAddCompare setIsShowModalProduct={setIsShowModalProduct} />
      <div
        className={`${
          isShowModalProduct
            ? "opacity-100 w-full top-1/2 visible h-full sm:h-[60%] "
            : "opacity-0 invisible h-0 top-full"
        } w-[90%] transition-md pb-6 p overflow-hidden bg-slate-200  left-1/2 -translate-x-1/2 -translate-y-1/2 fixed  z-50 rounded-sm `}
      >
        <div className="flex relative  bg-white items-center w-full pt-2 pb-2">
          <div className="flex sm:w-[90%] sm:border-zinc-400 rounded-md border-slate-200 border-2 pt-1 pb-1">
            <span className="pt-1 pr-2 pl-2 pb-1 text-zinc-800 sm:block hidden">
              جستوجو
            </span>
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
            {allProducts.map((item, index) => (
              <BoxCompare
                key={index + 1}
                item={item}
                setIsShowModalProduct={setIsShowModalProduct}
              />
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
      <TableCompare/>

      <Footer />
    </div>
  );
}
