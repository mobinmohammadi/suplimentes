import React, { useEffect } from "react";


import { Link } from "react-router-dom";

export default function SuccusPayCart() {
  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem("cart", "");
      window.location.href = "/";
    }, 2000);
  }, []);
  return (
    <div>
      {/* <TopBarMobile />. */}
      <div className="pl-4 pr-4 flex flex-col  pt-5 gap-7 container-custom text-sm font-Dana-Bold">
        {/* <BradCrumbCart />

        <CheckoutProgressBar currentStep={4} /> */}
        <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-60 rounded-full " src="/Images/succes.gif" alt="" />
          <div className="flex flex-col gap-3 text-center">
            <div className="flex-col flex gap-0.5">
              <span className="text-sky-500">پرداخت موفق ✅</span>
              <span className="text-green-500">
                کاربر گرامی ممنون از پرداخت شما{" "}
                <span className="text-red-500 pt-0.5">❤</span>
              </span>
            </div>
            <div className="flex gap-1 ">
              <span>کد پیگیری شما :</span>
              <span className="tracking-wider">
                {Math.ceil(Math.random() * 10000000000000000)}
              </span>
            </div>
            <div className="">
              <Link
                to="/"
                className="text-red-600 hover:text-sky-500 hover:border-b-sky-500 transition-all pb-1 border-b-2 border-dotted w-32 border-red-500"
              >
                رفتن به صحفه اصلی
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
