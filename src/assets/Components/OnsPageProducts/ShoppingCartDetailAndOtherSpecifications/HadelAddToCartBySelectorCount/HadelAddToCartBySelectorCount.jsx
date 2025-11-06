import React, { useContext, useEffect } from "react";
import { CartContext } from "../../../../Context/CartContext";

export default function HadelAddToCartBySelectorCount({priceProduct ,mainDataAfterSelect,setCountProductSelect, setMainDataAfterSelect}) {
  const {setCountProduct} = useContext(CartContext)
    const changeCountProduct = (e) => {
        const priceAfterSelectValue =  e * priceProduct
        
        setMainDataAfterSelect(priceAfterSelectValue)
        setCountProductSelect(e)
        setCountProduct(e)
        

    }




  return (
    <div className="flex flex-col">
      <span>تعداد : </span>
      <select
        className="border border-slate-600 border-solid rounded-md mb-2 mt-2"
        name=""
        id=""
        onChange={(e) => changeCountProduct(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </div>
  );
}
