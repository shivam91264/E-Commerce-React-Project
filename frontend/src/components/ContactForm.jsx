import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center  bg-gray-100 px-4">
      <form className="w-full max-w-lg  rounded px-8 pt-6 pb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Contact Us
        </h2>

        {/* Full Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Enter your message"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          ></textarea>
        </div>

        {/* Send Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
