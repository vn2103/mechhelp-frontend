import React, { useState } from "react";
import { Header } from "../components/header";
import Navbar from "../components/navbar";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Customer } from "./components/Customer/Customer";
import { Spares } from "./components/Inventory/Spares";
import { Stock } from "./components/Inventory/Stock";
import { Supplier } from "./components/Inventory/Supplier";
import { Jobcard } from "./components/Jobcard/Jobcard";
import { Book } from "./components/Online Booking/Book";
import { Billing } from "./components/Setting/Billing";
import { Help } from "./components/Setting/Help";
import { Notification } from "./components/Setting/Notification";
import { Profile } from "./components/Setting/Profile";
import Staff from "./components/Staff Management/Staff";

const Home = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  // Function to render content based on the active navbar item
  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />;
      case "Job Card":
        return <Jobcard />;
      case "Stock":
        return <Stock />;
      case "Supplier":
        return <Supplier />;
      case "Mechhelp Spares":
        return <Spares />;
      case "Customers":
        return <Customer />;
      case "Online Booking":
        return <Book />;
      case "Profile":
        return <Profile />;
      case "Notifications":
        return <Notification />;
      case "Billing":
        return <Billing />;
      case "Help & Support":
        return <Help />;
      case "Staff Management":
        return <Staff />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-[rgba(245, 245, 245, 1)]">
      <Navbar setActivePage={setActivePage} />

      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex justify-around  lg:overflow-y-auto md:overflow-y-auto ">
          <div className="grid grid-cols-1 w-[100%] gap-6">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
};

export default Home;
