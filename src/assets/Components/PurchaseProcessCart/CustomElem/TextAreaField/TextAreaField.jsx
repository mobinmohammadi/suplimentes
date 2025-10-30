import React from "react";

export default function TextAreaField({ item,formik,error, handleChangeFormik }) {
  
  return (
    <div className="flex gap-4 flex-col text-xs font-Dana">
      <div className="flex gap-1">
        <label htmlFor="#">{item.label}</label>
        <span className="text-red-700">*</span>
      </div>
      <div className="pt-2 pb-2 pr-1 bg-slate-100 rounded-sm">
        <textarea
          value={formik[item.nameFormik] || ""}
          name={item.nameFormik}
          onChange={handleChangeFormik}
          type="text"
          className="w-full outline-0  h-12 pr-1"
          placeholder={item.placeholder}
        />
      </div>
      {error && (
        <span className="text-red-800 text-xs font-Morabba">{error}</span>
      )}
    </div>
  );
}
