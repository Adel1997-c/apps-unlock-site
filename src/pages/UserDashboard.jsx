import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
      <h1 className="text-3xl font-bold mb-4">مرحباً بك 👋</h1>
      <p className="mb-6">
        يمكنك الآن تصفح التطبيقات أو إدخال كود التفعيل للوصول إلى تطبيق معين.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate("/apps")}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded"
        >
          تصفح التطبيقات
        </button>

        <button
          onClick={() => navigate("/unlock")}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded"
        >
          إدخال كود التفعيل
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded"
        >
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
