import React, { useContext, useState } from "react";
import DetailsBoxUserForOrders from "../../DetailsBoxUserForOrders/DetailsBoxUserForOrders";
import BoxPost from "./BoxPost/BoxPost";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../Context/CartContext";

export default function MainContentSecondOfTheShopping({
  isActiveDay,
  setIsActiveDay,
  setISClickedPost,
  detailUserInLocalStorage,
}) {
  const { cart, allPriceInBasket } = useContext(CartContext);
  const [isActivePost, setIsActivePost] = useState("");

  const days = [
    { day: "سه‌شنبه", date: "27 خرداد" },
    { day: "چهارشنبه", date: "28 خرداد" },
    { day: "پنج‌شنبه", date: "29 خرداد" },
    { day: "شنبه", date: "30 خرداد" },
    { day: "یک‌شنبه", date: "31 خرداد" },
  ];
  
  return (
    <div className="sm:pb-32">
      <div className="flex flex-col gap-12">
        <span>مرسوله 1 از 1</span>
        <div className="grid grid-cols-4 sm:flex pr-5 gap-3 & > *:rounded-sm & > *:w-18 & > *:h-18">
          {cart.map((item) => (
            <Link to={`/onspageproduct/${item.id}`}>
            
            <img src={item.img} alt="" />
            </Link>
          ))}
        </div>
        {detailUserInLocalStorage.length == 0 && (
          <div className="flex flex-col gap-5">
            <div className="flex w-full items-center justify-between h-1 ">
              <span className=" w-50  text-xs sm:text-sm ">
                انتخاب شیوه ارسال
              </span>
              <span className="w-full h-[2px] bg-slate-400 rounded-full inline-block"></span>
            </div>
            <div className="bg-[#fff3cd] mb-10 text-[#d09111] flex gap-1 items-center pt-1 pr-2 pb-1 rounded-md ">
              <svg className="w-6 h-6">
                <use href="#information-circle"></use>
              </svg>
              <span className="text-xs sm:text-sm  leading-6">
                {" "}
                با افزودن اولین آدرس روش های ارسال در دسترس قرار میگیرد
              </span>
            </div>
            <div className="flex w-full items-center justify-between h-1 ">
              <span className=" w-50  text-xs sm:text-sm ">
                انتخاب زمان ارسال
              </span>
              <span className="w-full h-[2px] bg-slate-400 rounded-full inline-block"></span>
            </div>
            <div className="flex w-full pr-54 sm:pr-0 pb-3 & > *:w-full & > *:sm:w-auto & > *:text-x & > *:sm:text-sm sm:overflow-x-auto overflow-x-scroll & > *:cursor-pointer  & > *:flex & > *:pr-10 & > *:pl-10  & > *:pt-2 & > *:pb-2 justify-center & > *:text-xs & > *:text-slate-500 & > *:flex-col & > *:gap-1 & > *:bg-slate-200 & > *:text-center">
              {days.map((item, index) => (
                <div
                  onClick={() => setIsActiveDay(item.date)}
                  key={index + 1}
                  className={`${
                    isActiveDay == item.date
                      ? "border-t-3 w-42 rounded-sm border-solid transition-all border-t-sky-800 text-gray-950"
                      : ""
                  }`}
                >
                  <span>{item.day}</span>
                  <span>{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex w-full items-center justify-between h-1 ">
          <span className=" w-50  text-xs sm:text-sm ">انتخاب شیوه ارسال </span>
          <span className="w-full h-[2px] bg-slate-400 rounded-full inline-block"></span>
        </div>
        <div onClick={() => setISClickedPost(prev => !prev)} className="flex flex-col gap-2">
          <BoxPost
          
            setIsActivePost={setIsActivePost}
            isActivePost={isActivePost}
          />
        </div>
      </div>
    </div>
  );
}
