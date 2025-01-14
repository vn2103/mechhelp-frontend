import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Base styles for functionality
import "./CustomCalendar.css"; // Custom styles for Tailwind-specific overrides

const CustomCalendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-lg">
      <Calendar
        onChange={setValue}
        value={value}
        selectRange={true} // Enable range selection
        tileClassName={({ date, view }) => {
          // Highlight specific dates for your design
          const highlightDates = [
            new Date(2024, 1, 14),
            new Date(2024, 1, 20),
            new Date(2024, 2, 4),
          ];

          if (highlightDates.some(d => d.getTime() === date.getTime())) {
            return "bg-orange-100 text-orange-500 font-bold rounded-lg";
          }
          return null;
        }}
        className="react-calendar"
      />
      <div className="flex justify-between mt-4">
        <button className="px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
          Today
        </button>
        <button className="px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
          Yesterday
        </button>
        <button className="px-3 py-1 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600">
          This Month
        </button>
        <button className="px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
          Last Month
        </button>
      </div>
    </div>
  );
};

export default CustomCalendar;
