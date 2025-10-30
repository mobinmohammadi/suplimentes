import React, { useContext } from "react";
import { CartContext } from "../../../../Context/CartContext";
import { Link } from "react-router-dom";

export default function WrapperAllOrders() {
  const { cart } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-10 mt-5 mb-5 sm:mb-52 h-full ">
      <div className="flex w-full items-center justify-between ">
        <span className=" w-50  text-xs sm:text-sm ">خلاصه سفارش</span>
        <span className="w-full h-[2px] bg-slate-400 overflow-hidden rounded-full inline-block"></span>
      </div>
      <div className="border-b pb-4  bg-white rounded-md pt-5 pr-4 pl-4 ">
        <div className="flex justify-between border-b-1 pb-4 gap-1 sm:text-xs border-b-slate-300 border-solid text-x text-center text-slate-500 ">
          <div className="flex flex-col gap-1 ">
            <span>مرسوله</span>
            <span className="text-gray-800">{cart.length} کالا</span>
          </div>
          <span>زمان ارسال</span>
          <span>نحوه ارسال</span>
          <div className="flex flex-col gap-1 ">
            <span>زمان تقریبی تحویل کالا</span>
            <span className="text-gray-800">بسته به سفارش</span>
          </div>
          <span>هزینه ارسال</span>
        </div>
        <div className="mt-10">
          <div className="rounded-sm gap-3 grid mmd:grid-cols-5 justify x:grid-cols-4 grid-cols-3  text-gray-600 text-center text-x sm:text-xs">
            {cart.map((item) => (
              <>
                <div className="flex flex-col items-center gap-3 ">
                  <img
                    className="rounded-e-sm w-24 h-24 "
                    src={`../${item.img}`}
                    alt=""
                  />
                  <div className="flex flex-col gap-2">
                    <Link to={`/onspageproduct/${item.id}`} className="leading-5 ">{item.name}</Link>
                    <span className="text-x text-gray-800">
                      {item.count} عدد
                    </span>
                  </div>
                </div> 
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
