import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function EasyAddToBasketMobile(props) {
  let {
    btnAferLoadedPage,
    isActiveScroll,
    styleAndAddToCartHandler,
    setIsShowMenuOnPage,
    isStyleBtnAddToBasket,
    isShowMenuOnPage 
  } = props;

  const goToBasket = useNavigate()
  function redirectHandle() {
    setTimeout(() => {
      
      goToBasket("/cart")
    }, 3000);
  }
  return (
    <div className="w-full flex items-center justify-center">
      <div
        ref={btnAferLoadedPage}
        className={` gap-0.5 space-x-16  flex  justify-between ${
          isActiveScroll
            ? "opacity-0 transitions-Custom fixed w-[80%] bottom-10 pr-0 pl-0"
            : "opacity-100 fixed w-full bottom-1 pr-4 pl-4"
        }   border-t-2  border-gray-900 border-solid pt-2  text-center flex pb-3 items-center justify-evenly cursor-pointer rounded-t-sm transition-all bg-white text-gray-900  z-10`}
      >
        <div
          onClick={() => styleAndAddToCartHandler()}
          className={`flex gap-1 relative ${
            isStyleBtnAddToBasket ? "bg-slate-400 " : "bg-red-600"
          } transition-all w-64 pt-3 pb-3 rounded-sm justify-center text-white font-Dana `}
        >
          {" "}
          <div onClick={() => redirectHandle()} className={`${isStyleBtnAddToBasket ? "hidden" : "flex"}`}>
            <div className="bg-white rounded-full p-2 top-1 absolute right-2 text-gray-900">
              <svg className="w-4  h-4">
                <use href="#shopping-cart"></use>
              </svg>
            </div>
            <span className="text-xs">افرودن به سبد خرید</span>
          </div>
          <div
            className={`w-full h-full pt-1 pb-1 justify-center ${
              isStyleBtnAddToBasket ? "flex " : "hidden"
            }`}
          >
            <span className="loader-BasketSinglePage"></span>
          </div>
        </div>
        <div className=" relative flex items-center justify-center w-10 h-10 leading-10">
          <div
            onClick={() => setIsShowMenuOnPage((prev) => !prev)}
            className={`flex flex-col items-center transition-all pt-1 rounded-sm pb-1 pr-2 pl-2  ${
              isShowMenuOnPage
                ? "bg-gray-900 border-b-red-500 border-b-4 text-white"
                : ""
            }`}
          >
            <svg className="w-6 h-6">
              <use href="#bars-3"></use>
            </svg>
            <span className={` text-xs`}>بیشتر</span>
          </div>
          <div
            className={`transition-all  ${
              isShowMenuOnPage
                ? "opacity-100 visible bottom-[140%]"
                : "opacity-0 invisible bottom-[50%]"
            } absolute  rounded-sm left-0 w-40  bg-gray-900`}
          >
            <div className="absolute  rounded-sm left-0 w-40 bottom-[140%] bg-gray-900 ">
              <div className="flex flex-col items-start pr-3 & > *: & > *:gap-1 & > *:flex  & > *:justify-center  text-xs font-Dana pt-2 pb-2 gap-5 text-white">
                <Link to="/">
                  <svg className="w-4 h-4">
                    <use href="#home"></use>
                  </svg>
                  <span>خانه</span>
                </Link>
                <Link to="/myaccount">
                  <svg className="w-4 h-4">
                    <use href="#user"></use>
                  </svg>
                  <span className="">پروفایل</span>
                </Link>
                {/* <div className="">
                  <svg className="w-4 h-4">
                    <use href="#search-normal"></use>
                  </svg>
                  <span className="">جستوجو</span>
                </div> */}
                <Link to="/categuryByProducts/protein">
                  <svg className="w-4 h-4">
                    <use href="#adjustments-horizontal"></use>
                  </svg>
                  <span>دسته بندی ها</span>
                </Link>
                <Link to="/cart">
                  <svg className="w-4 h-4">
                    <use href="#shopping-bag"></use>
                  </svg>
                  <span>سبد خرید من</span>
                </Link>
                <Link to="/aboute">
                  <svg className="w-4 h-4 rotate-[260deg]">
                    <use href="#phone-arrow-down-left"></use>
                  </svg>
                  <span>تماس</span>
                </Link>
              </div>
            </div>
            <div className="w-5 h-5 bg-gray-900 absolute bottom-[135%] left-1 rounded-sm rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
