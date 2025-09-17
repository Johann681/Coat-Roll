// components/PortfolioSection.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";



export default function PortfolioSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Coat&Roll Portfolio</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Proposed and completed residential projects by Coat&Roll, featuring
          thoughtful design, reliable delivery, and finishes that last.
        </p>
      </div>

      {/* Problem → Solution Long Intro */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="prose prose-neutral max-w-3xl mx-auto text-left text-gray-700 mb-8"
      >
        <p>
          Many homeowners and property developers struggle with finding reliable
          hands to bring their vision to life. Too often, projects run into
          endless delays, poor finishing, or costs that spiral out of control.
          At Coat&Roll, we step in to change that story.
        </p>

        <p>
          We understand that the biggest pain point is trust — trusting that the
          paintwork will last, trusting that the colors will come out exactly as
          promised, trusting that deadlines will be kept. That’s why our
          approach focuses on transparency, accountability, and craftsmanship.
        </p>

        <p>
          Instead of cutting corners, we invest in premium materials and trained
          professionals who know how to execute with precision. Instead of vague
          timelines, we commit to schedules and deliver on them. And instead of
          leaving you with unanswered questions, we guide you every step of the
          way, from selecting the right color palette to completing the final
          coat.
        </p>

        <p>
          The result? Projects that don’t just look beautiful on handover day,
          but stand the test of time. With Coat&Roll, you don’t just get
          painters — you get partners who solve problems before they happen and
          guarantee peace of mind long after the job is done.
        </p>

        {/* Optional "read more" if you want to expand later */}
        {showMore && (
          <div>
            <p>
              We also remove the usual friction: clear quotes up-front, photo
              reports during key stages, and a post-completion checklist so you
              know every surface was inspected and approved. Our clients often
              tell us the biggest relief is not having to chase contractors or
              worry about hidden costs — that’s the peace of mind we build
              into every project.
            </p>
          </div>
        )}

        <button
          onClick={() => setShowMore((s) => !s)}
          className="mt-4 text-sm text-orange-500 font-medium"
        >
          {showMore ? "Show less" : "Read more about how we work"}
        </button>
      </motion.div>

     
    </section>
  );
}
