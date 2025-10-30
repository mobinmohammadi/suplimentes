import React from "react";

export default function BoxPost({ setIsActivePost, isActivePost }) {
  return (
    <div
      onClick={() => setIsActivePost((prev) => !prev)}
      className={` group  rounded-md p-3 relative cursor-pointer transition-all duration-200 ${
        isActivePost
          ? "bg-gray-600 text-white      border-4 border-amber-700"
          : "bg-white hover:bg-gray-600 "
      }  transition-all hover:text-white`}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <div className="w-15 h-15 rounded-full border-2 border-slate-400 ">
            <img
              className="rounded-full p-2"
              src="./../../Images/logo/postarm2.png"
              alt=""
            />
          </div>
          <span className="text-xs sm:text-sm">پست پیشتاز</span>
        </div>
        <div className=" flex flex-col gap-1 items-center">
          <span className="text-x ">هزینه ارسال :</span>
          <div className=" text-xs flex items-center gap-0.5">
            <span>220,000</span>
            <span>تومان</span>
          </div>
        </div>
      </div>
      {!isActivePost && (
        <span className="bg-green-500 w-[0%]  group-hover:w-[80%] transitions-Custom duration-200 h-[4px] rounded-full absolute bottom-0"></span>
      )}
    </div>
  );
}
