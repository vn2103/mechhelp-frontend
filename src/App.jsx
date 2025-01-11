import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // React Router for navigation
import Home from "./garage/Home/Home"; // Home component
import LoginPage from "./pages/LoginPage"; // Login Page Component
import SignupPage from "./pages/SignupPage"; // Signup Page Component
import ForgotPasswordPage from "./pages/ForgotPasswordPage"; // Forgot Password Page Component
import VerifyCodePage from "./pages/VerifyCodePage"; // Verify Code Page Component
import ResetPasswordPage from "./pages/ResetPasswordPage"; // Reset Password Page Component
import SetNewPasswordPage from "./pages/SetNewPasswordPage"; // Import the component
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login state
  const [defaultUser] = useState({ email: "vnmail@gmail.com", password: "123456" }); // Default credentials

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <LoginPage
                defaultUser={defaultUser}
                setIsAuthenticated={setIsAuthenticated}
              />
            )
          }
        />

        {/* Signup Route */}
        <Route
          path="/signup"
          element={<SignupPage setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Forgot Password Route */}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Verify Code Route */}
        <Route path="/verify-code" element={<VerifyCodePage />} />

        {/* Reset Password Route */}
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/set-new-password" element={<SetNewPasswordPage />} />
        {/* Home (Protected Route) */}
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <Home />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
