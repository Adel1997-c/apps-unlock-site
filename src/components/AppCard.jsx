import React from "react";

const AppCard = ({ app, onDownload }) => {
  return (
    <div className="card-glow text-center">
      <h3 className="text-purple-400 text-xl sm:text-2xl font-extrabold tracking-[0.15em] drop-shadow-[0_0_10px_rgba(187,128,255,0.9)] mb-2">
        {app.name}
      </h3>
      <p className="text-gray-300 mb-4">{app.description}</p>
      <button onClick={() => onDownload(app)} className="btn btn-purple">
        تحميل
      </button>
    </div>
  );
};

export default AppCard;
