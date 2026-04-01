// components/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Lightbulb, User, PhoneCall, LogOut, X } from "lucide-react";
import { AiOutlineInfoCircle } from "react-icons/ai";
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
  const [user, setUser] = useState<any>(null);
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
      <nav className="hidden md:block border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/coat&roll.png"
              alt="Coat&Roll"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <span className="text-lg font-semibold">Coat&Roll</span>
          </div>

          {/* Links Center */}
          <div className="flex space-x-8 font-semibold">
            {desktopNav.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="relative text-gray-800 hover:text-orange-500 transition-colors"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                </Link>

                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 rounded border bg-white shadow-md">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
          <div className="flex items-center space-x-6">
            <Link
              href="/contact"
              className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-orange-500"
            >
              <PhoneCall size={18} />
              <span>Contact us</span>
            </Link>

            {mounted && (
              <>
                {user ? (
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 border-l pl-4 border-gray-200">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm">
                        {user.name?.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-sm font-medium text-gray-700 hidden lg:inline">
                        {user.name}
                      </span>
                    </div>
                    <button
                      onClick={() => setShowConfirm(true)}
                      className="text-gray-500 hover:text-red-500 p-1 transition-colors"
                      title="Sign Out"
                    >
                      <LogOut size={20} />
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition"
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
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100]">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4 shadow-2xl transform transition-all scale-100 opacity-100">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-red-100 rounded-xl text-red-600">
                  <LogOut size={24} />
                </div>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  <X size={20} />
                </button>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sign Out</h3>
              <p className="text-gray-600 mb-6 font-medium">
                Are you sure you want to sign out of your account?
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 px-4 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition shadow-lg shadow-red-200"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* MOBILE BOTTOM DOCK */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-[0_-6px_20px_rgba(0,0,0,0.06)] z-50">
        <div className="max-w-7xl mx-auto px-4 pb-[env(safe-area-inset-bottom)]">
          <div className="grid grid-cols-5 items-end h-20">
            <Link
              href="/"
              className="flex flex-col items-center justify-center text-[11px] font-medium text-gray-700 hover:text-orange-500"
            >
              <Home size={20} strokeWidth={2} />
              <span className="mt-1">HOME</span>
            </Link>

            <Link
              href="/design-ideas"
              className="flex flex-col items-center justify-center text-[11px] font-medium text-gray-700 hover:text-orange-500 text-center"
            >
              <Lightbulb size={20} strokeWidth={2} />
              <span className="mt-1">IDEAS</span>
            </Link>

            {/* Center: FAB */}
            <div className="flex flex-col items-center justify-start relative -mt-12">
              <Link
                href="/estimate"
                className="block rounded-full border-4 border-white shadow-xl overflow-hidden bg-orange-500 p-0.5 transform hover:scale-105 transition active:scale-95"
              >
                <div className="rounded-full overflow-hidden w-14 h-14 bg-white relative">
                  <Image
                    src="/coat&roll.png"
                    alt="Coat&Roll"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <Link
                href="/estimate"
                className="mt-1 text-[10px] font-extrabold text-orange-600 tracking-tighter"
              >
                BEGIN
              </Link>
            </div>

            <Link
              href="/contact"
              className="flex flex-col items-center justify-center text-[11px] font-medium text-gray-700 hover:text-orange-500 text-center"
            >
              <PhoneCall size={20} strokeWidth={2} />
              <span className="mt-1">Contact</span>
            </Link>

            {mounted && user ? (
              <button
                onClick={() => setShowConfirm(true)}
                className="flex flex-col items-center justify-center text-[10px] font-bold text-gray-600 hover:text-red-500 transition-colors"
              >
                <LogOut size={22} strokeWidth={2.5} />
                <span className="mt-1 tracking-tighter">LOGOUT</span>
              </button>
            ) : (
              <Link
                href="/login"
                className="flex flex-col items-center justify-center text-[10px] font-bold text-gray-600 hover:text-orange-500 transition-colors"
              >
                <User size={22} strokeWidth={2.5} />
                <span className="mt-1 tracking-tighter">SIGN IN</span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
