"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const deliveredProjects = [
  { id: 1, title: "Modern Apartment", image: "/livingroom5.jpg" },
  { id: 2, title: "Luxury Villa", image: "/bedroom5.jpg" },
];

const upcomingProjects = [
  { id: 1, title: "Penthouse Proposal", image: "/livingroom3.jpg" },
  { id: 2, title: "Smart Condo", image: "/outdoor5.jpg" },
];

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<"delivered" | "upcoming">(
    "delivered"
  );

  const projects =
    activeTab === "delivered" ? deliveredProjects : upcomingProjects;

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Livspace Portfolio</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Proposed and completed residential projects by Livspace, featuring
          innovative designs, latest trends, and personalized aesthetics to
          match your lifestyle.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-10">
        <button
          onClick={() => setActiveTab("delivered")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
            activeTab === "delivered"
              ? "border-black text-black"
              : "border-transparent text-gray-500 hover:text-black"
          }`}
        >
          Delivered Projects
        </button>
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
            activeTab === "upcoming"
              ? "border-black text-black"
              : "border-transparent text-gray-500 hover:text-black"
          }`}
        >
          Upcoming Properties
        </button>
      </div>

      {/* Projects */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((p) => (
          <div
            key={p.id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
