import { Link } from "react-router-dom";

export default function BoxForResultSearches({ img, price, name  ,id}) {
  return (
    <div className="flex gap-1 bg-slate-100 pr-2 pt-2">
      <img className="w-16 h-16" src={img} alt="" />
      <div className="flex flex-col gap-1">
        <Link to={`/onspageproduct/${id}`}>{name}</Link>
        <div className="flex font-bold flex-col justify-between">
          <span>{price !== null ? price.toLocaleString() : price} تومان</span>
          <span className="text-sky-600">موجود</span>
        </div>
      </div>
    </div>
  );
}
