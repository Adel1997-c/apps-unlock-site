import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const ViewApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "apps"));
        const appsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setApps(appsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching apps:", error);
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this app?")) {
      try {
        await deleteDoc(doc(db, "apps", id));
        setApps((prev) => prev.filter((app) => app.id !== id));
      } catch (error) {
        console.error("Error deleting app:", error);
      }
    }
  };

  const filteredApps = apps.filter((app) =>
    [app.appName, app.platform, app.bundleId]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-purple-400">All Apps</h2>
        <input
          type="text"
          placeholder="Search by name, platform, or bundle ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-2 w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
        />
      </div>

      {loading ? (
        <p>Loading apps...</p>
      ) : filteredApps.length === 0 ? (
        <p>No matching apps found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-purple-300">
                {app.appName}
              </h3>
              <p className="text-sm mt-1">{app.description}</p>
              <p className="mt-1 text-sm">
                📱 <strong>{app.platform}</strong>
              </p>
              <p className="mt-1 text-sm text-gray-400">
                Bundle ID: <code>{app.bundleId}</code>
              </p>
              <a
                href={app.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue-400 hover:underline"
              >
                Download Link
              </a>
              <div className="mt-4">
                <button
                  onClick={() => handleDelete(app.id)}
                  className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-sm font-bold"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewApps;
