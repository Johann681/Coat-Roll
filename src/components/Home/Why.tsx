// components/WhyChooseUs.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Feature = {
  label: string;
  number?: number | string;
};

const features: Feature[] = [
  { label: "Flat 10-year warranty", number: 2 },
  { label: "Flexible Payments" },
  { label: "45-day move-in guarantee", number: 45 },
  { label: "Quality Checks", number: 146 },
  { label: "Happy Homes", number: 160  },
  { label: "Cities", number: 60 },
  { label: "Countries", number: 2 },
  { label: "Catalogue Products", number: "200+" },
  { label: "Designers", number: 60 },
];

export default function Why() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  // create state for each numeric feature
  const [counts, setCounts] = useState<number[]>(features.map(f => (typeof f.number === "number" ? 0 : -1)));

  useEffect(() => {
    if (inView) {
      controls.start("visible");

      // start count up
      features.forEach((f, idx) => {
        if (typeof f.number === "number") {
          let start = 0;
          const end = f.number;
          const duration = 1000; // 1s
          const stepTime = Math.max(Math.floor(duration / end), 20);

          const timer = setInterval(() => {
            start += 1;
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[idx] = start;
              return newCounts;
            });
            if (start >= end) clearInterval(timer);
          }, stepTime);
        }
      });
    }
  }, [inView, controls]);

  return (
    <section ref={ref} className="w-full py-16 bg-gray-50 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={controls}
            variants={{
              visible: { y: 0, opacity: 1, transition: { delay: i * 0.1 } },
            }}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-default hover:scale-105 transition-transform"
          >
            {typeof feature.number === "number" && (
              <span className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">
                {counts[i]}
              </span>
            )}
            <span className="text-gray-800 font-medium">{feature.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
