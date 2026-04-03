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
      className="relative w-full py-32 px-6 md:px-16 bg-white overflow-hidden"
    >
      <div className="relative z-10 text-center mb-24">
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter">
            Why <span className="text-orange-500">Coat&Roll?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            The principles that guide everything we do, from the first sketch to the final coat.
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {values.map((value, i) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-gray-50/50 rounded-[40px] p-10 flex flex-col items-start text-left hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                <Icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                {value.label}
              </h3>
              <p className="text-gray-400 font-medium leading-relaxed">
                Commitment to excellence in every detail of your renovation journey.
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[120px] opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-20 -z-10" />
    </section>
  );
}
