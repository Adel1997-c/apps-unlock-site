import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center px-6 pt-24 text-center">
      {/* Glowing Logo */}
      <h1 className="text-3xl font-extrabold text-white tracking-[0.2em] drop-shadow-[0_0_12px rgba(255,255,255,0.9)] animate-pulse mb-6">
        N3XUS Admin
      </h1>

      {/* Admin Cards */}
      <div className="flex flex-col sm:flex-row gap-10 justify-center items-center mt-6">
        {/* Card 1: Add Code */}
        <div className="card-glow p-6 rounded-xl bg-gray-900 border border-purple-600 shadow-lg text-center">
          <h2 className="text-white text-xl font-bold mb-4">توليد أكواد جديدة</h2>
          <Link to="/admin/add-code" className="btn btn-purple">
            إنشاء
          </Link>
        </div>

        {/* Card 2: View Codes */}
        <div className="card-glow p-6 rounded-xl bg-gray-900 border border-purple-600 shadow-lg text-center">
          <h2 className="text-white text-xl font-bold mb-4">عرض الأكواد المستخدمة</h2>
          <Link to="/admin/view-codes" className="btn btn-dark">
            عرض
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} N3XUS Admin. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
};

export default AdminDashboard;
