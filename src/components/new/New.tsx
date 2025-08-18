"use client";

import { motion } from "framer-motion";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const latestNews: NewsItem[] = [
  { id: 1, title: "Modern Living Room Ideas", description: "Explore the latest trends in living room designs and get inspired for your home makeover.", image: "/livingroom4.jpg" },
  { id: 2, title: "Bedroom Renovation Tips", description: "Make your bedroom cozy and stylish with minimal effort and maximum impact.", image: "/bedroom4.jpg" },
  { id: 3, title: "Kitchen Makeover Inspiration", description: "Upgrade your kitchen with functional and aesthetic designs that suit every style.", image: "/toilet4.jpg" },
];

export default function WhatsNew() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 space-y-16">

        {/* Header & Intro */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
            What’s New
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl">
            Stay updated with the latest interior design trends, expert tips, and our collaborations. Discover what’s fresh and exciting in home design today.
          </p>
        </div>

        {/* Latest News */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-gray-900">Latest Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover rounded-t-2xl"
                />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <p className="mt-4 text-sm text-blue-600 font-medium cursor-pointer hover:underline">
                    Read More →
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-gray-400 italic text-center text-sm">More news coming soon…</p>
        </div>

        {/* Partnership Section */}
        <div className="bg-gray-50 p-12 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-8">
          <img
            src="/logo.png"
            alt="Taolux Paint"
            className="w-32 md:w-40 object-contain"
          />
          <div className="text-center md:text-left space-y-3">
            <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Partnership with Taolux Paint
            </h3>
            <p className="text-gray-600 text-lg max-w-xl">
              We are proud to collaborate with Taolux Paint to bring the best design solutions to your home. Expect innovative projects, exciting updates, and inspiring ideas. Stay tuned for more!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
