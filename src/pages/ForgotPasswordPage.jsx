import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleLogo from "./google.svg";
import whatsappLogo from "./Whatsapp.svg";

function ForgotPasswordPage() {
  const [useEmail, setUseEmail] = useState(true); // Toggle between email and phone input
  const [inputValue, setInputValue] = useState(""); // Input value for email or phone
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      alert(`Please enter your ${useEmail ? "email" : "phone number"}.`);
      return;
    }

    // Simulate API call for password reset
    alert(`Verification code sent to ${inputValue}`);

    // Navigate to Verify Code Page
    navigate("/verify-code");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-[#FF820E]"
      style={{ backgroundColor: "#FF820E" }}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
        style={{
          width: "400px",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2 className="text-2xl font-bold mb-4">Forgot your Password?</h2>
        <form onSubmit={handleSubmit}>
          <input
            type={useEmail ? "email" : "tel"}
            placeholder={`Enter your ${useEmail ? "email" : "phone number"}`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-4 py-3 text-gray-500 placeholder-gray-400 bg-gray-50 border-none rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF820E] mb-4"
          />
          <div className="text-right mb-4">
            <button
              type="button"
              onClick={() => {
                setUseEmail(!useEmail);
                setInputValue(""); // Clear input when toggling
              }}
              className="text-[#FF820E] text-sm font-medium underline"
            >
              {useEmail ? "Use Phone number ?" : "Use Email ?"}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-[#FF7300] text-white py-2 rounded-lg hover:bg-orange-600 font-medium text-sm"
          >
            Submit
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-4">
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-light text-gray-800 bg-white border border-gray-400 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF7300]"
          >
            <img src={googleLogo} alt="Google Logo" className="w-5 h-5 mr-2" />
            Log in with Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-light text-gray-800 bg-white border border-gray-400 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF7300]"
          >
            <img src={whatsappLogo} alt="WhatsApp Logo" className="w-5 h-5 mr-2" />
            Log in with WhatsApp
          </button>
        </div>

        <p className="mt-4 text-sm text-center text-gray-400">
          Don’t have an account?{" "}
          <button
            className="text-[#FF7300] font-semibold hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
