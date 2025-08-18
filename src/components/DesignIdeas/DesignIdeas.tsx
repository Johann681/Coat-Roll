"use client";

import Image from "next/image";
import { useRef } from "react";

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
      {/* Navbar */}
      <nav className="bg-white py-4 px-6 md:px-16 flex items-center shadow-sm mb-8 max-w-6xl mx-auto">
        <ul className="flex flex-1 space-x-4 md:space-x-6 overflow-x-auto scrollbar-hide">
          {designCategories.map((cat) => (
            <li key={cat.id}>
              <button
                className="text-gray-700 font-medium hover:text-orange-500 whitespace-nowrap"
                onClick={() => scrollTo(cat.id)}
              >
                {cat.title}
              </button>
            </li>
          ))}
        </ul>
        <button className="ml-4 flex-shrink-0 bg-orange-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-orange-600 transition-colors whitespace-nowrap">
          CONSULT ONLINE NOW
        </button>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cat.images.map((img, idx) => (
              <div key={idx} className="flex flex-col items-start">
                <div className="relative w-full h-40 sm:h-48 rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src={img.src}
                    alt={`${cat.title} design ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">{img.text}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
