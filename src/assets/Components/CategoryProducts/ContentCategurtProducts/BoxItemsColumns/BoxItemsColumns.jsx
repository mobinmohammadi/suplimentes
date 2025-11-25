import { Link } from "react-router-dom";

export default function BoxItemsColumns({ items }) {
  const { img, price, name, id, info } = items;
    

  return (
    <div className="flex bg-slate-100 items-center justify-between w-full & > *:flex font-Dana">
     
      <div>
        <img className="w-20 rounded-sm text-x" src={`${img}`} alt="خطا در دریافت عکس ...." />
        <div className="pr-1  line-clamp-1 flex flex-col justify-center gap-2">
          <Link to={`/onspageproduct/${id}`} className=" text-xs sm:text-sm max-h-[1.3em]  line-clamp-1">نام : {name} </Link>
          <div className=" text-x sm:text-sm flex items-center gap-0.5 ">
            <span>قیمت : {price.toLocaleString()}</span>
            <span className="font-Morabba">تومان </span>
          </div>
        </div>
      </div>
      <div className="flex & > *:text-x justify-center gap-0.5 sm:gap-1 & > *:line-clamp-1 flex-col pt-1 pb-1 pl-2 text-xs border-r-1 max-w-28 border-slate-300 pr-5 border-solid">
        <span >ساخت کشور : {info?.origin}</span>
        <span>نوع محصول : {info?.type}</span>
        <span>تعداد سروینگ : {info?.servings}</span>
        <span>دارای {info?.tasteCount} طعم مختلف</span>
      </div>
    </div>
  );
}
