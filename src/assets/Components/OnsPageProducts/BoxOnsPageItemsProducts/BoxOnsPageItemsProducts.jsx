import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";

export default function BoxOnsPageItemsProducts({
  addProductsToBasket,
  products,
}) {
  const { addToCart } = useContext(CartContext);

  const btnAddToBasket = useRef(null);
  const loaderAddToBasket = useRef(null);
  const disibledAddToBasketBtn = useRef(null);

  const loaderAndAddToBasketHandler = (e) => {
    addToCart(products);

    disibledAddToBasketBtn.current.classList.add("opacity-100");
    disibledAddToBasketBtn.current.classList.add("transitions-all");
    disibledAddToBasketBtn.current.classList.add("visible");

    loaderAddToBasket.current.classList.remove("opacity-0");
    btnAddToBasket.current.classList.add("hidden");
    btnAddToBasket.current.classList.add("hidden");
    setTimeout(() => {
      loaderAddToBasket.current.classList.add("opacity-0");
      btnAddToBasket.current.classList.remove("hidden");
      disibledAddToBasketBtn.current.classList.remove("opacity-100");
      disibledAddToBasketBtn.current.classList.remove("transitions-all");
      disibledAddToBasketBtn.current.classList.remove("visible");
    }, 1500);
  };

  let navigate = useNavigate();
  const goto = () => {
    navigate(`/onspageproduct/${products.id}`);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 150);
  };

  return (
    <div>
      <div className="max-w-48  flex flex-col props-center gap-2 ">
        <img className="w-28 rounded-md" src={`../${products.img}`} alt="" />
        <span
          onClick={() => goto()}
          className="max-w-[130px] text-right overflow-hidden max-h-[1.4em] text-xs inline-block text-[13px]"
        >
          {products.name}
        </span>
        <div className="flex justify-between gap-3 props-center mt-2">
          <span className="text-xs">قیمت {products.price} </span>
        </div>
        <div
          onClick={() => loaderAndAddToBasketHandler(products)}
          className="relative bg-green-500 rounded-sm h-8 flex items-center justify-center"
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
        {/* افزودن به سبد خرید */}
      </div>
    </div>
  );
}
