"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const designCategories = [
  {
    id: "livingroom",
    title: "Living Room",
    images: [
      { src: "/livingroom1.jpg", text: "Cozy Family Area" },
      { src: "/livingroom2.jpg", text: "Modern Minimalist" },
      { src: "/livingroom3.jpg", text: "Open Space Layout" },
      { src: "/livingroom4.jpg", text: "Neutral Colors" },
      { src: "/livingroom5.jpg", text: "Statement Art Wall" },
    ],
  },
  {
    id: "bedroom",
    title: "Bedroom",
    images: [
      { src: "/bedroom1.jpg", text: "Master Suite" },
      { src: "/bedroom2.jpg", text: "Soft Pastels" },
      { src: "/bedroom3.jpg", text: "Storage Friendly" },
      { src: "/bedroom4.jpg", text: "Accent Wall" },
      { src: "/bedroom5.jpg", text: "Cozy Reading Nook" },
    ],
  },
  {
    id: "bathroom",
    title: "Bathroom",
    images: [
      { src: "/toilet1.jpg", text: "Modern Fixtures" },
      { src: "/toilet2.jpg", text: "Compact & Functional" },
      { src: "/toilet3.jpg", text: "Minimalist Design" },
      { src: "/toilet4.jpg", text: "Spa Inspired" },
      { src: "/toilet5.jpg", text: "Neutral Tones" },
    ],
  },
  {
    id: "outdoor",
    title: "Outdoor Spaces",
    images: [
      { src: "/outdoor1.jpg", text: "Balcony Garden" },
      { src: "/outdoor2.jpg", text: "Patio Lounge" },
      { src: "/outdoor3.jpg", text: "Open Deck" },
      { src: "/outdoor4.jpg", text: "Poolside Vibes" },
      { src: "/outdoor5.jpg", text: "Cozy Seating" },
    ],
  },
];

export default function DesignIdeas() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Route protection - redirect if not logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    
    if (!token || !user) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [router]);

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  // Show loading state while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#fbfbfd] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#e85d04] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Don't render content if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="bg-[#fbfbfd] min-h-screen md:pt-0 pt-16">
      {/* Category Sub-Nav (Sticky) */}
      <nav className="sticky top-16 md:top-0 z-30 bg-white/80 backdrop-blur-xl py-3 md:py-4 px-5 md:px-8 border-b border-[#e8e8ed]">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
          {/* Categories */}
          <ul className="flex flex-1 gap-1 md:gap-2 overflow-x-auto scrollbar-hide py-1 w-full md:w-auto no-scrollbar">
            {designCategories.map((cat) => (
              <li key={cat.id}>
                <button
                  className="text-xs md:text-sm font-medium text-[#6e6e73] hover:text-[#e85d04] whitespace-nowrap px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-[#f5f5f7] transition-all active:scale-95"
                  onClick={() => scrollTo(cat.id)}
                >
                  {cat.title}
                </button>
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <Link href="/about">
              <button className="w-full md:w-auto px-5 md:px-6 py-2 md:py-2.5 bg-[#1d1d1f] text-white font-medium text-sm rounded-full hover:bg-[#2c2c2e] transition-all active:scale-[0.98]">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="max-w-4xl mx-auto py-12 md:py-16 px-5 md:px-8 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[0.65rem] md:text-[0.7rem] font-medium text-[#86868b] tracking-wide uppercase bg-[#f5f5f7] px-3 py-1.5 rounded-full inline-block mb-4">
            Inspiration Gallery
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
            Home Interior Design
          </h1>
          <p className="text-[#6e6e73] text-base md:text-lg leading-relaxed max-w-3xl">
            We bring you carefully-curated interior design ideas, to give your
            home a brand new look. Explore exclusive interior designs and trends
            that are every bit inspirational as they are practical.
          </p>
        </motion.div>
      </section>

      {/* Design Galleries */}
      {designCategories.map((cat, categoryIndex) => (
        <motion.section
          key={cat.id}
          ref={(el) => {
            sectionRefs.current[cat.id] = el;
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          className="max-w-7xl mx-auto py-12 md:py-16 px-5 md:px-8 scroll-mt-24 md:scroll-mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-6 md:mb-8">
            {cat.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6">
            {cat.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="group flex flex-col items-start"
              >
                <div className="relative w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden bg-[#f5f5f7]">
                  <Image
                    src={img.src}
                    alt={`${cat.title} design ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>
                <p className="text-sm font-medium text-[#6e6e73] mt-3 group-hover:text-[#e85d04] transition-colors">
                  {img.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      ))}

      {/* Bottom CTA */}
      <section className="text-center py-16 md:py-20 px-5 md:px-8 border-t border-[#e8e8ed]">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-[#1d1d1f] mb-3">
            Ready to transform your space?
          </h3>
          <p className="text-[#6e6e73] text-sm md:text-base mb-6">
            Let our experts bring your dream interior to life
          </p>
          <Link href="/estimate">
            <button className="px-6 md:px-8 py-3 md:py-4 bg-[#e85d04] text-white font-medium text-sm md:text-base rounded-full hover:bg-[#dc2f02] transition-all active:scale-[0.98]">
              Get Free Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}