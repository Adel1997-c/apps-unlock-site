import React, { useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const UnlockPage = () => {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleCheckCode = async () => {
    setStatus("");
    if (!code.trim()) {
      setStatus("❌ الرجاء إدخال كود.");
      return;
    }

    const codeRef = doc(db, "unlockCodes", code.toUpperCase());
    const docSnap = await getDoc(codeRef);

    if (!docSnap.exists()) {
      setStatus("❌ الكود غير صحيح.");
      return;
    }

    const data = docSnap.data();
    if (data.used) {
      setStatus("⚠️ هذا الكود تم استخدامه بالفعل.");
      return;
    }

    // Mark the code as used
    await updateDoc(codeRef, { used: true });

    // Allow download
    setStatus("✅ الكود صحيح. يمكنك الآن تحميل التطبيق.");
    setDownloadUrl("/your-app-download.apk"); // ← change this URL
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-100 p-6 text-right">
      <h2 className="text-2xl font-bold mb-4">أدخل كود التحميل</h2>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value.toUpperCase())}
        placeholder="مثال: 6JK7P2"
        className="w-full border p-3 rounded mb-4"
      />
      <button
        onClick={handleCheckCode}
        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
      >
        تحقق من الكود
      </button>
      {status && <p className="mt-4 text-lg font-bold">{status}</p>}
      {downloadUrl && (
        <a
          href={downloadUrl}
          download
          className="block mt-6 text-center bg-green-600 text-white py-3 rounded hover:bg-green-700"
        >
          تحميل التطبيق الآن
        </a>
      )}
    </div>
  );
};

export default UnlockPage;
