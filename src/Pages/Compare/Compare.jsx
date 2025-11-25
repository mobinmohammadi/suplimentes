import  { useContext, useEffect, useState } from "react";
import BradCrumb from "@Custom/BradCrumb/BradCrumb"
import TopBarMobile from "@Mobile/TopBarMobile/TopBarMobile";
import Footer from "@/Footer/Footer";
import { allProducts } from "../../Data";
import BoxCompare from "@/Compares/BoxCompare/BoxCompare";
import BoxesForAddCompare from "@/Compares/BoxesForAddCompare/BoxesForAddCompare";
import TableCompare from "@/Compares/TableCompare/TableCompare";
import ComparseContext from "../../assets/Context/ComparseContext/ComparseContext";

export default function Compare() {
  const { arrayComparse } = useContext(ComparseContext);
  const [isShowModalProduct, setIsShowModalProduct] = useState(false);
  const [valueCategury, setValueCategury] = useState();
  const [arrayAferSelectCategury, setArrayAferSelectCategury] = useState([]);
  const [arrayAfterSearchTitle, setArrayAfterSearchTitle] = useState([]);
  const [titleSearch, setTitleSearch] = useState("");

  const searchForCompare = () => {};

  const categuryProduct = () => {
    const resultCategury = allProducts.filter(
      (item) => item.nameEN == valueCategury
    );

    setArrayAferSelectCategury(resultCategury);
  };

  const titleSerchCateguryProduct = () => {
    const seachAfterTitle = allProducts.filter((item) =>
      item.name.includes(titleSearch)
    );
    setArrayAfterSearchTitle(seachAfterTitle);
  };
  useEffect(() => {
    titleSerchCateguryProduct();
  }, [titleSearch]);
  useEffect(() => {
    categuryProduct();
  }, [valueCategury]);

  return (
    <div className="container-custom">
      <div className="relative flex  flex-col gap-10 font-Dana pr-2 pl-2">
        <TopBarMobile />
        <BradCrumb />
        <BoxesForAddCompare setIsShowModalProduct={setIsShowModalProduct} />
        <div
          className={`${
            isShowModalProduct
              ? "opacity-100 w-full top-1/2 visible h-full sm:h-[60%] "
              : "opacity-0 invisible h-0 top-full"
          } w-[90%] transition-md pb-6 p overflow-hidden bg-slate-200  left-1/2 -translate-x-1/2 -translate-y-1/2 fixed  z-50 rounded-sm `}
        >
          <div className="flex relative  bg-white items-center w-full pt-2 pb-2">
            <div className="flex sm:w-[90%] sm:border-zinc-400 rounded-md border-slate-200 border-2 pt-1 pb-1">
              <span className="pt-1 pr-2 pl-2 pb-1 text-zinc-800 sm:block hidden">
                جستوجو
              </span>
              <div className="  flex  justify-between  w-full sm:w-[70%] sm:border-l-2 border-l-slate-300">
                <input
                  type="text"
                  value={titleSearch}
                  onChange={(e) => setTitleSearch(e.target.value)}
                  className="border-0   outline-0 text-xs w-60 pr-2"
                  placeholder="نام محصول برای جستوجو وارد کنید ..."
                />
              </div>
              <div className=" items-center px-2 ml-3 outline-1 mr-2  outline-slate-400  sm:flex hidden rounded-sm cursor-pointer">
                <select
                  onClick={(e) => setValueCategury(e.target.value)}
                  className=" cursor-pointer appearance-none outline-0"
                  name=""
                  id=""
                >
                  <option value="">انتخاب دسته بندی ...</option>
                  <option value="protein">پروتعین وی | ProteinWhey</option>
                  <option value="creatine">کراتین | Creatin</option>
                  <option value="bcaa">بی سی ای ای | Bcaa</option>
                  <option value="gainer">گینر | Gainer</option>
                </select>
                <svg
                  className="w-4 h-4 mb-1 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
                <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center"></div>
              </div>
            </div>
            <div
              onClick={() => setIsShowModalProduct(false)}
              className="cursor-pointer absolute left-4 top-1/"
            >
              <svg className="w-6 h-6">
                <use href="#z-mark"></use>
              </svg>
            </div>
          </div>
          {/* <div className="flex items-center h-64 flex-col w-full justify-center">
          <svg className="w-25 h-25 text-zinc-800">
            <use href="#magnifying-glass"></use>
          </svg>
          <span>محصولی یافت نشد 😥</span>
        </div> */}
          <div className="h-[90%] overflow-y-scroll pr-3 pt-2 pl-3 pb-3">
            <div className="text-xs">
              {" "}
              <span className="text-red-600 border-b-2 ml-2">
                {arrayAferSelectCategury.length}
              </span>{" "}
              محصول یافت شد{" "}
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 mmd:grid-cols-4 gap-5 pt-3">
              {(arrayAfterSearchTitle.length
                ? arrayAfterSearchTitle
                : arrayAferSelectCategury.length
                ? arrayAferSelectCategury
                : allProducts
              ).map((item, index) => (
                <BoxCompare
                  key={index + 1}
                  item={item}
                  setIsShowModalProduct={setIsShowModalProduct}
                />
              ))}
            </div>
          </div>
        </div>
        {isShowModalProduct ? (
          <div
            onClick={() => setIsShowModalProduct(false)}
            className="blur-sm w-full h-full fixed bg-black/30 z-20"
          ></div>
        ) : (
          ""
        )}
        {arrayComparse.length ? <TableCompare /> : null}

        <Footer />
      </div>
    </div>
  );
}
