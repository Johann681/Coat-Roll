// components/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Lightbulb, Calculator, MoreHorizontal, User, ShoppingBag, Gift } from "lucide-react";

type Item = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
};

const desktopNav: Item[] = [
  { name: "Home", href: "/" },
  { name: "Design Ideas", href: "/design-ideas" },
  { name: "New Arrivals", href: "/new-section" },
  { name: "Portfolio", href: "/portfolio" },
  {
    name: "More",
    href: "#",
    dropdown: [
      { name: "Contact Us", href: "/contact" },
      { name: "About", href: "/about" },
    ],
  },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
          <Link
            href="/login"
            className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-orange-500"
          >
            <User size={18} />
            <span>Login</span>
          </Link>
        </div>
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

            {/* Center: Logo */}
            <div className="flex flex-col items-center justify-start relative -mt-10">
              <Link
                href="/begin"
                className="block rounded-full border-2 border-orange-500 shadow-lg overflow-hidden bg-white"
              >
                <Image
                  src="/coat&roll.png"
                  alt="Coat&Roll"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </Link>
              <Link
                href="/begin"
                className="mt-1 text-[11px] font-semibold text-gray-900"
              >
                LET&apos;S BEGIN
              </Link>
            </div>

            <Link
              href="/shop-furnishings"
              className="flex flex-col items-center justify-center text-[11px] font-medium text-gray-700 hover:text-orange-500 text-center"
            >
              <ShoppingBag size={20} strokeWidth={2} />
              <span className="mt-1">SHOP</span>
            </Link>

            <Link
              href="/new-section"
              className="flex flex-col items-center justify-center text-[11px] font-medium text-gray-700 hover:text-orange-500"
            >
              <Gift size={20} strokeWidth={2} />
              <span className="mt-1">NEW</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
