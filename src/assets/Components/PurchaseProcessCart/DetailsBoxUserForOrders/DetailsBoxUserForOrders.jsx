// Updated and cleaned-up version of DetailsBoxUserForOrders
import React, { useEffect, useState } from "react";
import InputField from "../CustomElem/InputFiled/InputField"
import TextAreaField from "../CustomElem/TextAreaField/TextAreaField";
import provincesData from "./../../../../provincesData.json";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function DetailsBoxUserForOrders({
  dataForEdit,
  setDetailsBoxUserForOrders,
  isDetailsBoxUserForOrders,
  detailUserInLocalStorage,
}) {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [allCitiesProvinces, setAllCitiesProvinces] = useState([]);

  useEffect(() => {
    if (dataForEdit?.province) {
        
      setSelectedProvince(dataForEdit.province);
      const foundProvince = provincesData.find(
        (item) => item.name === dataForEdit.province
      );
      
      if (foundProvince) {
        setAllCitiesProvinces(foundProvince.cities);
      }
    }
    
  }, [dataForEdit]);

  const formFields = [
    {
      type: "input",
      label: "نام تحویل گیرنده",
      placeholder: "احسان...",
      nameFormik: "firstname",
      required: true,
    },
    {
      type: "input",
      label: "نام خانوادگی تحویل گیرنده",
      placeholder: "رمضانی...",
      nameFormik: "lastname",
      required: true,
    },
    {
      type: "input",
      label: "شماره موبایل",
      placeholder: "09*********",
      nameFormik: "phone",
      required: true,
    },
    {
      type: "input",
      label: "شماره ملی",
      placeholder: "*********",
      nameFormik: "nationalcode",
    },
    {
      type: "select",
      label: "استان",
      name: "provinces",
      required: true,
    },
    {
      type: "select",
      label: "شهر",
      name: "city",
      required: true,
    },
    {
      type: "textarea",
      label: "آدرس پستی",
      placeholder: "آدرس دقیق محل سکونت ....",
      nameFormik: "postaladdress",
      required: true,
    },
    {
      type: "input",
      label: "کد پستی",
      placeholder: "*******",
      nameFormik: "postalcode",
      required: true,
    },
    {
      type: "input",
      label: "شماره تلفن ثابت",
      nameFormik: "landlinenumber",
    },
  ];

  const validationsForm = Yup.object({
    firstname: Yup.string()
      .required("نام الزامی میبابشد")
      .min(2, "نام باید حداقل 2 حرف باشد"),
    lastname: Yup.string()
      .required(" نام خانوادگی الزامی میبابشد")
      .min(3, "نام خانوادگی باید حداقل 2 حرف باشد"),
    phone: Yup.string()
      .required("شماره موبایل الزامی میباشد")
      .matches(/^09\d{9}$/, "شماره موبایل باید با 09 شروع شده و 11 رقم باشد"),
    nationalcode: Yup.string().nullable(),
    postaladdress: Yup.string()
      .required("آدرس پستی را وارد کنید")
      .min(10, "آدرس پستی باید حداقل ۱۰ کاراکتر باشد")
      .matches(/^[\u0600-\u06FF0-9\s\-\/\u060C.,()]+$/, "آدرس پستی شامل کاراکترهای غیرمجاز است"),
    postalcode: Yup.string()
      .required("کد پستی الزامی است")
      .matches(/^\d{10}$/, "کد پستی باید ۱۰ رقم باشد"),
    landlinenumber: Yup.string()
      .notRequired()
      .matches(/^0\d{10}$/, "شماره تلفن ثابت باید با 0 شروع شده و 11 رقم باشد")
      .nullable(),
    province: Yup.string().required("استان الزامی است"),
    city: Yup.string().required("شهر الزامی است"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: dataForEdit?.firstname || "",
      lastname: dataForEdit?.lastname || "",
      phone: dataForEdit?.phone || "",
      nationalcode: dataForEdit?.nationalcode || "",
      postaladdress: dataForEdit?.postaladdress || "",
      postalcode: dataForEdit?.postalcode || "",
      landlinenumber: dataForEdit?.landlinenumber || "",
      province: dataForEdit?.province || "",
      city: dataForEdit?.city || "",
    },
    validationSchema: validationsForm,
    enableReinitialize: false,
    onSubmit: handleDetailsUser,
  });

  const handleChangeProvinces = (e) => {
    const provinceName = e.target.value;
    formik.setFieldValue("province", provinceName);
    setSelectedProvince(provinceName);
    setSelectedCity("");
    const foundCitis = provincesData.find((item) => item.name === provinceName);
    if (foundCitis) setAllCitiesProvinces(foundCitis.cities);
    else setAllCitiesProvinces([]);
  };

  const cityHandlerChange = (value) => {
    setSelectedCity(value);
    formik.setFieldValue("city", value);
  };

  const SaveInTolocaleStorage = (newData) => {
    const existingData = JSON.parse(localStorage.getItem("userOrders")) || [];
    if (dataForEdit && dataForEdit.id) {
      const updatedList = existingData.map((item) =>
        item.id === dataForEdit.id ? { ...newData, id: dataForEdit.id } : item
      );
      localStorage.setItem("userOrders", JSON.stringify(updatedList));
    } else {
      const updatedList = [...existingData, { ...newData, id: crypto.randomUUID() }];
      localStorage.setItem("userOrders", JSON.stringify(updatedList));
    }
  };

  function handleDetailsUser() {
    const finalData = { ...formik.values };
    SaveInTolocaleStorage(finalData);
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            setDetailsBoxUserForOrders(false);
            resolve();
          } catch {
            reject();
          }
        }, 2000);
      }),
      {
        pending: "در حال ثبت اطلاعات...",
        success: dataForEdit?.id ? "ویرایش با موفقیت انجام شد ✅" : "اطلاعات با موفقیت ثبت شد ✅",
        error: "خطا در ثبت اطلاعات ❌",
      }
    );
  }

  return (
    <div
      className={`fixed ${
        isDetailsBoxUserForOrders ? "opacity-100 visible transition-Custom" : "opacity-0 invisible"
      } transition-all overflow-y-scroll pb-5 bg-white w-full h-full top-0 z-20`}
    >
      <div className="flex items-center justify-between p-5 text-xs border-b-slate-300 border-solid border-b-1">
        <span className="text-sm">افزودن آدرس جدید</span>
        <div onClick={() => setDetailsBoxUserForOrders(false)}>
          <svg className="w-6 h-6">
            <use href="#x-marks"></use>
          </svg>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit} className="p-5 flex flex-col gap-5">
        {formFields.map((item, index) => {
          if (item.type === "input") {
            return (
              <InputField
                key={index}
                name={item.nameFormik}
                item={item}
                formik={formik.values}
                handleChangeFormik={formik.handleChange}
                validationSchema={formik}
                error={formik.touched[item.nameFormik] && formik.errors[item.nameFormik]}
              />
            );
          } else if (item.type === "select") {
            if (item.name === "provinces") {
              return (
                <div key={index}>
                  <label htmlFor="province">{item.label}</label>
                  <select
                    className="border-1 border-slate-300 border-solid rounded-sm"
                    onChange={handleChangeProvinces}
                    value={formik.values.province}
                    name="province"
                    id="province"
                  >
                    <option value="">انتخاب استان</option>
                    {provincesData.map((p) => (
                      <option key={p.name} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                  {formik.touched.province && formik.errors.province && (
                    <span className="text-red-700 text-xs font-Morabba">
                      {formik.errors.province}
                    </span>
                  )}
                </div>
              );
            } else if (item.name === "city") {
              return (
                <div key={index}>
                  <label htmlFor="city">{item.label}</label>
                  <select
                    className="border-1 border-slate-300 border-solid rounded-sm"
                    name="city"
                    onChange={(e) => cityHandlerChange(e.target.value)}
                    id="city"
                    value={formik.values.city}
                  >
                    <option value="">انتخاب شهر</option>
                    {allCitiesProvinces.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  {formik.touched.city && formik.errors.city && (
                    <span className="text-red-700 text-xs font-Morabba">
                      {formik.errors.city}
                    </span>
                  )}
                </div>
              );
            }
          } else if (item.type === "textarea") {
            return (
              <TextAreaField
                key={index}
                item={item}
                handleChangeFormik={formik.handleChange}
                formik={formik.values}
                error={formik.touched[item.nameFormik] && formik.errors[item.nameFormik]}
              />
            );
          }
          return null;
        })}
        <div className="text-white font-Dana flex justify-end">
          <button type="submit" className="bg-[#ef3f56] pt-1 pb-1 rounded-sm pr-3 pl-3">
            ثبت آدرس
          </button>
        </div>
      </form>
    </div>
  );
}