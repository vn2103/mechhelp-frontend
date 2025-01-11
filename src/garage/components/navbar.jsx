import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard"); // State for active navbar item
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  const menuItems = [
    { name: "Dashboard", icon: "uis:web-grid-alt" },
    { name: "Job Card", icon: "pepicons-pop:menu-circle-filled" },
    { name: "Inventory", icon: "solar:box-bold" },
    { name: "Repair Tracker", icon: "dashicons:admin-tools" },
    { name: "Customers", icon: "mdi:users-group" },
    { name: "Online Booking", icon: "uis:calender" },
    { name: "Staff Management", icon: "mdi:users" },
  ];

  return (
    <div className="relative">
      {/* Hamburger Menu for Phones */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[rgba(255,130,14,1)] text-white shadow-lg"
      >
        <Icon
          icon={isMenuOpen ? "mdi:close" : "mdi:hamburger-menu"}
          width={30}
          height={30}
        />
      </button>

      {/* Navbar */}
      <nav
        className={`md:w-[10vw] lg:w-[20vw] bg-white text-black flex flex-col shadow-lg md:relative fixed top-0 left-0 h-full transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-40`}
      >
        {/* Navbar Title */}
        <div className="px-6 py-4 text-[rgba(255,130,14,1)] text-2xl mt-5 text-center font-bold md:hidden lg:block">
          Mechhelp
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-4 px-6 mt-10">
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={() => setActiveItem(item.name)} // Set the active item on click
              className={`flex items-center gap-3 cursor-pointer px-4 py-2 rounded-lg transition duration-200 ${
                activeItem === item.name
                  ? "bg-[rgba(255,130,14,1)] text-white"
                  : "hover:bg-[rgba(255,130,14,0.2)] hover:text-[rgba(255,130,14,1)] text-black"
              }`}
            >
              <Icon
                icon={item.icon}
                width={27}
                height={27}
                className={`${
                  activeItem === item.name ? "text-white" : "text-[rgba(255,130,14,1)]"
                }`}
              />
              {/* Only show text on phones or large screens */}
              <span className="hidden lg:inline">{item.name}</span>
            </div>
          ))}
        </div>
      </nav>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}
    </div>
  );
};

export default Navbar;
