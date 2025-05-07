import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton({ label = "⬅️ رجوع" }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
    >
      {label}
    </button>
  );
}

export default BackButton;
