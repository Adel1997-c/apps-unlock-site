import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

<BackButton />

function BuyCode() {
  return (
    <div dir="rtl" className="min-h-screen bg-white px-6 py-10 text-right">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">شراء كود تفعيل</h1>

        <p className="text-gray-700 leading-loose mb-4">
          للحصول على كود تفعيل لاستخدام التطبيقات المعدّلة، يرجى اتباع أحد الطرق التالية:
        </p>

        <ul className="text-gray-700 leading-loose mb-6 list-disc pr-5 space-y-2">
          <li>تحويل المبلغ إلى رقم الحساب الموضّح أدناه.</li>
          <li>التواصل معنا عبر واتساب بعد التحويل لإرسال الكود.</li>
          <li>سعر الكود حاليًا: <span className="font-bold text-green-600">40 ريال سعودي</span></li>
        </ul>

        <div className="bg-gray-100 p-4 rounded border text-sm space-y-2">
          <p>📞 واتساب: <span className="text-green-700">+966 55 123 4567</span></p>
          <p>📧 البريد الإلكتروني: <span className="text-blue-700">support@n3xus-app.com</span></p>
          <p>💳 رقم الحساب / STC Pay / تحويل: <span className="text-indigo-700">0561234567</span></p>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          يرجى إرسال صورة التحويل وذكر اسم التطبيق المطلوب.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 text-indigo-600 hover:underline"
        >
          ← العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}

export default BuyCode;
