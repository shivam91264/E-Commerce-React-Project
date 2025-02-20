import React, { useContext, useEffect, useRef, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category,subCategory}) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  const scrollContainerRef = useRef(null); // Reference for the scrollable container

  // Update useEffect to correctly handle products
  useEffect(() => {
    if (products.length > 0) {
        let productsCopy = products.slice();
        productsCopy = productsCopy.filter((item)=>category === item.category);
        productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
        setRelated(productsCopy.slice(0,10));
    }
  }, [products]);

  // Scroll to the left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Scroll to the right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="px-4 sm:px-[0vw] md:px-[0vw] lg:px-[0vw] my-5 relative">
      {/* Title Section */}
      <div className="text-left py-3 text-2xl">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>

      {/* Products Row with Horizontal Scroll */}
      <div className="relative">
        {/* Scrollable Row */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-scroll scrollbar-hide flex flex-nowrap gap-6 px-2"
        >
          {related.map((item, index) => (
            <div
              key={index}
              className="min-w-[200px] sm:min-w-[220px] md:min-w-[240px] lg:min-w-[260px]"
            >
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>

        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
        >
          &#8592;
        </button>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default RelatedProducts;
