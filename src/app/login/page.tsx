"use client";

import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from "react-icons/md";
import Image from 'next/image'; // Import the Image component

export default function LoginPage() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            name: "New User",
            email: email,
            password: password,
            joinDate: new Date().toISOString().split('T')[0],
        };
        localStorage.setItem("user", JSON.stringify(userData));
        alert("Account created successfully! Please log in.");
        setIsSignUp(false);
    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("user") || '{}');
        if (storedUser) {
            if (storedUser.email === email && storedUser.password === password) {
                alert("Logged in successfully! Redirecting to dashboard...");
                setTimeout(() => {
                    router.push("/dashboard");
                }, 2000);
            } else {
                alert("Incorrect email or password.");
            }
        } else {
            alert("No account found. Please sign up first.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#f5faff]">
            <Head>
                <title>{isSignUp ? "Create Account" : "Medical Healthcare Login"}</title>
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-6 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full md:w-4/5 lg:w-2/3 max-w-4xl overflow-hidden">
                    {isSignUp ? (
                        <div className="w-full md:w-3/5 p-8">
                            <h2 className="text-3xl font-bold text-[#388087] mb-2">Create Account</h2>
                            <form onSubmit={handleSignUp} className="flex flex-col items-center">
                                <div className="bg-gray-100 w-72 p-3 flex items-center mb-3 rounded-lg">
                                    <FaRegEnvelope className="text-gray-400 m-2" />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="bg-gray-100 outline-none text-sm flex-1"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="bg-gray-100 w-72 p-3 flex items-center mb-3 rounded-lg">
                                    <MdLockOutline className="text-gray-400 m-2" />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="bg-gray-100 outline-none text-sm flex-1"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="bg-[#388087] text-white px-6 py-2 rounded-full mt-4 hover:bg-gray-500 transition duration-200">
                                    Sign Up
                                </button>
                            </form>
                            <p className="mt-6 text-gray-500">
                                Already have an account?
                                <span className="text-[#388087] cursor-pointer" onClick={() => setIsSignUp(false)}> Sign In</span>
                            </p>
                        </div>
                    ) : (
                        <div className="w-full md:w-3/5 p-8">
                            <h2 className="text-3xl font-bold text-[#388087] mb-2">Sign in to Account</h2>
                            <form onSubmit={handleLogin} className="flex flex-col items-center">
                                <div className="bg-gray-100 w-72 p-3 flex items-center mb-3 rounded-lg">
                                    <FaRegEnvelope className="text-gray-400 m-2" />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="bg-gray-100 outline-none text-sm flex-1"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="bg-gray-100 w-72 p-3 flex items-center mb-3 rounded-lg">
                                    <MdLockOutline className="text-gray-400 m-2" />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="bg-gray-100 outline-none text-sm flex-1"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="bg-[#388087] text-white px-6 py-2 rounded-full mt-4 hover:bg-gray-500 transition duration-200">
                                    Sign In
                                </button>
                            </form>
                            <p className="mt-6 text-gray-700">
                                Don&apos;t have an account?
                                <span className="text-[#388087] cursor-pointer" onClick={() => setIsSignUp(true)}> Create Account</span>
                            </p>
                        </div>
                    )}
                    <div className={`hidden md:block w-full md:w-2/5 bg-gradient-to-br bg-[#f5faff] p-8 flex items-center justify-center`}>
                        <Image
                            src="/assets/images/Login_img.png"
                            alt="Login illustration"
                            width={500}
                            height={300}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
