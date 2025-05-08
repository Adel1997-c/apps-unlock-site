// src/pages/AppPreview.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import SecureUnlockDownloadButton from "../components/SecureUnlockDownloadButton";

const AppPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApp = async () => {
      try {
        const docRef = doc(db, "apps", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setApp(docSnap.data());
        } else {
          navigate("/apps");
        }
      } catch (err) {
        console.error("فشل في جلب بيانات التطبيق:", err);
        navigate("/apps");
      } finally {
        setLoading(false);
      }
    };

    fetchApp();
  }, [id, navigate]);

  if (loading) return <p className="text-white p-4">جاري تحميل التطبيق...</p>;
  if (!app) return null;

  return (
    <div dir="rtl" className="min-h-screen bg-black text-white p-4 flex flex-col items-center">
      <BackButton />
      <div className="max-w-lg w-full bg-gray-900 p-6 rounded-lg shadow-lg mt-4">
        <h2 className="text-3xl font-bold text-purple-400 mb-2">
          {app.appName}
        </h2>
        <p className="text-sm mb-3 text-gray-300">{app.description}</p>
        <p className="text-sm mb-1">📱 النظام: {app.platform}</p>
        <p className="text-sm mb-1 text-gray-400">
          معرف الحزمة: <code>{app.bundleId}</code>
        </p>

        {/* Secure download logic */}
        <SecureUnlockDownloadButton app={app} />
      </div>
    </div>
  );
};

export default AppPreview;
