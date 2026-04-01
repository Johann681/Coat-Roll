// home/ServicesSection.tsx
"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

// Service data
const services = [
  {
    title: "Modular Interiors",
    desc: "Functional kitchen, wardrobe and storage",
    images: ["/kitchen4.jpg", "/kitchen2.jpg"],
  },
  {
    title: "Full Home Interiors",
    desc: "Turnkey interior solutions for your home",
    images: ["/bedroom5.jpg", "/bedroom2.jpg"],
  },
  {
    title: "Luxury Interiors",
    desc: "Tailored interiors that redefine elegance",
    images: ["/luxry.jpg", "/toilet2.jpg"],
  },
  {
    title: "Renovations",
    desc: "Expert solutions to upgrade your home",
    images: ["/outdoor1.jpg", "/outdoor2.jpg"],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50/50 px-6 md:px-16 overflow-x-clip">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center md:text-left tracking-tight">
          One-stop shop for all things <span className="text-orange-600">interiors</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mb-16 text-center md:text-left font-medium">
          Whether it's end-to-end interiors, renovation, or modular solutions, we provide 
          complete care for your space from concept to completion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image stack */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={service.images[0]}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex flex-col justify-between min-h-[160px]">
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
                <div className="mt-6 flex items-center text-orange-600 font-bold text-sm tracking-wide group-hover:translate-x-2 transition-transform cursor-pointer">
                  EXPLORE MORE <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
