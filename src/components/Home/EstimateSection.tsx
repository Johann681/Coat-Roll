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
    <section className="py-16 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Get the estimate for your{" "}
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-orange-500 inline-block"
          >
            {rotatingTexts[index]}
          </motion.span>
        </h2>

        {/* Grid of Estimate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Full Home Interior",
              desc: "Know the estimate price for your full home interiors",
            },
            {
              title: "Kitchen",
              desc: "Get an approximate costing for your kitchen interior.",
            },
            {
              title: "Wardrobe",
              desc: "Our estimate for your dream wardrobe",
            },
            {
              title: "Bedroom",
              desc: "Get the perfect bedroom setup at an estimated price",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 rounded-2xl shadow-md border bg-white hover:shadow-lg flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold mb-2 text-orange-600">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-4">{card.desc}</p>
              <button className="mt-auto inline-flex items-center text-orange-500 font-medium hover:underline">
                Calculate <span className="ml-2">›</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
