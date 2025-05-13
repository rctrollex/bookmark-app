import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
        <dv className="relative overflow-hidden">
            <Navbar />
            <section className="pt-24 pb-16 bg-gradient-to-br from-blue-100 to-indigo-200">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-6xl sm:text-2xl font-bold mb-4 text-gray-900 leading-tight">Your Links,
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Securely Organized</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 mx-auto">
                        Bookmark Haven lets you save, categorize,
                        and access your favorite links with secure authentication and cloud storage,
                        powered by Appwrite.
                    </p>

                    <div className="flex justify-center  gap-4">
                        <a href="#signUp" className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-4 rounded-lg text-white shadow-lg inline-block hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-75">Get Started</a>
                        <a href="login" className="bg-gray-50 px-8 py-4 rounded-lg shadow-lg inline-block hover:bg-gray-200 text-indigo-600 transform hover:scale-105 transition-all duration-75">Login</a>

                    </div>
                </div>

            </section>
            <Footer />
        </dv>
    )
}
export default Home
