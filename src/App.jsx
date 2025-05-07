import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public pages
import LandingPage from "./pages/LandingPage";
import AppsPage from "./pages/AppsPage";
import AppPreview from "./pages/AppPreview";
import UnlockInput from "./pages/UnlockInput";
import AboutPage from "./pages/AboutPage";
import SupportPage from "./pages/SupportPage";
import NotFoundPage from "./pages/NotFoundPage";

// Admin pages
import AdminDashboard from "./admin/AdminDashboard";
import AddCode from "./admin/AddCode";
import ViewCodes from "./admin/ViewCodes";
import AddApp from "./admin/AddApp";
import ViewApps from "./admin/ViewApps";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/preview/:id" element={<AppPreview />} />
        <Route path="/unlock" element={<UnlockInput />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-code" element={<AddCode />} />
        <Route path="/admin/view-codes" element={<ViewCodes />} />
        <Route path="/admin/add-app" element={<AddApp />} />
        <Route path="/admin/view-apps" element={<ViewApps />} />

        {/* Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
