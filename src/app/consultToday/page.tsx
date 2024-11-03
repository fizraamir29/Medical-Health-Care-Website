// import React from 'react';

// const ConsultToday = () => {
//     return (
//         <div className='w-full h-screen flex flex-col items-center justify-center bg-[#f5faff]'>
//             <h1 className='text-4xl font-bold mb-4'>Consult Today</h1>
//             <p className='text-gray-700 text-center max-w-xl mb-8'>
//                 Welcome to our Consult Today page! Here, you can connect with healthcare professionals for your medical needs. 
//                 Our virtual healthcare services are designed to provide you with support from the comfort of your home.
//             </p>
//             <button className='bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition duration-300'>
//                 Book a Consultation
//             </button>
//         </div>
//     );
// };

// export default ConsultToday;

import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const ConsultToday = () => {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center bg-[#f5faff]'>
            <h1 className='text-4xl font-bold mb-4'>Consult Today</h1>
            <p className='text-gray-700 text-center max-w-xl mb-8'>
                Welcome to our Consult Today page! Here, you can connect with healthcare professionals for your medical needs. 
                Our virtual healthcare services are designed to provide you with support from the comfort of your home.
            </p>
            <Link href="/bookConsult"> {/* Link to the Book Consultation page */}
                <button className='bg-[#388087] text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition duration-300'>
                    Book a Consultation
                </button>
            </Link>
        </div>
    );
};

export default ConsultToday;
