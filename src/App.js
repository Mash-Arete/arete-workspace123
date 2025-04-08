'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, Menu, Heart, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

// Mock data
const categories = [
  { name: 'Office Spaces', icon: 'building-2' },
  { name: 'Meeting Rooms', icon: 'users' }, 
  { name: 'Coworking', icon: 'layout-grid' },
  { name: 'Virtual Offices', icon: 'monitor' },
];

const listings = [
  {
    id: 1,
    title: 'Modern Downtown Office',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    rating: 4.9,
    reviews: 121,
    location: 'Financial District',
    amenities: ['WiFi', 'Coffee', 'Meeting Rooms'],
    price: 50
  },
  {
    id: 2, 
    title: 'Creative Coworking Space',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
    rating: 4.8,
    reviews: 89,
    location: 'Design District',
    amenities: ['24/7 Access', 'Phone Booths', 'Events Space'],
    price: 35
  },
  // Add more listings as needed
];

export default function Home() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-white font-inter">
      <motion.nav 
        className="sticky top-0 z-50 bg-white border-b"
        initial={false}
        animate={{ height: isSearchExpanded ? '120px' : '80px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
          <div className="flex items-center justify-between h-full">
            
            {/* Logo */}
            <motion.a 
              href="/"
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/logo.svg"
                alt="Workspace Logo"
                className="h-8 w-auto"
              />
            </motion.a>

            {/* Search */}
            <div className="flex-1 max-w-2xl mx-8">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                onClick={() => setIsSearchExpanded(true)}
              >
                <Button variant="outline" className="w-full flex items-center justify-between px-6 py-2.5 rounded-full border shadow-sm hover:shadow-md transition-all">
                  <span className="font-medium">Search workspaces...</span>
                  <Search className="h-5 w-5 text-gray-500" />
                </Button>
              </motion.div>
            </div>

            {/* Nav Items */}
            <div className="flex items-center gap-6">
              <Button variant="ghost" className="hidden md:flex">
                Become a Host
              </Button>
              
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>

              <Button variant="outline" className="flex items-center gap-2 rounded-full p-2">
                <Menu className="h-5 w-5" />
                <Avatar className="h-8 w-8" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <motion.section 
          className="py-6 border-b"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex gap-8 overflow-x-auto pb-4">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                className="flex flex-col items-center gap-2 min-w-[100px]"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-4 rounded-xl bg-gray-100">
                  <lucide-icon name={category.icon} className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Listings */}
        <section className="py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {listings.map((listing) => (
              <motion.div
                key={listing.id}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="object-cover w-full h-full rounded-t-xl"
                      />
                      <Button 
                        variant="ghost"
                        size="icon"
                        className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full"
                      >
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>

                    <div className="p-5">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-lg">{listing.title}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-current text-yellow-400" />
                          <span className="text-sm font-medium">{listing.rating}</span>
                        </div>
                      </div>

                      <p className="mt-1 text-sm text-gray-600">{listing.location}</p>
                      
                      <div className="mt-2 flex flex-wrap gap-2">
                        {listing.amenities.map((amenity) => (
                          <span 
                            key={amenity}
                            className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex items-baseline">
                        <span className="text-lg font-semibold">${listing.price}</span>
                        <span className="text-gray-500 text-sm ml-1">/ day</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t mt-20">
        {/* Footer content */}
      </footer>
    </div>
  );
}
