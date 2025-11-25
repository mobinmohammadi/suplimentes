import TopBarMobile from "@/TopBarMobile/TopBarMobile";
import BradCrumb from "@Custom/BradCrumb/BradCrumb"
import TitleBySections from "@Custom/TitleBySections/TitleBySections";
import Footer from "@/Footer/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactUs() {
  const validationsContactAs = Yup.object({
    name: Yup.string()
      .required("نام الزامی است")
      .min(2, "نام شما از 2 کاراکتر کمتر است")
      .max(25, "نام شما از 25 کاراکتر بیشتر است"),
    email: Yup.string().required("ایمیل الزامی است").email("ایمیل نامعتبر است"),
    bodyContent: Yup.string()
      .required("متن خود را وارد کنید")
      .min(10, "متن ورودی شما نباید از 10 کاراکتر کمتر باشد"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      bodyContent: "",
    },
    validationSchema: validationsContactAs,
    onSubmit: handlerFormContent,
  });
  function handlerFormContent() {}

  return (
    <div className="">
      <div className="flex flex-col font-Dana ">
        <TopBarMobile />
        <div className="mt-4 pr-5 pl-5 flex flex-col gap-5">
          <BradCrumb />
          <div className="bg-white container-custom flex flex-col sm:flex-row gap-5 pt-12 pb-7 pr-5 pl-5 w-full rounded-sm">
            <div className="w-full flex flex-col gap-5 sm:gap-2  Morabba sm:w-[60%]">
              <TitleBySections
                font="Morabba"
                title="تماس با ما"
                width="42"
                isBorder
              />
              <form
                action="#"
                onBlur={formik.handleBlur}
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-5 mt-5 "
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex gap-2 flex-col">
                    <div className="flex gap-1">
                      <label htmlFor="name" className="text-sm">
                        نام و نام خانوادگی
                      </label>
                      <span className="text-red-700">*</span>
                    </div>

                    <div className="border-slate-200 border-solid focus:outline-sky-700  border p-2">
                      <input
                        name="name"
                        onChange={formik.handleChange}
                        type="text"
                        className=" w-full h-full outline-0"
                      />
                    </div>

                    {formik.touched && formik.errors.name && (
                      <span className="text-red-800 text-xs sm:text-sm">
                        {formik.errors.name}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 flex-col">
                    <div className="flex gap-1">
                      <label htmlFor="name" className="text-sm">
                        ایمیل
                      </label>
                      <span className="text-red-700">*</span>
                    </div>

                    <div className="border-slate-200 border-solid focus:outline-sky-700  border p-2">
                      <input
                        onChange={formik.handleChange}
                        name="email"
                        type="text"
                        className=" w-full h-full outline-0"
                      />
                    </div>
                    {formik.touched && formik.errors.email && (
                      <span className="text-red-800 text-xs sm:text-sm">
                        {formik.errors.email}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <TitleBySections size="xs" title="متن پیام" width="42" />
                  <div className="border-slate-200 border-solid border-2">
                    <textarea
                      className="w-full p-2 h-54 outline-0 "
                      onChange={formik.handleChange}
                      name="bodyContent"
                      id=""
                    ></textarea>
                  </div>
                  {formik.touched && formik.errors.bodyContent && (
                    <span className="text-red-800 text-xs sm:text-sm">
                      {formik.errors.bodyContent}
                    </span>
                  )}
                </div>
                <div className="text-xs flex font-Dana items-center justify-between & > *:bg-red-600 text-white &  > *:cursor-pointer &  > *:hover:bg-red-800 &  > *:transition-all &  > *:rounded-sm & > *:pr-3 & > *:pl-3 & > *:pt-1 & > *:pb-1">
                  <span>خالی کردن فرم</span>
                  <button type="submit">ارسال پیام</button>
                </div>
              </form>
            </div>
            <div className="w-full pt-5 sm:pt-0 sm:w-[40%] flex flex-col gap-5">
              <TitleBySections
                font="Morabba"
                size="base"
                title="اطلاعات فروشگاه"
                width="58"
                isBorder
              />
              <div className="flex gap-3 flex-col & > *:border-b-slate-300 text-xs & > *:pb-3 & > *:border-b-solid &  > *:border-b">
                <div className="flex flex-col gap-0.5">
                  <span>آدرس :</span>
                  <span>آذربایجان غربی-ارومیه</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span>ایمیل :</span>
                  <span>mobyn3223@gmail.com</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span>پاسخگویی 24 ساعته، 7 روز هفته</span>
                  <span>*********09</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span>شبکه های اجتماعی :</span>
                  <div className="flex justify-end gap-1">
                    <div className="bg-sky-700 p-2 rounded-full flex items-center justify-center w-8 h-8">
                      <svg className="w-7 h-7 ">
                        <use href="#telegram"></use>
                      </svg>
                    </div>
                    <div className="bg-red-700 p-2 rounded-full flex items-center justify-center w-8 h-8">
                      <svg className="w-7 h-7 ">
                        <use href="#instagram"></use>
                      </svg>
                    </div>
                    <div className="bg-green-700 p-2 rounded-full flex items-center justify-center w-8 h-8">
                      <svg className="w-7 h-7 ">
                        <use href="#whatsapp"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-custom">
        <Footer />
      </div>
    </div>
  );
}
