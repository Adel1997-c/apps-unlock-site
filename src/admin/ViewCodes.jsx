import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

const ViewCodes = () => {
  const [codes, setCodes] = useState([]);
  const [appsMap, setAppsMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const codesSnapshot = await getDocs(collection(db, "codes"));
        const appsSnapshot = await getDocs(collection(db, "apps"));

        const appMap = {};
        appsSnapshot.forEach((doc) => {
          appMap[doc.id] = doc.data().appName;
        });

        const codeList = codesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setAppsMap(appMap);
        setCodes(codeList);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this code?")) {
      try {
        await deleteDoc(doc(db, "codes", id));
        setCodes((prev) => prev.filter((c) => c.id !== id));
      } catch (err) {
        console.error("Error deleting code:", err);
      }
    }
  };

  const filteredCodes = codes.filter((code) => {
    const appName = appsMap[code.appId]?.toLowerCase() || "";
    return (
      code.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appName.includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-purple-400">Unlock Codes</h2>
        <input
          type="text"
          placeholder="Search by code or app..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-2 w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
        />
      </div>

      {loading ? (
        <p>Loading codes...</p>
      ) : filteredCodes.length === 0 ? (
        <p>No matching codes found.</p>
      ) : (
        <div className="overflow-auto">
          <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-800 text-left text-sm text-gray-400">
                <th className="p-3">Code</th>
                <th className="p-3">App</th>
                <th className="p-3">Used</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCodes.map((code) => (
                <tr key={code.id} className="border-t border-gray-700">
                  <td className="p-3 font-mono">{code.code}</td>
                  <td className="p-3">{appsMap[code.appId] || "Unknown"}</td>
                  <td className="p-3">
                    {code.used ? "✅ YES" : "❌ NO"}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(code.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
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
