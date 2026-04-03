"use client";

import { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiLoader, FiCheckCircle } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      // Note: Assuming API is on localhost:5000 for now, should ideally use an environment variable
      const res = await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Failed to connect to the server.");
    }
  };

  return (
    <footer className="bg-[#000000] text-gray-400 font-medium">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-20">
        
        {/* Brand */}
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-black text-white mb-8 tracking-tighter">
            Coat<span className="text-orange-500">&</span>Roll
          </h2>
          <p className="text-lg leading-relaxed text-gray-500 max-w-sm">
            Transforming spaces with premium paint finishes and masterful interior design. 
            Elevating your lifestyle, one coat at a time.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-10">Contact</h3>
          <ul className="space-y-6 text-base font-semibold">
            <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
              <div className="p-3 bg-gray-900 rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-all">
                <FiPhone />
              </div>
              <span className="text-gray-300">0816 618 7798</span>
            </li>
            <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
              <div className="p-3 bg-gray-900 rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-all">
                <FiMail />
              </div>
              <span className="text-gray-300">coatandroll@gmail.com</span>
            </li>
            <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
              <div className="p-3 bg-gray-900 rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-all">
                <FiMapPin />
              </div>
              <span className="text-gray-300">Lagos, Nigeria</span>
            </li>
          </ul>
        </div>

        {/* Stay Updated */}
        <div>
          <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-10">Stay Updated</h3>
          <p className="text-sm text-gray-600 mb-6 font-bold leading-relaxed uppercase tracking-widest">
             Be the first to see our latest transformations.
          </p>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                required
                disabled={status === "loading" || status === "success"}
                className="w-full px-6 py-4 rounded-2xl bg-gray-900/50 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-bold disabled:opacity-50"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="group py-4 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-800 text-white font-black rounded-2xl transition-all shadow-xl shadow-orange-500/10 flex items-center justify-center gap-2 active:scale-95 text-xs tracking-widest uppercase"
            >
              {status === "loading" ? (
                <FiLoader className="animate-spin" size={18} />
              ) : status === "success" ? (
                <>
                  <FiCheckCircle size={18} />
                  <span>Subscribed</span>
                </>
              ) : (
                "Join Newsletter"
              )}
            </button>
            {status === "error" && (
              <p className="text-red-500 text-xs font-bold uppercase tracking-tight mt-2">{message}</p>
            )}
             {status === "success" && (
              <p className="text-green-500 text-xs font-bold uppercase tracking-tight mt-2">{message}</p>
            )}
          </form>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-10">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-[10px] font-black tracking-[0.4em] uppercase text-gray-700 py-10 border-t border-gray-900">
        © {new Date().getFullYear()} <span className="text-gray-500">Coat and Roll</span>. All rights reserved.
      </div>
    </footer>
  );
}
