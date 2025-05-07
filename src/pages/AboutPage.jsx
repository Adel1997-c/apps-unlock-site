import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center px-6 pt-24 text-center">
      {/* Glowing Text Logo */}
      N3XUS
      <h1 className="text-3xl font-bold text-purple-500 tracking-widest mb-6 animate-pulse drop-shadow-[0_0_20px_rgba(155,89,182,0.6)]">
      </h1>

      <h2 className="text-xl font-bold text-purple-400 mb-4">عن الموقع</h2>

      <p className="text-gray-400 max-w-2xl leading-relaxed">
        N3XUS هو موقع يوفر تطبيقات معدلة بميزات فريدة. يتم تفعيل التنزيل باستخدام كود خاص لضمان تجربة آمنة وخاصة لكل مستخدم. نحن ملتزمون بتقديم أفضل تجربة باستخدام واجهة بسيطة وتصميم أنيق.
      </p>

      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} N3XUS. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
};

export default AboutPage;
