import React, { useEffect, useRef } from "react";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";
import { useZoom } from "../../../Context/ZoomContext.jsx";
import { Link } from "react-router-dom";

export default function ImagesAndSliderForProductsSinglePages({
  isShowPageShare,
  setIsShowPageShare,
  setSrcImageProductsHandler,
  subImg,
  srcProductStatus,
  setIsShowSliderMoreOnOneProducts,
  
}) {
  function handlePageShare() {
    setIsShowPageShare(true);
  }
  const {
    openZoom,
    closeZoom,
    isSliderVisible,
    setIsZoomed,
    isZoomed,
    showSlider,
  } = useZoom();

  // ==============================================================

  const textForZoomProduct = useRef();
  useEffect(() => {
    setTimeout(() => {
      textForZoomProduct.current.className =
        "bottom-[85%] opacity-100 absolute  visible invisible opacity-0 transitions-Custom  bg-zinc-500 text-white font-bold shadow-2xl w-full text-sm rounded-sm pt-2 pb-2 flex justify-center";
    }, 1000);
    setTimeout(() => {
      textForZoomProduct.current.className =
        "bottom-full absolute invisible transitions-Custom  opacity-100  bg-zinc-500 text-white font-bold shadow-2xl w-full text-sm rounded-sm pt-2 pb-2 flex justify-center";
    }, 4000);
  }, []);

  // ==========    Handle Page Share   ===========================

  // ==============================================================

  const styleImgAfterLoaded = useRef();

  function styleImgAfterLoadeds() {
    styleImgAfterLoaded.current.classList +=
      " h-60 transionsImgCustoms visible opacity-100";
  }
  useEffect(() => {
    setTimeout(() => {
      styleImgAfterLoadeds();
    }, 100);
  }, []);

  // ==============================================================

  return (
    <div className="w-full  bg-slate-100 pt-3 items-center justify-center flex flex-col sm:w-[50%] mmd:w-[25%] ">
      <div className="flex gap-2 ">
        <div className="flex flex-col z-10 gap-2">
          <div className="relative group border-slate-400 border-solid border-2 w-10 h-10 flex items-center justify-center rounded-md cursor-pointer hover:border-red-400 transition-all hover:text-red-600">
            <svg className="w-5 h-5 ">
              <use href="#heart"></use>
            </svg>
            <span className="absolute group-hover:bg-zinc-700 group-hover:opacity-100 group-hover:visible invisible flex opacity-0  group-hover:right-[140%] transitions-Custom  right-[60%]  bg-zinc-700 text-white w-40 h-full rounded-sm pr-4  justify-center items-center pl-2 text-xs ">
              افرودن به علاقه مندی ها
              <span className="absolute w-6 h-6 bg-zinc-700 -right-2 rotate-[45deg]"></span>
            </span>
          </div>
          <Link to="/Compare" className="relative group border-slate-400 border-solid border-2 w-10 h-10 flex items-center justify-center rounded-md cursor-pointer hover:border-red-400 transition-all hover:text-red-600">
            <svg className="w-5 h-5 ">
              <use href="#eye"></use>
            </svg>
            <span className="absolute group-hover:bg-zinc-700 group-hover:opacity-100 group-hover:visible invisible flex opacity-0  group-hover:right-[140%] transitions-Custom  right-[60%]  bg-zinc-700 text-white w-40 h-full rounded-sm pr-4  justify-center items-center pl-2 text-xs ">
              مقایسه
              <span className="absolute w-6 h-6 bg-zinc-700 -right-2 rotate-[45deg]"></span>
            </span>
          </Link>
          <div
            onClick={() => handlePageShare()}
            className="relative group border-slate-400 border-solid border-2 w-10 h-10 flex items-center justify-center rounded-md cursor-pointer hover:border-red-400 transition-all hover:text-red-600"
          >
            <svg className="w-5 h-5 ">
              <use href="#share"></use>
            </svg>
            <span className="absolute group-hover:bg-zinc-700 group-hover:opacity-100 group-hover:visible invisible flex opacity-0  group-hover:right-[140%] transitions-Custom  right-[60%]  bg-zinc-700 text-white w-40 h-full rounded-sm pr-4  justify-center items-center pl-2 text-xs ">
              اشتراک گذاری
              <span className="absolute w-6 h-6 bg-zinc-700 -right-2 rotate-[45deg]"></span>
            </span>
          </div>
        </div>
        <div className="relative group overflow-hidden">
          <img
            ref={styleImgAfterLoaded}
            onClick={() => {setIsShowSliderMoreOnOneProducts(true)}}
            className="cursor-pointer object-cover w-72 h-3 opacity-0 invisible  sm:w-[250px] rounded-sm"
            src={srcProductStatus}
            alt=""
          />
         

          <span
            ref={textForZoomProduct}
            className="opacity-0 invisible absolute -z-10 bottom-full"
          >
            برای زوم بیشتر روی عکس کلیک کنید :)
          </span>
        </div>
      </div>
      <div
        className="justify-end pl-4  mt-10 flex & > *:rounded-md & > *:cursor-pointer gap-2 & > *:border & > *:border-slate-700 & > *:border-solid
          "
      >
        {subImg.map((img, index) => (
          <img
            key={index + 1}
            onClick={() => setSrcImageProductsHandler(img)}
            className="w-18 "
            src={img}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}
