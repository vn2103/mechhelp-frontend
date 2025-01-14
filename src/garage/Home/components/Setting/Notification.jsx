import React, { useState } from "react";

export const Notification = () => {
  const [notifications, setNotifications] = useState({
    push: false,
    email: false,
    sms: true,
  });

  const handleToggle = (type) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
        <div className="flex justify-between items-center">
          {/* Push Notification */}
          <div className="flex items-center">
            <label className="text-sm font-medium text-gray-700 mr-4">Push Notification</label>
            <button
              className={`w-10 h-6 flex items-center rounded-full p-1 ${
                notifications.push ? "bg-orange-500" : "bg-gray-300"
              }`}
              onClick={() => handleToggle("push")}
            >
              <div
                className={`h-4 w-4 rounded-full bg-white shadow-md transform transition-transform ${
                  notifications.push ? "translate-x-4" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>

          {/* Email Notification */}
          <div className="flex items-center">
            <label className="text-sm font-medium text-gray-700 mr-4">Email Notification</label>
            <button
              className={`w-10 h-6 flex items-center rounded-full p-1 ${
                notifications.email ? "bg-orange-500" : "bg-gray-300"
              }`}
              onClick={() => handleToggle("email")}
            >
              <div
                className={`h-4 w-4 rounded-full bg-white shadow-md transform transition-transform ${
                  notifications.email ? "translate-x-4" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>

          {/* SMS Notification */}
          <div className="flex items-center">
            <label className="text-sm font-medium text-gray-700 mr-4">SMS Notification</label>
            <button
              className={`w-10 h-6 flex items-center rounded-full p-1 ${
                notifications.sms ? "bg-orange-500" : "bg-gray-300"
              }`}
              onClick={() => handleToggle("sms")}
            >
              <div
                className={`h-4 w-4 rounded-full bg-white shadow-md transform transition-transform ${
                  notifications.sms ? "translate-x-4" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 focus:outline-none">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
