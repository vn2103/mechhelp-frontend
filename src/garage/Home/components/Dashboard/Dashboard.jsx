import React from "react";
import { Box1 } from "./ds compo/box1";
import { Icon } from "@iconify/react";
import Dropdown from "./ds compo/range";
import InventoryReport from "./ds compo/sale";
import BookingsTable from "./ds compo/BookingTable";
import DonutChart from "./ds compo/report";
import MultiStackedBarChart from "./ds compo/weekrepo";

export const Dashboard = () => {
  // Months array for the dropdown
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="flex flex-wrap justify-between max-w-[100%] p-4 bg-gray-100">
      {/* Top Box Section */}
      <Box1 />

      {/* Main Content Section */}
      <div className="flex flex-wrap justify-between w-full mt-3 gap-4">
        {/* Left Section (Overall Sales and Bookings Table) */}
        <div className="w-full lg:w-[65%] flex-col">
          {/* Overall Sales */}
          <div className="h-[40vh] mb-4 p-7 flex flex-col justify-between rounded-md bg-white shadow-md">
            <div className="flex justify-between flex-wrap gap-4">
              {/* Overall Sales Header */}
              <div>
                <p className="text-[rgba(116,118,129,1)] text-xs">Overall sales</p>
                <div className="flex items-center">
                  <h4 className="text-lg mr-2 font-semibold">₹ 50,626.20</h4>
                  <span className="p-2 text-white text-[0.7rem] bg-[rgba(255,130,14,1)] rounded-2xl flex items-center">
                    <Icon
                      icon="material-symbols:trending-up-rounded"
                      width={14}
                      height={14}
                      color="#FFF"
                      className="mr-2"
                    />
                    23.5%
                  </span>
                </div>
              </div>

              {/* Online and Offline Indicators */}
              <div className="flex items-baseline flex-wrap gap-4">
                <span className="mr-5 flex items-center">
                  <span className="p-2 h-[5%] bg-[#FF820E] mr-2 rounded-full"></span>
                  <span className="text-xs font-medium text-[#747681]">Online</span>
                </span>
                <span className="mr-5 flex items-center">
                  <span className="p-2 h-[5%] bg-[#04091E] mr-2 rounded-full"></span>
                  <span className="text-xs font-medium text-[#747681]">Offline</span>
                </span>
                <Dropdown />
              </div>
            </div>

            {/* Sales Chart */}
            <div>
              <InventoryReport />
            </div>
          </div>

          {/* Bookings Table */}
          <div className="h-[40vh] bg-white rounded-md shadow-md">
            <BookingsTable />
          </div>
        </div>

        {/* Right Section (Sales Report and Weekly Summary) */}
        <div className="w-full lg:w-[30%] flex flex-col">
          {/* Sales Report */}
          <div className="h-[40vh] mb-4 p-4 flex flex-col justify-around items-center rounded-md bg-white shadow-md">
            <div className="flex justify-between">
              <p className="font-bold mr-12 text-center">Inventory Report</p>

              {/* Month Selector */}
              <div className="w-fit mx-auto relative">
                <select
                  className="text-xs text-gray-600 bg-transparent px-2 py-1 border border-gray-300 rounded-md appearance-none shadow-sm focus:outline-none focus:shadow-[0_0_10px_rgba(255,130,14,0.5)] transition duration-200"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Month
                  </option>
                  {months.map((month, index) => (
                    <option key={index} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>

                {/* Custom dropdown arrow */}
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-3 h-3 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Donut Chart */}
            <div>
              <DonutChart />
            </div>
          </div>

          {/* Weekly Transaction Summary */}
          <div className="flex flex-col justify-between h-[46.5vh] p-4 bg-white rounded-md shadow-md">
            <div className="flex justify-between mb-2">
              <p className="text-xl font-semibold">Weekly Transaction Summary</p>
              <Dropdown />
            </div>
            <MultiStackedBarChart />
          </div>
        </div>
      </div>
    </div>
  );
};
