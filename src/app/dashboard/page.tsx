import React from "react";
import { motion } from "framer-motion";
import { Calendar, Settings, User, LogOut } from "lucide-react";
import Link from "next/link";

// Mock data for bookings
const bookings = [
  {
    id: 1,
    workspace: "Modern Co-working Space",
    location: "San Francisco, CA",
    date: "2024-04-15",
    status: "Confirmed",
    price: 45,
  },
  {
    id: 2,
    workspace: "Executive Office Suite",
    location: "New York, NY",
    date: "2024-04-20",
    status: "Pending",
    price: 75,
  },
];

const DashboardPage = () => {
  const [activeTab, setActiveTab] = React.useState("bookings");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gray-200 rounded-full" />
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-gray-600">john@example.com</p>
              </div>
            </div>

            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("bookings")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "bookings"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Calendar className="w-5 h-5" />
                <span>My Bookings</span>
              </button>

              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "profile"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </button>

              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "settings"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {activeTab === "bookings" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-white rounded-xl shadow-lg p-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="font-semibold">{booking.workspace}</h3>
                        <p className="text-gray-600">{booking.location}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(booking.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-lg font-semibold">
                          ${booking.price}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            booking.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "profile" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue="+1 (555) 123-4567"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {activeTab === "settings" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Notification Preferences
                    </h3>
                    <div className="space-y-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-blue-600 focus:ring-blue-500"
                          defaultChecked
                        />
                        <span className="ml-2">Email notifications</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-blue-600 focus:ring-blue-500"
                          defaultChecked
                        />
                        <span className="ml-2">SMS notifications</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Change Password
                    </h3>
                    <div className="space-y-4">
                      <input
                        type="password"
                        placeholder="Current Password"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Save Settings
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 