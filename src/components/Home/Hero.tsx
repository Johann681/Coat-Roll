"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LINK from "next/link";

export default function Hero() {
  return (
    <section className="w-full min-h-[120vh] md:min-h-[100vh] flex flex-col md:flex-row items-center justify-center bg-gray-50 px-6 md:px-16">
      {/* Left: Image Stack */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        {/* Living Room */}
        <motion.div
          initial={{ y: -30 }}
          animate={{ y: 30 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
          className="relative w-[28rem] h-[20rem] md:w-[36rem] md:h-[24rem] shadow-2xl rounded-xl overflow-hidden"
        >
          <Image src="/livingroom1.jpg" alt="Living Room" fill className="object-cover" />
        </motion.div>

        {/* Bedroom */}
        <motion.div
          initial={{ y: 30 }}
          animate={{ y: -30 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
          className="relative w-[24rem] h-[16rem] md:w-[32rem] md:h-[20rem] shadow-2xl rounded-xl overflow-hidden absolute top-32 left-0 md:left-16"
        >
          <Image src="/bedroom1.jpg" alt="Bedroom" fill className="object-cover" />
        </motion.div>
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2 mt-16 md:mt-0 flex flex-col items-start md:pl-20">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
          Transform Your Space
        </h1>
        <p className="mt-6 text-gray-700 text-lg md:text-2xl max-w-md">
          Explore stunning interior ideas and design your dream home with our expert solutions.
        </p>
        <LINK
        href="/login">
        <button className="mt-8 px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-600 transition">
          Get Started
        </button>
        </LINK>
      </div>
    </section>
  );
}
