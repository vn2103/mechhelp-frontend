import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleLogo from "./google.svg";
import whatsappLogo from "./Whatsapp.svg";

function VerifyCodePage() {
  const [code, setCode] = useState(Array(6).fill("")); // State for 6-digit code
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join(""); // Combine the array into a string
    if (fullCode.length === 6) {
      alert("Code Verified Successfully!");
      navigate("/set-new-password"); // Redirect to Set New Password page
    } else {
      alert("Please enter a valid 6-digit code.");
    }
  };

  // Handle Resend Code
  const handleResendCode = () => {
    alert("Verification code resent!");
    // Add API logic here to resend the code
  };

  // Handle individual digit input
  const handleChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value.slice(-1); // Ensure only one character per box
    setCode(newCode);

    // Automatically move to the next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FF7300]">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Verify Code</h2>

        {/* Code Input */}
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-2 mb-6">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-input-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                maxLength="1"
                className="w-12 h-12 text-center text-lg font-medium text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7300]"
                required
              />
            ))}
          </div>

          {/* Resend and Use Phone Number Links */}
          <div className="flex justify-between text-sm text-orange-500 mb-6">
            <button
              type="button"
              onClick={handleResendCode}
              className="hover:underline"
            >
              Resend
            </button>
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="hover:underline"
            >
              Use Phone Number?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#FF7300] text-white py-2 rounded-lg hover:bg-orange-600 font-medium text-sm"
          >
            Submit
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
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

        {/* Sign Up Link */}
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

export default VerifyCodePage;
