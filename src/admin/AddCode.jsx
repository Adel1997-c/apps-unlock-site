import React, { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import BackButton from "../components/BackButton";

const AddCode = () => {
  const [appId, setAppId] = useState("");
  const [amount, setAmount] = useState(1);
  const [done, setDone] = useState(false);

  const generateCode = () => {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 8; i++) {
      code += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return code;
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setDone(false);

    const codesRef = collection(db, "codes");
    for (let i = 0; i < amount; i++) {
      await addDoc(codesRef, {
        code: generateCode(),
        used: false,
        appId: appId,
        createdAt: Date.now(),
      });
    }
    setDone(true);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <BackButton />
      <h2 className="text-2xl font-bold mb-4">توليد أكواد جديدة</h2>
      <form onSubmit={handleGenerate} className="space-y-4 w-full max-w-sm">
        <input
          type="text"
          placeholder="معرّف التطبيق"
          value={appId}
          onChange={(e) => setAppId(e.target.value)}
          required
          className="w-full p-3 rounded bg-gray-800"
        />
        <input
          type="number"
          placeholder="عدد الأكواد"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          min={1}
          className="w-full p-3 rounded bg-gray-800"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded"
        >
          توليد
        </button>
        {done && <p className="text-green-400 text-sm text-center">✅ تم توليد الأكواد بنجاح!</p>}
      </form>
    </div>
  );
};

export default AddCode;
