import React from "react";
import BookingRow from "./BookingRow";

const BookingsTable = () => {
  const bookings = Array.from({ length: 15 }, (_, index) => ({
    Job_card: `#${12345 + index}`,
    vehicle: ["Honda", "Audi", "Hyundai", "Toyota", "Nissan"][index % 5],
    vehiclenumber: `#${12345 + index}`,
    orderDate: "March 24, 2022",
    time: "09.20 AM",
    status: index % 3 === 0 ? "Ongoing" : index % 3 === 1 ? "Shipping" : "Completed",
    price: (130 + index * 10).toString(),
    customerName: ["Jenny Wilson", "Devon Lane", "Sarah Connor"][index % 3],
    customerType: ["Branding", "Advertising", "Consulting"][index % 3],
  }));

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold text-[#747681] mb-4">Recent Bookings</h2>
      <div className="overflow-auto max-h-[250px]">
        <table className="w-full table-auto border-collapse overflow-auto">
          <thead className="sticky top-0 bg-white">
            <tr className="text-left text-gray-500 text-sm">
              <th className="py-3 px-2">Job Card</th>
              <th className="py-3 px-2">Vehicle</th>
              <th className="py-3 px-2">Booking Date</th>
              <th className="py-3 px-2">Status</th>
              <th className="py-3 px-2">Price</th>
              <th className="py-3 px-2">Customers</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <BookingRow key={index} {...booking} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingsTable;
