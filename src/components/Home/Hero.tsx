/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  return (
    <section className="w-full min-h-[120vh] md:min-h-[100vh] flex flex-col md:flex-row items-center justify-center bg-gray-50 px-6 md:px-16 relative">
      {/* ----------------- NAV BAR ----------------- */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-16 py-4 bg-white/80 backdrop-blur-md shadow-sm z-20">
        {/* Left Side: Sign In / Sign Out */}
        <div>
          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Sign Out
            </button>
          ) : (
            <Link href="/login">
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                Sign In
              </button>
            </Link>
          )}
        </div>

        {/* Right Side: User Icon + Name */}
        {user && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-700 font-bold">
                {user.name?.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="text-gray-800 font-semibold">{user.name}</span>
          </div>
        )}
      </nav>

      {/* ----------------- HERO CONTENT ----------------- */}
      {/* Left: Image Stack */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mt-20 md:mt-0">
        <motion.div
          initial={{ y: -30 }}
          animate={{ y: 30 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
          className="relative w-[28rem] h-[20rem] md:w-[36rem] md:h-[24rem] shadow-2xl rounded-xl overflow-hidden"
        >
          <Image src="/outdoor5.jpg" alt="Living Room" fill className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ y: 30 }}
          animate={{ y: -30 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
          className="relative w-[24rem] h-[16rem] md:w-[32rem] md:h-[20rem] shadow-2xl rounded-xl overflow-hidden absolute top-32 left-0 md:left-16"
        >
          <Image src="/working2.png" alt="Bedroom" fill className="object-cover" />
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
        <Link href="/login">
          <button className="mt-8 px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-600 transition">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
}
