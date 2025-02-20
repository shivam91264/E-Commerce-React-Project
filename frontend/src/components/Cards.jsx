import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    { name: "Men", image: "https://via.placeholder.com/300x200?text=Men" , link: "/men"},
    { name: "Women", image: "https://via.placeholder.com/300x200?text=Women" , link: "/women" },
    { name: "Kids", image: "https://via.placeholder.com/300x200?text=Kids" , link: "/kids" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-center text-3xl font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mr-16 ml-16 gap-6">
        {categories.map((category, index) => (
          <Link
            to={category.link}
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
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

export default Categories;
