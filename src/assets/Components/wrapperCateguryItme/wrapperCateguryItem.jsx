import React from "react";
import CateguryItme from "../CateguryItme/CateguryItme.jsx";
import { allCategury } from "../../../Data.js";
import SectionsTitle from "../SectionsTitle/SectionsTitle.jsx";

export default function wrapperCateguryItem() {
  return (
    <div className="container-custom flex items-center justify-center pt-5">
      <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 mmd:grid-cols-6 md:max-w-[700px] gap-2 mt-5-custom">
        {allCategury.map((item) => (
          <CateguryItme key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
