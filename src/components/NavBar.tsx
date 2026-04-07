// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Lightbulb, User, PhoneCall, LogOut, X, Menu, ChevronDown } from "lucide-react";

type Item = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
};

const desktopNav: Item[] = [
  { name: "Home", href: "/" },
  { name: "Design Ideas", href: "/design-ideas" },
  { name: "New Arrivals", href: "/new-section" },
  { name: "Portfolio", href: "/portfolio-section" },
  {
    name: "More",
    href: "",
    dropdown: [
      { name: "Contact Us", href: "/contact" },
      { name: "About", href: "/about" },
    ],
  },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email?: string } | null>(null);
  const [mounted, setMounted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setShowConfirm(false);
    window.location.href = "/";
  };

  return (
    <>
      {/* DESKTOP NAV - Clean Apple Style */}
      <nav className="hidden md:block sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#e8e8ed] transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-3 lg:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 lg:w-9 lg:h-9 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/coat&roll.png"
                alt="Coat&Roll"
                fill
                className="rounded-full"
                priority
              />
            </div>
            <span className="text-lg lg:text-xl font-semibold tracking-tight text-[#1d1d1f] group-hover:text-[#e85d04] transition-colors">
              Coat&Roll
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="flex items-center gap-6 lg:gap-8">
            {desktopNav.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <button className="text-sm font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors flex items-center gap-1 py-2">
                    {item.name}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === item.name ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-lg rounded-xl shadow-lg border border-[#e8e8ed] overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2.5 text-sm font-medium text-[#6e6e73] hover:bg-[#f5f5f7] hover:text-[#e85d04] transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Auth */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 text-sm font-medium text-[#6e6e73] hover:text-[#e85d04] transition-colors"
            >
              <PhoneCall size={16} />
              <span>Contact</span>
            </Link>

            {mounted && (
              <>
                {user ? (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-[#f5f5f7] px-3 py-1.5 rounded-full">
                      <div className="w-7 h-7 rounded-full bg-[#e85d04] flex items-center justify-center text-white font-semibold text-xs">
                        {user.name?.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-sm font-medium text-[#1d1d1f] hidden lg:inline">
                        {user.name}
                      </span>
                    </div>
                    <button
                      onClick={() => setShowConfirm(true)}
                      className="p-2 text-[#86868b] hover:text-[#ff453a] hover:bg-[#ff453a]/10 rounded-full transition-all"
                    >
                      <LogOut size={18} />
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="px-5 py-2 bg-[#1d1d1f] text-white text-sm font-medium rounded-full hover:bg-[#2c2c2e] transition-all active:scale-[0.98]"
                  >
                    Sign In
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE TOP NAVBAR - Clean, minimal, left-aligned */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-[#e8e8ed]">
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image
                src="/coat&roll.png"
                alt="Coat&Roll"
                fill
                className="rounded-full"
                priority
              />
            </div>
            <span className="text-lg font-semibold tracking-tight text-[#1d1d1f]">
              Coat&Roll
            </span>
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-[#f5f5f7] text-[#1d1d1f]"
          >
            <Menu size={22} />
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-[#e8e8ed] shadow-lg max-h-[80vh] overflow-y-auto animate-in slide-in-from-top duration-200">
            <div className="flex flex-col p-5 gap-4">
              {desktopNav.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button className="w-full text-left text-base font-medium text-[#1d1d1f] py-2">
                        {item.name}
                      </button>
                      <div className="ml-4 mt-1 flex flex-col gap-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm text-[#6e6e73] py-2 hover:text-[#e85d04] transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-base font-medium text-[#1d1d1f] py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 mt-2 border-t border-[#e8e8ed]">
                {mounted && !user && (
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center px-5 py-3 bg-[#1d1d1f] text-white font-medium rounded-xl"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* MOBILE BOTTOM DOCK - Professional, minimal */}
      <nav className="md:hidden fixed bottom-5 left-5 right-5 bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg border border-[#e8e8ed] z-50">
        <div className="grid grid-cols-5 items-center h-16 px-2">
          <Link href="/" className="flex flex-col items-center justify-center gap-0.5 group">
            <Home size={20} className="text-[#86868b] group-hover:text-[#e85d04] transition-colors" />
            <span className="text-[0.5rem] font-medium text-[#86868b] group-hover:text-[#e85d04] tracking-wide">Home</span>
          </Link>

          <Link href="/design-ideas" className="flex flex-col items-center justify-center gap-0.5 group">
            <Lightbulb size={20} className="text-[#86868b] group-hover:text-[#e85d04] transition-colors" />
            <span className="text-[0.5rem] font-medium text-[#86868b] group-hover:text-[#e85d04] tracking-wide">Ideas</span>
          </Link>

          {/* Center CTA */}
          <Link href="/estimate" className="flex flex-col items-center justify-center relative">
            <div className="absolute -top-8 w-12 h-12 bg-[#e85d04] rounded-full flex items-center justify-center shadow-lg shadow-[#e85d04]/20">
              <div className="relative w-10 h-10">
                <Image
                  src="/coat&roll.png"
                  alt="Start"
                  fill
                  className="rounded-full border-2 border-white"
                />
              </div>
            </div>
            <span className="text-[0.5rem] font-semibold text-[#e85d04] tracking-wide mt-6">Start</span>
          </Link>

          <Link href="/contact" className="flex flex-col items-center justify-center gap-0.5 group">
            <PhoneCall size={20} className="text-[#86868b] group-hover:text-[#e85d04] transition-colors" />
            <span className="text-[0.5rem] font-medium text-[#86868b] group-hover:text-[#e85d04] tracking-wide">Help</span>
          </Link>

          {mounted && user ? (
            <button onClick={() => setShowConfirm(true)} className="flex flex-col items-center justify-center gap-0.5 group">
              <LogOut size={20} className="text-[#86868b] group-hover:text-[#ff453a] transition-colors" />
              <span className="text-[0.5rem] font-medium text-[#86868b] group-hover:text-[#ff453a] tracking-wide">sign out</span>
            </button>
          ) : (
            <Link href="/login" className="flex flex-col items-center justify-center gap-0.5 group">
              <User size={20} className="text-[#86868b] group-hover:text-[#e85d04] transition-colors" />
              <span className="text-[0.5rem] font-medium text-[#86868b] group-hover:text-[#e85d04] tracking-wide">Sign In</span>
            </Link>
          )}
        </div>
      </nav>

      {/* SIGN OUT CONFIRMATION MODAL */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100] animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4 shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-[#ff453a]/10 flex items-center justify-center">
                <LogOut size={22} className="text-[#ff453a]" />
              </div>
              <button onClick={() => setShowConfirm(false)} className="p-1">
                <X size={18} className="text-[#86868b]" />
              </button>
            </div>
            <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">Sign Out</h3>
            <p className="text-sm text-[#6e6e73] mb-6">Are you sure you want to sign out?</p>
            <div className="flex gap-3">
              <button
                onClick={handleLogout}
                className="flex-1 px-4 py-3 bg-[#ff453a] text-white font-medium rounded-xl hover:bg-[#ff3b30] transition-colors"
              >
                Sign Out
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 px-4 py-3 bg-[#f5f5f7] text-[#1d1d1f] font-medium rounded-xl hover:bg-[#e8e8ed] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}