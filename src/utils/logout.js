// src/utils/logout.js
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export const handleLogout = async (navigate) => {
  try {
    await signOut(auth);
    navigate("/"); // Redirect to homepage after logout
  } catch (error) {
    console.error("Logout error:", error);
  }
};
