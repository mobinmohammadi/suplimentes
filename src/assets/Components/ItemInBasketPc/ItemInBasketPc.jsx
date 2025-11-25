import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function ItemInBasketPc({ id, name, price, count, img }) {
  const { removeInBasket } = useContext(CartContext);
  return (
    <div className="flex  font-Dana items-center gap-1 justify-between bg--300">
      <div className="flex items-center gap-1">
        <img className="w-20 rounded-sm" src={img} alt="" />
        <div className="text-xs flex flex-col gap-2">
          <span>نام : {name} </span>
          <span>قیمت : {price.toLocaleString()} تومان </span>
        </div>
      </div>
      <div className="text-xs pl-1 flex gap-2 items-center">
        <span className="font-Morabba-Bold">{count} عدد</span>
        <div onClick={() => removeInBasket(id)}>
          <svg className="w-5 h-5 hover:text-red-700 transition-all hover:rotate-360">
            <use href="#trash"></use>
          </svg>
        </div>
      </div>
      {/* <span className="text-xs">سبد خرید شما خالی میباشد 😥</span> */}
    </div>
  );
}
