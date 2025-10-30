import React from "react";

export default function Footer() {
  return (
    <div className=" pt-5 rounded-tr-md rounded-tl-md font-Dana">
      <div>
        <div className="flex justify-between  sm:flex-row sm:gap-0 gap-5 w-full flex-col items-center sm:items-start pt-5 pb-5 pr-5 pl-5 bg-white">
          <div className="flex flex-col sm:text-right text-center sm:gap-2">
            <span className="text-sm font-bold text-slate-500">خبرنامه</span>
            <span className="text-xs text-slate-500">
              با عضویت در خبرنامه از آخرین تخفیف ها و جشنواره های ما مطلع شوید.
            </span>
          </div>
          <div className="w-full h-10">
            <div className="flex border justify-between  border-solid h-full border-red-500 rounded-full  pt-[3px] pr-2  sm:pr-4 pl-1 pb-2">
              <input
                className="text-slate-500 outline-0 font-bold w-[80%] text-xs pt-1 sm:text-sm"
                type="text"
                placeholder="ایمیل خود را وارد نمایید ..."
                name=""
                id=""
              />
              <svg className=" w-8 h-8 hover:bg-red-500 hover:text-white hover:transition-all cursor-pointer text-red-500 border border-solid border-red-400 rounded-full p-2">
                <use href="#check"> </use>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <footer className="cotainer-custom pt-5 pr-3 pb-5 pl-3 bg-slate-200">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 items-center gap-10">
          <div className="flex flex-col items-center text-center xs:items-start xs:text-right">
           <div className="pb-10 flex">
           <svg className="w-5 mt-[2px] text-zinc-800 -rotate-[110deg] h-5">
              <use href="#phone"></use>
            </svg>
            <span className="font-bold">راه های ارتباطی</span>
           </div>
            <div className="flex flex-col gap-5">
              <span className="text-red-500 font-bold text-sm">
                09036945119
              </span>
              <span>پشتیبانی همه روزه در واتساپ</span>
              <div className="flex gap-1 items-center">
                <svg className="w-5 h-5">
                  <use href="#envelope"></use>
                </svg>
                <span className="mb-1">mobyn3223@gmail.com</span>
              </div>
              <div>
                <svg className="w-5 h-5">
                  <use href="#map"></use>
                </svg>
                <div className="flex gap-1">
                  <span>دفتر مرکزی : </span>
                  <span>آذربایجان غربی,نقده </span>
                </div>
              </div>
              <span></span>
            </div>
          </div>
          <div className="items-center text-center xs:items-start xs:text-right">
            <div className="flex gap-1 pb-10 items-center justify-center xs:justify-start">
              <svg className="w-5 h-5">
                <use href="#link"></use>
              </svg>
              <span className="font-bold">لینک ها</span>
            </div>
            <div className="flex gap-4 flex-col">
              <span>پروتئین</span>
              <span>کربوهیدرات</span>
              <span>مس و گینر</span>
              <span>تست بوستر</span>
              <span>قبل از تمرین</span>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 items-center">
            <div className=" flex gap-1 justify-center flex-col w-full">
              <div className="flex items-center justify-center sm:justify-start sm:items-start">
                <img
                  className="w-16"
                  // src="https://www.svgrepo.com/show/489305/gym.svg"
                  alt=""
                />
              </div>
              <span className="text-center sm:text-right">فروشگاه مکمل محمدی</span>
            </div>
            <div className="flex flex-col font-bold gap-1 text-xs text-center ">
              <span className="leading-6 max-w-[367px] items-center sm:text-right">
                فروشگاه اینترنتی محمدی به عنوان وارد کننده برترین برندهای
                جهان در زمینه مکمل‌های بدنسازی و محصولات مراقبت از پوست فعالیت
                می‌کند. پایین ترین قیمت و با کیفیت ترین محصولات را از ما
                بخواهید.
              </span>
              <span className="text-sky-800 sm:text-right pt-3">همینجا از همه جای دنیا خرید کن ...!</span>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-slate-400 text-center pt-2 pb-2 text-zinc-800 font-bold">
          <span>ساخته شده توسط </span>
          <span className="text-green-800 font-Morabba">Mobin Rc </span>
         </div>
    </div>
  );
}
