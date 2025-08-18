"use client";

import Image from "next/image";
import Link from "next/link";

export default function PreFooterCTA() {
  return (
    <section className="relative w-full">
      <div className="relative w-full min-h-[200px] md:min-h-[280px]">
        {/* Illustration (background image) */}
        <Image
          src="/footer.png"
          alt="Decorative living room illustration"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay for text visibility */}
        <div
          className="absolute inset-0 bg-black/60"
          aria-hidden="true"
        />

        {/* Centered text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Your dream home is just a click away
          </h2>

          <Link
            href="/estimate"
            className="mt-6 inline-flex items-center justify-center rounded-lg px-8 py-4
                       text-base md:text-lg font-semibold text-white
                       bg-orange-500 hover:bg-orange-600 active:bg-orange-700
                       shadow-lg transition"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </section>
  );
}
