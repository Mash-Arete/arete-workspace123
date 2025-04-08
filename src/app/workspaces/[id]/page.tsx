import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Users, Calendar, Clock, Wifi, Coffee } from "lucide-react";
import Image from "next/image";

// Mock data for workspace details
const workspace = {
  id: 1,
  title: "Modern Co-working Space",
  location: "San Francisco, CA",
  price: 45,
  rating: 4.8,
  images: [
    "/workspace1.jpg",
    "/workspace2.jpg",
    "/workspace3.jpg",
  ],
  capacity: 10,
  description: "A modern and spacious co-working environment perfect for teams and individuals. Features high-speed internet, meeting rooms, and complimentary refreshments.",
  amenities: [
    { name: "High-speed WiFi", icon: Wifi },
    { name: "Meeting Rooms", icon: Users },
    { name: "Coffee & Snacks", icon: Coffee },
    { name: "24/7 Access", icon: Clock },
  ],
  reviews: [
    {
      id: 1,
      user: "John Doe",
      rating: 5,
      comment: "Great space with excellent amenities. Highly recommended!",
      date: "2024-03-15",
    },
    {
      id: 2,
      user: "Jane Smith",
      rating: 4,
      comment: "Clean and well-maintained. The staff is very helpful.",
      date: "2024-03-10",
    },
  ],
};

const WorkspaceDetailPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Image Carousel */}
      <div className="mb-8">
        <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
          <Image
            src={workspace.images[0]}
            alt={workspace.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{workspace.title}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-1">{workspace.rating}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-1" />
              <span>{workspace.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-1" />
              <span>Up to {workspace.capacity} people</span>
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <p>{workspace.description}</p>
          </div>

          {/* Amenities */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {workspace.amenities.map((amenity) => (
                <div
                  key={amenity.name}
                  className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg"
                >
                  <amenity.icon className="w-5 h-5 text-blue-600" />
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
            <div className="space-y-6">
              {workspace.reviews.map((review) => (
                <div key={review.id} className="border-b pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gray-200 rounded-full" />
                      <span className="font-semibold">{review.user}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1">{review.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{review.comment}</p>
                  <span className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <span className="text-3xl font-bold">${workspace.price}</span>
              <span className="text-gray-600">/day</span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Select Dates
                </label>
                <div className="flex items-center gap-2 p-3 border rounded-lg">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Choose dates</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Check Availability
              </button>

              <div className="text-center text-sm text-gray-600">
                You won't be charged yet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceDetailPage; 