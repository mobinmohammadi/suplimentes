import React from "react";
import { Link } from "react-router-dom";

export default function BradCrumb(props) {
    let params  = location.pathname
    let title = ""

    switch(params){
        case "/contactus" :
        title = "مقاله ها"
        break

        default : {
            title : "در حال توسعه 💻 ..."
        }
    }
    
  return (
    <div class="pt-14 sm:pt-32 w-full flex flex-col gap-7 text-sm font-Dana-Bold container-custom pr-3 pl-3">
      <div class="flex gap-2 pt-2 ">
        <Link to="/">خانه</Link>
        <span>/</span>
        <span class="border-b border-b-gray-900 pb-1 rounded-xs">
          {title}
        </span>
      </div>

    </div>
  );
}
