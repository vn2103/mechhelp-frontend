import React from 'react';

const JobCardTemplate = () => {
  return (
    <div className="flex flex-col flex-wrap w-[100%] justify-around items-start gap-6 p-6">
        <h2 className='font-semibold'>Platform Walkthrough & Tutorials</h2>
        <div className="flex flex-wrap w-full justify-around gap-4">
  <div className="w-full sm:w-[48%] lg:w-[40%] h-32 border rounded-lg bg-white">Box 1</div>
  <div className="w-full sm:w-[48%] lg:w-[40%] h-32 border rounded-lg bg-white">Box 2</div>
</div>
      {/* Templates */}
      <div className="w-full mt-4">
  <ul className="grid gap-4 grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-3">
    <li className="text-orange-600 font-medium">How to create a Job card</li>
    <li className="text-orange-600 font-medium">How to edit a Job card</li>
    <li className="text-orange-600 font-medium">How to delete a Job card</li>
    <li className="text-orange-600 font-medium">How to assign a Job card</li>
    <li className="text-orange-600 font-medium">How to complete a Job card</li>
    <li className="text-orange-600 font-medium">How to create a Job card</li>
    <li className="text-orange-600 font-medium">How to edit a Job card</li>
    <li className="text-orange-600 font-medium">How to delete a Job card</li>
    <li className="text-orange-600 font-medium">How to assign a Job card</li>
    <li className="text-orange-600 font-medium">How to complete a Job card</li>
    <li className="text-orange-600 font-medium">How to create a Job card</li>
    <li className="text-orange-600 font-medium">How to edit a Job card</li>
    <li className="text-orange-600 font-medium">How to delete a Job card</li>
    <li className="text-orange-600 font-medium">How to assign a Job card</li>
    <li className="text-orange-600 font-medium">How to complete a Job card</li>
  </ul>
</div>
    </div>
  );
};

export default JobCardTemplate;
