import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import google from "./google.svg";
import Whatsapp from "./Whatsapp.svg";

const SignupPage = ({ setIsAuthenticated }) => {
  const [firstName, setFirstName] = useState(""); // First Name
  const [lastName, setLastName] = useState(""); // Last Name
  const [phoneNumber, setPhoneNumber] = useState(""); // Phone Number
  const [garageName, setGarageName] = useState(""); // Garage Name
  const [password, setPassword] = useState(""); // Password
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm Password
  const [vehicleType, setVehicleType] = useState(""); // Vehicle Type
  const [showPassword, setShowPassword] = useState(false); // Toggle Password Visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle Confirm Password Visibility
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Validation
    if (!firstName || !lastName || !phoneNumber || !garageName) {
      alert("Please fill in all required fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!vehicleType) {
      alert("Please select a vehicle type.");
      return;
    }

    // Successful Signup
    setIsAuthenticated(true); // Set user as authenticated
    navigate("/home"); // Redirect to Home page
  };

  return (
    <div className="min-h-screen bg-[#FF820E] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-6">Add Your Garage</h2>
        <form onSubmit={handleSignup}>
          {/* First Name and Last Name */}
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 text-gray-500 placeholder-gray-400 bg-gray-50 border-none rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF820E]"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 text-gray-500 placeholder-gray-400 bg-gray-50 border-none rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF820E]"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-3 text-gray-500 placeholder-gray-400 bg-gray-50 border-none rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF820E]"
              required
            />
          </div>

          {/* Garage Name */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Garage Name"
              value={garageName}
              onChange={(e) => setGarageName(e.target.value)}
              className="w-full px-4 py-3 text-gray-500 placeholder-gray-400 bg-gray-50 border-none rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF820E]"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-gray-500 placeholder-gray-400 bg-gray-50 border-none rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF820E]"
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

          {/* Confirm Password */}
          <div className="mb-4 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 text-gray-500 placeholder-gray-400 bg-gray-50 border-none rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF820E]"
              required
            />
            <span
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
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

          {/* Vehicle Type */}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="vehicle"
                className="mr-2"
                onChange={() => setVehicleType("2 Wheeler")}
              />{" "}
              2 Wheeler
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="vehicle"
                className="mr-2"
                onChange={() => setVehicleType("3 Wheeler")}
              />{" "}
              3 Wheeler
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="vehicle"
                className="mr-2"
                onChange={() => setVehicleType("4 Wheeler")}
              />{" "}
              4 Wheeler
            </label>
          </div>

          {/* Terms and Conditions */}
          <div className="mt-5 mb-5">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" required />
              <span className="text-[0.81rem]">
                By proceeding, you agree to the{" "}
                <span className="text-[#FF820E] font-semibold cursor-pointer">
                  Terms and Conditions
                </span>
              </span>
            </label>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-[#FF820E] text-white py-2 rounded-md hover:bg-orange-600"
          >
            Sign up
          </button>
        </form>

        {/* Social Login */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">OR Signup with</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="space-y-4">
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-light text-gray-800 bg-white border border-gray-400 border-opacity-50 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF820E]"
          >
            <img src={google} alt="Google Logo" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-light text-gray-800 bg-white border border-gray-400 border-opacity-50 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF820E]"
          >
            <img src={Whatsapp} alt="WhatsApp Logo" className="w-5 h-5 mr-2" />
            Sign up with WhatsApp
          </button>
        </div>

        {/* Login Link */}
        <p className="mt-4 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <button
            className="text-[#FF820E] font-semibold hover:underline"
            onClick={() => navigate("/")}
          >
            Login Now
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
