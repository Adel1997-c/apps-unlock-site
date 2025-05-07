import React, { useState } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const UnlockInput = () => {
  const [codeInput, setCodeInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUnlock = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const q = query(
        collection(db, "codes"),
        where("code", "==", codeInput.trim().toUpperCase())
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError("❌ الرمز غير صالح.");
        setLoading(false);
        return;
      }

      const codeDoc = querySnapshot.docs[0];
      const codeData = codeDoc.data();

      if (codeData.used) {
        setError("⚠️ هذا الرمز تم استخدامه من قبل.");
        setLoading(false);
        return;
      }

      const appRef = doc(db, "apps", codeData.appId);
      const appSnap = await getDoc(appRef);

      if (!appSnap.exists()) {
        setError("❌ التطبيق المرتبط غير موجود.");
        setLoading(false);
        return;
      }

      const appData = appSnap.data();
      await updateDoc(codeDoc.ref, { used: true });
      navigate(`/preview/${codeData.appId}`);
    } catch (err) {
      console.error("خطأ أثناء التحقق من الرمز:", err);
      setError("❌ حدث خطأ. حاول مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6 text-purple-400">فتح التطبيق</h1>

      <form
        onSubmit={handleUnlock}
        className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-md space-y-4"
      >
        <input
          type="text"
          placeholder="أدخل رمز الفتح"
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 text-right"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded font-bold"
        >
          {loading ? "جاري التحقق..." : "فتح الآن"}
        </button>
        {error && <p className="text-red-400 text-sm text-right">{error}</p>}
      </form>
    </div>
  );
};

export default UnlockInput;
