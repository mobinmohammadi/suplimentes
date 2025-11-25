import React, { useState } from "react";
import TopBarMobile from "../../MobileDevice/TopBarMobile/TopBarMobile";
import BradCrumbCart from "../BradCrumbCart/BradCrumbCart";
import CheckoutProgressBar from "../CheckoutProgressBar/CheckoutProgressBar";
import BoxDetailsBasket from "../BoxDetailsBasket/BoxDetailsBasket";
import MainContentSecondOfTheShopping from "./MainContentSecondOfTheShopping/MainContentSecondOfTheShopping";
import DetailsBoxUserForOrders from "../DetailsBoxUserForOrders/DetailsBoxUserForOrders";
import BoxesForAddreasUser from "./MainContentSecondOfTheShopping/BoxesForAddreasUser/BoxesForAddreasUser";

export default function TheSeconedStepOfTheShoppingCart() {
  const [isDetailsBoxUserForOrders, setDetailsBoxUserForOrders] =
    useState(false);
  const detailUserInLocalStorage =
    JSON.parse(localStorage.getItem("userOrders")) || [];
  const [dataForEdit, setDataForEdit] = useState([]);

  const editOnUserOrders = (userDataID) => {
    const convertLocalStorage = JSON.parse(localStorage.getItem("userOrders"));
    const userD = convertLocalStorage.find((item) => item.id == userDataID);

    setDataForEdit(userD);

    setDetailsBoxUserForOrders(true);
  };
  const [isActiveDay, setIsActiveDay] = useState("سه شنبه");

  const [isActiveAddreas, setActiveAddreas] = useState("");

  const removeAddreas = (addreas) => {
    const dataForDelete = JSON.parse(localStorage.getItem("userOrders"));

    const removeAddreas = dataForDelete.filter((item) => item.id !== addreas);
    localStorage.setItem("userOrders", JSON.stringify(removeAddreas));
  };
  const [isClickedPost, setISClickedPost] = useState(false);

  return (
    <div className="w-full">
      <TopBarMobile />
      <div className="pt-22 w-full flex flex-col gap-7 text-sm font-Dana-Bold container-custom pr-3 pl-3">
        <BradCrumbCart />
        <CheckoutProgressBar currentStep={2} />
        <div className="flex justify-between flex-col sm:flex-row gap-5">
          <div className="flex w-full flex-col gap-5 ">
            <div className="flex w-full items-center justify-between h-1 ">
              <span className=" w-78  text-xs sm:text-sm ">
                انتخاب آدرس تحویل سفارش
              </span>
              <span className="w-full h-[2px] bg-slate-400 rounded-full inline-block"></span>
            </div>
            {detailUserInLocalStorage.map((item) => (
              <BoxesForAddreasUser
                removeAddreas={removeAddreas}
                setActiveAddreas={setActiveAddreas}
                isActiveAddreas={isActiveAddreas}
                item={item}
                editOnUserOrders={editOnUserOrders}
                detailUserInLocalStorage={detailUserInLocalStorage}
                setDetailsBoxUserForOrders={setDetailsBoxUserForOrders}
              />
            ))}

            <div
              onClick={() => {
                setDetailsBoxUserForOrders(true);
                setDataForEdit(null);
              }}
              className="border-4 flex gap-1 cursor-pointer  items-center justify-center text-slate-400 h-14  border-slate-300 border-dashed"
            >
              <svg className="w-6 h-6">
                <use href="#plus"></use>
              </svg>
              <span>ایجاد آدرس جدید</span>
            </div>
            <MainContentSecondOfTheShopping
            setISClickedPost={setISClickedPost}
              detailUserInLocalStorage={detailUserInLocalStorage}
              isActiveDay={isActiveDay}
              setIsActiveDay={setIsActiveDay}
            />
          </div>
          <BoxDetailsBasket
            isClickedPost={isClickedPost}
            setISClickedPost={setISClickedPost}
          />
        </div>
      </div>
      {isDetailsBoxUserForOrders ? (
        <div className="">
          <DetailsBoxUserForOrders
            dataForEdit={dataForEdit}
            editOnUserOrders={editOnUserOrders}
            detailUserInLocalStorage={detailUserInLocalStorage}
            setDetailsBoxUserForOrders={setDetailsBoxUserForOrders}
            isDetailsBoxUserForOrders={isDetailsBoxUserForOrders}
          />
        </div>
      ) : null}
    </div>
  );
}
