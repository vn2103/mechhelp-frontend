import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogSocial from "./logsocial"; // Import the LogSocial component

function SetNewPasswordPage() {
  const [newPassword, setNewPassword] = useState(""); // State for new password
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password
  const [showPassword, setShowPassword] = useState(false); // Toggle visibility for passwords
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password length
    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Success message and redirect to Login Page
    alert("Password updated successfully!");
    navigate("/"); // Redirect to Login Page
    // Add API logic here to update the password
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FF7300]">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Set a Password</h2>

        <form onSubmit={handleSubmit}>
          {/* New Password Field */}
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 text-gray-500 placeholder-gray-400 bg-gray-50 border-none rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7300]"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* Confirm Password Field */}
          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 text-gray-500 placeholder-gray-400 bg-gray-50 border-none rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7300]"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* Confirm Button */}
          <button
            type="submit"
            className="w-full bg-[#FF7300] text-white py-2 rounded-lg hover:bg-orange-600 font-medium text-sm"
          >
            Confirm
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Login Buttons via LogSocial */}
        <LogSocial />

        {/* Sign Up Navigation */}
        <p className="mt-4 text-sm text-center text-gray-400">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="text-[#FF7300] font-semibold hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

export default SetNewPasswordPage;
