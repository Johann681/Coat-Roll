"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const rotatingTexts = ["Full Home", "Kitchen", "Wardrobe", "Bedroom"]

export default function EstimateSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 2000) // change every 2s
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-32 bg-gray-50/30 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter leading-none">
            Get an estimate for your <br />
            <div className="h-[1.2em] flex items-center justify-center overflow-hidden">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-orange-500 inline-block"
              >
                {rotatingTexts[index]}
              </motion.span>
            </div>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            Transparent pricing designed for your peace of mind. No hidden costs, just quality craftsmanship.
          </p>
        </motion.div>

        {/* Grid of Estimate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Full Home",
              desc: "Complete interior solutions for your entire residence.",
              category: "Interiors"
            },
            {
              title: "Modern Kitchen",
              desc: "Functional and stylish culinary spaces tailored to you.",
              category: "Modular"
            },
            {
              title: "Wardrobe",
              desc: "Smart storage solutions for a clutter-free lifestyle.",
              category: "Storage"
            },
            {
              title: "Bedroom",
              desc: "Create your personal sanctuary with our expert designs.",
              category: "Living"
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[40px] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] flex flex-col justify-between transition-all duration-500"
            >
              <div>
                <span className="text-[10px] font-black text-orange-500 tracking-[0.2em] uppercase mb-4 block">
                  {card.category}
                </span>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-gray-400 font-medium leading-relaxed mb-8">{card.desc}</p>
              </div>
              <button className="w-full py-4 bg-gray-50 text-gray-900 font-bold rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300 active:scale-95 text-sm uppercase tracking-widest">
                Calculate
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
