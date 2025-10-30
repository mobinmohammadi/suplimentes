import React, { useRef, useState } from "react";
import { allProducts } from "../../../Data";
import { Link } from "react-router-dom";

export default function ShowWrapperSearch({ cancelActions, isShowSearchBox }) {
  const [textValueSearch, setTextValueSearch] = useState("");
  const [allResaltSearch, setAllResaltSearch] = useState([]);
  const [isShowLoaderSearch, setIsShowLoaderSearch] = useState(false);
  const searchLoader = useRef();
  const wrapperResultSearch = useRef();
  const [isShowStyleSearch, setIsShowStyleSearch] = useState(false);

  const searchHandler = (e) => {
    setTimeout(() => {
      setIsShowLoaderSearch(true);
    }, 200);
    setTimeout(() => {
      setIsShowLoaderSearch(false);
    }, 900);

    setTextValueSearch(e.target.value);
    setTimeout(() => {}, 700);
    if (textValueSearch.length < 3) {
      setAllResaltSearch([]);
    } else if (e.keyCode == 8) {
      setAllResaltSearch([]);
    } else {
      let restultSearch = allProducts.filter((item) =>
        item.name.includes(textValueSearch)
      );
      setTimeout(() => {
        setIsShowStyleSearch(true);

        setAllResaltSearch(restultSearch);
      }, 1000);
    }
  };
  return (
    <div
      className={`bg-slate-200 w-full h-[92vh] z-30 ${
        isShowSearchBox ? "show-Search__box" : "opacity-0 transitions-custom"
      } shadow-2xl fixed top-[100%] left-0`}
    >
      <div className="w-[95%] mx-auto  flex gap-3 flex-col pl-2">
        <div
          onClick={() => cancelActions()}
          className="bg-sky-500 w-full flex items-center rounded-md   mx-auto mt-2 justify-center pt-1 pb-1"
        >
          <svg className="w-7 h-7 text-zinc-800">
            <use href="#x-mark"></use>
          </svg>
        </div>
        <div className="text-zinc-800 rounded-md h-10 overflow-hidden bg-slate-300 flex">
          <input
            value={textValueSearch}
            onChange={(e) => searchHandler(e)}
            onKeyDown={(e) => searchHandler(e)}
            type="text"
            className="text-zinc-900 font w-full font-Morabba-Bold pt-2 pb-2 pr-1 outline-0"
            placeholder="محصول مورد نظرتون را وارد نمایید .... "
          />
          <div className="w-15 h-full bg-zinc-700 hover:bg-zinc-900 transition-all items-center flex justify-center">
            <svg className="w-6 h-6 ">
              <use href="#search-normal"></use>
            </svg>
          </div>
        </div>

        <div className="">
          <div className="text-black mt-2 border-t border-solid border-t-amber-500 pt-2 flex items-center justify-between font-bold">
            <span className="text-xs font-bold font-Dana  tracking-wide">
              نتیجه جستوجو
            </span>
            {textValueSearch.length > 2 ? (
              <div className="text-xs font-Morabba-Bold gap-0.5 flex">
                <span className="text-green-700">{allResaltSearch.length}</span>
                <span className="text-gray-800">مورد یافت شد</span>
              </div>
            ) : null}
          </div>
          {isShowLoaderSearch ? (
            <div
              ref={searchLoader}
              className={`h-2s  mt-4 rounded-md z-20 bg-slate-200 h-dull ${isShowLoaderSearch ? "flex" : "hidden"}`}
            >
              <span className="loader-searchs"></span>
            </div>
          ) : null}
          <div className="h-[420px] y-scroll-no-scrollbar">
            {allResaltSearch.map((item) => (
              <div
                ref={wrapperResultSearch}
                className={`${
                  isShowStyleSearch ? "activeStyleSearchBox" : ""
                }  text-zinc-800 mt-4 pl-3 rounded-sm w-[70%] bg-slate-100  flex justify-between items-center`}
              >
                <div className="flex gap-3 items-center rounded-sm overflow-hidden ">
                  <img
                    className="w-20 h-20 rounded-l-md"
                    src={item.img}
                    alt=""
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-Dana-Bold">{item.name}</span>
                    <span className="text-xs font-Dana-Bold">
                      {(item.price ?? 0).toLocaleString()} تومان
                    </span>
                  </div>
                </div>
                <Link
                  to={`/onspageproduct/${item.id}`}
                  className="w-10 h-10  text-white rounded-xl bg-red-500 flex items-center justify-center"
                >
                  <svg className="w-6 h-6  rounded-full">
                    <use href="#chevron-left"></use>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
