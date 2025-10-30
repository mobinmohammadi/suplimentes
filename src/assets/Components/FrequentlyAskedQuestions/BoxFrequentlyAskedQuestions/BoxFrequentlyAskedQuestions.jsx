import React from "react";

export default function BoxFrequentlyAskedQuestions({id,qustion,answer}) {
  return (
    <div className="flex pt-4 pb-4 font-Dana flex-col items-center justify-center gap-2 bg-[#eeeeee]">
      <span className="text-sm max-w-64 sm:max-w-max text-center ">
      {id}. {qustion}
      </span>
      <div className=" pt-2 pb-2 w-full text-xs text-center flex items-center justify-center">
        <span className="leading-5 w-full pr-2 pl-2  bg-[#eeffee] pt-2 pb-2 mr-4 ml-4 rounded-sm">
          {answer}
        </span>
      </div>
    </div>
  );
}
