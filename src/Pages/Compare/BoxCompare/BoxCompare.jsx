import React, { useContext, useEffect } from "react";
import ComparseContext from "../../../assets/Context/ComparseContext/ComparseContext";

export default function BoxCompare({ item, setIsShowModalProduct }) {
  const { addToComparse } = useContext(ComparseContext);

  return (
    <div className="rounded-md flex-col gap-5 text-center bg-white  flex justify-between">
      <div className="w-full justify-center flex items-center">
        <img className="w-26 h-26 rounded-md" src={item.img} alt="" />
      </div>
      <span
        onClick={() => {
          setIsShowModalProduct(false);
          addToComparse(item);
        }}
        className="text-xs h-10 line-clamp-1pr-2 pl-2"
      >
        {item.name}
      </span>

    </div>
  );
}
