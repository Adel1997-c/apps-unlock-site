// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UnlockPage from "./pages/UnlockPage";
import AppsPage from "./pages/AppsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./admin/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import NotFound from "./pages/NotFoundPage";
import AppPreview from "./pages/AppPreview";
import ViewCodes from "./admin/ViewCodes";
import AddCode from "./admin/AddCode";
import ViewApps from "./admin/ViewApps";
import Header from "./components/Header";
import AdminRoute from "./routes/AdminRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/unlock" element={<UnlockPage />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
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
          path="/admin/add-code"
          element={
            <AdminRoute>
              <AddCode />
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
        <Route path="/preview/:id" element={<AppPreview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
