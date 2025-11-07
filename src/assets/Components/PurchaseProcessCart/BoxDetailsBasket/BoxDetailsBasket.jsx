import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function BoxDetailsBasket({ isClickedPost, setISClickedPost }) {
  const { cart, allPriceInBasket } = useContext(CartContext);

  const location = useLocation();
  const pathName = location.pathname;
  const finalPrice = allPriceInBasket + 250000
  const [isBillingPage, setIsBillingPage] = useState(false);
  const [isPaymentPage, setIsPaymentPage] = useState(false);

  useEffect(() => {
    setIsBillingPage(pathName === "/cart/billingaddress");
    setIsPaymentPage(pathName === "/cart/billingaddress/mony");
  }, [pathName]);

  const showShippingWarning = isBillingPage && !isClickedPost;

  const showNextStepBtn = !showShippingWarning;

  const nextStepLink =
    pathName === "/cart"
      ? "billingaddress"
      : pathName === "/cart/billingaddress"
      ? "mony"
      : "successPay";

 return (
    <div className="w-full sm:w-[400px] h-[400px] bg-white flex p-4 font-Dana flex-col gap-5 text-center">
      <div className="flex justify-between w-full border-b border-b-[#ef3f56]">
        <div className="flex flex-col gap-3 pb-3 w-full">
          <div className="flex justify-between w-full">
            <div className="flex gap-1 text-xs">
              <span>مبلغ کل</span>
              <span>({cart?.length} کالا)</span>
            </div>
            <div className="flex gap-1">
              <span className="mt-0.5">{allPriceInBasket.toLocaleString()}</span>
              <span className="font-Morabba">تومان</span>
            </div>
          </div>

          {isBillingPage && (
            <div className="flex justify-between text-right">
              <span className="text-xs">هزینه حمل و نقل :</span>
              {isClickedPost ? (
                <span className="text-xs">۲۵۰,۰۰۰ تومان</span>
              ) : (
                <span className="text-red-700 text-xs">
                  لطفاً یکی از شیوه‌های حمل و نقل را انتخاب کنید!
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {isPaymentPage ? (
        <div className="flex flex-col gap-2">
          <span className="text-gray-900 text-sm font-Morabba">
            مبلغ قابل پرداخت
          </span>
          <span className="text-[#ef3f56] text-base font-Dana-Bold">
            {finalPrice.toLocaleString()}
          </span>
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <span className="text-gray-900 text-sm">مبلغ قابل پرداخت</span>
          <span className="text-[#ef3f56] text-base font-Morabba-Bold">
            محاسبه در طول پرداخت
          </span>
        </div>
      )}

      {showShippingWarning ? (
        <div className="bg-slate-500 text-white py-3 rounded-sm text-xs">
          کاربر گرامی، لطفاً یکی از شیوه‌های ارسال را انتخاب کنید.
        </div>
      ) : (
        <Link
          to={nextStepLink}
          className="bg-red-500 group cursor-pointer relative text-white py-3 rounded-sm"
        >
          <span>مرحله بعد</span>
          <div className="absolute -right-5 h-12 bg-slate-100/40 rounded-full top-0 w-16 group-hover:w-64 transitions-Custom" />
          <svg className="w-6 h-6 absolute group-hover:right-54 transitions-Custom top-2.5 right-2 text-white">
            <use href="#chevron-left" />
          </svg>
        </Link>
      )}

      <div className="flex flex-col gap-0.5 w-full text-slate-400 text-xs text-right">
        <span>کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند،</span>
        <span>برای ثبت سفارش، مراحل بعدی را تکمیل کنید.</span>
      </div>
    </div>
  );
}
