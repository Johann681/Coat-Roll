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
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 3000);
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 3000);
      }
    } catch (err) {
      setStatus("error");
      setMessage("Failed to connect to the server.");
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 3000);
    }
  };

  return (
    <footer className="w-full bg-[#1d1d1f] text-[#86868b]">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        
        {/* Main Footer Grid - Left aligned on all devices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          
          {/* Brand Section */}
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4 md:mb-5">
              Coat<span className="text-[#e85d04]">&</span>Roll
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-[#86868b] max-w-sm">
              Transforming spaces with premium paint finishes and masterful interior design. 
              Elevating your lifestyle, one coat at a time.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-left">
            <h3 className="text-[0.65rem] md:text-[0.7rem] font-semibold text-[#6e6e73] tracking-wide uppercase mb-5 md:mb-6">
              Contact
            </h3>
            <ul className="space-y-4 md:space-y-5">
              <li className="flex items-center gap-3 md:gap-4 group cursor-pointer">
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-xl bg-[#2c2c2e] text-[#86868b] group-hover:bg-[#e85d04] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <FiPhone size={14} className="md:w-4 md:h-4" />
                </div>
                <span className="text-sm md:text-base text-[#f5f5f7] font-normal">
                  0816 618 7798
                </span>
              </li>
              <li className="flex items-center gap-3 md:gap-4 group cursor-pointer">
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-xl bg-[#2c2c2e] text-[#86868b] group-hover:bg-[#e85d04] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <FiMail size={14} className="md:w-4 md:h-4" />
                </div>
                <span className="text-sm md:text-base text-[#f5f5f7] font-normal">
                  coatandroll@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-3 md:gap-4 group cursor-pointer">
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-xl bg-[#2c2c2e] text-[#86868b] group-hover:bg-[#e85d04] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <FiMapPin size={14} className="md:w-4 md:h-4" />
                </div>
                <span className="text-sm md:text-base text-[#f5f5f7] font-normal">
                  Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="text-left">
            <h3 className="text-[0.65rem] md:text-[0.7rem] font-semibold text-[#6e6e73] tracking-wide uppercase mb-5 md:mb-6">
              Stay Updated
            </h3>
            <p className="text-xs md:text-sm text-[#6e6e73] mb-4 md:mb-5 leading-relaxed">
              Be the first to see our latest transformations.
            </p>
            
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                disabled={status === "loading" || status === "success"}
                className="w-full px-4 md:px-5 py-3 md:py-3.5 rounded-xl bg-[#2c2c2e] border border-[#3a3a3c] text-white placeholder-[#6e6e73] text-sm focus:outline-none focus:border-[#e85d04] focus:ring-1 focus:ring-[#e85d04] transition-all disabled:opacity-50"
              />
              
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="px-4 md:px-5 py-3 md:py-3.5 bg-[#e85d04] hover:bg-[#dc2f02] disabled:bg-[#3a3a3c] text-white font-medium text-sm rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <FiLoader className="animate-spin" size={16} />
                    <span>Subscribing...</span>
                  </>
                ) : status === "success" ? (
                  <>
                    <FiCheckCircle size={16} />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
              
              {(status === "error" || status === "success") && (
                <p className={`text-xs font-normal mt-1 ${
                  status === "error" ? "text-[#ff453a]" : "text-[#32d74b]"
                }`}>
                  {message}
                </p>
              )}
            </form>

            {/* Social Icons */}
            <div className="flex gap-3 md:gap-4 mt-8 md:mt-10">
              {[
                { Icon: FaFacebookF, label: "Facebook" },
                { Icon: FaInstagram, label: "Instagram" },
                { Icon: FaTwitter, label: "Twitter" },
              ].map(({ Icon, label }, i) => (
                <a 
                  key={i} 
                  href="#" 
                  aria-label={label}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#2c2c2e] flex items-center justify-center text-[#86868b] hover:bg-[#e85d04] hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <Icon size={14} className="md:w-4 md:h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 lg:mt-20 pt-6 md:pt-8 border-t border-[#2c2c2e]">
          <p className="text-[0.6rem] md:text-[0.65rem] font-medium tracking-wide text-[#6e6e73] text-left">
            © {new Date().getFullYear()} Coat & Roll. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}