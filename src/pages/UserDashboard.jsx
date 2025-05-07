import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

<BackButton />

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login");
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">مرحباً بك 👋</h2>
        {user ? (
          <>
            <p className="text-center mb-4">البريد الإلكتروني: <span className="font-semibold">{user.email}</span></p>
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 hover:bg-red-700 py-2 rounded"
            >
              تسجيل الخروج
            </button>
          </>
        ) : (
          <p className="text-center">جاري التحقق...</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
