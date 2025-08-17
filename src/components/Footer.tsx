"use client";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-orange-500 mb-4">
            Coat and Roll
          </h2>
          <p className="text-sm leading-relaxed">
            Transforming spaces with premium paint finishes. <br />
            Your dream home, one coat at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Shop</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Contact a Painter</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Login / Register</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📞 08166187798</li>
            <li>✉️ Cut_Roll@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} <span className="text-orange-500">Coat and Roll</span>. All rights reserved.
      </div>
    </footer>
  );
}
