import React from "react";
import { Link } from "react-router-dom";

export default function BradCrumb(props) {
  let params = location.pathname;
  let title = "";
  console.log(params);

  if (params == "/contactus") {
    title = "ارتباط با ما";
  } else if (params.startsWith("/Compare")) {
    title = "مقایسه";
  } else if (params == "/") {
    title = "خانه";
  } else {
    title = "در حال توسعه 💻 ...";
  }
  return (
    <div class="pt-14 sm:pt-32 w-full flex flex-col gap-7 text-sm font-Dana-Bold container-custom pr-3 pl-3">
      <div class="flex gap-2 pt-2 ">
        <Link to="/">خانه</Link>
        <span>/</span>
        <span class="border-b border-dashed border-b-gray-900 pb-1 rounded-xs text-red-600">{title}</span>
      </div>
    </div>
  );
}
