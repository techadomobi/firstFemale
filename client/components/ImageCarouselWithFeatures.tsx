"use client";

import React from "react";
import { FaExchangeAlt, FaTruck, FaLock, FaStore } from "react-icons/fa"; // Import icons

const FeatureRow = () => {
  return (
    <div className="flex justify-between items-center mt-4 p-4 bg-white">
      {/* Easy Return */}
      <div className="flex items-center space-x-2">
        <FaExchangeAlt size={20} className="text-pink-500" />
        <span className="text-pink-500">Easy Return</span>
      </div>
      <div className="border-l-2 h-8 border-pink-300" />
      
      {/* Free Delivery */}
      <div className="flex items-center space-x-2">
        <FaTruck size={20} className="text-pink-500" />
        <span className="text-pink-500">Free Delivery Above 999</span>
      </div>
      <div className="border-l-2 h-8 border-pink-300" />
      
      {/* Secure Payments */}
      <div className="flex items-center space-x-2">
        <FaLock size={20} className="text-pink-500" />
        <span className="text-pink-500">Secure Payments</span>
      </div>
      <div className="border-l-2 h-8 border-pink-300" />
      
      {/* Pick up from 100+ Stores */}
      <div className="flex items-center space-x-2">
        <FaStore size={20} className="text-pink-500" />
        <span className="text-pink-500">Pick up from 100+ Stores</span>
      </div>
    </div>
  );
};

export default FeatureRow;
