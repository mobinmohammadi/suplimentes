import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert";

export const ComparseContext = createContext();

export const ProviderComparse = ({ children }) => {
  const [arrayComparseSelected, setArrayComparseSelected] = useState([]);
  const [arrayComparse, setArrayComparse] = useState([]);

  useEffect(() => {
    const storedComparse = JSON.parse(localStorage.getItem("comparse")) || [];
    setArrayComparse(storedComparse);
  }, []);

  useEffect(() => {
    localStorage.setItem("comparse", JSON.stringify(arrayComparse));
  }, [arrayComparse]);

  const addToComparse = (product) => {
    const exist = arrayComparse.some((item) => item.id === product.id);

    if (exist) {
      alert("شما قبلا این محصول را اضافه کرده اید 😑");
      return;
    }
    const updatedComparse = [...arrayComparse, product];
    setArrayComparse(updatedComparse);
  };

  const removeInComparse = (id) => {
    confirmAlert({
      title: "تأیید حذف",
      message: "آیا مطمئنی که این آیتم حذف شود؟",
      buttons: [
        {
          label: "بله",
          onClick: () => {
            const localData = JSON.parse(localStorage.getItem("comparse"));
            const uppatedArrayCompersed = localData.filter(
              (item) => item.id !== id
            );
            setArrayComparse(uppatedArrayCompersed);
            toast.success("با موفقیت حذف شد ");
          
          },
        },
        {
          label: "خیر",
          onClick: () => {
            toast.error("عملیات لغو شد ");
          },
        },
      ],
    });
  };

  return (
    <div>
      <ComparseContext.Provider
        value={{
          addToComparse,
          arrayComparse,
          removeInComparse,
        }}
      >
        {children}
      </ComparseContext.Provider>
    </div>
  );
};

export default ComparseContext;
