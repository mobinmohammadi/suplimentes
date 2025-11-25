import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FooterTopBar() {  



  return (
    <div className={`font-Dana sm:block hidden  pr-8 pl-4 mx-auto  text-xs pt-2 pb-2 bg-white border-t-2 border-slate-200 border-solid space-y-10`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 & > *:cursor-pointer ">
          <div className="">
            <svg className="w-5 h-5">
              <use href="#home"></use>
            </svg>
          </div>
          <div className="group relative">
            <div className="mt-1 relative group hover:bg-slate-100 p-2 rounded-sm  ">
              <span className="h-10">مکمل بدنسازی</span>
              <span className="w-1 opacity-0 group-hover:opacity-100 absolute group-hover:w-full transition-all -bottom-1 bg-red-600 h-[2px] right-0"></span>
            </div>
            <div className="bg-white top-[180%] group-hover:top-[120%] shadow-2xl group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all   rounded-md overflow-hidden sm:w-[900px] h-82 absolute">
              <div className="p-4 grid grid-cols-5 ">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-0.5 items-center">
                    <svg className="w-5 h-5">
                      <use href="#chevron-left"></use>
                    </svg>
                    <span className="font-bold">پروتئین</span>
                  </div>
                  <ul className="flex mr-5 flex-col & > *:hover:mr-2 & > *:hover:text-red-700 & > *:transition-all gap-2 & > *:text-xs">
                    <li>پروتئین وی</li>
                    <li>پروتئین وی ایزوله</li>
                    <li>پروتئین بیف</li>
                    <li>پروتئین گیاهی</li>
                    <li>پروتئین کازئین</li>
                    <li>پروتئین بار</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-0.5 items-center">
                    <svg className="w-5 h-5">
                      <use href="#chevron-left"></use>
                    </svg>
                    <span className="font-bold">آمینو اسید</span>
                  </div>
                  <ul className="flex mr-5 flex-col & > *:hover:mr-2 & > *:hover:text-red-700 & > *:transition-all gap-2 & > *:text-xs">
                    <li>آمینو</li>
                    <li>آمینو انرژی</li>
                    <li>آمینو بیف</li>
                    <li>بی سی ای ای (BCAA)</li>
                    <li>آمینو ایی ای ای (EAA)</li>
                    <li>اچ ام بی (HMB)</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-0.5 items-center">
                    <svg className="w-5 h-5">
                      <use href="#chevron-left"></use>
                    </svg>
                    <span className="font-bold">قبل از تمرین</span>
                  </div>
                  <ul className="flex mr-5 flex-col & > *:hover:mr-2 & > *:hover:text-red-700 & > *:transition-all gap-2 & > *:text-xs">
                    <li>پمپ</li>
                    <li>قرص کافئین</li>
                    <li>بتاآلانین</li>
                    <li> تائورین</li>
                    <li>سیترولین مالات</li>
                    <li>آرژنین</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-0.5 items-center">
                    <svg className="w-5 h-5">
                      <use href="#chevron-left"></use>
                    </svg>
                    <span className="font-bold">تست بوستر</span>
                  </div>
                  <ul className="flex mr-5 flex-col & > *:hover:mr-2 & > *:hover:text-red-700 & > *:transition-all gap-2 & > *:text-xs">
                    <li>پاراهورمون</li>
                    <li>تریبولوس</li>
                    <li>ZMA</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-0.5 items-center">
                    <svg className="w-5 h-5">
                      <use href="#chevron-left"></use>
                    </svg>
                    <span className="font-bold">مکمل تقویتی</span>
                  </div>
                  <ul className="flex mr-5 flex-col & > *:hover:mr-2 & > *:hover:text-red-700 & > *:transition-all gap-2 & > *:text-xs">
                    <li>مکمل پوست و مو</li>
                    <li>شیلاجیت</li>
                    <li>اشتها آور</li>
                    <li>مفصل و غضروف ساز</li>
                    <li>کلاژن</li>
                    <li>آشواگاندا</li>
                    <li>تقویت قوای جنسی</li>
                    <li>کبد شور</li>
                    <li>ضد درد</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 & > *:cursor-pointer">
          <div className="mt-1 relative group">
            <span>بلاگ</span>
            <span className="w-1 opacity-0 group-hover:opacity-100 absolute group-hover:w-full transition-all -bottom-1 bg-red-600 h-[2px] right-0"></span>
          </div>
          <Link to="/contactus" className="mt-1 relative group">
            <span>تماس با ما</span>
            <span className="w-1 opacity-0 group-hover:opacity-100 absolute group-hover:w-full transition-all -bottom-1 bg-red-600 h-[2px] right-0"></span>
          </Link>
          <div className="mt-1 relative group">
            <span>فروش ویژه</span>
            <span className="w-1 opacity-0 group-hover:opacity-100 absolute group-hover:w-full transition-all -bottom-1 bg-red-600 h-[2px] right-0"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
