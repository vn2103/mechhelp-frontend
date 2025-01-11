import React from "react";
import { Icon } from "@iconify/react";
import users from './Images/cust.svg';
import List from './Images/graph.svg';
import CircleWithIcon from "./iconDes";

export const Box1 = () => {
  const Items = [
    { name: "Revenue", icon: "uil:money-bill", val: "₹ 8,245.00", data: "0.5%" },
    { name: "Total Bookings", icon: "pepicons-pop:menu-circle-filled", val: "256", data: "1.0%" },
    { name: "Pending Balance", icon: "solar:box-bold", val: "1,256", data: "0.5%" },
  ];

  return (
    <div className="box-container flex justify-between flex-nowrap gap-4 overflow-x-auto lg:overflow-x-scroll scrollbar-hide w-[100%]">
      {Items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-between p-7 w-[370px] h-[200px] flex-shrink-0 rounded-md bg-white shadow-md"
        >
          {/* Top Section */}
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <CircleWithIcon iconName={item.icon} />
              <p className="ml-2 font-bold">{item.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={users} alt="Users" />
              <Icon
                icon="ph:dots-three-outline-vertical"
                width={20}
                height={20}
                color="#04091E"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-3xl font-semibold">{item.val}</h4>
              <span className="flex items-center text-sm">
                <p className="text-[#FF820E]">{item.data}</p>&nbsp;from last week
              </span>
            </div>
            <img src={List} alt="List" />
          </div>
        </div>
      ))}
    </div>
  );
};
