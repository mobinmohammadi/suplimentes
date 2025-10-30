import React from "react";

const steps = ["سبد خرید", "اطلاعات ارسال", "پرداخت", "تایید نهایی"];
const svgs = ["user", "shopping-cart" , "credit-card" , "information-circle"];
const CheckoutProgressBar = ({ currentStep }) => {
  const progressPercent = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="w-full px-4 ">
      <div className="relative h-2 bg-gray-200 w-full">
        <div
          className={`absolute bg-[#ef3f56] h-full transition-all duration-500 rounded-full`}
          style={{ width: `${progressPercent}%` }}
        ></div>

      </div>
      <div className="flex items-center text-center justify-center w-full mt-4">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isComplited = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;
          return (
            <div className="flex justify-center flex-col  mr-3 sm:mr-18  w-1/4 items-center text-center  ">
              <div
                className={`w-6 h-6  sm:w-8 sm:h-8  rounded-full flex items-center justify-center mb-2
                  ${
                    isComplited
                      ? "bg-green-500 text-white"
                      : isActive
                      ? "bg-gray-900 text-white"
                      : "bg-gray-300 text-white"
                  }                   
                `}
              >
                
                {isComplited ? (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5">
                    <use href="#check"></use>
                  </svg>
                ) : (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5">
                    <use href={`#${svgs[index]}`}></use>
                  </svg>
                )}
                {/* نمایش تیک یا شماره مرحله */}
              </div>
              <span className={`text-x pb-1 line-clamp-1 ${isActive ? "border-b-1 border-red-600 border-dashed" : ""}`}>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutProgressBar;
