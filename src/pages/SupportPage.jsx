import React from "react";

const SupportPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center px-6 pt-24 text-center">
      {/* Glowing Text Logo */}
      <h1 className="text-3xl font-bold text-purple-500 tracking-widest mb-6 animate-pulse drop-shadow-[0_0_20px_rgba(155,89,182,0.6)]">
        N3XUS
      </h1>

      <h2 className="text-xl font-bold text-purple-400 mb-4">الدعم الفني</h2>

      <p className="text-gray-400 max-w-2xl leading-relaxed mb-6">
        إذا واجهت مشكلة في التنزيل أو كود التفعيل، يمكنك التواصل معنا مباشرة عبر تيليجرام لحل مشكلتك.
      </p>

      <a
        href="https://t.me/your_telegram" // 👈 update to your real link
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded text-white font-bold transition"
      >
        تواصل معنا على تيليجرام
      </a>

      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} N3XUS. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
};

export default SupportPage;
