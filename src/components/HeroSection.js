// components/HeroSection.js
import React from "react";

function HeroSection({ children }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">
          Perfect Your Swing
        </h1>
        <p className="text-2xl mb-12 text-emerald-50">
          Book professional golf lessons with expert instructors
        </p>
        {children}
      </div>
    </div>
  );
}

export default HeroSection;
