import React, { useState } from "react";

export const Help = () => {
  const [activeTab, setActiveTab] = useState("faq");

  return (
    
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-6 py-2 rounded-t-lg ${
              activeTab === "faq" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("faq")}
          >
            FAQ's
          </button>
          <button
            className={`px-6 py-2 rounded-t-lg ${
              activeTab === "feedback" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("feedback")}
          >
            Feedback
          </button>
        </div>

        {/* FAQ Section */}
        {activeTab === "faq" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="bg-gray-100 p-4 rounded-lg">
                <summary className="cursor-pointer font-medium text-orange-500">
                  What services does MechHelp offer?
                </summary>
                <p className="mt-2 text-gray-700">
                  MechHelp offers a wide range of automotive services, including vehicle repair,
                  maintenance, spare parts (coming soon), and appointment booking.
                </p>
              </details>
              <details className="bg-gray-100 p-4 rounded-lg">
                <summary className="cursor-pointer font-medium text-orange-500">
                  How can I schedule an appointment with MechHelp?
                </summary>
                <p className="mt-2 text-gray-700">
                  You can schedule an appointment via the MechHelp platform or mobile app.
                </p>
              </details>
              <details className="bg-gray-100 p-4 rounded-lg">
                <summary className="cursor-pointer font-medium text-orange-500">
                  What types of vehicles does MechHelp specialize in?
                </summary>
                <p className="mt-2 text-gray-700">
                  MechHelp specializes in both two-wheelers and four-wheelers.
                </p>
              </details>
              <details className="bg-gray-100 p-4 rounded-lg">
                <summary className="cursor-pointer font-medium text-orange-500">
                  Does MechHelp offer emergency roadside assistance?
                </summary>
                <p className="mt-2 text-gray-700">
                  Yes, MechHelp provides 24/7 roadside assistance for all registered users.
                </p>
              </details>
              <details className="bg-gray-100 p-4 rounded-lg">
                <summary className="cursor-pointer font-medium text-orange-500">
                  Can I purchase vehicle spare parts directly from MechHelp?
                </summary>
                <p className="mt-2 text-gray-700">
                  Yes, spare parts will soon be available for direct purchase on MechHelp's
                  platform.
                </p>
              </details>
            </div>
          </div>
        )}

        {/* Feedback Section */}
        {activeTab === "feedback" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Feedback</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Share your experience in scaling
                </label>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-sm text-gray-600">Worst</span>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    className="w-full accent-orange-500"
                  />
                  <span className="text-sm text-gray-600">Best</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Comments</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows="3"
                  placeholder="Share your feedback"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
