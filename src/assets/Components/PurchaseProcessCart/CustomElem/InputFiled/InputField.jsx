import { Formik } from "formik";
import { input } from "framer-motion/client";
import React from "react";

export default function InputField({
  dataForEdit,
  item,
  formik,
  name,
  handleChangeFormik,
  error,
}) {

  

  
  
  return (
    <div className="flex gap-2 flex-col">
      <div className="flex gap-1">
        <label htmlFor="#">{item.label}</label>
        {item.requaired && <span className="text-red-700">*</span>}
      </div>
      <div className="pt-1 text-xs pb-2 pr-1 bg-slate-100 rounded-sm">
        <input
          name={item.nameFormik}
          value={formik[item.nameFormik] || ""}
          onChange={handleChangeFormik}
          type="text"
          className="w-full pr-2 outline-0  h-full"
          placeholder={item.placeholder}
        />
      </div>
      {error && (
        <span className="text-xs font-Morabba text-red-800">{error}</span>
      )}
    </div>
  );
}
