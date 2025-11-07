import React from "react";
import TopBarMobile from "../../TopBarMobile/TopBarMobile.";
import BradCrumbCart from "../BradCrumbCart/BradCrumbCart";
import CheckoutProgressBar from "../CheckoutProgressBar/CheckoutProgressBar";
import MainContent from "./MainContent/MainContent";
import WrapperAllOrders from "./WrapperAllOrders/WrapperAllOrders";
import BoxDetailsBasket from "./../BoxDetailsBasket/BoxDetailsBasket";

export default function TheMonyStepOfTheShoppingCart() {
  return (
    <div className="w-full ">
      <TopBarMobile />
      <div className=" w-full flex flex-col gap-7 text-sm font-Dana-Bold container-custom pr-3 pl-3">
        <BradCrumbCart />
        <CheckoutProgressBar currentStep={3} />
        <div className="flex justify-between flex-col gap-0 sm:gap-5 sm:flex-row">
          <div className="w-full flex flex-col  ">
            <MainContent />
            <WrapperAllOrders />
          </div>
          <BoxDetailsBasket />
        </div>
      </div>
    </div>
  );
}
