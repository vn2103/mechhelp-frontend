import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import head from "./head.png";

export const Header = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  // Close search bar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const searchBar = document.getElementById("search-container");
      const searchIcon = document.getElementById("search-icon");
      if (
        isSearchVisible &&
        searchBar &&
        !searchBar.contains(event.target) &&
        !searchIcon.contains(event.target)
      ) {
        setSearchVisible(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isSearchVisible]);

  return (
    <header className="bg-white flex w-full flex-row justify-end lg:justify-between items-center px-6 py-4">
      {/* Left Section */}
      <div>
        <h5 className="text-xl font-semibold hidden md:block">Hi, S. V. Garage</h5>
        <p className="text-[rgba(116,118,129,1)] text-[0.737rem] hidden md:block">
          Let’s check your Garage today
        </p>
      </div>

      {/* Search Section */}
      <div
        id="search-container"
        className={`${
          isSearchVisible ? "flex" : "hidden md:flex"
        } w-full sm:w-[40%] bg-[rgba(245, 245, 245, 1)] h-12 rounded-lg p-4 items-center border border-gray-300`}
      >
        <Icon icon="fa:search" width={20} height={20} color="#000" className="mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 bg-transparent outline-none text-gray-700"
        />
      </div>
      {/* Search Icon for Tablet */}
      <div
        id="search-icon"
        className={`pr-4 lg:pr-0 ${
          isSearchVisible ? "hidden" : "block md:hidden"
        } cursor-pointer`}
        onClick={() => setSearchVisible(true)} // Open search bar
      >
        <Icon icon="fa:search" width={20} height={20} color="#000" />
      </div>

      {/* Right Section */}
      <div>
        <div className="flex items-center">
          {/* Message and Notification Icons */}
          <div className="hidden sm:flex mr-2">
            <Icon
              icon="material-symbols:mail-outline-rounded"
              width={20}
              height={20}
              color="#000"
              className="mr-2"
            />
          </div>
          <div className="hidden sm:flex mr-2">
            <Icon
              icon="mdi:bell-outline"
              width={20}
              height={20}
              color="#000"
              className="mr-2"
            />
          </div>

          {/* Profile Image and Details */}
          <div className="flex items-center">
            <img
              src={head}
              alt="Owner"
              width={35}
              height={30}
              className="rounded-full"
            />
            {/* Only show details on laptop */}
            <div className="hidden md:block ml-2">
              <p className="text-sm text-gray-700">Manisha Kaur</p>
              <p className="flex items-center text-xs">
                Owner
                <Icon
                  icon="mdi:chevron-down"
                  width={20}
                  height={20}
                  className="pt-1 text-[rgba(255,130,14,1)]"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
