import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

<BackButton />

const AppsPage = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "apps"));
        const appsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setApps(appsData);
      } catch (error) {
        console.error("حدث خطأ أثناء تحميل التطبيقات:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-purple-400 mb-6">جميع التطبيقات المتوفرة</h1>

      {loading ? (
        <p>جاري التحميل...</p>
      ) : apps.length === 0 ? (
        <p>لا توجد تطبيقات متاحة حالياً.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {apps.map((app) => (
            <div
              key={app.id}
              className="bg-gray-900 p-4 rounded-lg border border-gray-700 shadow"
            >
              <h2 className="text-xl font-bold text-purple-300">{app.appName}</h2>
              <p className="text-sm text-gray-300 mt-2">{app.description}</p>
              <p className="text-sm mt-1">📱 النظام: {app.platform}</p>
              <p className="text-sm text-gray-400">المعرّف: <code>{app.bundleId}</code></p>
              <button
                onClick={() => navigate("/unlock")}
                className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded font-bold"
              >
                فتح التطبيق
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppsPage;
