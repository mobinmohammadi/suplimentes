import React, { useState } from "react";

export default function SearchInCategury({ setValueSearchInCateguryPage }) {
  const [isShowSvgSearch, setIsShowSvgSearch] = useState(false);

  const svgHandlerShow = () => {
    setIsShowSvgSearch(true);
  };

  return (
    <div className="w-full p-2 flex items-center justify-between bg-white rounded-sm relative ">
      <input
        onClick={(e) => {
          svgHandlerShow();
        }}
        onChange={(e) => setValueSearchInCateguryPage(e.target.value)}
        type="text"
        name=""
        id=""
        className="outline-0 text-xs mb-2 sm:text-sm"
        placeholder="جستوجو ..."
      />
      <svg
        className={`w-5 h-5 ${
          isShowSvgSearch
            ? "cursor-pointer left-2 transitions-custom opacity-100"
            : "left-30 opacity-0"
        } absolute    `}
      >
        <use href="#search-normals"></use>
      </svg>
    </div>
  );
}
