import { useEffect, useState } from "react";
import TopBarCateguryFilter from "./TopBarCateguryFilter/TopBarCateguryFilter";
import ItemSliderPreeSell from "../../ItemSliderPreeSell/ItemSliderPreeSell";
import { allProducts } from "../../../../Data";
import BoxItemsColumns from "./BoxItemsColumns/BoxItemsColumns";
export default function ContentCategoryProducts({
  isRowAndColumns,
  arrayAllProducts,
  setIsShowBoxCateguryByMobile,
  setIsRowAndColumns,
}) {
  const [allDataProducts, setAllDataProducts] = useState(allProducts);
  const [titleCategury, setTitleCategury] = useState("پیش فرض");
  const [isStyleWrapperContentCategury, setIsStyleWrapperContentCategury] =
    useState(false);

  useEffect(() => {
    let newDataAfterCategury = [...arrayAllProducts];

    switch (titleCategury) {
      case "پیش فرض":
        newDataAfterCategury = arrayAllProducts;
        break;
      case "ارزان ترین":
        newDataAfterCategury = newDataAfterCategury.filter(
          (product) => product.price < 2000000
        );
        
        break;
      case "گران ترین":
        newDataAfterCategury = newDataAfterCategury.filter(
          (product) => product.price > 3000000
        );
        break;
      case "جدید ترین":
        newDataAfterCategury = newDataAfterCategury.slice(4, 8);
        break;

      case "پرفروش ترین":
        newDataAfterCategury = newDataAfterCategury;
        break;
      default: {
        newDataAfterCategury = [...allDataProducts];
        break;
      }
    }
    setAllDataProducts(newDataAfterCategury);
  }, [titleCategury , arrayAllProducts]);
  useEffect(() => {
    setIsStyleWrapperContentCategury(false);
    const timer = setTimeout(() => {
      setIsStyleWrapperContentCategury(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [titleCategury]);
  return (
    <div className="flex relative flex-col items-center w-full pb-5 bg-white ">
      <div
        onClick={() => setIsShowBoxCateguryByMobile(true)}
        className="absolute sm:hidden cursor-pointer -top-6 right-0"
      >
        <svg className="w-5 h-5">
          <use href="#bolt"></use>
        </svg>
      </div>
      <div className="font-Dana pr-3 pt-3 rounded-sm text-xs   w-full">
        <TopBarCateguryFilter
          isRowAndColumns={isRowAndColumns}
          setIsRowAndColumns={setIsRowAndColumns}
          titleCategury={titleCategury}
          setTitleCategury={setTitleCategury}
        />
      </div>
      <div
        className={`${
          isRowAndColumns == "row" ? "flex flex-col w-full" : "grid"
        }  w-full ${
          isStyleWrapperContentCategury
            ? "mt-8 opacity-100"
            : "mb-15  opacity-0 invisible"
        } grid-cols-2 transitions-custom x:grid-cols-3 sm:grid-cols-4 justify-center items-center gap-3  pr-3 pl-3`}
      >
        {!arrayAllProducts.length
          ? <span className="text-sm font-Morabba-Bold">در این رنج محصولی پیدا نشد 😕</span>
          : isRowAndColumns == "row"
          ? allDataProducts.map((item) => (
              <BoxItemsColumns key={item.id} items={item} />
            ))
          : allDataProducts.map((item) => (
              <ItemSliderPreeSell key={item.id} items={item} />
            ))}
      </div>
    </div>
  );
}
