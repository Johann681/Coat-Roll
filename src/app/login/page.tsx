"use client";
import React from "react";
import LoginComponent from "@/components/Login";

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen">
      <LoginComponent />
      {/* You can add a footer or any other component here if needed */}
    </div>
  );
}
