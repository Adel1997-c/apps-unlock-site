import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboard from "./pages/UserDashboard";
import HomePage from "./pages/HomePage";
import BuyCode from "./pages/BuyCode";
import AboutPage from "./pages/AboutPage";
import SupportPage from "./pages/SupportPage";
import NotFound from "./pages/NotFound";
import AppPreview from "./pages/AppPreview";
import AppsPage from "./pages/AppsPage";
import UnlockPage from "./pages/UnlockPage";
import LandingPage from "./pages/LandingPage";

import AdminDashboard from "./admin/AdminDashboard";
import AddApp from "./admin/AddApp";
import AddCode from "./admin/AddCode";
import ViewApps from "./admin/ViewApps";
import ViewCodes from "./admin/ViewCodes";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/buy" element={<BuyCode />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/preview" element={<AppPreview />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/unlock" element={<UnlockPage />} />
        <Route path="/login" element={<LoginPage />} />
<Route path="/register" element={<RegisterPage />} />
<Route path="/dashboard" element={<UserDashboard />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-app" element={<AddApp />} />
        <Route path="/admin/add-code" element={<AddCode />} />
        <Route path="/admin/view-apps" element={<ViewApps />} />
        <Route path="/admin/view-codes" element={<ViewCodes />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
