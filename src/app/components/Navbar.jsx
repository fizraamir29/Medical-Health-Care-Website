"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="w-full mx-auto px-10 md:px-12 py-4 max-w-[1440px] bg-[#388087] rounded-lg shadow-md">
            {/* Desktop Navbar */}
            <div className="hidden md:flex justify-between items-center gap-8">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/assets/images/logo.png"
                        alt="Logo"
                        width={70}
                        height={70}
                        className="rounded-full"
                        style={{ maxWidth: '100%', height: 'auto' }} // Ensure the image is responsive
                    />
                    <p className="font-bold text-white p-2 text-lg md:text-base">Medical Health Care</p>
                </div>

                {/* Navigation Links */}
                <ul className="flex gap-4">
                    <li className="mr-5 text-white hover:text-black hover:border-b-black hover:font-bold duration-100">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="mr-5 text-white hover:text-black hover:border-b-black hover:font-bold duration-100">
                        <Link href="/services">Services</Link>
                    </li>
                    <li className="mr-5 text-white hover:text-black hover:border-b-black hover:font-bold duration-100">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="mr-5 text-white hover:text-black hover:border-b-black hover:font-bold duration-100">
                        <Link href="/contact">Contact Us</Link>
                    </li>
                    <li className="mr-5 text-white hover:text-black hover:border-b-black hover:font-bold duration-100 flex items-center">
                        <FaUser className="mr-1" />
                        <Link href="/login">Login</Link>
                    </li>
                </ul>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden flex justify-between items-center">
                <div className="flex items-center">
                    <Image
                        src="/assets/images/logo.png" // Ensure correct path is used here
                        alt="Logo"
                        width={40}
                        height={40}
                        className="rounded-full object-cover" // Added object-cover to maintain aspect ratio
                    />
                    <p className="font-bold text-white p-2">Medical Health Care</p>
                </div>
                <div onClick={handleNav} className="cursor-pointer">
                    {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={nav ? "bg-[#388087] w-[70%] h-[100vh] fixed top-0 left-0 z-10 p-6 overflow-y-auto" : "hidden"}>
                <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                        <Image
                            src="/assets/images/logo.png" // Ensure correct path is used here
                            alt="Logo"
                            width={40}
                            height={40}
                            className="rounded-full object-cover" // Added object-cover to maintain aspect ratio
                        />
                        <p className="font-bold text-white p-2">Medical Health Care</p>
                    </div>
                    <ul className="flex flex-col gap-4 text-white">
                        <li>
                            <Link href="/" onClick={() => setNav(false)}>Home</Link>
                        </li>
                        <li>
                            <Link href="/services" onClick={() => setNav(false)}>Services</Link>
                        </li>
                        <li>
                            <Link href="/about" onClick={() => setNav(false)}>About</Link>
                        </li>
                        <li>
                            <Link href="/contact" onClick={() => setNav(false)}>Contact Us</Link>
                        </li>
                        <li className="flex items-center">
                            <FaUser className="mr-1" />
                            <Link href="/login" onClick={() => setNav(false)}>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
