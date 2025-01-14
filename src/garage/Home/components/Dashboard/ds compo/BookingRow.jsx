import React from "react";

const BookingRow = ({ Job_card, vehicle,vehiclenumber, orderDate, time, status, price, customerName, customerType }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Ongoing":
        return "bg-[#FCBE2D] text-white";
      case "Completed":
        return "bg-[#00B69B] text-white";
      default:
        return "bg-[#FD5454] text-white";
    }
  };
  const getPriceColor = (status) => {
    switch (status) {
      case "Ongoing":
        return "text-[#FCBE2D]";
      case "Completed":
        return "text-[#00B69B]";
      default:
        return "text-[#FD5454]";
    }
  };

  return (
    <tr className="text-gray-700 text-sm">
      <td className="py-4 px-2 font-medium">{Job_card}</td>
      <td className="py-4 px-2">
        <div className="font-semibold">{vehicle}</div>
        <div className="text-gray-400 text-xs">{vehiclenumber}</div>
      </td>
      <td className="py-4 px-2">
        <div>{orderDate}</div>
        <div className="text-gray-400 text-xs">{time}</div>
      </td>
      <td className="py-4 px-2">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(status)}`}>
          {status}
        </span>
      </td>
      <td className={`py-4 px-2 font-medium ${getPriceColor(status)} `}>₹{price}</td>
      <td className="py-4 px-2">
        <div className="font-semibold">{customerName}</div>
        <div className="text-gray-400 text-xs">{customerType}</div>
      </td>
    </tr>
  );
};

export default BookingRow;
