"use client"; // Ensures the component works as a client component

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


// Define interfaces for User and Booking
interface User {
  name: string;
  email: string;
  joinDate: string; // Adjust the type as necessary
}

interface Booking {
  name: string;
  email: string;
  date: string; // Adjust the type as necessary
  time: string; // Adjust the type as necessary
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    // Retrieve user data from localStorage on component mount
    const userData = JSON.parse(localStorage.getItem("user") || "{}") as User;
    if (userData && userData.name) {
      setUser(userData);
      
      // Fetch booking data from localStorage
      const userBookings = JSON.parse(localStorage.getItem("bookings") || "[]") as Booking[];
      setBookings(userBookings);
    } else {
      // Redirect to login if no user is found in localStorage
      router.push("/login");
    }
  }, [router]);

  // If user data isn't available, show loading text
  if (!user) return <p>Loading...</p>;

  return (
    <div className="flex min-h-screen bg-white">
      <aside className="w-1/4 bg-white shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Join Date:</strong> {user.joinDate}</p>
        <button className="mt-4 bg-[#388087] text-white px-4 py-2 rounded">Edit Profile</button>
      </aside>
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-[#388087] mb-4">Welcome to Your Dashboard</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Your Bookings</h2>
          {bookings.length > 0 ? (
            <ul className="list-disc ml-5">
              {bookings.map((booking, index) => (
                <li key={index} className="mb-2">
                  <strong>Name:</strong> {booking.name} - <strong>Email:</strong> {booking.email} - <strong>Date:</strong> {booking.date} at <strong>{booking.time}</strong>
                </li>
              ))}
            </ul>
          ) : (
            <p>No bookings found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
