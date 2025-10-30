import React from "react";
import SectionsTitle from "../SectionsTitle/SectionsTitle";
import BrandsItem from "../ForBarndsProducts/BrandsItem/BrandsItem.jsx";
import { allBrandLogo } from "../../../Data.js";

export default function BrandsSupplements() {
  return (
    <div className="bg-white pt-4 pb-4 pr-3 pl-3 container-custom">
      <SectionsTitle title="برند های تحت پوشش" />
      <div className="grid grid-cols-2 x:grid-cols-3 xs:grid-cols-4 md:grid-cols-6  gap-2 mt-5 mb-5 items-center justify-center">
        {allBrandLogo.map((logo) => (
          <BrandsItem key={logo.id} {...logo} />
        ))}
      </div>
    </div>
  );
}
