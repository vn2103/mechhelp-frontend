import React from "react";

export const Billing = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Billing Preferences</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* UPI ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700">UPI ID</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="sample@okaxis"
            />
          </div>

          {/* Reminder KM */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Reminder KM</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select</option>
              <option value="5000">5000 KM</option>
              <option value="10000">10000 KM</option>
              <option value="15000">15000 KM</option>
            </select>
          </div>

          {/* Reminder Period */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Reminder Period</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select</option>
              <option value="1">1 Month</option>
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
            </select>
          </div>

          {/* Bill Format */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Bill Format</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select</option>
              <option value="pdf">PDF</option>
              <option value="email">Email</option>
              <option value="print">Print</option>
            </select>
          </div>

          {/* GST Toggle */}
          <div className="col-span-2 flex items-center">
            <label className="block text-sm font-medium text-gray-700 mr-4">GST</label>
            <input
              type="checkbox"
              className="toggle-checkbox h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </form>

        {/* Save Button */}
        <div className="mt-6 flex justify-end">
          <button className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 focus:outline-none">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
