import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// إعدادات Firebase الخاصة بك
const firebaseConfig = {
  apiKey: "AIzaSyCgXsGuOY5xEf_k5Ew9zyjE4PyJwONOMGU",
  authDomain: "app-unlocker-8dd99.firebaseapp.com",
  projectId: "app-unlocker-8dd99",
  storageBucket: "app-unlocker-8dd99.firebasestorage.app",
  messagingSenderId: "243485317005",
  appId: "1:243485317005:web:9e210b9ca531fd3947cfc4"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
// التصدير للاستخدام في المشروع
export const auth = getAuth(app);
export const db = getFirestore(app);
