import React from "react";
import { motion } from "framer-motion";
import { Building2, MapPin, Filter } from "lucide-react";
import WorkspaceCard from "@/components/workspaces/WorkspaceCard";

// Mock data for workspaces
const workspaces = [
  {
    id: 1,
    title: "Modern Co-working Space",
    location: "San Francisco, CA",
    price: 45,
    rating: 4.8,
    imageUrl: "/workspace1.jpg",
    capacity: 10,
  },
  {
    id: 2,
    title: "Executive Office Suite",
    location: "New York, NY",
    price: 75,
    rating: 4.9,
    imageUrl: "/workspace2.jpg",
    capacity: 4,
  },
  // Add more mock workspaces as needed
];

const WorkspacesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Find Your Workspace</h1>
        <p className="text-gray-600">
          Discover and book premium workspaces in your desired location
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Building2 className="w-4 h-4" />
            <span>Office Spaces</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <MapPin className="w-4 h-4" />
            <span>Location</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Filter className="w-4 h-4" />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* Map and Listings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map Section */}
        <div className="lg:col-span-2 h-[600px] bg-gray-100 rounded-xl overflow-hidden">
          {/* Mapbox map will be integrated here */}
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-500">Map integration coming soon</p>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="space-y-6">
          {workspaces.map((workspace) => (
            <motion.div
              key={workspace.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <WorkspaceCard {...workspace} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkspacesPage; 