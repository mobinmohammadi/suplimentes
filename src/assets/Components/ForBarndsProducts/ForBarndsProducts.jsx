import React, { useEffect, useState } from "react";
import AboutBrands from "./AboutBrands/AboutBrands";
import { useParams } from "react-router-dom";
import { allBrandLogo, allProducts } from "../../../Data";
import BrandsItem from "./BrandsItem/BrandsItem";
import ItemSliderPreeSell from "../ItemSliderPreeSell/ItemSliderPreeSell";
import BoxesProducts from "./BoxesProducts/BoxesProducts";

export default function ForBarndsProducts() {
  const [isLoader, setIsLoader] = useState(true);
  const [allProductsInCategury , setAllProductsInCategury] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsLoader(false);
    }, 300);
  }, []);
  const params = useParams().BrandName;

  const filterProductsByBrand = allBrandLogo.filter(
    (item) => item.name == params
  );

  useEffect(() => {
    
    const filterCateguryProductsName =  allProducts.filter(item => item.brand == params)
    setAllProductsInCategury(filterCateguryProductsName)


    
    
  },[])

  const resultFilterProductsByBrand = filterProductsByBrand[0];

  return (
    <div className=" flex  pt-20 sm:pt-36  ">
      <AboutBrands />
      {isLoader && (
        <div className="fixed top-0 w-full h-full bg-gray-800 z-20"></div>
      )}

      <div className="flex justify-center items-center container-custom  w-full">
        <div className="grid grid-cols-3  md:grid-cols-4  gap-3">
          {allProductsInCategury.map((products) => (
            <BoxesProducts {...products} />
          ))}
        </div>
      </div>
    </div>
  );
}
