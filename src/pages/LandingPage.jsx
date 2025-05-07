import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center px-6 pt-24 text-center">
      {/* Glowing Logo */}
      <h1 className="text-4xl font-extrabold text-white tracking-[0.2em] drop-shadow-[0_0_12px rgba(255,255,255,0.9)] animate-pulse mb-4">
        N3XUS
      </h1>

      {/* Subtitle */}
      <p className="text-white max-w-xl text-lg mb-8">
        تصفح التطبيقات المعدلة وابدأ التحميل بعد إدخال كود التفعيل الخاص بك.
      </p>

      {/* Buttons inside separate cards */}
      <div className="flex flex-col sm:flex-row gap-10 justify-center items-center mt-4">
        {/* Card 1 */}
        <div className="card-glow p-6 rounded-xl bg-gray-900 border border-purple-600 shadow-lg text-center">
          <h2 className="text-white text-xl font-bold mb-4">تصفح التطبيقات</h2>
          <Link to="/apps" className="btn btn-purple">
            دخول
          </Link>
        </div>

        {/* Card 2 */}
        <div className="card-glow p-6 rounded-xl bg-gray-900 border border-purple-600 shadow-lg text-center">
          <h2 className="text-white text-xl font-bold mb-4">لدي كود تفعيل</h2>
          <Link to="/unlock" className="btn btn-dark">
            إدخال الكود
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} N3XUS. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
};

export default LandingPage;
