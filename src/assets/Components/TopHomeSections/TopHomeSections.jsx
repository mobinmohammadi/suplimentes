import React from "react";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";

export default function TopHomeSections() {
  return (
    <div className=" h- flex h-40 sm:h-72 sm:items-center sm:justify-center sm:mt-18 gap-2 sm:container-custom sm:pl-5">
      <div className="w-full sm:w-[70%] sm:h-full ">
        <RightSection />
      </div>
      <div className="w-[30%] sm:block hidden  h-full  ">
        <LeftSection />
      </div>
    </div>
  );
}
