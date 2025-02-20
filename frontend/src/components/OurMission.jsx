import React from 'react';

const OurMission = () => {
  return (
    <section 
      className="py-16 bg-gray-50" 
      style={{ backgroundImage: 'none', backgroundColor: '#f9fafb' }}  // Ensure no background image is applied
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 mt-4 ml-28 mr-28">
            We aim to provide exceptional services and create lasting value for our community.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque corrupti minima veniam
            eligendi non veritatis, impedit facere nam modi pariatur saepe perspiciatis porro fugit 
            in quos dicta enim amet quam. Eligendi magni quisquam officiis maiores. Qui totam accusamus 
            animi nisi soluta saepe quibusdam. Odit tempora nesciunt vero tenetur odio laboriosam.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default OurMission;
