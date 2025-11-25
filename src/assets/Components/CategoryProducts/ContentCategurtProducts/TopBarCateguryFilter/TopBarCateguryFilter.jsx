import { TitleCategury } from "../../../../../Data";

export default function TopBarCateguryFilter({
  setTitleCategury,
  titleCategury,
  setIsRowAndColumns,
}) {
  return (
    <div className="flex flex-col gap-1 border-b-1 border-b-slate-300 pb-3">
      <span className="pb-3">مرتب سازی بر اساس :</span>
      <div className="flex justify-between">
        <div className="grid grid-cols-3 sm:grid-cols-5 & > *:h-5 gap-2 & > *:text-x & > *:cursor-pointer & > *:hover:border-b-1 & > *:transition-all & > *:border-b-red-400  & > *:pt-1 & > *:pb-1 & > *:pr-2 & > *:pl-2">
          {TitleCategury.map((categury, index) => (
            <span
              className={`${
                titleCategury === categury
                  ? "bg-red-400 text-white rounded-sm transition-all"
                  : ""
              }`}
              key={index + 1}
              onClick={() => setTitleCategury(categury)}
            >
              {categury}
            </span>
          ))}
        </div>
        <div className="flex pl-4 justify-between gap-1 cursor-pointer & > *:bg-slate-200 & > *:hover:bg-slate-300  & > *:transition-all & > *:rounded-xs text-gray-700">
          <div className="h-6">
            <svg onClick={() => setIsRowAndColumns("row")} className="w-6 h-6">
              <use href="#bars-3"></use>
            </svg>
          </div>
          <div className="h-6">
            <svg onClick={() => setIsRowAndColumns("column")} className="w-6 h-6">
              <use href="#bars-3-center-left"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
