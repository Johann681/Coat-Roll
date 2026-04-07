"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Service data
const services = [
  {
    title: "Modular Interiors",
    desc: "Functional kitchen, wardrobe and storage",
    images: ["/kitchen4.jpg", "/kitchen2.jpg"],
    link: "/services/modular",
  },
  {
    title: "Full Home Interiors",
    desc: "Turnkey interior solutions for your home",
    images: ["/bedroom5.jpg", "/bedroom2.jpg"],
    link: "/services/full-home",
  },
  {
    title: "Luxury Interiors",
    desc: "Tailored interiors that redefine elegance",
    images: ["/luxry.jpg", "/toilet2.jpg"],
    link: "/services/luxury",
  },
  {
    title: "Renovations",
    desc: "Expert solutions to upgrade your home",
    images: ["/outdoor1.jpg", "/outdoor2.jpg"],
    link: "/services/renovations",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        {/* Header - Clean and centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.9, 0.4, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20"
        >
          <span className="text-[0.65rem] md:text-[0.7rem] font-medium text-[#86868b] tracking-wide uppercase bg-[#f5f5f7] px-3 py-1.5 rounded-full inline-block mb-4 md:mb-5">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#1d1d1f] leading-[1.1] mb-3 md:mb-4">
            Your space,{" "}
            <br className="hidden sm:block" />
            <span className="text-[#e85d04]">masterfully curated.</span>
          </h2>
          <p className="text-[#6e6e73] text-sm md:text-base lg:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            Whether it's end-to-end interiors, renovation, or modular solutions, 
            we provide complete care for your space from concept to completion.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.2, 0.9, 0.4, 1] }}
              viewport={{ once: true }}
              className="group relative bg-[#fbfbfd] rounded-2xl md:rounded-3xl overflow-hidden border border-[#e8e8ed] hover:border-[#d2d2d6] transition-all duration-400 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#f5f5f7]">
                <Image
                  src={service.images[0]}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Second image peek - Apple-style detail */}
                <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 rounded-tl-2xl overflow-hidden border-t border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  <Image
                    src={service.images[1]}
                    alt={`${service.title} detail`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 lg:p-7 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg md:text-xl lg:text-2xl text-[#1d1d1f] mb-2 tracking-tight group-hover:text-[#e85d04] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#6e6e73] text-sm md:text-base font-normal leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                
                {/* Explore Link */}
                <Link href={service.link}>
                  <div className="mt-5 md:mt-6 flex items-center gap-1.5 text-[#86868b] group-hover:text-[#e85d04] text-xs font-medium tracking-wide uppercase transition-all duration-300 group-hover:gap-2.5 cursor-pointer">
                    <span>Explore</span>
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Optional but adds polish */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16 lg:mt-20"
        >
          <Link href="/services">
            <button className="px-6 py-3 md:px-8 md:py-4 bg-transparent border border-[#d2d2d6] text-[#1d1d1f] font-medium text-sm md:text-base rounded-full hover:bg-[#f5f5f7] hover:border-[#c6c6cc] transition-all duration-300 active:scale-[0.98]">
              View All Services
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}