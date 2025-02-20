import React from "react";
import { Link } from "react-router-dom";

const KidsCards = () => {
  const categories = [
    { name: "Baby Girls", image: "https://via.placeholder.com/300x200?text=Baby Girls", link: "/all-products" },
    { name: "Baby Boys", image: "https://via.placeholder.com/300x200?text=Baby Boys", link: "/all-products" },
    { name: "Shirts & Paints", image: "https://via.placeholder.com/300x200?text=Shirts & Paints", link: "/all-products" },
    { name: "Frocks", image: "https://via.placeholder.com/300x200?text=Frocks", link: "/all-products" },
    { name: "Nightwear", image: "https://via.placeholder.com/300x200?text=Nightwear", link: "/all-products" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-center text-3xl font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 mr-16 ml-16 gap-6">
        {categories.map((category, index) => (
          <Link
            to={category.link}
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              to={category.link}
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-2xl font-bold">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default KidsCards;