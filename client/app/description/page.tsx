"use client";

import React from "react";

const DescriptionPage = () => {
  // Sample image data with price
  const images = [
    {
      id: 1,
      title: "Elegant Evening Wear",
      description:
        "A beautiful evening wear outfit designed to make you stand out. Crafted with premium materials for elegance and comfort.",
      imageUrl:
        "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      price: 99.99, // Price added
    },
    {
      id: 2,
      title: "Stylish Handbag",
      description:
        "Trendy and spacious, this handbag complements your everyday style effortlessly.",
      imageUrl:
        "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?cs=srgb&dl=pexels-kowalievska-1126993.jpg&fm=jpg",
      price: 49.99, // Price added
    },
    {
      id: 3,
      title: "Asian-Inspired Fashion",
      description:
        "A blend of traditional and modern Asian fashion to redefine your wardrobe.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2022/06/21/23/11/asian-7276658_1280.jpg",
      price: 79.99, // Price added
    },
    {
      id: 4,
      title: "Outdoor Fashion Portrait",
      description:
        "Capture the essence of elegance with this outdoor fashion portrait, perfect for your sophisticated look.",
      imageUrl:
        "https://media.istockphoto.com/id/1359562499/photo/outdoor-fashion-portrait-of-elegant-woman-wearing-lilac-suit-yellow-sunglasses-holding-trendy.jpg?b=1&s=612x612&w=0&k=20&c=pQNWsCOljjb4kwZehJO-OPyKbyVaL2xeZijALvsZNP4=",
      price: 120.00, // Price added
    },
  ];

  const handleAddToCart = (id) => {
    console.log(`Item with id ${id} added to cart`);
    // Add logic to add the item to the cart (e.g., update state, or make API calls)
  };

  const handleAddToFavourite = (id) => {
    console.log(`Item with id ${id} added to favourites`);
    // Add logic to add the item to the favourites (e.g., update state, or make API calls)
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">Image Descriptions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-60 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">{image.title}</h2>
            <p className="text-gray-600 mt-2">{image.description}</p>
            <div className="mt-4">
              <p className="text-lg font-medium text-gray-800">${image.price}</p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleAddToCart(image.id)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleAddToFavourite(image.id)}
                  className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
                >
                  Add to Favourite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptionPage;
