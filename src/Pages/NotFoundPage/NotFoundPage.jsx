import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">صفحه‌ای که دنبالش هستید پیدا نشد.</p>
      <Link to="/" className="mt-6 inline-block text-blue-500 underline">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
