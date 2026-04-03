"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col lg:flex-row items-center justify-center bg-white px-6 md:px-16 relative overflow-hidden pt-20 pb-32">
      {/* ----------------- HERO CONTENT ----------------- */}
      
      {/* Right: Text (Order changed for better visual balance on desktop) */}
      <div className="w-full lg:w-1/2 flex flex-col items-start lg:pr-20 z-10 order-2 lg:order-1 mt-20 lg:mt-0">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-8">
            <span className="text-xs font-bold text-orange-600 tracking-widest uppercase">Premium Finishes</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[1.05] tracking-tight">
            Masterful <br />
            <span className="text-orange-500">Coating.</span>
          </h1>
          <p className="mt-8 text-gray-500 text-xl md:text-2xl max-w-lg font-medium leading-relaxed">
            Elevating your spaces with precision, passion, and the perfect finish. Your vision, expertly rolled.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 mt-12 w-full sm:w-auto">
            <Link href="/login" className="w-full sm:w-auto">
              <button className="w-full px-10 py-5 bg-black text-white font-bold rounded-2xl shadow-2xl shadow-black/20 hover:bg-gray-800 transition transform hover:scale-[1.02] active:scale-[0.98]">
                Get Started
              </button>
            </Link>
            <Link href="/portfolio-section" className="w-full sm:w-auto">
              <button className="w-full px-10 py-5 bg-white border-2 border-gray-100 text-gray-900 font-bold rounded-2xl hover:bg-gray-50 transition transform hover:scale-[1.02] active:scale-[0.98]">
                Portfolio
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Left: Image Stack (Order changed for Better visual flow) */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full flex justify-center"
        >
          {/* Main Image */}
          <div className="relative w-[30rem] h-[22rem] md:w-[42rem] md:h-[30rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] rounded-[40px] overflow-hidden z-10 border-[12px] border-white">
            <Image
              src="/outdoor5.jpg"
              alt="Premium Living Space"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Floating Accents */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: -20 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="absolute -bottom-12 -left-8 md:-left-16 w-[18rem] h-[14rem] md:w-[24rem] md:h-[18rem] shadow-2xl rounded-[32px] overflow-hidden z-20 border-8 border-white hidden sm:block"
          >
            <Image
              src="/working2.png"
              alt="Design Detail"
              fill
              sizes="25vw"
              className="object-cover"
            />
          </motion.div>

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500 rounded-full blur-[100px] opacity-20 -z-10 animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full blur-[120px] opacity-10 -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
