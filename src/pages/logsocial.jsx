import React from 'react';
import google from './google.svg';
import Whatsapp from './Whatsapp.svg';

function Logsocial() {
  return (
    <>
      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="px-4 text-sm text-gray-500">OR</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Google and WhatsApp Login Buttons */}
      <div className="space-y-4">
        <button
          type="button"
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-light text-gray-800 bg-white border border-gray-400 border-opacity-50 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF820E]"
        >
          <img src={google} alt="Google Logo" className="w-5 h-5 mr-2" />
          Log in with Google
        </button>
        <button
          type="button"
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-light text-gray-800 bg-white border border-gray-400 border-opacity-50 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF820E]"
          >
          <img src={Whatsapp} alt="WhatsApp Logo" className="w-5 h-5 mr-2" />
          Log in with WhatsApp
        </button>
      </div>
      
    </>
  );
}

export default Logsocial;
