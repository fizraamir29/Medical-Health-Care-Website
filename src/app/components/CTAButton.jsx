// src/app/components/CTAButton.tsx
import React from 'react';
import Link from 'next/link';

const CTAButton = ({ text, link }) => {
  return (
    <div className='py-5'>
      <Link href={link}> {/* This should receive a valid `link` prop */}
        <button className='text-white bg-[#388087] mt-10 rounded-2xl font-bold hover:bg-white hover:text-primary hover:border-black duration-300 px-7 py-4'>
          {text}
        </button>
      </Link>
    </div>
  );
};

export default CTAButton;
