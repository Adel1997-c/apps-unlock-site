import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UnlockPage = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    // handle code logic here
    alert("تم التحقق من الكود: " + code);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6">إدخال كود التفعيل</h1>

      <input
        type="text"
        placeholder="مثال: 6JK7P2"
        className="w-80 sm:w-96 px-4 py-2 mb-4 text-black rounded"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button
        onClick={handleVerify}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded mb-6 w-80 sm:w-96"
      >
        تحقق من الكود
      </button>

      <button
        onClick={() => navigate("/")}
        className="text-purple-400 hover:underline mt-4"
      >
        ⬅️ الرجوع إلى الصفحة الرئيسية
      </button>
    </div>
  );
};

export default UnlockPage;
