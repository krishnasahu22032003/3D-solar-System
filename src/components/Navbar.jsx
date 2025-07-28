// components/Navbar.jsx
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between transition-transform duration-300 ease-in-out backdrop-blur bg-transparent ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo Image */}
      <img
        src="/images/logo.png" // Replace with your actual logo image path
        alt="Zestik Logo"
        className="h-20 w-auto object-contain"
      />

      {/* Right Side Elements */}
      <div className="flex items-center gap-6">
        <span className="text-sm sm:text-base font-medium text-slate-200 hover:text-white hover:underline underline-offset-4 transition duration-300 cursor-pointer">
          Explore
        </span>
        <span className="text-sm sm:text-base font-medium text-slate-200 hover:text-white hover:underline underline-offset-4 transition duration-300 cursor-pointer">
          Features
        </span>
        <span className="text-sm sm:text-base font-medium text-slate-200 hover:text-white hover:underline underline-offset-4 transition duration-300 cursor-pointer">
          Playground
        </span>
        <button className="px-6 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[#434C5E] to-[#2E3440] text-white hover:scale-110 hover:shadow-[0_0_20px_#88C0D0] transition-all duration-300">
          🚀 Launch Portal
        </button>
      </div>
    </div>
  );
}
