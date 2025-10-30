import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import HadelAddToCartBySelectorCount from "./HadelAddToCartBySelectorCount/HadelAddToCartBySelectorCount";

export default function ShoppingCartDetailAndOtherSpecifications({
  addProductsToBasket,
  filtredOnsProducts,
  titleForBasket,

  setTitleForBasket,
}) {
  const [mainDataAfterSelect, setMainDataAfterSelect] = useState(null);
  const [countProductSelect, setCountProductSelect] = useState(null);

  useEffect(() => {}, [titleForBasket]);
  const { addToCart } = useContext(CartContext);

  // const handlerByCountSelectUser = (product) => {
  //   if (product.count) {
  //     console.log("دارد");
  //     console.log(product.count);
  //     console.log();
  //   } else {
  //     product.count = 0
  //     const neewArra = {...product, count: (product.count = countProductSelect) };
  //     console.log(neewArra);

  //     console.log("ندارد");
  //   }
  // };


  return (
    <div className="bg-[#f5f5f5] sm:max-w-60 w-full pr-2 pl-2 & > *:border-b-1 & > *:pb-2 & > *:border-b-slate-200 flex flex-col gap-2">
      <div className="">
        <div className="border border-solid  p-1 mx-auto flex items-center flex-col gap-1 rounded-sm border-zinc-500 mt-5">
          <span className="text-sm font-bold">امتیاز محصول</span>
          <div className="flex gap-0.5 & > *:w-4 & > *:h-4 & > *:text-amber-400">
            <svg className="">
              <use href="#star"></use>
            </svg>
            <svg className="">
              <use href="#star"></use>
            </svg>
            <svg className="">
              <use href="#star"></use>
            </svg>
            <svg className="">
              <use href="#star"></use>
            </svg>
            <svg className="">
              <use href="#star"></use>
            </svg>
          </div>
        </div>
      </div>
      <div className="  & > *:border-b-1 flex gap-5 flex-col & > *:pb-2 & > *:border-b-slate-200 & > *:flex  & > *:flex-col & > *:items-center & > *:gap-0.5 & > *:md:flex-row & > *:md:items-start">
        <div className=" flex  & > *:flex-col md:& > *:md:flex-row ">
          <svg className="w-5 h-5">
            <use href="#building-storefront"></use>
          </svg>
          <div className="flex items-center pr-1 flex-col md:flex-row">
            <span className="text-red-500 text-xs">فروشنده : </span>
            <span className="text-green-800 text-xs">سایت مکمل محمدی</span>
          </div>
        </div>
        <div className=" flex & > *:flex-col md:& > *:md:flex-row ">
          <svg className="w-5 h-5">
            <use href="#circle-stack"></use>
          </svg>
          <div className="flex items-center pr-1">
            <span className="text-red-500 text-xs">دسترسی : </span>
            <span className="text-green-800 text-xs">
              در انبار موجود میباشد
            </span>
          </div>
        </div>
        <div className=" flex & > *:flex-col md:& > *:md:flex-row">
          <svg className="w-5 h-5">
            <use href="#clock"></use>
          </svg>
          <div className="flex items-center pr-1 gap-1">
            <span className="text-red-500 text-xs">مدت زمان تحویل : </span>
            <span className="text-green-800 text-xs"> 12 - 24 ساعت </span>
          </div>
        </div>
      </div>
      {mainDataAfterSelect && countProductSelect > 1 ? (
        <div className="flex gap-2 sm:gap-4 h-20  text-xs border-0 text-zinc-600 flex-col  text-center   font-bold justify-center sm:h-10 items-center">
          <span>
            شما <span className="text-red-700">{countProductSelect}</span> از
            این محصول انتخاب کردید که مجموع آن
          </span>
          <span>{mainDataAfterSelect.toLocaleString()} تومان میشود </span>
        </div>
      ) : (
        <div className="flex items-center gap-1 text-sm  justify-center">
          <span className="  ">
            {filtredOnsProducts[0].price.toLocaleString()}
          </span>
          <span className="text-[15px] text-blue-800 ">تومان</span>
        </div>
      )}
      <div className="">
        <HadelAddToCartBySelectorCount
          countProductSelect={countProductSelect}
          setCountProductSelect={setCountProductSelect}
          setMainDataAfterSelect={setMainDataAfterSelect}
          priceProduct={filtredOnsProducts[0].price}
        />

        {titleForBasket == "از این طعم موجودی نداریم 😭" ? (
          <div className="bg-slate-600 gap-0.5    transition-all  abs rounded-sm text-zinc-700 pt-3 pb-3 justify-center flex items-center">
            <span
              className="text-sm text-white cursor-not-allowed"
              // onClick={() => addToUserBasket(filtredOnsProducts[0].id)}
            >
              {titleForBasket}
            </span>
          </div>
        ) : (
          <div onClick={() => addToCart(filtredOnsProducts[0])} className="bg-green-700 gap-0.5 abs rounded-sm text-white pt-3 pb-3 justify-center flex items-center">
            <div className="flex  gap-0.5">
              <svg className="w-5 h-5 ">
                <use href="#shopping-cart"></use>
              </svg>

              <button
                className="text-sm cursor-pointer"
                // onClick={() => addToCart(filtredOnsProducts[0])}
                onClick={() => handlerByCountSelectUser(filtredOnsProducts[0])}
              >
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
