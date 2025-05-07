// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgXsGuOY5xEf_k5Ew9zyjE4PyJwONOMGU",
  authDomain: "app-unlocker-8dd99.firebaseapp.com",
  projectId: "app-unlocker-8dd99",
  storageBucket: "app-unlocker-8dd99.appspot.com",
  messagingSenderId: "243485317005",
  appId: "1:243485317005:web:9e210b9ca531fd3947cfc4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
