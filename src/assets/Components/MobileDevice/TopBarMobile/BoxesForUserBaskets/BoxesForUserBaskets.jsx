import React, { useContext, useRef } from "react";
import { CartContext } from "../../../../Context/CartContext";

export default function BoxesForUserBaskets({item}) {
  
  
  if(!item) return null

  let { name, img, price, count } = item
  const deleteBtn = useRef(null)
  const acceptForDelete = useRef(null)
  const cancelForDelete = useRef(null)
  const {removeInBasket} = useContext(CartContext)
  

  function deleteBtnForUserBasketUser() {
      acceptForDelete.current.classList.add("openTheDeletModalUserBasket")

      acceptForDelete.current.classList.remove("opacity-0")
      acceptForDelete.current.classList.remove("hidden")
  }

  function cancelldeleteBtnForUserBasketUser() {
      acceptForDelete.current.classList.remove("openTheDeletModalUserBasket")
      acceptForDelete.current.classList.add("opacity-0")
      // acceptForDelete.current.classList.add("hidden")
      setTimeout(() => {
      acceptForDelete.current.classList.add("hidden")
        
      }, 200);
      

  }

  function handleDeleteInBasket() {
    
    removeInBasket(id)
    cancelldeleteBtnForUserBasketUser()
  }

  let {discountProductInBasket} = useContext(CartContext)

  return (
    <div className="flex  border-b border-zinc-600 border-solid font-Dana ">
      <div className="flex w-full justify-around mt-3 gap-1 pr-2 pb-3">
        <img className="w-20 h-20 rounded-md" src={img} alt="" />
        <div className="flex flex-col justify-between">
          <span className="text-sm">{name}</span>
          <div className="flex gap-2">
            <span className="text-xs ">{price.toLocaleString()} تومان</span>
            <span className="text-xs text-cyan-700"> {count} عدد</span>
          </div>
        </div>
        <div className="flex gap-2">

        <div onClick={() => discountProductInBasket(item)} className="flex items-center justify-center hover:text-red-600 transition-all">
          <svg className="w-5 h-5 cursor-pointer ">
            <use href="#minus-circle"></use>
          </svg>
        </div>
        <div ref={deleteBtn} onClick={() => deleteBtnForUserBasketUser()} className="cursor-pointer flex hover:& > *:hover:text-red-600 justify-center items-center ">
          
          <svg  className="w-5 h-5 text-zinc-700  transition-all">
            <use href="#trash"></use>
          </svg>
        </div>
        </div>
      </div>
      <div ref={acceptForDelete} className="bg-slate-600 rounded-r-sm transition-all text-white  flex-col justify-around hidden w-24 text-center ">
        <span>مطمعنی؟!</span>
        <div className="flex justify-around & > *:cursor-pointer items-center">
         <div onClick={() => cancelldeleteBtnForUserBasketUser()} className="" ref={cancelForDelete} >
          <svg className="w-5 h-5 hover:text-red-500 transition-all">
            <use href="#x-mark"></use>
          </svg>
         </div>
         <div onClick={() => handleDeleteInBasket()} className="">
          <svg className="w-5 h-5 hover:text-green-500 transition-all">
            <use href="#check"></use>
          </svg>
         </div>
        </div>
      </div>
    </div>
  );
}
