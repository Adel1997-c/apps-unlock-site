import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

<BackButton />

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">تسجيل الدخول</h2>
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
          دخول
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
