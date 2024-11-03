"use client"; // Specify this component as a client component

import React, { useState } from 'react';
import Image from 'next/image'; // Import the Image component from Next.js

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false); // State to track submission

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Simplified handleSubmit function without email submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="bg-[#388087] min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-white mb-4">Contact Us</h1>
      <p className="text-white text-center max-w-md mb-6">
        We&apos;re here to help! Fill out the form below, and we’ll get back to you as soon as possible.
      </p>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 w-full max-w-5xl">
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full lg:w-1/2 bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button type="submit" className="bg-[#388087] text-white font-bold py-2 px-4 rounded w-full hover:bg-opacity-90 transition duration-200">
            Send Message
          </button>
        </form>

        {/* Image Section using Next.js Image component */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image 
            src="/assets/images/Contact-Us.png" // Ensure this path is correct
            alt="Contact Us" 
            className="rounded-lg shadow-lg w-full max-w-md"
            width={500} // Set appropriate width
            height={500} // Set appropriate height
          />
        </div>
      </div>

      {/* Confirmation message */}
      {submitted && (
        <div className='mt-6 text-green-600 font-semibold'>
          Thank you, {formData.name}! Your message has been submitted successfully.
        </div>
      )}
    </div>
  );
};

export default ContactUs;
