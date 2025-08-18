"use client";
import { motion } from "framer-motion";
import { FaPaintRoller, FaHome, FaLightbulb, FaHandshake } from "react-icons/fa";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        
        {/* --- Split Layout --- */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/outdoor4.jpg" // replace with your image
              alt="About Coat&Roll"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              About <span className="text-orange-600">Coat&Roll</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Coat&Roll, we believe every wall has a story to tell. 
              Our mission is to bring life, color, and creativity into 
              your space with top-quality paints and expert craftsmanship.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether it’s your home, office, or a commercial project, 
              our team is dedicated to transforming your environment 
              into something inspiring and beautiful.
            </p>

{/* ...inside your component... */}
<Link href="/design-ideas">
  <button className="bg-orange-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-orange-700 transition">
    Explore Our Work
  </button>
</Link>

          </motion.div>
        </div>

        {/* --- Bento Grid --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {/* Mission */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <FaPaintRoller className="text-orange-600 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
            <p className="text-gray-600 mt-2">
              Transforming spaces with color and creativity.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <FaHome className="text-orange-600 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">What We Do</h3>
            <p className="text-gray-600 mt-2">
              Painting, design, and decoration for homes & businesses.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <FaLightbulb className="text-orange-600 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Why Choose Us</h3>
            <p className="text-gray-600 mt-2">
              Quality service, trust, and innovative solutions.
            </p>
          </div>

          {/* Our Clients */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <FaHandshake className="text-orange-600 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Our Clients</h3>
            <p className="text-gray-600 mt-2">
              Serving families and businesses across Nigeria.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
