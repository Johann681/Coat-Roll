"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/livingroom1.jpg", title: "Modern Living Room", category: "Contemporary" },
  { src: "/livingroom2.jpg", title: "Elegant Living Room", category: "Classic" },
  { src: "/bedroom1.jpg", title: "Cozy Bedroom", category: "Minimalist" },
  { src: "/bedroom2.jpg", title: "Serene Bedroom", category: "Zen" },
  { src: "/luxlive.jpg", title: "Luxury Living", category: "Opulent" },
];

export default function ShowcaseSlider() {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) setSlidesPerView(3);
      else if (window.innerWidth >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const maxIndex = Math.max(0, images.length - slidesPerView);

  const prevSlide = () => setCurrent((prev) => Math.max(0, prev - 1));
  const nextSlide = () => setCurrent((prev) => Math.min(maxIndex, prev + 1));

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left - next slide
      if (current < maxIndex) nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right - previous slide
      if (current > 0) prevSlide();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14 lg:mb-16"
        >
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[0.65rem] md:text-[0.7rem] font-medium text-[#86868b] tracking-wide uppercase bg-[#f5f5f7] px-3 py-1.5 rounded-full inline-block mb-4">
              Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#1d1d1f] leading-[1.1] mb-3 md:mb-4">
              Our <span className="text-[#e85d04]">Masterpieces.</span>
            </h2>
            <p className="text-[#6e6e73] text-sm md:text-base lg:text-lg font-normal max-w-md mx-auto">
              Explore our curated gallery of stunning home interiors.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center mt-6 md:mt-8">
            <Link href="/estimate">
              <button className="px-6 py-3 md:px-8 md:py-4 bg-[#1d1d1f] text-white font-medium text-sm md:text-base rounded-full shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98]">
                Get Free Quote
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Slider with touch support */}
        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${current * (100 / slidesPerView)}%)`,
                width: `${(images.length * 100) / slidesPerView}%`,
              }}
            >
              {images.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-2 md:px-3"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <div className="group relative bg-[#fbfbfd] rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden border border-[#e8e8ed] hover:border-[#d2d2d6] transition-all duration-400">
                    {/* Image */}
                    <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      
                      {/* Category tag - floating */}
                      <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                        <span className="text-[0.6rem] md:text-xs font-medium text-[#1d1d1f] tracking-wide">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-5 lg:p-6">
                      <h3 className="font-semibold text-base md:text-lg lg:text-xl text-[#1d1d1f] mb-1 tracking-tight line-clamp-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="w-5 md:w-6 h-[2px] bg-[#e85d04]" />
                        <span className="text-[0.6rem] md:text-[0.65rem] font-medium text-[#86868b] tracking-wider uppercase">
                          Luxury Interior
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Hidden on mobile (swipe instead), visible on tablet+ */}
          <div className="hidden sm:flex items-center justify-between gap-3 mt-6 md:mt-8 lg:mt-10">
            <button
              onClick={prevSlide}
              disabled={current === 0}
              className="px-4 py-2.5 md:px-5 md:py-3 rounded-full border border-[#d2d2d6] bg-white text-[#1d1d1f] font-medium text-sm hover:bg-[#f5f5f7] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ChevronLeft size={16} />
              <span className="hidden md:inline">Previous</span>
            </button>
            
            {/* Slide indicators */}
            <div className="flex gap-1.5">
              {Array.from({ length: images.length - slidesPerView + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === current ? "w-6 bg-[#e85d04]" : "w-1.5 bg-[#d2d2d6]"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              disabled={current >= maxIndex}
              className="px-4 py-2.5 md:px-5 md:py-3 rounded-full border border-[#d2d2d6] bg-white text-[#1d1d1f] font-medium text-sm hover:bg-[#f5f5f7] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span className="hidden md:inline">Next</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Mobile indicators - Bigger, more touch-friendly */}
          <div className="flex justify-center gap-3 mt-6 sm:hidden">
            {Array.from({ length: images.length }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`transition-all duration-300 ${
                  idx === current 
                    ? "w-8 h-1.5 bg-[#e85d04] rounded-full" 
                    : "w-1.5 h-1.5 bg-[#d2d2d6] rounded-full"
                }`}
              />
            ))}
          </div>

          {/* Swipe hint for mobile */}
          <div className="text-center mt-4 sm:hidden">
            <p className="text-[0.6rem] text-[#86868b] tracking-wide uppercase">
              Swipe to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}