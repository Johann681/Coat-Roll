// components/OurValues.tsx
"use client";

import { motion } from "framer-motion";
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
  { 
    label: "Quality Craftsmanship", 
    icon: ShieldCheck, 
    description: "Meticulous attention to every detail",
    size: "col-span-1 row-span-1",
    highlight: false
  },
  { 
    label: "Customer-First", 
    icon: HeartHandshake, 
    description: "Your satisfaction drives everything",
    size: "col-span-1 sm:col-span-2 row-span-1",
    highlight: true
  },
  { 
    label: "Transparent Pricing", 
    icon: CircleDollarSign, 
    description: "No surprises, honest estimates",
    size: "col-span-1 row-span-1",
    highlight: false
  },
  { 
    label: "On-Time Delivery", 
    icon: Clock, 
    description: "Respecting your schedule",
    size: "col-span-1 row-span-1",
    highlight: false
  },
  { 
    label: "Creative Designs", 
    icon: Palette, 
    description: "Fresh perspectives, timeless results",
    size: "col-span-1 row-span-1",
    highlight: false
  },
  { 
    label: "Sustainable", 
    icon: Leaf, 
    description: "Eco-friendly materials & practices",
    size: "col-span-1 sm:col-span-2 row-span-1",
    highlight: false
  },
  { 
    label: "Dedicated Support", 
    icon: Headphones, 
    description: "Here for you at every step",
    size: "col-span-1 row-span-1",
    highlight: false
  },
  { 
    label: "Attention to Detail", 
    icon: Sparkles, 
    description: "Perfection in every finish",
    size: "col-span-1 row-span-1 md:col-span-2",
    highlight: true
  },
];

export default function OurValues() {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.9, 0.4, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20"
        >
          <span className="text-[0.65rem] md:text-[0.7rem] font-medium text-[#86868b] tracking-wide uppercase bg-[#f5f5f7] px-3 py-1.5 rounded-full inline-block mb-4 md:mb-5">
            Our Promise
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#1d1d1f] leading-[1.1] mb-3 md:mb-4">
            Why <span className="text-[#e85d04]">Coat&Roll?</span>
          </h2>
          <p className="text-[#6e6e73] text-sm md:text-base lg:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            The principles that guide everything we do, from the first sketch to the final coat.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 lg:gap-6 auto-rows-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.03, ease: [0.2, 0.9, 0.4, 1] }}
                viewport={{ once: true }}
                className={`
                  ${value.size}
                  group relative bg-[#fbfbfd] rounded-2xl md:rounded-3xl 
                  p-5 sm:p-6 md:p-7 lg:p-8 
                  border border-[#e8e8ed] hover:border-[#d2d2d6] 
                  transition-all duration-400 hover:shadow-sm
                  ${value.highlight ? 'sm:bg-gradient-to-br sm:from-[#fef9f5] sm:to-[#fbfbfd]' : ''}
                `}
              >
                {/* Icon */}
                <div className={`
                  w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 
                  mb-4 sm:mb-5 md:mb-6 
                  flex items-center justify-center 
                  rounded-xl md:rounded-2xl 
                  bg-white border border-[#e8e8ed] 
                  text-[#e85d04] 
                  group-hover:scale-105 group-hover:bg-[#e85d04] group-hover:text-white 
                  group-hover:border-[#e85d04] 
                  transition-all duration-400
                  ${value.highlight ? 'sm:bg-[#e85d04] sm:text-white sm:border-[#e85d04]' : ''}
                `}>
                  <Icon size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                </div>
                
                {/* Content */}
                <h3 className={`
                  font-semibold text-base sm:text-lg md:text-xl lg:text-2xl 
                  text-[#1d1d1f] mb-1.5 sm:mb-2 tracking-tight
                  ${value.highlight ? 'sm:text-[#e85d04]' : ''}
                `}>
                  {value.label}
                </h3>
                <p className="text-[#6e6e73] text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative accent on highlight cards */}
                {value.highlight && (
                  <div className="absolute bottom-4 right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#e85d04]/5 to-transparent rounded-full blur-2xl -z-10" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.9, 0.4, 1] }}
          viewport={{ once: true }}
          className="w-20 h-[2px] bg-gradient-to-r from-[#e85d04] to-transparent mx-auto mt-12 md:mt-16 lg:mt-20"
        />
      </div>
    </section>
  );
}