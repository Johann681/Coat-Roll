/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { Heart, Sofa, Ruler } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function WishlistSection() {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (activeTab === "signup" && formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      if (activeTab === "signup") {
        // register API
        const res = await axios.post("http://localhost:5000/api/auth/register", {
          name: formData.name,
          email: formData.emailOrPhone,
          password: formData.password,
        });

        toast.success(res.data.message || "Account created successfully!");
        // auto-switch to signin
        setTimeout(() => setActiveTab("signin"), 1500);
      } else {
        // login API
        const res = await axios.post("http://localhost:5000/api/auth/login", {
          email: formData.emailOrPhone,
          password: formData.password,
        });

        toast.success(res.data.message || "Signed in successfully!");

        // ✅ Save user + token to localStorage so Hero can access it
        if (res.data.user) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }

        // redirect to home
        setTimeout(() => router.push("/"), 1500);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      <Toaster position="top-right" />
      {/* LEFT SIDE */}
      <div className="hidden lg:flex flex-1 flex-col justify-center px-6 lg:px-12 py-10 bg-white">
        <div className="flex items-center space-x-3 mb-12">
          <img
            src="/coat&roll.png"
            alt="Coat and Roll Logo"
            className="h-12 w-auto rounded-2xl"
          />
          <h1 className="text-3xl font-bold text-orange-600">Coat and Roll</h1>
        </div>

        <div className="space-y-10">
          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-2xl">
              <Heart className="w-7 h-7 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Create a Wishlist</h3>
              <p className="text-gray-600 text-base">
                Beautiful home interiors to seek inspiration from
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-2xl">
              <Sofa className="w-7 h-7 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Browse Catalogue</h3>
              <p className="text-gray-600 text-base">
                Widest range of paints, décor and modular products
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-2xl">
              <Ruler className="w-7 h-7 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Get Free Quote</h3>
              <p className="text-gray-600 text-base">
                Review quotes tailored for your home interiors
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 w-full flex flex-col justify-center px-6 lg:px-12 py-10 bg-gray-100">
        {/* Tabs */}
        <div className="flex space-x-6 mb-8">
          <button
            onClick={() => setActiveTab("signin")}
            className={`pb-2 text-lg font-medium ${
              activeTab === "signin"
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`pb-2 text-lg font-medium ${
              activeTab === "signup"
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-md w-full">
          {activeTab === "signup" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-4 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
          )}

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
            <label className="block text-sm font-medium text-gray-700">Password</label>
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

          {activeTab === "signup" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
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
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-4 rounded-xl transition"
          >
            {loading ? "Loading..." : activeTab === "signin" ? "Sign In" : "Sign Up"}
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
