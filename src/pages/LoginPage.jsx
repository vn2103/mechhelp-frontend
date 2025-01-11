import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react"; // For the eye icon
import Logsocial from "./logsocial"; // Your existing Logsocial component

function LoginPage({ defaultUser, setIsAuthenticated }) {
  const [email, setEmail] = useState(""); // Track entered email/phone
  const [password, setPassword] = useState(""); // Track entered password
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [error, setError] = useState(""); // Error message state
  const navigate = useNavigate(); // For navigation

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === defaultUser.email && password === defaultUser.password) {
      setIsAuthenticated(true); // Set user as authenticated
      navigate("/home"); // Redirect to Home page
    } else {
      setError("Invalid email or password. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FF820E] px-4 sm:px-6 lg:px-8">
      {/* Login Card */}
      <div className="w-full max-w-md p-6 pt-12 pb-12 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-center text-gray-800 sm:text-2xl">
          Login to your account
        </h2>

        {/* Login Form */}
        <form className="mt-6" onSubmit={handleLogin}>
          {/* Email/Phone Number Input */}
          <div>
            <input
              type="text"
              placeholder="Phone Number or Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-gray-500 placeholder:text-sm placeholder-gray-400 bg-gray-50 border-none rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF820E]"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mt-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-gray-500 placeholder:text-sm placeholder-gray-400 bg-gray-50 border-none rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF820E]"
              required
            />
            <span
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Icon
                  icon="mdi:eye-off-outline"
                  width={20}
                  height={20}
                  color="#A0AEC0"
                />
              ) : (
                <Icon
                  icon="mdi:eye-outline"
                  width={20}
                  height={20}
                  color="#A0AEC0"
                />
              )}
            </span>
          </div>

          {/* Error Message */}
          {error && (
            <p className="mt-2 text-sm text-red-500 font-semibold">{error}</p>
          )}

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between w-full max-w-md px-4 py-2 mx-auto">
            <label className="flex items-center space-x-2 text-gray-800">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-semibold">Remember me</span>
            </label>

            <button
              type="button"
              className="text-sm font-semibold text-orange-500 hover:underline"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-6 text-sm font-medium text-white bg-[#FF820E] rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        {/* Social Login */}
        <Logsocial />

        {/* Signup Link */}
        <p className="mt-4 text-sm text-center text-gray-400">
          Don't have an account?{" "}
          <button
            className="text-[#FF820E] font-semibold hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
