"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhoneAlt, FaGlobe, FaMapMarkerAlt, FaFacebook, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Contact <span className="text-orange-600">Coat&Roll</span>
          </h2>
          <p className="text-gray-600 mt-2">Let’s connect and bring color to your space.</p>
          <div className="mt-4 w-16 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* WhatsApp */}
          <motion.a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white shadow-md px-6 py-4 rounded-2xl border border-gray-200 hover:border-orange-500 hover:shadow-lg transition"
          >
            <FaWhatsapp className="text-green-500 text-2xl" />
            <span className="font-medium text-gray-800">Chat on WhatsApp</span>
          </motion.a>

          {/* Instagram */}
          <motion.a 
            href="https://instagram.com/coatnroll" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white shadow-md px-6 py-4 rounded-2xl border border-gray-200 hover:border-orange-500 hover:shadow-lg transition"
          >
            <FaInstagram className="text-pink-500 text-2xl" />
            <span className="font-medium text-gray-800">Follow us on Instagram</span>
          </motion.a>

          {/* Email */}
          <motion.a 
            href="mailto:info@coatnroll.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white shadow-md px-6 py-4 rounded-2xl border border-gray-200 hover:border-orange-500 hover:shadow-lg transition"
          >
            <FaEnvelope className="text-red-500 text-2xl" />
            <span className="font-medium text-gray-800">Send us an Email</span>
          </motion.a>

          {/* Phone */}
          <motion.a 
            href="tel:+2348012345678"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white shadow-md px-6 py-4 rounded-2xl border border-gray-200 hover:border-orange-500 hover:shadow-lg transition"
          >
            <FaPhoneAlt className="text-blue-500 text-2xl" />
            <span className="font-medium text-gray-800">Call Us</span>
          </motion.a>

          {/* Website */}
          <motion.a 
            href="https://coatnroll.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white shadow-md px-6 py-4 rounded-2xl border border-gray-200 hover:border-orange-500 hover:shadow-lg transition"
          >
            <FaGlobe className="text-purple-500 text-2xl" />
            <span className="font-medium text-gray-800">Visit our Website</span>
          </motion.a>

          {/* Location */}
          <motion.a 
            href="https://maps.google.com/?q=CoatnRoll+Lagos+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white shadow-md px-6 py-4 rounded-2xl border border-gray-200 hover:border-orange-500 hover:shadow-lg transition"
          >
            <FaMapMarkerAlt className="text-orange-500 text-2xl" />
            <span className="font-medium text-gray-800">Find us on Maps</span>
          </motion.a>

          {/* Facebook */}
          <motion.a 
            href="https://facebook.com/coatnroll"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white shadow-md px-6 py-4 rounded-2xl border border-gray-200 hover:border-orange-500 hover:shadow-lg transition"
          >
            <FaFacebook className="text-blue-600 text-2xl" />
            <span className="font-medium text-gray-800">Like us on Facebook</span>
          </motion.a>

          {/* Twitter */}
          <motion.a 
            href="https://twitter.com/coatnroll"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white shadow-md px-6 py-4 rounded-2xl border border-gray-200 hover:border-orange-500 hover:shadow-lg transition"
          >
            <FaTwitter className="text-sky-500 text-2xl" />
            <span className="font-medium text-gray-800">Follow us on Twitter</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
