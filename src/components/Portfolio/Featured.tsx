// components/FeaturedProjects.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    image: "/livingroom1.jpg",
    title: "Modern Living Room"  },
  {
    id: 2,
    image: "/bedroom4.jpg",
    title: "Luxury Bedroom"

  },
  {
    id: 3,
    image: "/indoor99.jpg",
    title: "Crispy Finishing"
 
  },
  {
    id: 4,
    image: "/outdoor99.jpg",
    title: "Long lasting finish"
   
  },
  {
    id: 5,
    image: "/finished1.jpg",
    title: "Long lasting finish"
   
  },
  {
    id: 6,
    image: "/finished2.jpg",
    title: "Long lasting finish"
   
  }
];

export default function FeaturedProjects() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-2">
          Our <span className="text-orange-500">Completed Projects</span>
        </h2>
        <p className="text-gray-600 mb-12">
          A glimpse of the beautiful spaces we’ve transformed with passion and
          precision.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => setSelected(project.id)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={350}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
          
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
}
