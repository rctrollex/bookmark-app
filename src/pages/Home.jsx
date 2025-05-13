import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
        <div className="relative overflow-hidden">
            <Navbar />
            <section className="pt-24 pb-16 bg-gradient-to-br from-blue-100 to-indigo-200">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-6xl sm:text-4xl font-bold mb-4 text-gray-900 leading-tight">Your Links,
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

            <section id="features" className="bg-white py-10">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Powerful Features for Your Bookmarks</h3>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-3">
                        <div className="bg-gray-50 p-6 rounded-2xl shadow-lg transform hover:translate-y-1 transition-all duration-300">
                            <div className="flex justify-start">
                                <img src ="/src/assets/addIcon.svg" className="w-12 h-12 mb-4" alt="manage bookmarks icon" />
                            </div>
                            <h4 className="text-gray-900 font-bold text-lg ">Manage Bookmarks</h4>
                            <p className="text-gray-500">Easily add, edit, or delete bookmarks with a clean intuitive interface</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl shadow-lg transform hover:translate-y-1 transition-all duration-300">
                            <div className="flex justify-start">
                                <img src="/src/assets/categorizeLogo.svg" className="w-12 h-12 mb-4" alt="Categorization logo"/>
                            </div>
                            <h4 className="text-gray-900 text-lg font-bold">Smart Categorization</h4>
                            <p className="text-gray-500">Organize bookmarks into categories like work or Learning for quick access.</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl shadow-lg transform hover:translate-y-1 transition-all duration-300">
                            <div className="flex justify-start">
                                <img src="/src/assets/secureLogo.svg" className="w-12 h-12 mb-4" alt="Secure Authenication Logo"/>
                            </div>
                            <h4 className="text-gray-900 font-bold text-lg">Secure Authentication</h4>
                            <p className="text-gray-500">Log in securely with email/password or OAuth, powered by Appwrite's robust auth system.</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl shadow-lg transform hover:translate-y-1 transition-all duration-300">
                            <div className="flex justify-start">
                                <img src="/src/assets/cloudLogo.svg" className="w-12 h-12 mb-4" alt="Cloud Storage Logo"/>
                            </div>
                            <h4 className="text-gray-900 text-lg font-bold">Cloud Storage</h4>
                            <p className="text-gray-500">Store bookmarks securely in the cloud with the Appwrite scalable database.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home
