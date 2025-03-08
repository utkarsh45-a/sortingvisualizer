import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1b1a1a] text-white py-10 ">
      <div className="container mx-auto flex flex-col items-center justify-between px-6 md:flex-row">
        {/* Left Side */}
        <p className="text-sm">© {new Date().getFullYear()} DSA Visualizer. All rights reserved.</p>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" target="_blank" rel="github">
            <Github size={20} className="hover:text-gray-400" />
          </a>
          <a href="#" target="_blank" rel="twitter">
            <Twitter size={20} className="hover:text-gray-400" />
          </a>
          <a href="#" target="_blank" rel="linkedin">
            <Linkedin size={20} className="hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}
