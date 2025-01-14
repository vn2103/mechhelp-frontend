import React, { useState } from "react";
import StaffAdd from "./StaffAdd";
import { Icon } from "@iconify/react";

const Staff = () => {
  const [staffList, setStaffList] = useState([]); // Stores staff data
  const [isFormOpen, setIsFormOpen] = useState(false); // Toggles "Add Staff" form
  const [searchQuery, setSearchQuery] = useState(""); // For search functionality
  const [sortColumn, setSortColumn] = useState(""); // For sorting
  const [sortOrder, setSortOrder] = useState("asc"); // Ascending or Descending
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [editStaff, setEditStaff] = useState(null); // Stores the staff being edited
  const recordsPerPage = 10; // Number of records per page

  const handleAddStaffClick = () => {
    setIsFormOpen(true);
    setEditStaff(null); // Clear the editStaff when adding new staff
  };

  const handleSaveStaff = (newStaff) => {
    if (editStaff) {
      // Update staff if editing
      setStaffList(
        staffList.map((staff) =>
          staff.srNo === newStaff.srNo ? { ...staff, ...newStaff } : staff
        )
      );
    } else {
      // Add new staff
      setStaffList([...staffList, newStaff]);
    }
    setIsFormOpen(false); // Close the form after saving
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const filteredStaffList = staffList
    .filter((staff) =>
      Object.values(staff).some((value) =>
        value.toLowerCase().includes(searchQuery)
      )
    )
    .sort((a, b) => {
      if (sortColumn) {
        const valueA = a[sortColumn].toLowerCase();
        const valueB = b[sortColumn].toLowerCase();
        if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
        if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredStaffList.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const totalPages = Math.ceil(filteredStaffList.length / recordsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEditClick = (staff) => {
    setIsFormOpen(true);
    setEditStaff(staff); // Set the staff to be edited
  };

  const handleDeleteClick = (srNo) => {
    setStaffList(staffList.filter((staff) => staff.srNo !== srNo)); // Delete staff by srNo
  };

  return (
    <div className="flex flex-col min-h-screen p-4">
      <header className="flex justify-end items-center">
        <button
          onClick={handleAddStaffClick}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg"
        >
          + Add Staff
        </button>
      </header>
      <div className="flex flex-col flex-grow bg-white p-5 mt-4">
        <div className="flex justify-between items-center">
          <div className="bg-[#F5F5F5] flex items-center w-[95%] rounded-xl">
            <Icon icon="fa:search" width={20} height={20} color="#000" className="mr-2 ml-4" />
            <input
              type="text"
              placeholder="Search by name, email, or others..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="border-0 bg-[#F5F5F5] px-4 py-2 w-full max-w-lg rounded-lg"
            />
          </div>
          <button className="ml-4 bg-gray-200 px-4 py-2 rounded-xl">Filters</button>
        </div>

        <div className="flex-grow mt-4">
          {currentRecords.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr className=" text-[#718096] text-sm font-normal border-b">
                  <th
                    className="px-4 py-2 cursor-pointer text-center border-b"
                    onClick={() => handleSort("srNo")}
                  >
                    Sr. No. {sortColumn === "srNo" && (sortOrder === "asc" ? "↑" : "↓")}
                  </th>
                  <th
                    className="px-4 py-2 cursor-pointer text-center border-b"
                    onClick={() => handleSort("name")}
                  >
                    Name {sortColumn === "name" && (sortOrder === "asc" ? "↑" : "↓")}
                  </th>
                  <th
                    className="px-4 py-2 cursor-pointer text-center border-b"
                    onClick={() => handleSort("mobile")}
                  >
                    Mobile Number {sortColumn === "mobile" && (sortOrder === "asc" ? "↑" : "↓")}
                  </th>
                  <th
                    className="px-4 py-2 cursor-pointer text-center border-b"
                    onClick={() => handleSort("staffType")}
                  >
                    Staff Type {sortColumn === "staffType" && (sortOrder === "asc" ? "↑" : "↓")}
                  </th>
                  <th
                    className="px-4 py-2 cursor-pointer text-center border-b"
                    onClick={() => handleSort("address")}
                  >
                    Address {sortColumn === "address" && (sortOrder === "asc" ? "↑" : "↓")}
                  </th>
                  <th className="px-4 py-2 text-center border-b"></th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((staff, index) => (
                  <tr key={staff.srNo} className="text-center border-b">
                    <td className="px-4 py-4">{index + 1 + indexOfFirstRecord}</td>
                    <td className="px-4 py-4">{staff.name}</td>
                    <td className="px-4 py-4">{staff.mobile}</td>
                    <td className="px-4 py-4">{staff.staffType}</td>
                    <td className="px-4 py-4">{staff.address}</td>
                    <td className="px-4 py-4 flex justify-center gap-2">
                      <button onClick={() => handleEditClick(staff)}>
                        <Icon
                          icon="material-symbols:edit"
                          color="rgba(0, 0, 0, 0.7)"
                          width={23}
                          height={23}
                        />
                      </button>
                      <button onClick={() => handleDeleteClick(staff.srNo)}>
                        <Icon
                          icon="material-symbols:delete"
                          width={23}
                          height={23}
                          color="#FF0010"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500 mt-4">No data</p>
          )}
        </div>

        <div className="flex justify-between items-center mt-4">
          <p>Show result: {filteredStaffList.length}</p>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 border rounded-lg ${
                  currentPage === index + 1
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {isFormOpen && (
        <StaffAdd
          initialData={editStaff} // Pass the editStaff data as initialData
          onClose={() => setIsFormOpen(false)}
          onSave={handleSaveStaff}
        />
      )}
    </div>
  );
};

export default Staff;
