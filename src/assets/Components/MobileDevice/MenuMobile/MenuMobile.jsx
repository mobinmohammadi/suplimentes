import React, { useContext, useEffect, useState } from "react";
import ShowWrapperSearch from "../../NavMenuBeautiful/ShowWrapperSearch";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";

export default function MenuMobile() {
  const [isShowSearchBox, setIsShowSearchBox] = useState(null);
  const cancelActions = () => {
    setIsShowSearchBox(false);
  };
  

  const arrayMenu = [
    { id: 1, title: "پنل کابری", link: "/login", svg: "#user-home" },
    {
      id: 2,
      title: "جستوجو",
      link: "#",
      svg: "#search-normal",
      setIsShowSearchBox,
      cancelActions,
    },
    {
      id: 3,
      title: "دسته بندی ها",
      link: "/categuryByProducts/protein",
      svg: "#cube-transparent",
    },
    { id: 4, title: "سبد خرید", link:  "/cart"  , svg: "#shopping-bag" },
  ];

  return (
    <>
      <ShowWrapperSearch
        cancelActions={cancelActions}
        isShowSearchBox={isShowSearchBox}
      />

      <div className="w-full & > *:cursor-pointer pb-2 flex justify-between fixed bottom-0 z-10 rounded-t-xl bg-slate-500 text-white pt-2 pr-2 r pl-2">
        {arrayMenu.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            className="flex flex-col max-w-24 gap-1 items-center"
            onClick={() => {
               setIsShowSearchBox(true) 
              // item.setIsShowSearchBox(true)
              // cancelActions()
            }}
          >
            <svg className="w-5 h-5 text-white">
              <use href={item.svg}></use>
            </svg>
            <span>{item.title}</span>
          </Link>
        ))}

      </div>
    </>
  );
}
