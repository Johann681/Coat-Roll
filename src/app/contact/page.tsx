"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactUs from "@/components/Contact/ContactUs";
import EstimateForm from "@/components/DesignIdeas/EstimateForm";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
  <ContactUs />
  <EstimateForm imageSrc={""}/>
        <Footer />
    </div>
  );
}
