import React, { useEffect } from "react";

export default function HadelAddToCartBySelectorCount({priceProduct ,setCountProductSelect, setMainDataAfterSelect}) {

    const changeCountProduct = (e) => {
        const priceAfterSelectValue =  e * priceProduct
        
        setMainDataAfterSelect(priceAfterSelectValue)
        setCountProductSelect(null)
        setCountProductSelect(e)

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
