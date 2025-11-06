import React, { useState } from "react";
import ShoppingCartDetailAndOtherSpecifications from "../../ShoppingCartDetailAndOtherSpecifications/ShoppingCartDetailAndOtherSpecifications";
import NameAndCateguryNameAndMore from "../../NameAndCateguryNameAndMore/NameAndCateguryNameAndMore";
import ShareProducts from "../../../ShareProducts/ShareProducts";
import OnsPageSliderProduct from "../../OnsPageSliderProduct/OnsPageSliderProduct";

export default function MainOnsPageContent(props) {
  let {
    subImg,
    getAlltest,
    setIdToast,
    filtredOnsProducts,
    titleForBasket,
    cancellActionsForShareProducts,
    isShowPageShare,
    isShowSliderMoreOnOneProducts,
    setIsShowSliderMoreOnOneProducts,
    loaderOnPages,
    setTitleForBasket,
  } = props;
  
  return (
    <div className="flex flex-col items-center & > *:w-full w-full sm:w-[70%] pr-4 pb-2 pl-2">
      <div className="flex flex-col gap-2 mt-5 sm:mt-0">
        <span className="text-md mt-5 mb-5 ">{filtredOnsProducts[0].name}</span>
        <div className="text-x p-4  sm:p-5 rounded-sm text-white tracking-wider flex items-center justify-center bg-slate-400">
          <span className="text-sm text-center sm:text-sm font-bold"></span>
          <div className="text-x   rounded-sm text-white tracking-wider flex items-center justify-center bg-slate-400">
            <span className="text-xs sm:text-sm font-bold">
              بارکد محصول: 9892032320254
            </span>
          </div>
        </div>
        <div className="flex justify-around flex-col sm:flex-row">
          <div className="flex justify-around flex-col sm:flex-row">
            <NameAndCateguryNameAndMore
              subImg={subImg}
              filtredOnsProducts={filtredOnsProducts}
              getAlltest={getAlltest}
              setIdToast={setIdToast}
            />
            <ShoppingCartDetailAndOtherSpecifications
              filtredOnsProducts={filtredOnsProducts}
              titleForBasket={titleForBasket}
              setTitleForBasket={setTitleForBasket}
            />
          </div>
        </div>
      </div>
      <div
        className={`container-custom mx-auto ${
          isShowPageShare
            ? "opacity-100 visible transitions-all"
            : "opacity-0 invisible h-10 overflow-hidden transitions-Custom"
        }`}
      >
        <ShareProducts
          cancellActionsForShareProducts={cancellActionsForShareProducts}
        />
      </div>
      <div
        className={`${
          isShowSliderMoreOnOneProducts
            ? "ShowSliderMoreOnOneProducts transition-all h-[100vh]"
            : "h-[50vh] transition-all opacity-0 invisible transitions-Custom"
        } fixed  bg-slate-300 top-0  w-full z-50 right-0`}
      >
        <OnsPageSliderProduct
          filtredOnsProducts={filtredOnsProducts[0]}
          setIsShowSliderMoreOnOneProducts={setIsShowSliderMoreOnOneProducts}
        />
      </div>
      {isShowPageShare ? (
        <div
          onClick={() => cancellActionsForShareProducts()}
          className="bg-black/40 fixed top-0 w-full h-full z-30 right-0"
        ></div>
      ) : null}
      <div
        ref={loaderOnPages}
        className=" fixed w-full h-full right-0 bg-teal-900 top-0 z-50 flex items-center justify-center"
      >
        <span className="loader w-60"></span>
      </div>
    </div>
  );
}
