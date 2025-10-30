import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export default function propsliderPreeSell(props) {
  const { addToCart } = useContext(CartContext);

  const btnAddToBasket = useRef(null);
  const loaderAddToBasket = useRef(null);
  const disibledAddToBasketBtn = useRef(null);

  const loaderHandler = () => {
    disibledAddToBasketBtn.current.classList.add(
      "opacity-100",
      "transitions-all",
      "visible"
    );

    loaderAddToBasket.current.classList.remove("opacity-0");
    btnAddToBasket.current.classList.add("hidden");
    setTimeout(() => {
      loaderAddToBasket.current.classList.add("opacity-0");
      btnAddToBasket.current.classList.remove("hidden");
      disibledAddToBasketBtn.current.classList.remove(
        "opacity-100",
        "transitions-all",
        "visible"
      );
    }, 1500);

    addToCart(props.items);
  };

  let navigate = useNavigate();
  const goto = () => {
    navigate(`/onspageproduct/${props.items.id}`);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 150);
  };
  return (
    <div>
      <div className="max-w-44 bg-slate-300 rounded-sm overflow-hidden flex items-center flex-col props-center gap-2 ">
        <img
          className="w-full rounded-md"
          src={`../${props.items.img}`}
          alt="خطا در دریافت عکس ..."
        />
        <div className="flex flex-col w-full font-Dana ">
          <div className="flex flex-col pr-1">
            <span
              onClick={() => goto()}
              className="max-w-[130px] text-right overflow-hidden max-h-[1.4em] text-xs inline-block text-[13px]"
            >
              نام : {props.items.name}
            </span>
            <div className="flex justify-between gap-3 props-center mt-2">
              <span className="text-xs">قیمت : {props.items.price} </span>
            </div>
          </div>
          <div
            onClick={() => loaderHandler()}
            className="relative mt-3 bg-green-500 rounded-sm h-8 flex items-center justify-center"
          >
            <button
              ref={btnAddToBasket}
              className=" cursor-pointer w-full h-full text-xs pt-2 pb-2   text-white"
            >
              افزودن به سبد خرید
            </button>

            <div
              ref={disibledAddToBasketBtn}
              className="w-full h-full flex items-center justify-center cursor-no-drop  text-xs opacity-0 pt-2 pb-2 absolute top-0 bg-slate-300 rounded-sm text-white invisible"
            >
              <span
                ref={loaderAddToBasket}
                className="loader-addToBasket opacity-0 absolute"
              ></span>
            </div>
          </div>
        </div>
        {/* افزودن به سبد خرید */}
      </div>
    </div>
  );
}
