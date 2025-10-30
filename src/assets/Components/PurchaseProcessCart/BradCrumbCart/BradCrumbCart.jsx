import React from "react";

export default function BradCrumbCart() {
  return (
    <div className="flex gap-2 pt-2 ">
      <span>خانه</span>
      <span>/</span>
      <span className="border-b border-b-gray-900 pb-1 rounded-xs">
        سبد خرید شما
      </span>
    </div>
  );
}
