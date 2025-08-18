"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import DesignIdeas from "@/components/DesignIdeas/DesignIdeas";
import Footer from "@/components/Footer";
import EstimateForm from "@/components/DesignIdeas/EstimateForm";

export default function DesignIdeasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <DesignIdeas />
      <EstimateForm imageSrc={""}/>
      <Footer />
    </div>
  );
}
