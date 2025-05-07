import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

<BackButton />

const Header = () => {
  return (
    <header className="bg-black border-b border-purple-600 fixed w-full top-0 z-50 shadow" dir="rtl">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* N3XUS Logo (text) */}
        <Link
          to="/"
          className="text-purple-400 text-2xl font-extrabold tracking-[0.2em] animate-pulse drop-shadow-[0_0_10px_rgba(187,128,255,0.9)]"
        >
          N3XUS
        </Link>

        {/* Arabic nav links spaced correctly */}
        <nav className="flex flex-row-reverse space-x-reverse space-x-4 rtl:space-x-reverse rtl:space-x-4 text-purple-400 font-bold text-base">
  <Link to="/apps" className="ml-4 hover:text-purple-300 transition hover:underline">التطبيقات</Link>
  <Link to="/unlock" className="ml-4 hover:text-purple-300 transition hover:underline">كود التفعيل</Link>
  <Link to="/about" className="ml-4 hover:text-purple-300 transition hover:underline">عن الموقع</Link>
  <Link to="/support" className="hover:text-purple-300 transition hover:underline">الدعم</Link>
</nav>
      </div>
    </header>
  );
};

export default Header;
