import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-white/10 px-6 py-16 text-center">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Logo & Name */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-[#C7CED9] via-[#8FA3BB] to-[#3E4C59] text-transparent bg-clip-text">
          Orbitalux
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Exploring neural interfaces, cosmic intelligence, and UI beyond imagination. Built with love in the vast expanse of the digital galaxy.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 text-white text-xl">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8FA3BB] transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8FA3BB] transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8FA3BB] transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8FA3BB] transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} Orbitalux. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
