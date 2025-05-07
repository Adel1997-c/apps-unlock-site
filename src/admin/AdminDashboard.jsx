import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center px-6 pt-24 text-center">
      <div className="absolute top-4 right-6">
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
        >
          تسجيل الخروج
        </button>
      </div>

      <h1 className="text-3xl font-extrabold tracking-[0.2em] text-white animate-pulse mb-8">
        N3XUS Admin
      </h1>

      <div className="flex flex-col sm:flex-row gap-10 justify-center items-center mt-6">
        <div className="p-6 rounded-xl bg-gray-900 border border-purple-600 text-center shadow-md">
          <h2 className="text-xl font-bold mb-4">توليد أكواد جديدة</h2>
          <Link to="/admin/add-code" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white">
            إنشاء
          </Link>
        </div>
        <div className="p-6 rounded-xl bg-gray-900 border border-purple-600 text-center shadow-md">
          <h2 className="text-xl font-bold mb-4">عرض الأكواد المستخدمة</h2>
          <Link to="/admin/view-codes" className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-white">
            عرض
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
