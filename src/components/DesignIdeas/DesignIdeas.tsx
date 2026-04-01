"use client";

import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { Link2Off } from "lucide-react";

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
  // store refs in an object
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Category Sub-Nav (Sticky) */}
      <nav className="sticky top-16 z-30 bg-white/90 backdrop-blur-md py-4 px-6 md:px-16 flex flex-col md:flex-row items-center border-b border-gray-200">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center">
          {/* Left: Categories */}
          <ul className="flex flex-1 space-x-6 overflow-x-auto scrollbar-hide py-2 md:py-0 w-full md:w-auto no-scrollbar">
            {designCategories.map((cat) => (
              <li key={cat.id}>
                <button
                  className="text-gray-600 font-bold hover:text-orange-600 whitespace-nowrap px-3 py-2 rounded-xl transition-all hover:bg-orange-50 active:scale-95"
                  onClick={() => scrollTo(cat.id)}
                >
                  {cat.title}
                </button>
              </li>
            ))}
          </ul>

          {/* Right: Action Button */}
          <div className="mt-4 md:mt-0 md:ml-8 flex-shrink-0 w-full md:w-auto">
            <Link href="/about">
              <button className="w-full md:w-auto bg-gray-900 text-white font-bold py-2.5 px-8 rounded-xl hover:bg-orange-600 transition-all shadow-lg active:scale-95">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </nav>


      {/* Header & Text */}
      <section className="max-w-4xl mx-auto py-12 px-6 md:px-16 text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Home Interior Design
        </h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          We bring you carefully-curated interior design ideas, to give your
          home a brand new look. Explore exclusive interior designs and trends
          that are every bit inspirational as they are practical. Our team of
          interior designers have put together ideas across kitchen, bedroom,
          living room, bathroom, and outdoor spaces to help you pick a design
          that will best suit your home interior requirements.
        </p>
      </section>

      {/* Design Galleries */}
      {designCategories.map((cat) => (
        <section
          key={cat.id}
          ref={(el) => {
            sectionRefs.current[cat.id] = el;
          }}
          className="max-w-6xl mx-auto py-12 px-6 md:px-16"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            {cat.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {cat.images.map((img, idx) => (
              <div key={idx} className="group flex flex-col items-start">
                <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500">
                  <Image
                    src={img.src}
                    alt={`${cat.title} design ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-sm font-semibold text-gray-700 mt-3 group-hover:text-orange-600 transition-colors">
                  {img.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
