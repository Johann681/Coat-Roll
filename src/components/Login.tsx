"use client";
import { useState } from "react";
import { Heart, Sofa, Ruler } from "lucide-react";

export default function WishlistSection() {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full h-screen bg-gray-50 flex">
      {/* LEFT SIDE */}
      <div className="flex-1 flex flex-col justify-center px-12 py-10 bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-12">
          <img
            src="/coat&roll.png"
            alt="Coat and Roll Logo"
            className="h-12 w-auto rounded-2xl"
          />
          <h1 className="text-3xl font-bold text-orange-600">
            Coat and Roll
          </h1>
        </div>

        {/* Feature Cards */}
        <div className="space-y-10">
          {/* Wishlist */}
          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-2xl">
              <Heart className="w-7 h-7 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Create a Wishlist
              </h3>
              <p className="text-gray-600 text-base">
                Beautiful home interiors to seek inspiration from
              </p>
            </div>
          </div>

          {/* Catalogue */}
          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-2xl">
              <Sofa className="w-7 h-7 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Browse Catalogue
              </h3>
              <p className="text-gray-600 text-base">
                Widest range of paints, décor and modular products
              </p>
            </div>
          </div>

          {/* Free Quote */}
          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-2xl">
              <Ruler className="w-7 h-7 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Get Free Quote
              </h3>
              <p className="text-gray-600 text-base">
                Review quotes tailored for your home interiors
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="flex-1 flex flex-col justify-center px-12 py-10 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Sign In / Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email / Mobile Number
            </label>
            <input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              className="w-full mt-1 p-4 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Enter email or phone number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 p-4 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Enter password"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 p-4 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Confirm password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-4 rounded-xl transition"
          >
            Continue
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-6 max-w-md">
          By signing up or signing in, you agree to our{" "}
          <a href="#" className="text-orange-600 underline">
            Privacy Policy
          </a>{" "}
          &{" "}
          <a href="#" className="text-orange-600 underline">
            Terms and Conditions
          </a>
          .
        </p>
      </div>
    </section>
  );
}
