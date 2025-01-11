import React from "react";

const BookingRow = ({ no, vehicle,vehiclenumber, orderDate, time, status, price, customerName, customerType }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Ongoing":
        return "bg-[rgba(181, 238, 228, 1)] text-[rgba(27, 185, 144, 1)]";
      case "Shipping":
        return "bg-[rgba(254, 250, 230, 1)] text-[rgba(255, 182, 46, 1)]";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <tr className="text-gray-700 text-sm">
      <td className="py-4 px-2 font-medium">{no}</td>
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
      <td className="py-4 px-2 font-medium">₹{price}</td>
      <td className="py-4 px-2">
        <div className="font-semibold">{customerName}</div>
        <div className="text-gray-400 text-xs">{customerType}</div>
      </td>
    </tr>
  );
};

export default BookingRow;
