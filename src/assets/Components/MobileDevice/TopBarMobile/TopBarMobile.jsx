import {
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { CartContext } from "../../../Context/CartContext";
import BasketMobile from "./BasketMobile/BasketMobile";
import SearchBoxTopBar from "./SearchBoxTopBar/SearchBoxTopBar";
import CartBoxDetailsPc from "./CartBoxDetailsPc/CartBoxDetailsPc";
import { Link } from "react-router-dom";
import FooterTopBar from "./FooterTopBar/FooterTopBar";
export default function TopBarMobile() {
  const { addToCart, cart, allPriceInBasket } = useContext(CartContext);

  const [isActiveFooterTopbar, setIsActiveFooterTopbar] = useState(true);

  const handlerScrollFooterToShow = () => {
    if (windo < 140) {
      setIsActiveFooterTopbar(true);
    } else {
      setIsActiveFooterTopbar(false);
    }
  };
  useEffect(() => {}, []);
  const windo = window.addEventListener("scrollend", handlerScrollFooterToShow);

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
 <div className="fixed top-0 left-0 w-full z-20  ">
  <div className="max-w-[1250px] mx-auto pt-1 bg-white  border-b-4 border-sky-700">
    <div className="flex flex-col pt-2 pb-2">
      <img src="./s/offer.gif" alt="" />

      <div className="pst bg-white pl-5 flex items-center justify-between">
        <SearchBoxTopBar
          isShowLayerModals={isShowLayerModals}
          showDetailsSearch={showDetailsSearch}
          closeModaleSearch={closeModaleSearch}
          setIsShowLayerModals={setIsShowLayerModals}
        />

        <div className="md:flex hidden gap-2 [&>*]:transition-all [&>*]:border [&>*]:border-solid [&>*]:border-slate-200 [&>*]:rounded-md [&>*]:p-2 [&>*]:flex [&>*]:items-center [&>*]:gap-1 [&>*]:cursor-pointer">
          <div className="relative hover:border-red-500 hover:text-red-500">
            <div className="flex items-center">
              <svg className="w-5 h-5">
                <use href="#user"></use>
              </svg>
              <Link to="/login" className="text-sm pr-2 pl-2 font-Dana">
                ورود | ثبت نام
              </Link>
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
          className="relative border pt-1 pb-1 flex md:hidden pr-6 pl-2 mr-2 rounded-l-sm cursor-pointer bg-rose-600 text-white rounded-r-md"
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

      <div className="sm:hidden">
        <BasketMobile
          modalUserBasket={modalUserBasket}
          closeModals={closeModals}
          cart={cart}
          setIsShowLayerModals={setIsShowLayerModals}
          isShowLayerModals={isShowLayerModals}
        />
      </div>
    </div>

    <div
      onClick={() => setIsShowLayerModals(false)}
      className={isShowLayerModals ? "bg-black/30 fixed top-0 right-0 w-full h-full z-10" : ""}
    ></div>

    <FooterTopBar />
  </div>
</div>

  );
}
