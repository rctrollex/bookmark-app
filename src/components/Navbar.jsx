import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white fixed w-full shadow-sm z-10">
            <div className="container mx-auto justify-between items-center flex py-4 max-w-7xl px-4 sm:px-6 lg:px-8 text-white text-base md:text-md">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Bookmark Haven</h1>
                <div className="space-x-2 flex-row">
                    <a href="#features" className="text-sm text-gray-600 sm:text-base hover:text-indigo-600 transition">Features</a>
                    <Link to="/login" className="text-sm text-gray-600 sm:text-base hover:text-indigo-600 transition">Login</Link>
                    <Link to="/signup" className="bg-indigo-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm sm:text-base">Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
