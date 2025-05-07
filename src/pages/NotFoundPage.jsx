import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

<BackButton />

function NotFound() {
  return (
    <div dir="rtl" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-2">الصفحة غير موجودة</p>
      <p className="text-sm text-gray-500 mb-6">
        عذرًا، الصفحة التي تبحث عنها غير متوفرة أو تم نقلها.
      </p>
      <Link
        to="/"
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
}

export default NotFound;
