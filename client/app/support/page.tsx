"use client";

import React, { useState } from "react";
import { NextPage } from "next";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";

const Support: NextPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      console.log("Submitting support request", formData);
      alert("Support request submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting support request:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      {/* Header Section */}
      <header className="bg-pink-400 text-white py-12 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-4">We’re Here to Help</h1>
        <p className="text-lg">
          Have questions or need assistance? Reach out to us anytime!
        </p>
      </header>

      {/* Support Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="md:w-1/3 bg-white shadow-lg rounded-lg p-6 border-l-4 border-pink-400">
            <h2 className="text-xl font-bold text-pink-700 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 flex items-center gap-3 mb-4">
              <IoMailOutline className="text-pink-500 text-2xl" />
              <span>support@example.com</span>
            </p>
            <p className="text-gray-600 flex items-center gap-3">
              <IoCallOutline className="text-pink-500 text-2xl" />
              <span>+1 (234) 567-890</span>
            </p>
          </div>

          {/* Support Form */}
          <form
            onSubmit={handleSubmit}
            className="md:w-2/3 bg-white shadow-lg rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-pink-700 mb-6 text-center">
              Send Us a Message
            </h2>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-pink-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full p-3 border border-pink-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-pink-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full p-3 border border-pink-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-pink-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="How can we assist you?"
                rows={5}
                className="w-full p-3 border border-pink-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full py-3 text-white font-semibold rounded-lg transition ${
                isSubmitting
                  ? "bg-pink-300 cursor-not-allowed"
                  : "bg-pink-500 hover:bg-pink-600"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-pink-400 text-white py-6 text-center shadow-md">
        <p>&copy; 2024 Support Team. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Support;
