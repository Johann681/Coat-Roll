// components/FeaturedProjects.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    image: "/livingroom1.jpg",
    title: "Modern Living Room",
    description: "A cozy yet modern living room design with warm tones and elegant furniture.",
  },
  {
    id: 2,
    image: "/bedroom4.jpg",
    title: "Luxury Bedroom",
    description: "A serene and luxurious bedroom with subtle lighting and minimal design.",
  },
  {
    id: 3,
    image: "/kitchen1.jpg",
    title: "Contemporary Kitchen",
    description: "Open-style modular kitchen with sleek cabinets and spacious counters.",
  },
  {
    id: 4,
    image: "/bedroom5.jpg",
    title: "Elegant Bathroom",
    description: "A modern bathroom with clean aesthetics and functional layout.",
  },
];

export default function FeaturedProjects() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-2">
          Featured Projects: <span className="text-orange-500">Delivered by Coat&Roll</span>
        </h2>
        <p className="text-gray-600 mb-8">
          Discover some of our finest works crafted with passion, precision, and creativity.
        </p>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            key={index}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-full md:w-2/3 bg-white shadow-lg rounded-2xl overflow-hidden">
              <img src={projects[index].image} alt={projects[index].title} className="w-full h-64 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold">{projects[index].title}</h3>
                <p className="text-gray-600 mt-2">{projects[index].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
