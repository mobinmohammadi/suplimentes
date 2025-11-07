import React from "react";
import CategurtProducts from "../../assets/Components/CategurtProducts/CategurtProducts";
import TopBarMobile from "../../assets/Components/TopBarMobile/TopBarMobile.";

export default function CategurtByProducts() {
  return (
    <>
      <div className="container-custom">
      <TopBarMobile />
        <CategurtProducts />
      </div>
    </>
  );
}
