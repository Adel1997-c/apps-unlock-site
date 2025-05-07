import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

const AddCode = () => {
  const [numberOfCodes, setNumberOfCodes] = useState(5);
  const [appId, setAppId] = useState("");
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApps = async () => {
      const querySnapshot = await getDocs(collection(db, "apps"));
      const appsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setApps(appsData);
    };

    fetchApps();
  }, []);

  const generateRandomCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const handleGenerateCodes = async (e) => {
    e.preventDefault();
    if (!appId) return alert("Please select an app.");

    setLoading(true);

    try {
      const batch = Array.from({ length: numberOfCodes }, () => ({
        code: generateRandomCode(),
        appId,
        used: false,
        createdAt: serverTimestamp(),
      }));

      for (const data of batch) {
        await addDoc(collection(db, "codes"), data);
      }

      alert("✅ Codes generated and assigned!");
      setNumberOfCodes(5);
      setAppId("");
    } catch (error) {
      console.error("Error generating codes:", error);
      alert("❌ Failed to generate codes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h2 className="text-2xl font-bold mb-4 text-purple-400">
        Generate Unlock Codes
      </h2>

      <form
        onSubmit={handleGenerateCodes}
        className="space-y-4 max-w-xl bg-gray-900 p-6 rounded-lg shadow-lg"
      >
        <label className="block text-sm">Select App:</label>
        <select
          value={appId}
          onChange={(e) => setAppId(e.target.value)}
          className="w-full p-2 rounded bg-gray-800"
          required
        >
          <option value="">-- Choose App --</option>
          {apps.map((app) => (
            <option key={app.id} value={app.id}>
              {app.appName}
            </option>
          ))}
        </select>

        <label className="block text-sm">Number of Codes:</label>
        <input
          type="number"
          value={numberOfCodes}
          min={1}
          max={100}
          onChange={(e) => setNumberOfCodes(e.target.value)}
          className="w-full p-2 rounded bg-gray-800"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 p-2 rounded font-bold"
        >
          {loading ? "Generating..." : "Generate Codes"}
        </button>
      </form>
    </div>
  );
};

export default AddCode;
