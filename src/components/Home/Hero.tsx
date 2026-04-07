"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  // Smooth, light easing curves – Apple-like fluidity
  const springTransition = { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] };
  const fadeUp = {
    initial: { y: 24, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <section className="w-full min-h-[90vh] flex flex-col lg:flex-row items-center justify-center bg-[#fbfbfd] px-6 md:px-16 relative overflow-hidden pt-20 pb-32">
      {/* Subtle background glow – clean & airy */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-gradient-to-b from-white via-[#f5f5f7]/40 to-transparent pointer-events-none" />

      {/* ================= HERO CONTENT ================= */}
      
      {/* Right side: Text (order-2 on mobile, order-1 on desktop) */}
      <div className="w-full lg:w-1/2 flex flex-col items-start lg:pr-12 z-10 order-2 lg:order-1 mt-16 lg:mt-0">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="w-full"
        >
          {/* Apple-style minimal badge – clean, light grey, subtle */}
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#e8e8ed]/60 backdrop-blur-sm border border-[#d2d2d6]/40 mb-8">
            <span className="text-[0.7rem] font-semibold text-[#6e6e73] tracking-wide uppercase">Premium Finishes</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#1d1d1f] leading-[1.05]">
            Masterful <br />
            <span className="text-[#e85d04] font-semibold">Coating.</span>
          </h1>
          
          <p className="mt-6 text-[#6e6e73] text-xl md:text-2xl max-w-lg font-normal leading-relaxed">
            Elevating your spaces with precision, passion, and the perfect finish. Your vision, expertly rolled.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
            <Link href="/login" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springTransition}
                className="w-full px-8 py-4 bg-[#1d1d1f] text-white font-medium text-lg rounded-full shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                Get Started
              </motion.button>
            </Link>
            <Link href="/portfolio-section" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springTransition}
                className="w-full px-8 py-4 bg-white border border-[#d2d2d6] text-[#1d1d1f] font-medium text-lg rounded-full hover:bg-[#f5f5f7] transition-colors duration-300"
              >
                Portfolio
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Left side: Image stack – clean, floating layers with Apple-like rounded corners */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.2, 0.9, 0.4, 1] }}
          className="relative w-full flex justify-center"
        >
          {/* Main Image – large radius, white frame, crisp shadow */}
          <div className="relative w-[28rem] h-[20rem] md:w-[38rem] md:h-[28rem] shadow-2xl shadow-black/5 rounded-[2.5rem] overflow-hidden z-10 border-[8px] border-white bg-white">
            <Image
              src="/outdoor1.jpg"
              alt="Premium Living Space"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Floating accent image 1 – subtle drift animation */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 md:-left-12 w-[14rem] h-[11rem] md:w-[20rem] md:h-[15rem] shadow-xl rounded-2xl overflow-hidden z-20 border-[6px] border-white bg-white hidden sm:block"
          >
            <Image
              src="/working2.png"
              alt="Design Detail"
              fill
              sizes="25vw"
              className="object-cover"
            />
          </motion.div>

          {/* Extra floating accent 2 – very light, appears on larger screens */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-6 -right-6 md:-top-8 md:-right-8 w-[9rem] h-[9rem] md:w-[12rem] md:h-[12rem] shadow-lg rounded-2xl overflow-hidden border-[4px] border-white bg-white hidden md:block opacity-90"
          >
            <Image
              src="/outdoor5.jpg"
              alt="Texture detail"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </motion.div>

          {/* Apple-style soft blur orbs (no harsh pulses, just gentle breathing) */}
          <motion.div
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-16 -right-16 w-48 h-48 bg-[#e85d04] rounded-full blur-[80px] -z-10"
          />
          <motion.div
            animate={{ opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#0071e3] rounded-full blur-[100px] -z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}