import React from "react";

export const Jobcard = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
        {/* Dropdown */}
        <div>
          <select className="p-2 border border-gray-300 rounded-md shadow-sm">
            <option value="job-card">Show: Job Card</option>
          </select>
        </div>
        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md shadow hover:bg-orange-600 transition">
            + Job Card
          </button>
          <button className="px-4 py-2 bg-orange-400 text-white rounded-md shadow hover:bg-orange-500 transition">
            + Invoice
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
        {/* Search Bar */}
        <div className="flex items-center w-full md:w-auto flex-grow bg-white border border-gray-300 rounded-md px-3 py-2 shadow-sm">
          <span className="text-gray-400 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16l-4 4m0 0l4-4m-4 4V4"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search by name, email, or others..."
            className="w-full focus:outline-none"
          />
        </div>
        {/* Filters Button */}
        <button className="px-4 py-2 border border-gray-300 bg-white rounded-md shadow hover:bg-gray-100 transition">
          Filters
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-gray-200 rounded-md overflow-hidden shadow">
        {/* Table Header */}
        <div className="grid grid-cols-7 text-sm font-semibold text-gray-600 bg-gray-100 p-3 hidden md:grid">
          <div>Entry Date</div>
          <div>Job Card Number</div>
          <div>Vehicle No.</div>
          <div>Vehicle</div>
          <div>Customer Name</div>
          <div>Bill Amount</div>
          <div>Balance</div>
        </div>
        {/* Table Body */}
        <div className="p-6 text-center text-gray-500">
          <p className="text-sm">No data</p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm">
        {/* Result Count */}
        <div className="text-gray-600">Show result: 0</div>
        {/* Pagination */}
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <button className="text-gray-400 hover:text-gray-600">&lt;</button>
          <button className="px-2 py-1 bg-orange-500 text-white rounded shadow">
            1
          </button>
          <button className="text-gray-400 hover:text-gray-600">2</button>
          <button className="text-gray-400 hover:text-gray-600">3</button>
          <span className="text-gray-400">...</span>
          <button className="text-gray-400 hover:text-gray-600">20</button>
          <button className="text-gray-400 hover:text-gray-600">&gt;</button>
        </div>
      </div>
    </div>
  );
};
