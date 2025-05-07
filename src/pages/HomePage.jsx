import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-4">مرحبًا بك في AppUnlocker</h1>
      <p className="mb-6">اضغط الزر أدناه للمتابعة إلى صفحة إدخال كود التفعيل.</p>
      <Link to="/unlock" className="bg-blue-600 text-white px-6 py-2 rounded">
        ابدأ الآن
      </Link>
    </div>
  );
}

export default HomePage;
