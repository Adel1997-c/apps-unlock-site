import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddApp = () => {
  const [appName, setAppName] = useState("");
  const [description, setDescription] = useState("");
  const [platform, setPlatform] = useState("Android");
  const [bundleId, setBundleId] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "apps"), {
        appName,
        description,
        platform,
        bundleId,
        downloadLink,
        createdAt: serverTimestamp(),
      });

      setLoading(false);
      alert("✅ App added successfully!");
      navigate("/admin/view-apps");
    } catch (error) {
      console.error("Error adding app:", error);
      alert("❌ Failed to add app.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h2 className="text-2xl font-bold mb-4 text-purple-400">Add New App</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-xl bg-gray-900 p-6 rounded-lg shadow-lg"
      >
        <input
          type="text"
          placeholder="App Name"
          className="w-full p-2 rounded bg-gray-800"
          value={appName}
          onChange={(e) => setAppName(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 rounded bg-gray-800"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <select
          className="w-full p-2 rounded bg-gray-800"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="Android">Android</option>
          <option value="iOS">iOS</option>
        </select>
        <input
          type="text"
          placeholder="Bundle ID (e.g., com.app.id)"
          className="w-full p-2 rounded bg-gray-800"
          value={bundleId}
          onChange={(e) => setBundleId(e.target.value)}
        />
        <input
          type="url"
          placeholder="Download Link"
          className="w-full p-2 rounded bg-gray-800"
          value={downloadLink}
          onChange={(e) => setDownloadLink(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white p-2 rounded font-bold"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add App"}
        </button>
      </form>
    </div>
  );
};

export default AddApp;
