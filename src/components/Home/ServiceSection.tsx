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
    images: ["/toilet1.jpg", "/toilet2.jpg"],
  },
  {
    title: "Renovations",
    desc: "Expert solutions to upgrade your home",
    images: ["/outdoor1.jpg", "/outdoor2.jpg"],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center md:text-left">
        One-stop shop for all things interiors
      </h2>
      <p className="text-gray-700 text-lg md:text-xl max-w-3xl mb-12 text-center md:text-left">
        Be it end-to-end interiors, renovation or modular solutions, we have it all for your
        home or office. With a wide range of furniture & decor, we have your back from start to
        finish.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition shadow-gray-200"
          >
            {/* Image stack */}
            <div className="relative w-full h-48">
              <Image
                src={service.images[0]}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col justify-between h-40">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
              <div className="mt-4 flex items-center text-orange-500 font-medium hover:underline cursor-pointer">
                <span>Explore</span>
                <ChevronRight size={16} className="ml-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
