import React, { useState, useEffect } from "react";

const StaffAdd = ({ onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState({
    srNo: "",
    name: "",
    mobile: "",
    staffType: "",
    address: "",
    salary: "",
  });

  // Prefill form data if editing an existing staff member
  useEffect(() => {
    if (initialData) {
      setFormData({
        srNo: initialData.srNo, // Ensure srNo is preserved for edits
        name: initialData.name,
        mobile: initialData.mobile,
        staffType: initialData.staffType,
        address: initialData.address,
        salary: initialData.salary,
      });
    }
  }, [initialData]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Save staff details
  const handleSave = () => {
    if (formData.name && formData.mobile) {
      onSave(formData); // Pass the data back to the parent component
    } else {
      alert("Please fill in all required fields!");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-lg font-bold mb-4">{initialData ? "Edit Staff" : "Add Staff"}</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Staff Name"
            value={formData.name}
            onChange={handleInputChange}
            className="border p-2 rounded-lg"
          />
          <input
            type="text"
            name="mobile"
            placeholder="Phone Number"
            value={formData.mobile}
            onChange={handleInputChange}
            className="border p-2 rounded-lg"
          />
          <input
            type="text"
            name="staffType"
            placeholder="Staff Type"
            value={formData.staffType}
            onChange={handleInputChange}
            className="border p-2 rounded-lg"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            className="border p-2 rounded-lg"
          />
          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleInputChange}
            className="border p-2 rounded-lg"
          />
          <div className="flex justify-between mt-4">
            <button
              onClick={handleSave}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg"
            >
              {initialData ? "Save Changes" : "Add Staff"}
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffAdd;
