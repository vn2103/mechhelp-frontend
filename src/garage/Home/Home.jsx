import React, { useState } from "react";
import { Header } from "../components/header";
import Navbar from "../components/navbar";
import { Dashboard } from "./components/Dashboard/Dashboard";

const Home = () => {


  return (
    <div className="flex h-screen bg-[rgba(245, 245, 245, 1)]">
      <Navbar/>
      <div className="flex-1 flex flex-col">
       <Header/>
        <main className="flex justify-around overflow-y-auto">
          <div className="grid grid-cols-1 w-[100%] gap-6">
            <Dashboard/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
