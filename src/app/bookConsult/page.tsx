"use client"; // Specify this component as a client component

import React, { useState } from 'react';

const BookConsult = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
    });
    const [submitted, setSubmitted] = useState(false); // State to track submission

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true); // Set submitted state to true when form is submitted
        
        // Save the booking to localStorage
        const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
        existingBookings.push(formData);
        localStorage.setItem("bookings", JSON.stringify(existingBookings));

        console.log('Form submitted:', formData); // You can handle further form submission logic here
    };

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center bg-[#f5faff] p-4'>
            <h1 className='text-4xl font-bold mb-4'>Book a Consultation</h1>
            <p className='text-gray-700 text-center max-w-xl mb-8'>
                Welcome to the Booking page! Please fill in the form below to schedule your consultation with our healthcare professionals.
            </p>
            <form onSubmit={handleSubmit} className='w-full max-w-md space-y-4'>
                <div>
                    <label className='block text-lg font-medium' htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='mt-1 p-2 w-full border rounded'
                    />
                </div>
                <div>
                    <label className='block text-lg font-medium' htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='mt-1 p-2 w-full border rounded'
                    />
                </div>
                <div>
                    <label className='block text-lg font-medium' htmlFor='date'>Preferred Date:</label>
                    <input
                        type='date'
                        id='date'
                        name='date'
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className='mt-1 p-2 w-full border rounded'
                    />
                </div>
                <div>
                    <label className='block text-lg font-medium' htmlFor='time'>Preferred Time:</label>
                    <select
                        id='time'
                        name='time'
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className='mt-1 p-2 w-full border rounded'
                    >
                        <option value=''>Select a time</option>
                        <option value='09:00'>09:00 AM</option>
                        <option value='10:00'>10:00 AM</option>
                        <option value='11:00'>11:00 AM</option>
                        <option value='12:00'>12:00 PM</option>
                        <option value='13:00'>01:00 PM</option>
                        <option value='14:00'>02:00 PM</option>
                        <option value='15:00'>03:00 PM</option>
                        <option value='16:00'>04:00 PM</option>
                    </select>
                </div>
                <button
                    type='submit'
                    className='bg-[#388087] text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition duration-300'
                >
                    Confirm Booking
                </button>
            </form>

            {/* Confirmation message */}
            {submitted && (
                <div className='mt-6 text-green-600 font-semibold'>
                    Booking confirmed! Thank you, {formData.name}. We will contact you at {formData.email} for your consultation on {formData.date} at {formData.time}.
                </div>
            )}
        </div>
    );
};

export default BookConsult;
