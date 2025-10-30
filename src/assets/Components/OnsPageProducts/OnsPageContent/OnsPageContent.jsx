import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../../../Data";
import OnsPageSliderProduct from "../OnsPageSliderProduct/OnsPageSliderProduct";
import ShareProducts from "../../ShareProducts/ShareProducts";
import TasteProducts from "../TasteProducts/TasteProducts";
import ShoppingCartDetailAndOtherSpecifications from "../ShoppingCartDetailAndOtherSpecifications/ShoppingCartDetailAndOtherSpecifications";
import NameAndCateguryNameAndMore from "../NameAndCateguryNameAndMore/NameAndCateguryNameAndMore";
import ImagesAndSliderForProductsSinglePages from "../ImagesAndSliderForProductsSinglePages/ImagesAndSliderForProductsSinglePages";
import { CartContext } from "../../../Context/CartContext";
import MainOnsPageContent from "./MainOnsPageContent/MainOnsPageContent";
import EasyAddToBasketMobile from "./MainOnsPageContent/EasyAddToBasketMobile/EasyAddToBasketMobile";

export default function OnsPageContent({}) {
  const [isShowMenuOnPage, setIsShowMenuOnPage] = useState(false);

  const { addToCart } = useContext(CartContext);
  const [srcProductStatus, setSrcProductStatus] = useState();
  const [isShowSliderMoreOnOneProducts, setIsShowSliderMoreOnOneProducts] =
    useState(false);
  const [idToast, setIdToast] = useState(null);
  const params = useParams();
  const [isShowPageShare, setIsShowPageShare] = useState(false);
  const [isStyleBtnAddToBasket, setIsStyleBtnAddToBasket] = useState(false);
  let [titleForBasket, setTitleForBasket] = useState("");

  function setSrcImageProductsHandler(srcSerialImg) {
    setSrcProductStatus(srcSerialImg);
  }

  const productID = params.ProductID;

  const filtredOnsProducts = allProducts.filter((item) => item.id == productID);

  useEffect(() => {}, [filtredOnsProducts]);

  useEffect(() => {
    setSrcProductStatus(filtredOnsProducts[0].img);
  }, [filtredOnsProducts]);
  const subImg = filtredOnsProducts[0].subImg.map((img) => img.img);

  function handlePageShare() {
    setIsShowPageShare(true);
  }

  function cancellActionsForShareProducts() {
    setIsShowPageShare(false);
  }

  const getAlltest = filtredOnsProducts[0].taste.map((tast) => tast);

  // ==============================================================

  const loaderOnPages = useRef(null);

  setTimeout(() => {
    loaderOnPages.current.classList += "opacity-0 hidden";
  }, 300);

  // ==============================================================

  // =======   Status Found Products    =========================

  const statusFoudProducts = filtredOnsProducts[0].taste.filter(
    (item) => item.id === idToast
  );

  if (statusFoudProducts.length > 0) {
    const result = statusFoudProducts[0];

    if (result.status == 0) {
      titleForBasket = "از این طعم موجودی نداریم 😭";
      setTimeout(() => {
        setTitleForBasket("");
      }, 2000);
    } else {
      titleForBasket = " افزودن به سبد خرید";
      setTimeout(() => {
        setTitleForBasket("");
      }, 2000);
    }
  }
  //

  // const resultAfterFoundStatusTast =

  // ==============================================================

  const btnAferLoadedPage = useRef(null);
  setTimeout(() => {
    btnAferLoadedPage.current.classList += " aftreLoadedOnsPageUserBasketBtn";
  }, 200);
  setTimeout(() => {
    btnAferLoadedPage.current.classList +=
      " aftreLoadedOnsPageUserBasketBtnLast";
  }, 500);

  // ================  On Scroll =====================================
  const [isActiveScroll, setIsActiveScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 720) {
        return setIsActiveScroll(true);
      } else if (window.scrollY < 720) {
        return setIsActiveScroll(false);
      } else if (window.scrollY > 985) {
        return setIsActiveScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styleAndAddToCartHandler = () => {
    addToCart(filtredOnsProducts[0]);
    setIsStyleBtnAddToBasket(true);
    setTimeout(() => {
      setIsStyleBtnAddToBasket(false);
    }, 1000);
  };

  return (
    <div className="">
      <div className="bg-white flex-col mt-5-xutom sm:flex-row  p-5 flex justify-around container-custom">
        <ImagesAndSliderForProductsSinglePages
          isShowPageShare={isShowPageShare}
          setIsShowPageShare={setIsShowPageShare}
          setSrcImageProductsHandler={setSrcImageProductsHandler}
          subImg={subImg}
          srcProductStatus={srcProductStatus}
          setIsShowSliderMoreOnOneProducts={setIsShowSliderMoreOnOneProducts}
          filtredOnsProducts={filtredOnsProducts}
        />

        <MainOnsPageContent
          filtredOnsProducts={filtredOnsProducts}
          subImg={subImg}
          getAlltest={getAlltest}
          setIdToast={setIdToast}
          titleForBasket={titleForBasket}
          cancellActionsForShareProducts={cancellActionsForShareProducts}
          setIsShowSliderMoreOnOneProducts={setIsShowSliderMoreOnOneProducts}
          setTitleForBasket={setTitleForBasket}
          isShowPageShare={isShowPageShare}
          loaderOnPages={loaderOnPages}
          isShowSliderMoreOnOneProducts={isShowSliderMoreOnOneProducts}
        />
      </div>
      <div className="sm:hidden">
        <EasyAddToBasketMobile
          btnAferLoadedPage={btnAferLoadedPage}
          isStyleBtnAddToBasket={isStyleBtnAddToBasket}
          isShowMenuOnPage={isShowMenuOnPage}
          isActiveScroll={isActiveScroll}
          styleAndAddToCartHandler={styleAndAddToCartHandler}
          setIsShowMenuOnPage={setIsShowMenuOnPage}
        />
      </div>
    </div>
  );
}
