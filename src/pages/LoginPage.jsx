import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // تأكد أن المسار صحيح
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // يمكنك تغييره لصفحة المستخدم
    } catch (err) {
      console.error(err.message);
      if (err.code === "auth/user-not-found") {
        setError("⚠️ لا يوجد مستخدم بهذا البريد الإلكتروني.");
      } else if (err.code === "auth/wrong-password") {
        setError("⚠️ كلمة المرور غير صحيحة.");
      } else if (err.code === "auth/invalid-email") {
        setError("⚠️ صيغة البريد الإلكتروني غير صحيحة.");
      } else {
        setError("⚠️ حدث خطأ أثناء تسجيل الدخول.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0d1c] text-white">
      <div className="bg-[#1a1c2c] p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">تسجيل الدخول</h2>
        {error && <p className="text-red-400 mb-3 text-sm text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="كلمة المرور"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition py-2 rounded"
          >
            دخول
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
