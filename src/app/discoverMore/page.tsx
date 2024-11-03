"use client";

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import CTAButton from '../components/CTAButton'; // Adjust the import path if needed

const DiscoverMore = () => {
  return (
    <div className="bg-[#f5faff] min-h-screen flex items-center justify-center p-8">
      <Head>
        <title>Discover More</title>
      </Head>
      
      {/* Container for image and content */}
      <div className="flex flex-col md:flex-row items-center max-w-[1440px] w-full gap-8">
        
        {/* Left Side: Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <Image 
            src="/assets/images/Discover_More.png" // Replace with your actual image path
            alt="Discover More" 
            width={500} // Specify the desired width
            height={300} // Specify the desired height
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
        
        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-black mb-4">Discover More About Us</h1>
          <p className="text-gray-700 max-w-2xl mb-6">
            Welcome to our platform! We are dedicated to providing the best services to meet your needs. 
            Our website offers a variety of features designed to enhance your experience. From user-friendly 
            interfaces to seamless navigation, we ensure that you can access the information you need quickly 
            and efficiently. Whether you are looking for our services, want to contact us, or simply want to 
            learn more about what we offer, we have everything organized for your convenience. Join us as we 
            strive to provide top-notch support and resources that help you achieve your goals.
          </p>

          {/* Call to Action Button */}
          <CTAButton text="Learn More" link="/about" /> {/* Link to your About Us page */}
          
          {/* Services Section */}
          <div className="mt-10">
            <h2 className="text-3xl font-semibold mb-4">Our Services Include:</h2>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Personalized Consultations</li>
              <li>Expert Guidance and Support</li>
              <li>Resourceful Tools and Features</li>
              <li>Dedicated Customer Service</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;
