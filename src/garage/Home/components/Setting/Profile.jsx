import React, { useState } from 'react';
import { EditProfile } from './EditProfile';
import { GarageDetails } from './GarageDetails';

export const Profile = () => {
  const [activeTab, setActiveTab] = useState('editProfile');

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen p-6">
      <div className="font-semibold text-xl mb-4">Profile</div>
      <div className="w-full bg-white rounded-lg shadow-md p-6">
        {/* Header Tabs */}
        <span className="flex border-b mb-6">
          <button
            className={` text-center mr-10 py-2 font-medium ${
              activeTab === 'editProfile'
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('editProfile')}
          >
            Edit Profile
          </button>
          <button
            className={` text-center py-2 font-medium ${
              activeTab === 'garageDetails'
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('garageDetails')}
          >
            Garage Details
          </button>
        </span>

        {/* Conditional Rendering of Subcomponents */}
        {activeTab === 'editProfile' ? <EditProfile /> : <GarageDetails />}
      </div>
    </div>
  );
};
