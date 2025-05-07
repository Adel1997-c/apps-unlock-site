import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UnlockPage from "./pages/UnlockPage";
import AboutPage from "./pages/AboutPage";
import SupportPage from "./pages/SupportPage";
import AppsPage from "./pages/AppsPage";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/AdminDashboard";
import ViewCodes from "./pages/ViewCodes";
import AddCode from "./pages/AddCode";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/unlock" element={<UnlockPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/view-codes" element={<ViewCodes />} />
        <Route path="/admin/add-code" element={<AddCode />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
