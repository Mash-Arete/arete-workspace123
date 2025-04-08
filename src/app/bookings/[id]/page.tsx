import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, Clock, MapPin, CreditCard } from "lucide-react";
import Link from "next/link";

// Mock data for booking details
const booking = {
  id: "BK123456",
  workspace: "Modern Co-working Space",
  location: "San Francisco, CA",
  date: "2024-04-15",
  time: "09:00 AM - 05:00 PM",
  price: 45,
  status: "Confirmed",
  paymentMethod: "Visa ending in 4242",
};

const BookingConfirmationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          {/* Success Message */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="w-16 h-16 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
            <p className="text-gray-600">
              Your workspace has been successfully booked. We've sent the details to
              your email.
            </p>
          </div>

          {/* Booking Details */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">Booking Details</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date</p>
                  <p className="font-medium">
                    {new Date(booking.date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Time</p>
                  <p className="font-medium">{booking.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">{booking.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Payment Method</p>
                  <p className="font-medium">{booking.paymentMethod}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Amount</span>
                <span className="text-xl font-bold">${booking.price}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/dashboard"
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg text-center hover:bg-blue-700 transition-colors"
            >
              View in Dashboard
            </Link>
            <button className="flex-1 bg-white text-gray-700 py-3 px-6 rounded-lg border hover:bg-gray-50 transition-colors">
              Download Receipt
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingConfirmationPage; 