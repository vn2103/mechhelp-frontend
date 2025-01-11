import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select");

  const options = [
    { label: "Monthly", icon: "mdi:calendar-month" },
    { label: "Last 7 months", icon: "mdi:calendar-multiselect" },
    { label: "Weekly", icon: "mdi:calendar-week" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelected(option.label);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-32 h-7 px-2 py-1 text-[10px] font-medium text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
      >
        <div className="flex items-center gap-1">
          <Icon icon="mdi:calendar" className="text-[rgba(255,130,14,1)]" width={12} height={12} />
          <span>{selected}</span>
        </div>
        <Icon icon="mdi:chevron-down" width={12} height={12} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 w-36 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => selectOption(option)}
              className="flex items-center gap-1 px-2 py-1 text-[10px] text-black hover:bg-gray-100 cursor-pointer"
            >
              <Icon icon={option.icon} className="text-[rgba(255,130,14,1)]" width={12} height={12} />
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
