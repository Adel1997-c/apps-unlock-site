import { useNavigate } from "react-router-dom";

const BackButton = ({ className = "" }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className={`mt-4 text-white bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded ${className}`}
    >
      ← رجوع
    </button>
  );
};

export default BackButton;
