import React from "react";

export default function BoxesForAddreasUser({
  setDetailsBoxUserForOrders,
  setActiveAddreas,
  isActiveAddreas,
  removeAddreas,
  editOnUserOrders,
  item,
}) {
  return (
    <div
      onClick={() => setActiveAddreas(item.id)}
      className={`bg-white transition-all cursor-pointer rounded-md p-5 pr-6 sm:pr-10 relative ${
        isActiveAddreas == item.id ? "border-r-12 border-r-red-800" : ""
      } `}
    >
      <div className="flex justify-between flex-col x:flex-row gap-5 x:gap-1">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 text-xs font-Dana">
            <div className="">
              <span>گیرنده :</span>
              <span>
                {item.firstname}-{item.lastname}
              </span>
            </div>
            <div className="">
              <span>شماره تماس :</span>
              <span>{item.phone}</span>
            </div>
            <div className="max-w-44 leading-5">
              <span>استان :</span>
              <span>
                {item.province}-{item.city}-{item.postaladdress}
              </span>
            </div>
          </div>
          <div className="flex gap-3 text-xs text-red-700 & > *:hover:border-b-2 & > *:border-dashed & > *:pb-2 & > *:cursor-pointer">
            <span onClick={() => editOnUserOrders(item.id)}>
              اصلاح این آدرس
            </span>
            <span onClick={() => removeAddreas(item.id)}>حذف این آدرس</span>
          </div>
        </div>
        {isActiveAddreas == item.id ? (
          <div className="flex  pr-4 transition-all pl-4 h-10 text-x items-center justify-center text-white rounded-e-md bg-sky-800">
            <span>انتخاب شده</span>
          </div>
        ) : (
          <div className="flex  pr-4 transition-all pl-4 h-10 text-x items-center justify-center text-white rounded-e-md bg-red-800">
            <span>انتخاب نشده</span>
          </div>
        )}
      </div>
      {isActiveAddreas == item.id ? (
        <div className="bg-slate-100 transition-all z-10 absolute top-[38%] -right-5 border border-red-800  w-8 h-8 flex items-center justify-center  rounded-full ">
          <svg className="w-4 h-4 ">
            <use href="#check"></use>
          </svg>
        </div>
      ) : (
        ""
      )}
      {/* <span className="bg-red-800 w-3 h-20 absolute top-[20%] -right-2 rounded-md  "></span> */}
    </div>
  );
}
