import React, { useContext, useRef } from "react";
import BoxesForUserBaskets from "../BoxesForUserBaskets/BoxesForUserBaskets";
import { CartContext } from "../../../../Context/CartContext";
import { Link } from "react-router-dom";

export default function CartBoxDetailsPc(props) {
  const { cart } = useContext(CartContext);

  let { openModalUserbasket, btnOpenUserBasket } = props;
  return (
    <div className="relative group font-Dana">
      <div
        className={`absolute overflow-hidden z-10 opacity-0 invisible border  border-solid group-hover:visible left-0 bg-white  transition-all rounded-md group-hover:opacity-100 min-h-18 w-[400px]  vi top-full`}
      >
        <div className=" text-gray-900 pt-2  shadow-2xl w-full  top-full h-full  ">
          <div className="flex justify-between border-b-1 pb-2 border-solid border-solid-200">
            <span className="text-xs pr-2">سبد خرید شما</span>
            {cart.length ? (
              <span className="text-x pl-2">
                {cart.length} محصول در سبد خرید شما
              </span>
            ) : null}
          </div>
          <div
            className={`pt-2 pb-2 pr-2 pl-2 flex gap-2 flex-col  ${
              cart.length > 2 ? "overflow-y-scroll h-[300px]" : ""
            }`}
          >
            {cart?.length ? (
              cart.map((item) => (
                // <span>سلا و دررود</span>
                <BoxesForUserBaskets key={item.id} item={item} />
              ))
            ) : (
              <span className="text-center pt-2 pb-2 font-Morabba-Bold text-sm border-dotted border-b-sky-700 border-b-2">
                سبد خرید شما خالی میباشد ☹️
              </span>
            )}
          </div>
        </div>
        {cart.length ? (
            <Link to="/cart" className=" w-full">
              <span className="bg-green-700 w-full block pt-1 pb-1 text-center text-white">
                تسویه حساب
              </span>
            </Link>
        ) : null}
      </div>
      <div className="flex sm:hidden">
        <svg
          ref={btnOpenUserBasket}
          onClick={() => openModalUserbasket()}
          className="w-5 h-5"
        >
          <use href="#shopping-cart"></use>
        </svg>
        <span className="absolute -top-2 -right-2  bg-red-500 p-1 font-Dana rounded-full pr-2 pl-2 text-x text-white">
          {cart.length}
        </span>
      </div>
      <div className="hidden sm:flex">
        <svg ref={btnOpenUserBasket} className="w-5 h-5">
          <use href="#shopping-cart"></use>
        </svg>
        <span className="absolute -top-2 -right-2  bg-red-500 p-1 font-Dana rounded-full pr-2 pl-2 text-x text-white">
          {cart.length}
        </span>
      </div>
    </div>
  );
}
