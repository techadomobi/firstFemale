import React from "react";

const categories: string[] = [
  "New In",
  "Bestsellers",
  "Last Pieces",
  "Unbeatable Prices",
  "Collections",
  "Winter Wear",
  "Black Friday Sale",
  "Dresses",
  "Co-ords & Jumpsuits",
  "Swimwear & Resortwear",
  "Tops",
  "Clothing",
  "Bags and Footwear",
  "Track Order",
  "Place a Return/Exchange Request",
  "Customer Support",
  "Testimonials",
  "Blog",
];

const CategoriesRow: React.FC = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category}
              className="text-center text-pink-500 text-sm font-semibold hover:text-pink-700 transition-colors duration-200"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesRow;
