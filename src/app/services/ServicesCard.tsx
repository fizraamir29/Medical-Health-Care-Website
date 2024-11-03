// src/app/services/ServicesCard.tsx
import React from 'react';
import Image from 'next/image';

interface ServicesCardProps {
    icon: string;
    title: string;
    desc: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ icon, title, desc }) => {
    return (
        <div className='py-5 px-7 bg-white rounded-lg shadow-md text-start md:max-w-[370px] mx-auto'>
            <div className='py-5'>
                <Image src={icon} alt={title} width={64} height={64} />
            </div>
            <h3 className='font-bold text-xl md:text-2xl py-2'>{title}</h3>
            <p className='text-gray-700 tracking-wide py-2'>{desc}</p>
        </div>
    );
};

export default ServicesCard;
