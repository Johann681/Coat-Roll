"use client";

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold text-orange-500 mb-6">
            Coat and Roll
          </h2>
          <p className="text-base leading-relaxed text-gray-400">
            Transforming spaces with premium paint finishes. <br />
            Your dream home, one coat at a time.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Contact</h3>
          <ul className="space-y-4 text-base">
            <li className="flex items-center gap-3">
              <FiPhone className="text-orange-500 text-lg" /> 08166187798
            </li>
            <li className="flex items-center gap-3">
              <FiMail className="text-orange-500 text-lg" /> Cut_Roll@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FiMapPin className="text-orange-500 text-lg" /> Lagos, Nigeria
            </li>
          </ul>
        </div>

        {/* Stay Updated */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Let’s keep in touch</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg bg-gray-800 placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
            >
              Let us email you
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6 text-lg">
            <a href="#" className="hover:text-orange-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-400 transition"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-16 border-t border-gray-700 pt-8">
        © {new Date().getFullYear()} <span className="text-orange-500">Coat and Roll</span>. All rights reserved.
      </div>
    </footer>
  );
}
