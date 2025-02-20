import React from "react";

const WhyChooseUs = () => {
  const cards = [
    {
      title: "Quality Assurance",
      description:
        "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
    },
    {
      title: "Convenience",
      description:
        "With our user-friendly interface and hassle-free ordering process, shopping has never been easier.",
    },
    {
      title: "Exceptional Customer Service",
      description:
        "Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.",
    },
  ];

  return (
    <section
      className="py-10 px-4 md:px-16 bg-white bg-none"
      style={{
        backgroundImage: "none !important",
        backgroundColor: "#ffffff",
      }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        <span className="text-gray-500">WHY</span>{" "}
        <span className="text-black">CHOOSE US</span>
        <span className="block w-16 h-[2px] bg-black mx-auto mt-2"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white"
          >
            <h3 className="text-lg font-bold text-black mb-4">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
