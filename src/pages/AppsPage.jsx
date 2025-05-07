import React, { useState } from "react";
import AppCard from "../components/AppCard";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const apps = [
  { id: 1, name: "++Insta", description: "تطبيق معدل لإنستغرام", file: "/insta.apk" },
  { id: 2, name: "++Snap", description: "تطبيق معدل لسناب شات", file: "/snap.apk" },
];

const AppsPage = () => {
  const [selectedApp, setSelectedApp] = useState(null);
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleDownloadClick = (app) => {
    setSelectedApp(app);
    setCode("");
    setStatus("");
    setShowModal(true);
  };

  const verifyCode = async () => {
    if (!code.trim()) {
      setStatus("❌ الرجاء إدخال كود.");
      return;
    }

    const codeRef = doc(db, "unlockCodes", code.toUpperCase());
    const docSnap = await getDoc(codeRef);

    if (!docSnap.exists()) {
      setStatus("❌ الكود غير صالح.");
      return;
    }

    const data = docSnap.data();
    if (data.used) {
      setStatus("⚠️ الكود تم استخدامه من قبل.");
      return;
    }

    await updateDoc(codeRef, { used: true });
    setStatus("✅ تم التحقق. جاري التحميل...");
    setTimeout(() => {
      window.location.href = selectedApp.file;
      setShowModal(false);
    }, 1000);
  };

  return (
    <div dir="rtl" className="bg-black text-white min-h-screen px-6 pt-24">
      {/* Header Text Logo */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-500 tracking-widest animate-pulse drop-shadow-[0_0_12px_rgba(155,89,182,0.6)]">
          N3XUS
        </h1>
        <p className="text-gray-400 mt-2 text-lg">اختر تطبيقًا وأدخل كود التفعيل لتحميله</p>
      </div>

      {/* App Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} onDownload={handleDownloadClick} />
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3 className="text-xl font-bold text-purple-400 mb-3">أدخل كود التفعيل</h3>
            <input
              type="text"
              className="w-full border border-purple-500 bg-black text-white p-3 rounded mb-3"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="مثال: 6JK7P2"
            />
            <button
              onClick={verifyCode}
              className="btn btn-purple w-full"
            >
              تحقق وتحميل
            </button>
            {status && <p className="mt-3 text-sm text-gray-300">{status}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppsPage;
