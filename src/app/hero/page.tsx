import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image'; // Import Image from Next.js for optimization

const Hero = () => {
    return (
        <div className='w-full mx-auto py-8 max-w-[1440px] relative bg-[#f5faff]'>
            <div className='flex flex-col-reverse md:flex-row gap-7 md:justify-around justify-center items-center px-12 text-center md:text-left'>
                <div className='p-4 flex-1'>
                    <h2 className='text-3xl md:text-5xl font-bold py-4'>
                        Virtual Health Care for You
                    </h2>
                    <p className='text-gray-700 py-3 leading-3 tracking-wide max-w-[600px]'>
                        Virtual healthcare at your fingertips—connect with doctors, get advice, and feel<br /><br /> 
                        supported from home.
                    </p>
                    <Link href="/consultToday"> {/* Link to the Consult Today page */}
                        <button className='text-white bg-[#388087] px-4 py-3 rounded-lg mt-10'>
                            Consult Today 
                        </button>
                    </Link>
                </div>
                <div className='w-[300px] md:w-[500px]'>
                    <Image
                        src="/assets/images/Hero_image.png" // Update the image path as needed
                        alt="Hero Image" 
                        width={500} // Specify the width for the image
                        height={300} // Specify the height for the image
                        className='w-full' // Use Tailwind CSS for responsive width
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
