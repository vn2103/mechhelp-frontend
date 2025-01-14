import React from 'react';

export const GarageDetails = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Garage Details</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Garage Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="V.S Car Care"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="+919898567425"
          />
        </div>
        {/* Add more fields as needed */}
      </form>
      <div className="flex justify-end mt-6">
        <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          Save
        </button>
      </div>
    </div>
  );
};
