import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export const EditProfile = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Picture */}
        <div className="flex items-center justify-center col-span-full mb-6">
          <div className="relative">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
            />
            <button
              type="button"
              className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 rounded-full shadow-lg"
            >
              <Icon icon="mdi:pencil" className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Your Name */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Your Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Mahesh Keshwal"
            value="Mahesh Keshwal"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Mobile Number
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="+9198985673425"
            value="+9198985673425"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="maheshkeshwal@gmail.com"
            value="maheshkeshwal@gmail.com"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="********"
            value="********"
          />
          <button
            type="button"
            className="absolute top-3 right-3 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            <Icon icon={showPassword ? 'mdi:eye-off' : 'mdi:eye'} className="w-5 h-5" />
          </button>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Date of Birth
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="25 January 1990"
            value="25 January 1990"
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            State
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Maharashtra"
            value="Maharashtra"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Address
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Sector 16, Riddhi park"
            value="Sector 16, Riddhi park"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            City
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Nagpur"
            value="Nagpur"
          />
        </div>

        {/* Postal Code */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Postal Code
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="45962"
            value="45962"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Country
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="India"
            value="India"
          />
        </div>
      </form>

      {/* Save Button */}
      <div className="flex justify-end mt-8">
        <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600">
          Save
        </button>
      </div>
    </div>
  );
};
