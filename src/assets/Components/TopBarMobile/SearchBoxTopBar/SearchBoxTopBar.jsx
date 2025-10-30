import React, { useEffect, useRef, useState } from "react";
import {
  allProducts,
  papularSearchesInwebsite,
  preSellProducts,
} from "../../../../Data.js";
import BoxForResultSearches from "../../BoxForResultSearches/BoxForResultSearches.jsx";
import TopSixSearchInWebsite from "../../TopSixSearchInWebsite/TopSixSearchInWebsite.jsx";

export default function SearchBoxTopBar({
  setIsShowLayer,
  closeModaleSearch,
  showDetailsSearch,
  setIsShowLayerModals,
  isShowLayerModals,
}) {
  const [arrayResultBeforSearch, setArrayResultBeforSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isShowNotFound, setIsShowNotFound] = useState(false);
  const notFoundItemSearchs = useRef();
  const [allArrayResultTopSixSearch, setAllArrayResultTopSixSearch] = useState(
    []
  );
  const [isWrapperDetailsSearch, setWrapperDetailsSearch] = useState(false);
  const [isShowLoaderSearch, setIsShowLoaderSearch] = useState(false);

  const serchingToProducts = (e) => {
    const input = e.trim();
    setSearchValue(e);
    setIsShowNotFound(false);
    {
      if (!input.length) {
        setArrayResultBeforSearch([]);
        return;
      } else if (e.length > 3) {
        setIsShowLoaderSearch(true);

        setTimeout(() => {
          setIsShowLoaderSearch(false);
        }, 1000);
        const resultSerching = preSellProducts.filter((item) =>
          item.name.includes(e)
        );

        setArrayResultBeforSearch(resultSerching);
        setAllArrayResultTopSixSearch([]);
        if (resultSerching.length == 0) {
          setTimeout(() => {
            setIsShowNotFound(true);
          }, 1000);
          setWrapperDetailsSearch(true);
        } else {
          setIsShowNotFound(false);
        }
      }
    }
  };

  const lagikForSearchInput = () => {
    if (searchValue.length >= 5 && !arrayResultBeforSearch.length) {
      return (
        <div
          className={` z-10 items-center ${
            isShowNotFound ? "flex" : "hidden"
          } justify-center bg-red-500 font-bold text-md text-white pt-2 pb-2 `}
        >
          <span>موردی یافت نشد 😑</span>
        </div>
      );
    } else if (searchValue.length >= 2) {
      return (
        <div
          className={` items-center ${
            isShowNotFound ? "flex" : "hidden"
          }  justify-center bg-red-500 font-bold text-md text-white pt-2 pb-2 `}
        >
          <span>مقدار وارد شده شما کمتر از 5 کاراکتر است 🤔</span>
        </div>
      );
    }
    return null;
  };

  const searchingTopResershHandler = (title) => {
    const resultTopSixSearch = allProducts.filter((item) =>
      item.name.includes(title)
    );
    setAllArrayResultTopSixSearch(resultTopSixSearch);
  };

  return (
    <>
      <div className="flex z-20 w-full items-center  sm:justify-between md:w-[50%] items-right md:justify-right  ">
        <img
          className="w-15"
          // src="https://www.svgrepo.com/show/489305/gym.svg"
          alt=""
        />
        <div className="bg-slate-100  sm:flex hidden md:w-[24rem] w-full relative h-7 md:h-10 item-center justify-center rounded-md">
          <input
            onClick={() => {
              setIsShowLayerModals(true);
              setWrapperDetailsSearch(true);
            }}
            onChange={(e) => serchingToProducts(e.target.value)}
            value={searchValue}
            type="text"
            className="w-full pl-10 pr-2 text-x sm:text-xs font-Dana  outline-0 "
            placeholder="در بین هزاران محصول ما سرچ بزنید ..."
          />

          <div className="absolute pr-2  pl-2 bg-red-500 flex items-center   text-white h-full left-0 rounded-tl-md rounded-bl-md cursor-pointer">
            <svg className="w-4 h-4 md:w-6 md:h-6">
              <use href="#search-normal"></use>
            </svg>
          </div>
          {isShowLayerModals ? (
            <div
              ref={showDetailsSearch}
              className={`absolute ${
                isShowLayerModals
                  ? "opacity-100 visible top-[110%]"
                  : "mt-5 opacity-0 invisible duration-500 transition-all"
              } duration-700  pt2 h pb-2 transition-all  shadow-2xl  rounded-b-md text-xs pt-2  bg-slate-100 text-zinc-700   rounded-md z-10  w-full `}
            >
              {lagikForSearchInput()}
              <div
                className={`w-full ${
                  isShowLoaderSearch ? "flex" : "hidden"
                } flex-col gap-10  ${
                  !allArrayResultTopSixSearch.length ? "h-72" : "h-[200px]"
                } font-Morabba-Bold absolute  z-20  items-center justify-center bg-white`}
              >
                <span className="loader"></span>
                <div className="text-center pl-5">
                  در حال سرچ لطفا منتظر بمانید ....
                </div>
              </div>

              {arrayResultBeforSearch.length > 0 ? (
                <div className="font-Dana">
                  <div className="border-slate-400 w-full r-5 border-b-2 border-solid p-2">
                    <span className=" font-Dana-Bold flex gap-1 text-x sm:text-sm">
                      <span className="text-green-600 ">
                        {arrayResultBeforSearch.length}
                      </span>
                      <span className="text-gray-700">مورد یافت شد </span>
                    </span>
                  </div>

                  {arrayResultBeforSearch.map((item, index) => (
                    <div className="pt-2 pb-2">
                      <BoxForResultSearches key={index + 1} {...item} />
                    </div>
                  ))}
                </div>
              ) : searchValue.length > 5 &&
                !arrayResultBeforSearch.length &&
                searchValue.length >= 2 ? null : (
                <div
                  className={` ${
                    isWrapperDetailsSearch
                      ? "flex opacity-100 visible"
                      : "hidden opacity-0 invisible"
                  } flex-col gap-4 pr-2 md:pr-5 pl-2 md:pl-5`}
                >
                  {isShowNotFound ? null : (
                    <>
                      <div className="flex flex-col gap-3">
                        <span className=" font-bold pt-5">جستوجو های برتر</span>
                        <span className="bg-slate-200 w-full h-[2px] "></span>
                        <div className="border-b-2 border-solid border-slate-200 pb-4 grid s:grid-cols-2 x:grid-cols-4 xs:grid-cols-4 md:grid-cols-5 mmd:grid-cols-7  gap-2">
                          {papularSearchesInwebsite.map((item, index) => (
                            <div
                              onClick={() =>
                                searchingTopResershHandler(item.title)
                              }
                              className=""
                            >
                              <TopSixSearchInWebsite
                                key={index + 1}
                                {...item}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between border-b-2 border-slate-200 border-dashed pb-4">
                          <span className="font-bold">نتیجه جستوجو</span>
                          <span
                            onClick={() => setAllArrayResultTopSixSearch([])}
                            className="font-bold text-red-400"
                          >
                            حذف
                          </span>
                        </div>
                        <div
                          className={` ${
                            allArrayResultTopSixSearch.length >= 4
                              ? "overflow-y-scroll  h-[200px]"
                              : ""
                          }`}
                        >
                          {allArrayResultTopSixSearch.length
                            ? allArrayResultTopSixSearch.map((item) => (
                                <BoxForResultSearches {...item} />
                              ))
                            : null}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
