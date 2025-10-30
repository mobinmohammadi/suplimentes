import React, {
  Component,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { CartContext } from "../../Context/CartContext.jsx";
import BasketMobile from "./BasketMobile/BasketMobile.jsx";
import SearchBoxTopBar from "./SearchBoxTopBar/SearchBoxTopBar.jsx";
import ItemInBasketPc from "../ItemInBasketPc/ItemInBasketPc.jsx";
import BoxesForUserBaskets from "./BoxesForUserBaskets/BoxesForUserBaskets.jsx";
import CartBoxDetailsPc from "./CartBoxDetailsPc/CartBoxDetailsPc.jsx";
import { Link } from "react-router-dom";
import FooterTopBar from "./FooterTopBar/FooterTopBar.jsx";
export default function TopBarMobile() {
  const { addToCart, cart, allPriceInBasket } = useContext(CartContext);
  
  const [isActiveFooterTopbar  , setIsActiveFooterTopbar] = useState(true)

  const handlerScrollFooterToShow = () => {
    if(windo < 140){
      setIsActiveFooterTopbar(true)
      

    }
    else{
      setIsActiveFooterTopbar(false)
      

    }
  }
  useEffect(() => {
  } , [])
  const windo = window.addEventListener("scrollend" , handlerScrollFooterToShow)

  const modalUserBasket = useRef();
  const showDetailsSearch = useRef();
  const btnOpenUserBasket = useRef();

  const [isShowLayerModals, setIsShowLayerModals] = useState(false);

  const [isShowLayer, setIsShowLayer] = useState(false);

  const openModalUserbasket = () => {
    modalUserBasket.current.classList.add("left-0", "style-modalOpen");
    setIsShowLayerModals(true);
  };

  const closeModalUserBasket = () => {
    modalUserBasket.current.classList.remove("left-0");
    modalUserBasket.current.classList.add("-left-80", "style-modalOpen");
    setIsShowLayerModals(false);
  };

  const closeModals = () => {
    modalUserBasket.current.classList.remove("left-0");
    modalUserBasket.current.classList.add("-left-80", "style-modalOpen");
    setIsShowLayerModals(false);
  };

  const closeModaleSearch = () => {
    setIsShowLayer(false);
    showDetailsSearch.current.classList.remove("showSearchWrapper");
    showDetailsSearch.current.classList.add("hiddenSearchWrapper", "invisible");
  };

  return (
    <div className=" border-b-4 pt-1 max-w-[1250px]  block border-solid  border-sky-700 bg-white fixed w-full z-20 ">
      <div className="">

      <div className="flex flex-col pt-2 pb-2">
        <img className="" src="./s/offer.gif" alt="" />

        <div className="pst  bg-white   pl-5  flex  items-center justify-between">
          <SearchBoxTopBar
            isShowLayerModals={isShowLayerModals}
            showDetailsSearch={showDetailsSearch}
            closeModaleSearch={closeModaleSearch}
            setIsShowLayerModals={setIsShowLayerModals}
          />
          <div className=" md:flex hidden & > *:transition-all  & > *:border-1 & > *:border-solid & > *:border-slate-200 & > *:rounded-md & > *:p-2 gap-2 & > *:flex & > *:items-center & > *:gap-1 & > *:cursor-pointer">
            <div className="relative hover:border-red-500 hover:text-red-500">
              <div className="">
                <div className="flex items-center ">
                  <svg className=" w-5 h-5 ">
                    <use href="#user"></use>
                  </svg>
                  <Link to="/login" className=" text-sm pr-2 pl-2 font-Dana ">
                    ورود | ثبت نام
                  </Link>
                </div>
              </div>
            </div>
            <CartBoxDetailsPc
              openModalUserbasket={openModalUserbasket}
              btnOpenUserBasket={btnOpenUserBasket}
            />
          </div>
          <div
            ref={btnOpenUserBasket}
            onClick={() => openModalUserbasket()}
            className="relative border-1 pt-1 pb-1 flex md:hidden pr-6 pl-2 mr-2 rounded-l-sm cursor-pointer bg-rose-600 text-white rounded-r-md"
          >
            {cart?.length ? (
              <div className="w-5 h-5 bg-gray-900 text-xs transition-all rounded-full text-center flex justify-center items-center absolute -right-2 -top-3">
                <span>{cart?.length}</span>
              </div>
            ) : null}
            <svg className="w-5 h-5">
              <use href="#shopping-cart"></use>
            </svg>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <BasketMobile
          modalUserBasket={modalUserBasket}
          closeModals={closeModals}
          cart={cart}
          setIsShowLayerModals={setIsShowLayerModals}
          isShowLayerModals={isShowLayerModals}
        />
      </div>
            
      <div
        onClick={() => setIsShowLayerModals(false)}
        className={
          isShowLayerModals
            ? "bg-black/30 fixed top-0  right-0 w-full h-full z-10"
            : ""
        }
      ></div>
      </div>
        {/* <div className={`${isActiveFooterTopbar ? "opacity-100 visible block " : "opacity-0 invisible hidden"}`}> */}

      <FooterTopBar/>
        {/* </div> */}
    </div>
  );
}
