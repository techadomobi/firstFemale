"use client";

import React from "react";
import ImageSlider from "./ImageSlider";
import Link from "next/link";

const ImageRows = () => {
  return (
    <div className="bg-white">
      {/* Intro Section */}
      <div className="text-center py-12 px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Gallery</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover the latest in fashion, style, and trends with our curated collection of stunning visuals.
          Each image tells a story, bringing elegance and creativity to life.
        </p>
      </div>

      {/* Dynamic Image Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-4 mt-8">
        {/* Larger Images */}
        <div className="col-span-2 row-span-2 relative">
          <Link href="/description/1">
            <img
              src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Image 1"
              className="w-full h-full object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
        <div className="col-span-1 relative">
          <Link href="/description/2">
            <img
              src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?cs=srgb&dl=pexels-kowalievska-1126993.jpg&fm=jpg"
              alt="Image 2"
              className="w-full h-[200px] object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
        <div className="col-span-1 row-span-2 relative">
          <Link href="/description/3">
            <img
              src="https://cdn.pixabay.com/photo/2022/06/21/23/11/asian-7276658_1280.jpg"
              alt="Image 3"
              className="w-full h-full object-cover rounded-3xl shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
        <div className="col-span-1 relative">
          <Link href="/description/4">
            <img
              src="https://media.istockphoto.com/id/1359562499/photo/outdoor-fashion-portrait-of-elegant-woman-wearing-lilac-suit-yellow-sunglasses-holding-trendy.jpg?b=1&s=612x612&w=0&k=20&c=pQNWsCOljjb4kwZehJO-OPyKbyVaL2xeZijALvsZNP4="
              alt="Image 4"
              className="w-full h-[200px] object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
      </div>

      {/* Highlight Section */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-10 px-6 mt-12 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">A Glimpse of Elegance</h2>
        <p className="text-lg max-w-3xl mx-auto">
          From breathtaking landscapes to captivating fashion moments, our gallery celebrates beauty and creativity.
          Dive in and explore the world through our lens.
        </p>
      </div>

      {/* Full-Width Image */}
      <div className="mt-12 px-4">
        <Link href="/description/fullwidth">
          <img
            src="https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg"
            alt="Full Width"
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </Link>
      </div>

      {/* Image Slider Section */}
      <div className="mt-12">
        <ImageSlider />
      </div>

      {/* Asymmetrical Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 px-4">
        <div className="col-span-1 relative">
          <Link href="/description/5">
            <img
              src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Image 5"
              className="w-full h-[250px] object-cover rounded-tl-[50px] rounded-br-[50px] shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
        <div className="col-span-1 relative">
          <Link href="/description/6">
            <img
              src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?cs=srgb&dl=pexels-kowalievska-1126993.jpg&fm=jpg"
              alt="Image 6"
              className="w-full h-[250px] object-cover rounded-tr-[50px] rounded-bl-[50px] shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
        <div className="col-span-2 relative">
          <Link href="/description/7">
            <img
              src="https://cdn.pixabay.com/photo/2022/06/21/23/11/asian-7276658_1280.jpg"
              alt="Image 7"
              className="w-full h-[250px] object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageRows;
