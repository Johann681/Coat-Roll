/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";

interface QuoteFormProps {
  imageSrc: string;
}

export default function QuoteForm({ imageSrc }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (res.ok) {
        toast.success(result.message);
        setFormData({ name: "", email: "", phone: "", property: "" });
      } else {
        toast.error(result.error || "Failed to submit");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch gap-6 px-4 max-w-5xl">
        {/* Image Left */}
        <div className="w-full md:w-2/5 rounded-xl overflow-hidden shadow-2xl flex-shrink-0">
          <img
            src="/formimg.png"
            alt="Design Inspiration"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Form Right */}
        <div className="w-full md:w-3/5 bg-white p-8 rounded-xl shadow-2xl flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-gray-800">
            Designs for Every Budget
          </h2>
          <p className="text-gray-600 mb-6">
            Get your dream home today. Let our experts help you
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
            <PhoneInput
              country={"us"}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputProps={{ name: "phone", required: true }}
              containerClass="w-full"
              inputClass="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              buttonClass="border-r border-gray-300"
            />
            <input
              type="text"
              name="property"
              placeholder="Property Name"
              value={formData.property}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-all font-semibold"
            >
              Get Free Quote
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            By submitting this form, you agree to the privacy policy & terms and conditions
          </p>
        </div>
      </div>
    </section>
  );
}
