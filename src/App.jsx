// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UnlockPage from "./pages/UnlockPage";
import AppsPage from "./pages/AppsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./admin/AdminDashboard";
import AddCode from "./admin/AddCode";
import ViewCodes from "./admin/ViewCodes";
import ViewApps from "./admin/ViewApps";
import UserDashboard from "./pages/UserDashboard";
import AppPreview from "./pages/AppPreview";
import NotFoundPage from "./pages/NotFoundPage";
import AdminRoute from "./routes/AdminRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/unlock" element={<UnlockPage />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected user dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected admin routes */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/add-code"
          element={
            <AdminRoute>
              <AddCode />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/view-codes"
          element={
            <AdminRoute>
              <ViewCodes />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/view-apps"
          element={
            <AdminRoute>
              <ViewApps />
            </AdminRoute>
          }
        />

        {/* App preview page */}
        <Route path="/preview/:id" element={<AppPreview />} />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
