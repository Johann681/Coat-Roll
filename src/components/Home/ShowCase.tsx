"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/livingroom1.jpg", title: "Modern Living Room" },
  { src: "/livingroom2.jpg", title: "Elegant Living Room" },
  { src: "/bedroom1.jpg", title: "Cozy Bedroom" },
  { src: "/bedroom2.jpg", title: "Minimalist Bedroom" },
  { src: "/kitchen1.jpg", title: "Spacious Kitchen" },
  { src: "/toilet1.jpg", title: "Modern Bathroom" },
  { src: "/livingroom3.jpg", title: "Luxury Living Room" },
  { src: "/bedroom3.jpg", title: "Rustic Bedroom" },
  { src: "/kitchen2.jpg", title: "Contemporary Kitchen" },
  { src: "/toilet2.jpg", title: "Compact Toilet" },
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
    <section className="w-full bg-green-50  py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get a Glimpse of Our Homes
          </h2>
          <p className="text-gray-600 mt-2">
            Latest dream home interiors delivered hassle-free
          </p>
          <button className="mt-4 px-6 py-2 bg-orange-500 text-white font-medium rounded-md shadow hover:bg-orange-600 transition">
            Get Free Quote
          </button>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((item, idx) => (
              <div
                key={idx}
                className="w-full md:w-1/3 flex-shrink-0 px-3"
              >
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-4 text-left">
                    <p className="font-semibold text-gray-800 text-lg">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500">Dream Interior</p>
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
