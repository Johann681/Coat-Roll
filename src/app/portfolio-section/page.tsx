"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/Portfolio/Portfolio";
import FeaturedProjects from "@/components/Portfolio/Featured";
import EstimateForm from "@/components/DesignIdeas/EstimateForm";

export default function DesignIdeasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>
      <PortfolioSection />
      <FeaturedProjects />
        <EstimateForm imageSrc={""} />
      <Footer />
    </div>
  );
}
