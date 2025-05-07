import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import BackButton from "../components/BackButton";

const ViewCodes = () => {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    const fetchCodes = async () => {
      const snapshot = await getDocs(collection(db, "codes"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCodes(data);
    };

    fetchCodes();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-4 pt-24">
      <BackButton />
      <h2 className="text-2xl font-bold mb-6 text-center">الأكواد المستخدمة</h2>
      <div className="max-w-2xl mx-auto space-y-2">
        {codes.map((code) => (
          <div
            key={code.id}
            className="p-3 rounded bg-gray-800 border-l-4"
            style={{
              borderColor: code.used ? "#ef4444" : "#10b981",
            }}
          >
            <div className="flex justify-between items-center text-sm">
              <span>الرمز: <strong>{code.code}</strong></span>
              <span>{code.used ? "🟥 مستخدم" : "🟩 غير مستخدم"}</span>
            </div>
            <div className="text-xs text-gray-400">App ID: {code.appId}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCodes;
