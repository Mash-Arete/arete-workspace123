import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Users } from "lucide-react";
import Image from "next/image";

interface WorkspaceCardProps {
  title: string;
  location: string;
  price: number;
  rating: number;
  imageUrl: string;
  capacity: number;
}

const WorkspaceCard: React.FC<WorkspaceCardProps> = ({
  title,
  location,
  price,
  rating,
  imageUrl,
  capacity,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{rating}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <Users className="w-4 h-4 mr-1" />
          <span className="text-sm">Up to {capacity} people</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">${price}/day</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkspaceCard; 