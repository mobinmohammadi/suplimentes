import React from "react";
import { Link } from "react-router-dom";

export default function BradCrumbCart() {
  return (
    <div className="flex gap-2 font-Dana mt-10">
      <Link to="/">خانه</Link>
      <span>/</span>
      <span className="border-b border-b-gray-900 pb-1 rounded-xs">
        سبد خرید شما
      </span>
    </div>
  );
}
