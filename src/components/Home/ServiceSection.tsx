// home/ServicesSection.tsx
"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-32 bg-white px-6 md:px-16 overflow-x-clip">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter leading-none">
            Your space, <br />
            <span className="text-orange-500">Masterfully curated.</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl font-medium leading-relaxed">
            Whether it&apos;s end-to-end interiors, renovation, or modular solutions, we provide 
            complete care for your space from concept to completion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 w-full">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gray-50 rounded-[40px] border border-gray-100 overflow-hidden hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col h-full"
            >
              {/* Image stack */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={service.images[0]}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                   <span className="text-white font-bold text-sm tracking-widest uppercase">View Details</span>
                </div>
              </div>
              <div className="p-10 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-bold text-2xl text-gray-900 mb-4 tracking-tight group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-base font-medium leading-relaxed">{service.desc}</p>
                </div>
                <div className="mt-8 flex items-center text-orange-600 font-bold text-xs tracking-[0.2em] uppercase group-hover:translate-x-2 transition-transform">
                  Explore <ChevronRight size={14} className="ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
