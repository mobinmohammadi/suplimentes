import React, { useEffect, useState } from "react";
import TopBarMobile from "./../../assets/Components/TopBarMobile/TopBarMobile.";
import "../../App.css";
// import { articles } from "../../Data";

export default function Articles() {
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsLoader(false);
    }, 300);
    
  }, []);


  return (
    <>
      <TopBarMobile />

      <div className="flex gap-5 pt-20 sm:pt-37 container-custom font-Dana pb-37 pr-1 pl-1">
        <div className="bg-white mmd:block hidden rounded-md  w-48 h-58"></div>

        <div className="flex flex-col p-5 bg-white w-full rounded-sm">
          <div className="border-b-slate-200 border-b border-solid pb-7">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="flex flex-col gap-5">
                  <span className="text-gray-900 text-base font-bold">
                    مصرف مکمل‌های بدنسازی از چه سنی مناسب است؟
                  </span>
                  <img src="./../../Images/Articles/6.webp" alt="" />
                </div>
                <div className="flex flex-col gap-5 mt-10">
                  <span className="text-xs text-[#506476] text-justify leading-6 tracking-wide">
                    با افزایش گرایش نوجوانان و جوانان به ورزش‌های قدرتی و
                    بدنسازی، استفاده از مکمل‌های ورزشی به موضوعی چالش‌برانگیز
                    برای این گروه از افراد و البته خانواده‌هایشان تبدیل شده است.
                    بسیاری از افراد به دنبال راهی سریع برای افزایش عضله‌سازی،
                    بهبود عملکرد یا جبران کمبودهای غذایی هستند، اما مسئله مهم
                    این است که مصرف این مکمل‌ها در سنین پایین می‌تواند عوارضی بر
                    رشد، هورمون‌ها و سلامت کلی بدن داشته باشد. در ادامه، به
                    بررسی سن مناسب برای شروع مصرف مکمل‌های رایج بدنسازی و
                    راهکارهای ایمن برای استفاده از مکمل‌ها توسط ورزشکاران جوان
                    می‌پردازیم.
                  </span>
                  <span className="text-xl font-bold text-[#4a5f73] font-mora">
                    سن مناسب برای شروع مصرف مکمل‌های هیدراته کننده
                  </span>
                  <span className="text-xs text-[#506476] text-justify leading-6 tracking-wide">
                    مکمل‌های هیدراته کننده مانند نوشیدنی‌های الکترولیتی معمولاً
                    حاوی سدیم، پتاسیم و قند هستند و برای جبران آب و
                    الکترولیت‌های ازدست‌رفته حین تمرینات سنگین طراحی شده‌اند.
                    مصرف این مکمل‌ها برای نوجوانان بالای ۱۲ سال که در ورزش‌های
                    استقامتی طولانی‌مدت مانند دو ماراتن فعالیت می‌کنند، مجاز
                    است. بااین‌حال، برای کودکان زیر ۱۲ سال، تأمین آب و
                    الکترولیت‌ها از طریق آب معمولی و یک رژیم غذایی متعادل و مصرف
                    میوه‌هایی مانند موز یا پرتقال کافی است. مصرف بیش از حد
                    نوشیدنی‌های ورزشی در نوجوانان می‌تواند منجر به اضافه‌وزن
                    ناشی از قند اضافه یا عدم تعادل الکترولیت‌ها شود، در نتیجه
                    حتماً باید تعادل در مصرف این نوع مکمل‌ها رعایت شود.
                  </span>
                </div>

                <div className="flex gap-0.5 font-bold justify-center text-xs mt-5 mb-5">
                  <span className="text-[#4a5f73]">همچنین بخوانید:</span>
                  <span className="text-[#0000ff]">
                    بدنسازی از چه سنی مناسب است؟
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <span className="text-[#4a5f73] text-xl font-bold">
                  سن مناسب برای شروع مصرف مکمل پروتئین وی
                </span>
                <img src="./../../Images/Articles/6-2.webp" alt="" />
              </div>
              <div className="flex flex-col gap-5 mt-0">
                <p className="text-xs text-[#506476] leading-6 text-justify tracking-wide">
                  <span className="text-sky-700 font-bold ">پروتئین وی</span>{" "}
                  به‌عنوان یک منبع پروتئین زود جذب، برای ریکاوری و عضله‌سازی
                  استفاده می‌شود. متخصصان تغذیه تأکید می‌کنند که نوجوانان زیر ۱۸
                  سال معمولاً نیازی به مصرف این مکمل ندارند، چرا که پروتئین مورد
                  نیاز خود را می‌توانند از طریق منابع طبیعی مانند گوشت، تخم‌مرغ،
                  لبنیات و حبوبات تأمین کنند. تنها در موارد خاص مانند کمبود شدید
                  پروتئین در رژیم غذایی یا ورزشکاران حرفه‌ای نوجوان مصرف محدود و
                  تحت‌نظر پزشک مجاز است. مصرف خودسرانه پروتئین وی در سنین رشد
                  می‌تواند فشار اضافی به کلیه‌ها وارد کرده یا اختلالات گوارشی
                  ایجاد کند، در نتیجه مادر و پدر ورزشکار نوجوان قبل از خرید مکمل
                  پروتئین وی باید با پزشک مشورت کنند. علاوه بر این، لازم است
                  ورزشکاران جوان تنها محصولات پروتئینی را انتخاب کنند که حاوی
                  100 درصد پروتئین است و دارای ترکیبات اضافه دیگر نیست، زیرا این
                  مواد افزودنی ممکن است به بدم آسیب برسانند.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-[#4a5f73] text-xl font-bold">
                  سن مناسب برای شروع مصرف مکمل کراتین
                </span>
                <img src="./../../Images/Articles/6-3.webp" alt="" />
              </div>
              <div className="flex flex-col gap-5 mt-0">
                <p className="text-xs text-[#506476] text-justify leading-6 tracking-wide">
                  <span className="text-sky-700  font-bold">کراتین</span> یکی از
                  بحث‌برانگیزترین مکمل‌ها برای نوجوانان است. اگرچه این مکمل برای
                  بهبود عملکرد در تمرینات انفجاری مؤثر است، اما سازمان‌های
                  معتبری مانند آکادمی پزشکی ورزشی اطفال آمریکا مصرف آن را برای
                  افراد زیر ۱۸ سال ممنوع اعلام کرده‌اند. دلیل این ممنوعیت، عدم
                  تحقیقات کافی درباره تأثیرات بلندمدت کراتین بر هورمون‌ها، رشد
                  استخوان‌ها و اندام‌های حیاتی نوجوانان است. حتی در جوانان بالای
                  ۱۸ سال نیز مصرف کراتین باید با دوز استاندارد و تحت نظارت مربی
                  یا پزشک انجام شود تا از بروز مشکلات احتمالی جلوگیری شود.
                </p>
                <div className="flex gap-0.5 font-bold justify-center text-xs mt-5 mb-5">
                  <span className="text-[#4a5f73]">همچنین بخوانید:</span>
                  <span className="text-[#0000ff]">
                    تفاوت پروتئین گیاهی و حیوانی{" "}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-[#4a5f73] text-xl font-bold">
                  راهکارهای مناسب برای بدنسازی ورزشکاران نوجوان و جوان
                </span>
                <img src="./../../Images/Articles/6-4.webp" alt="" />
              </div>
              <div className="flex flex-col gap-5 mt-0">
                <p className="text-xs text-[#506476] text-justify leading-6 tracking-wide">
                  <span className="text-sky-700 font-bold">کراتین</span> یکی از
                  بحث‌برانگیزترین مکمل‌ها برای نوجوانان است. اگرچه این مکمل برای
                  بهبود عملکرد در تمرینات انفجاری مؤثر است، اما سازمان‌های
                  معتبری مانند آکادمی پزشکی ورزشی اطفال آمریکا مصرف آن را برای
                  افراد زیر ۱۸ سال ممنوع اعلام کرده‌اند. دلیل این ممنوعیت، عدم
                  تحقیقات کافی درباره تأثیرات بلندمدت کراتین بر هورمون‌ها، رشد
                  استخوان‌ها و اندام‌های حیاتی نوجوانان است. حتی در جوانان بالای
                  ۱۸ سال نیز مصرف کراتین باید با دوز استاندارد و تحت نظارت مربی
                  یا پزشک انجام شود تا از بروز مشکلات احتمالی جلوگیری شود.
                </p>
                <div className="flex gap-0.5 font-bold justify-center text-xs mt-5 mb-5">
                  <span className="text-[#4a5f73]">همچنین بخوانید:</span>
                  <span className="text-[#0000ff]">
                    صبحانه پروتئینی برای بدنسازان{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-5 flex-col">
              <span className="text-[#4a5f73] font-Dana font-bold">
                سخن پایانی
              </span>
              <p className="text-[#506476] tracking-wide text-justify leading-6 text-xs">
                مصرف مکمل‌های بدنسازی برای نوجوانان و جوانان تنها در شرایط خاص و
                تحت نظارت پزشک مجاز است. تا پیش از ۱۸ سالگی، تمرکز اصلی باید بر
                تغذیه سالم، آبرسانی و تمرینات اصولی باشد تا از اختلال در رشد
                طبیعی بدن جلوگیری شود. به خاطر داشته باشید که مکمل‌ها هرگز
                جایگزین پایه‌های اساسی سلامت نیستند و مصرف زودرس آن‌ها می‌تواند
                عوارضی مانند عدم تعادل هورمونی، آسیب به کلیه یا کبد را به دنبال
                داشته باشد. برای اطمینان از ایمنی، همواره پیش از استفاده از
                هرگونه مکمل، با پزشک مشورت کنید و تنها از برندها و فروشگاه‌های
                معتبر خرید کنید.
              </p>
              <div className="mt-5 flex sm:flex-row flex-col  gap-1 text-xs">
                <span className="font-bold pb-2 sm:pb-0">منبع :</span>
                <span className="text-sky-900">
                  mayoclinichealthsystem.org{" "}
                </span>
                <span className="sm:block hidden">-</span>
                <span className="text-sky-900">akronchildrens.org </span>
              </div>
              <div className="flex gap-10 pr-10 text-xs">
                <span>دسته بندی ها:</span>
                <span className="text-red-700">علم ورزشی</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 mt-7">
            <span className="text-sm font-bold">درج نظر</span>
            <div className="w-full flex justify-center items-center gap-5 flex-col">
              <textarea
                name=""
                id=""
                className="outline-0 w-full p-1  border-slate-300 min-h-48 sm:w-[600px] bg-slate-100"
              ></textarea>
              <button className="pt-1 cursor-pointer  pb-1 pr-3 pl-3 rounded-sm text-sm text-white bg-[#f74258]">
                تایید و ثبت نظر
              </button>
            </div>
          </div>
        </div>
      </div>
      {isLoader && (
        <div className="fixed top-0 w-full h-full bg-gray-800 z-20"></div>
      )}
    </>
  );
}
