"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/about/About";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <AboutSection />
      <Footer />
    </div>
  );
}
