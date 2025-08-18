"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import EstimateForm from "@/components/DesignIdeas/EstimateForm";
import Footer from "@/components/Footer";

export default function Estimate() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <EstimateForm imageSrc={""} />
      <Footer />
    </div>
  );
}
