import React from "react";
import { useLocation, Link } from "react-router-dom";

function AppPreview() {
  const location = useLocation();
  const { app } = location.state || {};

  if (!app) {
    return (
      <div className="p-10 text-center text-red-600">
        ❌ لم يتم تحديد التطبيق. الرجاء العودة إلى <Link to="/" className="underline text-indigo-600">الصفحة الرئيسية</Link>.
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-white px-6 py-10 text-right">
      <div className="max-w-xl mx-auto text-center">
        <img
          src={app.image}
          alt={app.name}
          className="w-24 h-24 mx-auto mb-4 rounded shadow"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{app.name}</h1>
        <p className="text-gray-600 mb-4">{app.description}</p>

        <ul className="text-gray-700 text-sm mb-6">
          <li>✔️ حفظ القصص</li>
          <li>✔️ مشاهدة بدون علم</li>
          <li>✔️ تحميل الصور والفيديوهات</li>
          {/* you can make this dynamic per app later */}
        </ul>

        <Link
          to="/unlock"
          state={{ app }}
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
        >
          تحميل التطبيق
        </Link>
      </div>
    </div>
  );
}

export default AppPreview;
