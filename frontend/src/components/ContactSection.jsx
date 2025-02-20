import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-gray-50  py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">YOU STILL HAVE A QUESTION?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Call Us */}
          <div>
            <h3 className="font-semibold text-xl mb-2">Call Us</h3>
            <p className="text-gray-600">+91 7028570285</p>
          </div>

          {/* Email */}
          <div>
            <h3 className="font-semibold text-xl mb-2">Email</h3>
            <p className="text-gray-600">customercare@clothify.com</p>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold text-xl mb-2">Address</h3>
            <p className="text-gray-600">123, Example Street, New Delhi, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
