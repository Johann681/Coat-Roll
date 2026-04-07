"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Calculator, ArrowRight, Home, ChefHat, Warehouse, Bed, LucideIcon } from "lucide-react";

const rotatingTexts = ["Full Home", "Kitchen", "Wardrobe", "Bedroom"];

const estimateCards = [
  {
    title: "Full Home",
    desc: "Complete interior solutions for your entire residence",
    category: "Interiors",
    icon: Home,
  },
  {
    title: "Modern Kitchen",
    desc: "Functional and stylish culinary spaces tailored to you",
    category: "Modular",
    icon: ChefHat,
  },
  {
    title: "Wardrobe",
    desc: "Smart storage solutions for a clutter-free lifestyle",
    category: "Storage",
    icon: Warehouse, // Using Warehouse instead of Cabinet
  },
  {
    title: "Bedroom",
    desc: "Create your personal sanctuary with our expert designs",
    category: "Living",
    icon: Bed,
  },
];

export default function EstimateSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#fbfbfd] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        
        {/* Header with rotating text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.9, 0.4, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20"
        >
          <span className="text-[0.65rem] md:text-[0.7rem] font-medium text-[#86868b] tracking-wide uppercase bg-white px-3 py-1.5 rounded-full inline-block mb-4 md:mb-5 shadow-sm">
            Pricing Calculator
          </span>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#1d1d1f] leading-[1.1] mb-3 md:mb-4">
            Get an estimate for your
            <div className="h-[1.2em] flex items-center justify-center gap-2 mt-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 30, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -30, rotateX: 90 }}
                  transition={{ duration: 0.5, ease: [0.2, 0.9, 0.4, 1] }}
                  className="text-[#e85d04] inline-block"
                >
                  {rotatingTexts[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h2>
          
          <p className="text-[#6e6e73] text-sm md:text-base lg:text-lg font-normal max-w-2xl mx-auto leading-relaxed mt-4">
            Transparent pricing designed for your peace of mind. No hidden costs, just quality craftsmanship.
          </p>
        </motion.div>

        {/* Bento Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          {estimateCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.2, 0.9, 0.4, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-[#e8e8ed] hover:border-[#d2d2d6] transition-all duration-400 hover:shadow-md flex flex-col"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#fef9f5] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative p-6 md:p-7 lg:p-8 flex flex-col flex-grow">
                  {/* Icon */}
                  <div className="w-12 h-12 md:w-14 md:h-14 mb-5 md:mb-6 flex items-center justify-center rounded-xl md:rounded-2xl bg-[#f5f5f7] text-[#e85d04] group-hover:bg-[#e85d04] group-hover:text-white transition-all duration-400">
                    <Icon size={22} className="md:w-6 md:h-6" />
                  </div>
                  
                  {/* Category Badge */}
                  <span className="text-[0.6rem] md:text-[0.65rem] font-medium text-[#86868b] tracking-wider uppercase mb-2">
                    {card.category}
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-semibold text-xl md:text-2xl text-[#1d1d1f] mb-2 tracking-tight">
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#6e6e73] text-sm md:text-base font-normal leading-relaxed mb-6 md:mb-8 flex-grow">
                    {card.desc}
                  </p>
                  
                  {/* CTA Button */}
                  <button className="w-full py-3.5 md:py-4 bg-[#f5f5f7] text-[#1d1d1f] font-medium text-sm rounded-xl hover:bg-[#e85d04] hover:text-white transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 group/btn">
                    <span>Calculate</span>
                    <Calculator size={16} className="transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA - Contact for custom estimate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16 lg:mt-20 pt-8 md:pt-10 border-t border-[#e8e8ed]"
        >
          <p className="text-[#6e6e73] text-sm md:text-base mb-4">
            Need a custom estimate for your unique project?
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-transparent border border-[#d2d2d6] text-[#1d1d1f] font-medium text-sm md:text-base rounded-full hover:bg-[#f5f5f7] hover:border-[#c6c6cc] transition-all duration-300 group">
            <span>Contact Our Team</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
} 