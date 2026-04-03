"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/livingroom1.jpg", title: "Modern Living Room" },
  { src: "/livingroom2.jpg", title: "Elegant Living Room" },
  { src: "/bedroom1.jpg", title: "Cozy Bedroom" },
  { src: "/bedroom2.jpg", title: "Minimalist Bedroom" },

  { src: "/luxlive.jpg", title: "Luxury Living Room" },

];

export default function ShowcaseSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8 }}
           className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none mb-6">
              Our <span className="text-orange-500">Masterpieces.</span>
            </h2>
            <p className="text-gray-400 text-xl font-medium leading-relaxed">
              Explore our curated gallery of stunning home interiors, where every detail tells a story of elegance.
            </p>
          </div>
          <Link href="/estimate">
            <button className="px-10 py-5 bg-black text-white font-bold rounded-2xl shadow-2xl shadow-black/20 hover:bg-gray-800 transition transform hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap">
              Get Free Quote
            </button>
          </Link>
        </motion.div>

        {/* Slider */}
        <div className="relative group">
          <div className="overflow-hidden rounded-[48px]">
            <div
              className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
              style={{ 
                transform: `translateX(-${current * (100 / (typeof window !== "undefined" && window.innerWidth < 1024 ? 1 : 3))}%)`,
                width: `${(images.length * 100) / (typeof window !== "undefined" && window.innerWidth < 1024 ? 1 : 3)}%` 
              }}
            >
              {images.map((item, idx) => (
                <div key={idx} className="w-full px-5">
                  <div className="bg-gray-50 rounded-[40px] overflow-hidden border border-gray-100 hover:bg-white hover:shadow-[0_49px_80px_rgba(0,0,0,0.06)] transition-all duration-700 group relative flex flex-col h-full">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                         <span className="text-white font-bold text-xs tracking-[0.2em] uppercase">Private Residence</span>
                      </div>
                    </div>
                    <div className="p-10">
                      <h3 className="font-bold text-2xl text-gray-900 mb-2 tracking-tight group-hover:text-orange-500 transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-[2px] bg-orange-500" />
                        <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">Luxury Interior</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center md:justify-start gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-900 hover:bg-black hover:text-white hover:border-black transition-all duration-300 disabled:opacity-30 active:scale-95 shadow-sm"
              disabled={current === 0}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-900 hover:bg-black hover:text-white hover:border-black transition-all duration-300 disabled:opacity-30 active:scale-95 shadow-sm"
              disabled={current >= images.length - 3}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
