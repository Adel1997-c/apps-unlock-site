import React from "react";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen p-4 sm:p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-6">
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
