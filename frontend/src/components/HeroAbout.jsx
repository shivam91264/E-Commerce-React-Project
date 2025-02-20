import React from "react";

const HeroAbout = () => {
  return (
    <section
      id="about"
      className="relative h-[40vh] bg-fixed bg-center bg-cover text-white flex items-center justify-center text-center"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative p-6">
        <h1 className="text-4xl md:text-6xl font-bold">About us</h1>
        <p className="mt-4 text-lg">
          We are a global family of brands and businesses. We make it possible
          for customers around
        </p>
        <p>
          the world to express themselves through fashion and design in a
          sustainable way.
        </p>
      </div>

      <style jsx>{`
        section {
          background-image: url("https://unsplash.com/photos/clothes-store-interior-P3pI6xzovu0");
        }
      `}</style>
    </section>
  );
};

export default HeroAbout;
