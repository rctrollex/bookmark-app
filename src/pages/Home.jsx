import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";
import addIcon from "../assets/addIcon.svg"
import categorizeLogo from "../assets/categorizeLogo.svg"
import secureLogo from "../assets/secureLogo.svg"
import cloudLogo from "../assets/cloudLogo.svg"


const Home = () => {
    return (
        <div className="relative overflow-hidden">
            <Navbar />


            <section className="pt-24 pb-16 bg-gradient-to-br from-blue-100 to-indigo-200">
                <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">Your Links,
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Securely Organized</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mb-6 sm:mb-6 mx-auto">
                            Bookmark Haven lets you save, categorize,
                            and access your favorite links with secure authentication and cloud storage,
                            powered by Appwrite.
                        </p>

                        <div className="flex justify-center  gap-4">
                            <Link to="/signup" className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-4 rounded-lg text-white shadow-lg inline-block hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-75 text-sm sm:text-base">Get Started</Link>
                            <Link to="/login" className="bg-gray-50 px-6 py-4 rounded-lg shadow-lg inline-block hover:bg-gray-200 text-indigo-600 transform hover:scale-105 transition-all duration-75 text-sm sm:text-base">Login</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="bg-white py-10">
                <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
                    <div className="container mx-auto px-4">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">Powerful Features for Your Bookmarks</h3>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-3">
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg transform hover:translate-y-1 transition-all duration-300">
                                <div className="flex justify-start">
                                    <img src ={addIcon} className="w-12 h-12 mb-4" alt="manage bookmarks icon" />
                                </div>
                                <h4 className="text-gray-900 font-bold text-lg ">Manage Bookmarks</h4>
                                <p className="text-gray-500">Easily add, edit, or delete bookmarks with a clean intuitive interface</p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg transform hover:translate-y-1 transition-all duration-300">
                                <div className="flex justify-start">
                                    <img src={categorizeLogo} className="w-12 h-12 mb-4" alt="Categorization logo"/>
                                </div>
                                <h4 className="text-gray-900 text-lg font-bold">Smart Categorization</h4>
                                <p className="text-gray-500">Organize bookmarks into categories like work or Learning for quick access.</p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg transform hover:translate-y-1 transition-all duration-300">
                                <div className="flex justify-start">
                                    <img src={secureLogo} className="w-12 h-12 mb-4" alt="Secure Authenication Logo"/>
                                </div>
                                <h4 className="text-gray-900 font-bold text-lg">Secure Authentication</h4>
                                <p className="text-gray-500">Log in securely with email/password or OAuth, powered by Appwrite's robust auth system.</p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg transform hover:translate-y-1 transition-all duration-300">
                                <div className="flex justify-start">
                                    <img src={cloudLogo} className="w-12 h-12 mb-4" alt="Cloud Storage Logo"/>
                                </div>
                                <h4 className="text-gray-900 text-lg font-bold">Cloud Storage</h4>
                                <p className="text-gray-500">Store bookmarks securely in the cloud with the Appwrite scalable database.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white" id="#">
                <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
                    <div className="px-4 mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200 mb-4">Start Organizing Your Links Today</h2>
                        <p className="text-gray-200 text-base sm:text-lg mb-6 sm:mb-8">Sign up now to experience a seamless, secure way to manage your bookmarks with Bookmark Haven and Appwrite.</p>

                        <div className="flex justify-center gap-4">
                            <Link to="/signup" className="bg-white text-indigo-600 px-8 py-4 rounded-lg shadow-lg transform  hover:bg-gray-200 hover:scale-105 transition-all duration-75 text-sm sm:text-base">Join Now</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
export default Home
