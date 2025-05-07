import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", result.user.uid), {
        email,
        createdAt: new Date().toISOString(),
      });
      navigate("/dashboard");
    } catch (err) {
      setError("حدث خطأ أثناء إنشاء الحساب.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleRegister} className="bg-gray-800 p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">إنشاء حساب</h2>
        {error && <p className="text-red-400 mb-2">{error}</p>}
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 rounded text-black"
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 rounded text-black"
        />
        <button type="submit" className="w-full bg-purple-600 py-2 rounded hover:bg-purple-700">
          تسجيل
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
