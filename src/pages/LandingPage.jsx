import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">مرحباً بك في N3XUS</h1>
      <p className="text-lg mb-6 max-w-md">
        منصة آمنة ومخصصة لتحميل التطبيقات المعدلة والوصول إلى خدماتك بسهولة.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/login"
          className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded text-lg"
        >
          تسجيل الدخول
        </Link>
        <Link
          to="/register"
          className="bg-gray-700 hover:bg-gray-800 px-6 py-2 rounded text-lg"
        >
          إنشاء حساب
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
