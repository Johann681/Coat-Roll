"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full min-h-[100vh] flex flex-col md:flex-row items-center justify-center bg-gray-50 px-6 md:px-16 relative overflow-hidden">
      {/* ----------------- HERO CONTENT ----------------- */}
      {/* Left: Image Stack */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mt-20 md:mt-0">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 30, opacity: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
          className="relative w-[28rem] h-[20rem] md:w-[36rem] md:h-[24rem] shadow-2xl rounded-2xl overflow-hidden z-10"
        >
          <Image
            src="/outdoor5.jpg"
            alt="Living Room"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: -30, opacity: 1 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
          className="relative w-[24rem] h-[16rem] md:w-[32rem] md:h-[20rem] shadow-2xl rounded-2xl overflow-hidden absolute top-32 left-0 md:left-16"
        >
          <Image
            src="/working2.png"
            alt="Bedroom"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2 mt-16 md:mt-0 flex flex-col items-start md:pl-20 z-10">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Transform <br />
            <span className="text-orange-600">Your Space</span>
          </h1>
          <p className="mt-6 text-gray-700 text-lg md:text-2xl max-w-md">
            Explore stunning interior ideas and design your dream home with our expert solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
            <Link href="/login" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 bg-orange-600 text-white font-bold rounded-xl shadow-lg hover:bg-orange-700 transition transform hover:scale-105 active:scale-95">
                Get Started
              </button>
            </Link>
            <Link href="/portfolio-section" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 border-2 border-gray-200 text-gray-800 font-bold rounded-xl hover:bg-gray-100 transition">
                View Portfolio
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gray-100 rounded-full blur-3xl -z-10" />
    </section>
  );
}
