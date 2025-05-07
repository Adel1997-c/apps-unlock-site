import React from "react";
import { useNavigate } from "react-router-dom";

const dummyApps = [
  {
    id: "1",
    name: "Instagram+",
    description: "نسخة معدّلة من انستقرام بميزات إضافية.",
    image: "https://via.placeholder.com/300x160?text=Instagram+",
  },
  {
    id: "2",
    name: "WhatsApp+",
    description: "شاهد الرسائل المحذوفة وتحكم كامل بالخصوصية.",
    image: "https://via.placeholder.com/300x160?text=WhatsApp+",
  },
  {
    id: "3",
    name: "TikTok Premium",
    description: "بدون إعلانات + تحميل الفيديوهات بدون علامة مائية.",
    image: "https://via.placeholder.com/300x160?text=TikTok+Premium",
  },
];

const AppsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-purple-400 mb-10">
        التطبيقات المتاحة
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {dummyApps.map((app) => (
          <div
            key={app.id}
            className="bg-gray-900 p-5 rounded-xl border border-purple-600 shadow-md"
          >
            <img
              src={app.image}
              alt={app.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{app.name}</h2>
            <p className="text-sm text-gray-400 mb-4">{app.description}</p>
            <div className="flex justify-between">
              <button
                onClick={() => navigate(`/preview/${app.id}`)}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-sm"
              >
                معاينة
              </button>
              <button
                onClick={() => navigate("/unlock")}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
              >
                تحميل
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppsPage;
