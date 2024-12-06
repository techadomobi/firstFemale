"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import CategoriesRow from "./CategoriesRow";

const Navbar: React.FC = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const router = useRouter();

  const placeholderTexts = [
    "Search for clothes",
    "Find your favorite shoes",
    "Discover trendy outfits",
    "Shop sports gear",
  ];

  useEffect(() => {
    if (!isTyping) {
      const currentText = placeholderTexts[wordIndex];
      if (charIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCharIndex(0);
          setDisplayedText("");
          setWordIndex((prev) => (prev + 1) % placeholderTexts.length);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, wordIndex, placeholderTexts, isTyping]);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Toggle */}
          <div className="flex items-center space-x-6">
            <button
              className="text-gray-700 hover:text-gray-900 transition"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              {isCategoriesOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <h1
              className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 transition cursor-pointer"
              onClick={() => router.push("/")}
            >
              <img src="./logo.jpeg" alt="Logo" className="h-auto w-28" />
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-4 hidden md:flex relative">
            <div className="flex w-full items-center border border-gray-300 rounded-md bg-white">
              <input
                type="text"
                className={`w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-transparent relative z-10 ${
                  isTyping ? "text-gray-900" : "text-transparent"
                }`}
                placeholder=""
                onFocus={() => setIsTyping(true)}
                onBlur={() => {
                  setIsTyping(false);
                  setDisplayedText("");
                }}
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                {!isTyping && (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    {displayedText}
                  </span>
                )}
              </div>
              <FaSearch className="text-gray-500 mx-3" />
            </div>
          </div>

          {/* Right Menu */}
          <div className="flex items-center space-x-6">
            <button
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition hidden md:block"
              onClick={() => router.push("/support")}
            >
              Support
            </button>
            <button
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-yellow-500 transition hidden md:block"
              onClick={() => router.push("/my-store")}
            >
              My Store
            </button>
            <button
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500 hover:from-red-500 hover:to-yellow-400 transition hidden md:block"
              onClick={() => router.push("/sign-in")}
            >
              Sign In
            </button>
            <button className="text-gray-700 hover:text-blue-600 transition">
              <FaHeart size={20} />
            </button>
            <button className="text-gray-700 hover:text-blue-600 transition">
              <FaShoppingCart size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="flex md:hidden mt-4">
          <div className="flex w-full items-center border border-gray-300 rounded-md bg-white">
            <input
              type="text"
              className={`w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-transparent relative z-10 ${
                isTyping ? "text-gray-900" : "text-transparent"
              }`}
              placeholder=""
              onFocus={() => setIsTyping(true)}
              onBlur={() => {
                setIsTyping(false);
                setDisplayedText("");
              }}
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              {!isTyping && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                  {displayedText}
                </span>
              )}
            </div>
            <FaSearch className="text-gray-500 mx-3" />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      {isCategoriesOpen && <CategoriesRow />}
    </nav>
  );
};

export default Navbar;
