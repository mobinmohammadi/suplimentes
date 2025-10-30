import React from "react";

export default function MainContent() {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="">
          <div className="bg-sky-800 pt-2 pb-2  text-center text-white rounded-e-md ">
            <span className="text-xs sm:text-sm">
              قبل از ورود به درگاه پرداخت لطفا اتصال وی پی ان خود را قطع کنید!!!
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-between ">
          <span className=" w-50  text-xs sm:text-sm ">انتخاب شیوه پرداخت</span>
          <span className="w-full h-[2px] bg-slate-400 overflow-hidden rounded-full inline-block"></span>
        </div>
        <div className="flex gap-5 flex-col sm:flex-row">
          <div className="flex bg-white rounded-md overflow-hidden h-24 sm:h-30 ">
            <div className="bg-slate-300  h-full p-5 flex items-center ">
              <img
                className="w-13 object-contain sm:w-14 h-13 sm:h-14"
                src="./../../Images/logo/online-payment.png"
                alt=""
              />
            </div>
            <div className="flex flex-col   items-center justify-center text-center gap-3 pt-2 pb-2 p-2 pl-2">
              <span className="text-xs sm:max-w-28">
                پرداخت آنلاین با کارتهای بانکی
              </span>
              <span className="sm:max-w-32 text-center text-x tracking-wider">
                بصورت امن و مطمئن از درگاه های مستقیم بانک می توانید جهت پرداخت
                وجه اقدام نمایید
              </span>
            </div>
          </div>
          <div className="flex bg-white overflow-hidden rounded-md h-24 sm:h-30 ">
            <div className="bg-slate-300  h-full p-5 flex items-center ">
              <img
                className="w-13 sm:w-14 object-contain   h-13 sm:h-14"
                src="./../../Images/logo/debit-card.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 pt-2 pb-2 p-2 pl-2">
              <span className="text-xs sm:max-w-28">
                پرداخت از طریق کارت به کارت
              </span>
              <span className="sm:max-w-32 text-right text-x tracking-wider">
                همراه گرامی لطفا فیش واریزی را به شماره واتس اپ ********090 ارسال
              نمائید .
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
