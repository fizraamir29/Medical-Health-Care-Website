// src/app/services/page.tsx
import React from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    return (
        <div id="services" className='w-full mx-auto py-8 md:px-20 px-16 max-w-[1440px] bg-[#388087] text-center'>
            <h1 className='text-3xl  text-white md:text-4xl font-bold py-4'>Our Services</h1>
            <div className='w-[10%] h-[2px] mx-auto my-2 bg-black' />
            <p className='text-white py-4 md:max-w-[800px] mx-auto leading-9 tracking-wide'>
                Our services provide high-quality medical healthcare, ensuring compassionate and comprehensive care for all your health needs.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-4'>
                <ServicesCard
                    icon="/assets/images/search-icon.png"
                    title="Search Doctor"
                    desc="Find a specialist doctor in your area and book an appointment easily."
                />
                <ServicesCard
                    icon="/assets/images/online-pharmacy.png"
                    title="Online Pharmacy"
                    desc="Order prescribed medicines and health essentials online with home delivery."
                />
                <ServicesCard
                    icon="/assets/images/Consultation.png"
                    title="Consultation"
                    desc="Order prescribed medicines and health essentials online with home delivery."
                />
                <ServicesCard
                    icon="/assets/images/Detailed_Information.png"
                    title="Detailed Information"
                    desc="Order prescribed medicines and health essentials online with home delivery."
                />
                <ServicesCard
                    icon="/assets/images/Emergency_Care.png"
                    title="Emergency Care"
                    desc="Order prescribed medicines and health essentials online with home delivery."
                />
                <ServicesCard
                    icon="/assets/images/Tracking.png"
                    title="Tracking"
                    desc="Order prescribed medicines and health essentials online with home delivery."
                />
                {/* Add more cards if needed */}
            </div>
        </div>
    );
};

export default Services;
