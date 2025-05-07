import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import BackButton from "../components/BackButton";

const ViewCodes = () => {
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCodes = async () => {
      const snapshot = await getDocs(collection(db, "unlockCodes"));
      const codeList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCodes(codeList);
      setLoading(false);
    };

    fetchCodes();
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-gray-100 p-6 text-right">
      <BackButton />
      <h2 className="text-2xl font-bold mb-4">عرض الأكواد</h2>
      {loading ? (
        <p>⏳ جاري التحميل...</p>
      ) : codes.length === 0 ? (
        <p>🚫 لا توجد أكواد حتى الآن.</p>
      ) : (
        <div className="bg-white p-4 rounded shadow mt-4 overflow-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-200 text-sm">
                <th className="border px-4 py-2">الكود</th>
                <th className="border px-4 py-2">الحالة</th>
                <th className="border px-4 py-2">تاريخ الإنشاء</th>
              </tr>
            </thead>
            <tbody>
              {codes.map((code) => (
                <tr key={code.id} className="text-center text-sm">
                  <td className="border px-4 py-2 font-ono">{code.id}</td>
                  <td className="border px-4 py-2">
                    {code.used ? "✔️ مستخدم" : "❌ غير مستخدم"}
                  </td>
                  <td className="border px-4 py-2">
                    {code.createdAt?.toDate
                      ? code.createdAt.toDate().toLocaleString()
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewCodes;
