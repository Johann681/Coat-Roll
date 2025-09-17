// components/OurValues.tsx
"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  HeartHandshake,
  CircleDollarSign,
  Clock,
  Palette,
  Leaf,
  Headphones,
  Sparkles,
} from "lucide-react";

const values = [
  { label: "Quality Craftsmanship", icon: ShieldCheck },
  { label: "Customer-First Approach", icon: HeartHandshake },
  { label: "Transparent Pricing", icon: CircleDollarSign },
  { label: "On-Time Delivery", icon: Clock },
  { label: "Creative Designs", icon: Palette },
  { label: "Sustainable Practices", icon: Leaf },
  { label: "Dedicated Support", icon: Headphones },
  { label: "Attention to Detail", icon: Sparkles },
];

export default function OurValues() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  if (inView) {
    controls.start("visible");
  }

  return (
    <section
      ref={ref}
      className="relative w-full py-20 px-6 md:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Our Values
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The principles that guide everything we do, from design to delivery.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, i) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={controls}
              variants={{
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { delay: i * 0.1, duration: 0.4 },
                },
              }}
              className="group relative bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-md group-hover:scale-110 transition-transform">
                <Icon size={28} />
              </div>
              <span className="text-lg font-semibold text-gray-800">
                {value.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Subtle background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
    </section>
  );
}
