import React, { useState } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import BackButton from "../components/BackButton";

const generateRandomCode = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

function AddCode() {
  const [codes, setCodes] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const generateAndSaveCodes = async () => {
    setLoading(true);
    setMessage("");
    const newCodes = [];

    for (let i = 0; i < 10; i++) {
      const code = generateRandomCode();
      newCodes.push(code);
      await setDoc(doc(db, "unlockCodes", code), {
        used: false,
        createdAt: serverTimestamp(),
      });
    }

    setCodes(newCodes);
    setMessage("✅ تم توليد وإضافة 10 أكواد بنجاح.");
    setLoading(false);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-100 p-6 text-right">
      <BackButton />
      <h2 className="text-2xl font-bold mb-4">توليد 10 أكواد دفعة واحدة</h2>
      <button
        onClick={generateAndSaveCodes}
        disabled={loading}
        className="w-full bg-yellow-500 text-white py-3 rounded hover:bg-yellow-600 transition"
      >
        {loading ? "جارٍ التوليد..." : "توليد الأكواد العشوائية"}
      </button>
      {message && <p className="mt-4 text-green-700">{message}</p>}
      {codes.length > 0 && (
        <div className="bg-white p-4 rounded shadow border text-center mt-4">
          <h3 className="font-bold mb-2">الأكواد التي تم توليدها:</h3>
          <ul className="space-y-1 font-mono text-blue-700">
            {codes.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AddCode;
