import  { useEffect, useState } from "react";
import FilterCategurtProducts from "./FilterCategurtProducts/FilterCategurtProducts";
import ContentCategurtProducts from "./ContentCategurtProducts/ContentCategoryProducts";
import RoadMapSite from "../RoadMapSite/RoadMapSite";
import { useParams } from "react-router-dom";
import { allProducts } from "../../../Data";

export default function CategurtProducts() {
  const [arrayAllProducts, setArrayAllProducts] = useState(allProducts);
  const [isShowBoxCateguryByMobile, setIsShowBoxCateguryByMobile] =
    useState(false);
  const [valueSearchInCateguryPage, setValueSearchInCateguryPage] =
    useState("");
  const [filterByRange, setFilterByRange] = useState(0);

  const [isRowAndColumns, setIsRowAndColumns] = useState("row");
  const categuryName = useParams();
  let title = "";
  let categoryKey = null;
  switch (categuryName.categuryProduct) {
    case "protein":
      title = "پروتعین وی";
      categoryKey = "protein";
      break;
    case "amino":
      title = "آمینو";
      categoryKey = "amino";
      break;
    case "gainer":
      title = "گینر";
      categoryKey = "gainer";
      break;
    case "carbomas":
      title = "کربو مس";
      categoryKey = "carbomas";

      break;
    case "ceratin":
      title = "کراتین";
      categoryKey = "creatin";

      break;
    case "testboaster":
      title = "تست بوستر";
      break;
    case "glotamin":
      title = "گلوتامین";
      categoryKey = "glotamin";

      break;
    case "moltivitamin":
      title = "مولتی ویتامین";
      categoryKey = "moltivitamin";
      break;
    case "bcaa":
      title = "بی سی ای ای";
      categoryKey = "bcaa";
      break;
    default:
      {
        title = "";
      }
      setArrayAllProducts(fitredProduct);
  }
  useEffect(() => {
    let filtred = allProducts.filter((item) => {
      const matchCategury = categoryKey ? item.categury === categoryKey : false;
      const matchSearch = item.name.includes(valueSearchInCateguryPage);
      const matchPrice = item.price >= filterByRange;

      return matchCategury && matchSearch && matchPrice;
    });
    setArrayAllProducts(filtred);
  }, [filterByRange, valueSearchInCateguryPage]);

  return (
    <div className="flex pb-10 mr-3 ml-3  ">
      <div className=" sm:mt-32 mt-18 w-full ">
        <RoadMapSite categury="دسته بندی ها" name={title} />
        <div className="container-custom">
          <div className="flex gap-5 mt-10 ">
            <div
              className={`fixed ${
                isShowBoxCateguryByMobile
                  ? "opacity-100 z-30 visible"
                  : "opacity-0 invisible"
              } sm:opacity-100 sm:visible sm:static z-10 flex right-2 bg-white sm:bg-slate-100 sm:bg-auto sm:top-auto top-[30%] rounded-sm sm:rounded-none shadow-2xl sm:shadow-none border-slate-300 border-solid sm:border-0 border-2  w-[96%] sm:w-auto`}
            >
              <FilterCategurtProducts
                setFilterByRange={setFilterByRange}
                setValueSearchInCateguryPage={setValueSearchInCateguryPage}
                setIsShowBoxCateguryByMobile={setIsShowBoxCateguryByMobile}
              />
            </div>

            <ContentCategurtProducts
              arrayAllProducts={arrayAllProducts}
              setIsShowBoxCateguryByMobile={setIsShowBoxCateguryByMobile}
              isRowAndColumns={isRowAndColumns}
              setIsRowAndColumns={setIsRowAndColumns}
            />
          </div>
        </div>
      </div>
      <div className="">
        {isShowBoxCateguryByMobile && (
          <div
            onClick={() => setIsShowBoxCateguryByMobile(false)}
            className="bg-black/20 fixed top-0 right-0 w-full h-full z-20"
          ></div>
        )}
      </div>
    </div>
  );
}
