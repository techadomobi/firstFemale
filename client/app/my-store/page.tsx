"use client";

import React from "react";

const MyStore: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-50">
      {/* Hero Section */}
      <header className="bg-pink-400 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Store!</h1>
          <p className="text-lg font-medium mb-6">
            Explore our premium collection of sportswear and accessories.
          </p>
          <button className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-pink-100 transition">
            Shop Now
          </button>
        </div>
      </header>

      {/* Featured Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-semibold text-pink-800 mb-8 text-center">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category Cards */}
            {["Shoes", "Apparel", "Accessories"].map((category) => (
              <div
                key={category}
                className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
              >
                <img
                  src={`https://via.placeholder.com/400x300?text=${category}`}
                  alt={category}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-pink-800">
                    {category}
                  </h3>
                  <p className="text-gray-600">
                    Discover the latest in {category.toLowerCase()}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-12 bg-pink-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-semibold text-pink-800 mb-8 text-center">
            Trending Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((product) => (
              <div
                key={product}
                className="border rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition duration-300 bg-white"
              >
                <img
                  src={`https://via.placeholder.com/400x300?text=Product+${product}`}
                  alt={`Product ${product}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-pink-800">
                    Product {product}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Lorem ipsum dolor sit amet.
                  </p>
                  <p className="text-pink-600 font-bold">$49.99</p>
                  <button className="mt-2 w-full bg-pink-400 text-white font-semibold py-2 rounded hover:bg-pink-500 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-semibold text-pink-800 mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((testimonial) => (
              <div
                key={testimonial}
                className="bg-pink-50 border rounded-lg shadow-sm p-6"
              >
                <p className="text-gray-600 italic mb-4">
                  "This is the best store for sports enthusiasts. High-quality
                  products and great customer service!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Customer"
                    className="rounded-full w-12 h-12 object-cover mr-4"
                  />
                  <div>
                    <p className="text-pink-800 font-semibold">John Doe</p>
                    <p className="text-gray-600 text-sm">Athlete</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-pink-400 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to elevate your game?
          </h2>
          <p className="text-lg mb-6">
            Join thousands of satisfied customers and shop with us today!
          </p>
          <button className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-pink-100 transition">
            Start Shopping
          </button>
        </div>
      </section>
    </div>
  );
};

export default MyStore;
