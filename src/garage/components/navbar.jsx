import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Button from "@mui/material/Button";
import DiamondIcon from "@mui/icons-material/Diamond";
import logo from "../../assets/logo.svg";
import './navbar.css'
const Navbar = ({ setActivePage }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [activeSubItem, setActiveSubItem] = useState("");
  const [openDropdown, setOpenDropdown] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: "uis:web-grid-alt", type: "item" },
    { name: "Job Card", icon: "pepicons-pop:menu-circle-filled", type: "item" },
    {
      name: "Inventory",
      icon: "solar:box-bold",
      type: "dropdown",
      items: [
        { name: "Stock" },
        { name: "Supplier" },
        { name: "Mechhelp Spares" },
      ],
    },
    { name: "Customers", icon: "mdi:users-group", type: "item" },
    { name: "Online Booking", icon: "uis:calender", type: "item" },
    { name: "Staff Management", icon: "mdi:users", type: "item" },
    {
      name: "Settings",
      icon: "mdi:settings-outline",
      type: "dropdown",
      items: [
        { name: "Profile" },
        { name: "Notifications" },
        { name: "Billing" },
        { name: "Help & Support" },
      ],
    },
  ];

  const handleMenuClick = (item) => {
    if (item.type === "dropdown") {
      setOpenDropdown((prev) => (prev === item.name ? "" : item.name));
    } else {
      setOpenDropdown("");
      setActiveItem(item.name);
      setActiveSubItem("");
      setActivePage(item.name);
    }
  };

  const handleDropdownItemClick = (item, subItem) => {
    setActiveItem(item.name);
    setActiveSubItem(subItem.name);
    setActivePage(subItem.name);
    setOpenDropdown("");
  };

  const handleHamburgerClose = () => {
    setIsMenuOpen(false);
    setOpenDropdown("");
  };

  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".navbar") &&
      !event.target.closest(".dropdown-item")
    ) {
      setOpenDropdown("");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Hamburger Menu for Phones */}
      {!isMenuOpen && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[rgba(255,130,14,1)] text-white shadow-lg"
        >
          <Icon
            icon="mdi:hamburger-menu"
            width={30}
            height={30}
          />
        </button>
      )}

      {/* Navbar */}
      <nav
        className={`navbar md:w-[10vw] lg:w-[20vw] bg-white text-black flex flex-col md:relative fixed top-0 left-0 h-full transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-40`}
        style={{ overflow: "visible" }}
      >
        {/* Navbar Title */}
        <div className="px-6 py-4 flex items-center justify-center text-[rgba(255,130,14,1)] text-2xl mt-5 text-center font-bold">
          <img src={logo} alt="Mechhelp Logo" className="w-11 mr-2" />
          <span className="opacity-100 block md:hidden lg:block">Mechhelp</span>
        </div>
        <Button
          variant="outlined"
          sx={{
            width: "70%",
            marginX: "auto",
            color: "green",
            borderColor: "green",
            "&:hover": {
              borderColor: "darkgreen",
              backgroundColor: "rgba(0, 128, 0, 0.1)",
            },
          }}
          startIcon={<DiamondIcon />}
        >
          <span className="inline md:hidden lg:inline">Explore Plans</span>
        </Button>

        {/* Menu Items */}
        <div className="flex flex-col  p-3 px-6 mt-10 relative">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative dropdown-item"
              onClick={() => handleMenuClick(item)}
            >
              <div
                className={`flex items-center justify-between gap-3 cursor-pointer px-2 py-3 mt-3 rounded-lg transition duration-200 ${
                  activeItem === item.name ||
                  (item.type === "dropdown" &&
                    item.items.some((sub) => sub.name === activeSubItem))
                    ? "bg-[rgba(255,130,14,1)] text-white"
                    : "hover:bg-[rgba(255,130,14,0.2)] hover:text-[rgba(255,130,14,1)] text-black"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    icon={item.icon}
                    width={27}
                    height={27}
                    className={`${
                      activeItem === item.name ||
                      (item.type === "dropdown" &&
                        item.items.some((sub) => sub.name === activeSubItem))
                        ? "text-white"
                        : "text-[rgba(255,130,14,1)]"
                    }`}
                  />
                  <span className=" inline md:hidden lg:inline">{item.name}</span>
                </div>
                {item.type === "dropdown" && (
                  <Icon
                    icon="mdi:chevron-down"
                    width={20}
                    height={20}
                    className={`transition-transform ${
                      openDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Dropdown Items */}
              {item.type === "dropdown" && openDropdown === item.name && (
                <div
                  className="absolute top-1/2 left-full transform -translate-y-1/2 bg-white shadow-lg border rounded-lg z-50"
                  style={{ minWidth: "200px" }}
                >
                  {item.items.map((subItem) => (
                    <div
                      key={subItem.name}
                      onClick={() => handleDropdownItemClick(item, subItem)}
                      className={`flex items-center gap-3 cursor-pointer text-sm px-4 py-2 rounded-lg transition duration-200 ${
                        activeSubItem === subItem.name
                          ? "bg-[rgba(255,130,14,0.2)] text-[rgba(255,130,14,1)]"
                          : "text-[#637381] hover:text-[rgba(255,130,14,1)]"
                      }`}
                    >
                      <span>{subItem.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          onClick={handleHamburgerClose}
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}
    </div>
  );
};

export default Navbar;
