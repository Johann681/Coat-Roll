"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
    <section className="w-full bg-orange-50/30 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Get a Glimpse of Our <span className="text-orange-600">Homes</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Explore our latest dream home interiors, delivered with precision and care.
            </p>
          </div>
          <Link href="/estimate">
            <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg hover:bg-orange-600 transition transform hover:scale-105 active:scale-95 whitespace-nowrap">
              Get Free Quote
            </button>
          </Link>
        </div>

        {/* Slider */}
        <div className="relative group overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ 
              transform: `translateX(-${current * 100}%)`,
              width: "100%" 
            }}
          >
            {images.map((item, idx) => (
              <div key={idx} className="w-full lg:w-1/3 flex-shrink-0 px-4">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group relative">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <p className="font-bold text-gray-900 text-xl mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                      Premium Dream Interior
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
       
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
          >
            <ChevronLeft size={24} />
          </button>
       
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
