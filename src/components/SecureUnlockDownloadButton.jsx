// components/SecureUnlockDownloadButton.jsx
import { useState } from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function SecureUnlockDownloadButton({ app }) {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");

  const handleDownload = async () => {
    if (!code) return setStatus("⚠️ أدخل الكود أولاً");

    const codeRef = doc(db, "unlockCodes", code);
    const codeSnap = await getDoc(codeRef);

    if (!codeSnap.exists()) {
      return setStatus("❌ الكود غير صحيح");
    }

    const data = codeSnap.data();
    if (data.used) {
      return setStatus("⚠️ تم استخدام الكود مسبقاً");
    }

    await updateDoc(codeRef, { used: true });

    setStatus("✅ جاري التحميل...");
    setTimeout(() => {
      window.location.href = app.downloadLink;
    }, 1000);
  };

  return (
    <div className="mt-4 bg-gray-800 p-4 rounded text-white">
      <p className="text-sm mb-2">📥 لتنزيل {app.appName}، أدخل كود التفعيل:</p>
      <input
        className="w-full p-2 mb-2 text-black rounded"
        placeholder="أدخل الكود"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        onClick={handleDownload}
        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded w-full"
      >
        🔓 تحميل التطبيق
      </button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}
