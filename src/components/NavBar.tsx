  // components/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Lightbulb, User, PhoneCall, LogOut, X } from "lucide-react";
import { useEffect } from "react";

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
    window.location.reload();
  };

  return (
    <>
      {/* DESKTOP NAV */}
      {/* DESKTOP NAV */}
      <nav className="hidden md:block sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/coat&roll.png"
                alt="Coat&Roll"
                fill
                className="rounded-full shadow-sm"
                priority
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-orange-500 transition-colors">
              Coat&Roll
            </span>
          </Link>

          {/* Links Center */}
          <div className="absolute left-1/2 -translate-x-1/2 flex space-x-10">
            {desktopNav.map((item) => (
              <div
                key={item.name}
                className="relative group py-2"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-gray-600 hover:text-black transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {item.dropdown && (
                    <span className="text-[10px] opacity-50 group-hover:rotate-180 transition-transform">▼</span>
                  )}
                </Link>

                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Login / CTA */}
          <div className="flex items-center space-x-8">
            <Link
              href="/contact"
              className="group flex items-center space-x-2 text-sm font-semibold text-gray-700 hover:text-orange-600 transition-colors"
            >
              <div className="p-2 bg-gray-50 rounded-full group-hover:bg-orange-50 transition-colors">
                <PhoneCall size={16} />
              </div>
              <span className="hidden lg:inline">Contact us</span>
            </Link>

            {mounted && (
              <>
                {user ? (
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                      <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                        {user.name?.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-sm font-semibold text-gray-800 hidden lg:inline">
                        {user.name}
                      </span>
                    </div>
                    <button
                      onClick={() => setShowConfirm(true)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                      title="Sign Out"
                    >
                      <LogOut size={18} />
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="px-6 py-2.5 bg-black text-white text-sm font-bold rounded-full hover:bg-gray-800 transition shadow-lg shadow-black/10 active:scale-95"
                  >
                    Sign In
                  </Link>
                )}
              </>
            )}
          </div>
        </div>

        {/* SIGN OUT CONFIRMATION MODAL */}
        {showConfirm && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-[100] animate-in fade-in duration-300">
            <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-8 max-w-sm w-full mx-4 shadow-2xl border border-white/20 transform transition-all animate-in zoom-in-95 duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-red-50 rounded-2xl text-red-500">
                  <LogOut size={28} />
                </div>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-400" />
                </button>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Sign Out</h3>
              <p className="text-gray-500 mb-8 font-medium leading-relaxed">
                Are you sure you want to sign out of your account? You&apos;ll need to sign in again to access your dashboard.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleLogout}
                  className="w-full px-6 py-4 bg-red-500 text-white font-bold rounded-2xl hover:bg-red-600 transition shadow-lg shadow-red-200 active:scale-[0.98]"
                >
                  Sign Out
                </button>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="w-full px-6 py-4 bg-gray-100 text-gray-700 font-bold rounded-2xl hover:bg-gray-200 transition active:scale-[0.98]"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* MOBILE BOTTOM DOCK */}
      <nav className="md:hidden fixed bottom-6 left-4 right-4 bg-white/80 backdrop-blur-2xl border border-white/20 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-50 overflow-hidden">
        <div className="px-2">
          <div className="grid grid-cols-5 items-center h-20">
            <Link
              href="/"
              className="flex flex-col items-center justify-center gap-1 group"
            >
              <div className="p-2 group-hover:bg-orange-50 rounded-2xl transition-colors">
                <Home size={22} className="text-gray-600 group-hover:text-orange-500" />
              </div>
              <span className="text-[10px] font-bold text-gray-400 group-hover:text-orange-500 tracking-widest">HOME</span>
            </Link>

            <Link
              href="/design-ideas"
              className="flex flex-col items-center justify-center gap-1 group"
            >
              <div className="p-2 group-hover:bg-orange-50 rounded-2xl transition-colors">
                <Lightbulb size={22} className="text-gray-600 group-hover:text-orange-500" />
              </div>
              <span className="text-[10px] font-bold text-gray-400 group-hover:text-orange-500 tracking-widest uppercase">IDEAS</span>
            </Link>

            {/* Center: FAB */}
            <div className="flex flex-col items-center justify-center relative">
              <Link
                href="/estimate"
                className="group relative -top-8"
              >
                <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full group-hover:bg-orange-500/40 transition-colors" />
                <div className="relative rounded-full border-4 border-white shadow-2xl bg-black p-1 transform group-hover:scale-110 transition duration-300">
                  <div className="rounded-full overflow-hidden w-14 h-14 relative bg-white">
                    <Image
                      src="/coat&roll.png"
                      alt="Coat&Roll"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Link>
              <span className="absolute bottom-2 text-[10px] font-black text-orange-600 tracking-tighter uppercase">START</span>
            </div>

            <Link
              href="/contact"
              className="flex flex-col items-center justify-center gap-1 group"
            >
              <div className="p-2 group-hover:bg-orange-50 rounded-2xl transition-colors">
                <PhoneCall size={22} className="text-gray-600 group-hover:text-orange-500" />
              </div>
              <span className="text-[10px] font-bold text-gray-400 group-hover:text-orange-500 tracking-widest uppercase">HELP</span>
            </Link>

            {mounted && user ? (
              <button
                onClick={() => setShowConfirm(true)}
                className="flex flex-col items-center justify-center gap-1 group"
              >
                <div className="p-2 group-hover:bg-red-50 rounded-2xl transition-colors">
                  <LogOut size={22} className="text-gray-600 group-hover:text-red-500" />
                </div>
                <span className="text-[10px] font-bold text-gray-400 group-hover:text-red-500 tracking-widest uppercase">EXIT</span>
              </button>
            ) : (
              <Link
                href="/login"
                className="flex flex-col items-center justify-center gap-1 group"
              >
                <div className="p-2 group-hover:bg-orange-50 rounded-2xl transition-colors">
                  <User size={22} className="text-gray-600 group-hover:text-orange-500" />
                </div>
                <span className="text-[10px] font-bold text-gray-400 group-hover:text-orange-500 tracking-widest uppercase">IN</span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
