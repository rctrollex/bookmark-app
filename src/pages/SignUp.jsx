import React from 'react'
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className="bg-gradient-to-r from-blue-200 to-indigo-200 min-h-screen flex items-center justify-center ">
            <div className="container mx-auto px-4 max-w-md">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-3xl text-gray-900 font-bold text-center mb-6">Join <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Bookmark Haven</span></h2>
                    <div className="space-y-4">
                        <form>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full p-4 mt-2 rounded-lg shadow-md border-0 focus:ring-2 focus:ring-indigo-600 focus:outline-none bg-gray-100 transition-all duration-300 mb-4"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full p-4 bg-gray-100 rounded-lg shadow-md border-0 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-300 mb-4"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="•••••••"
                                    className="w-full p-3 mt-1 rounded-lg border-0 shadow-md focus:ring-2 focus:outline-none focus:ring-indigo-600 bg-gray-100 transition-all duration-300s mb-4"
                                />
                            </div>
                            <button type="submit" className="w-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 p-3 mt-1 rounded-lg shadow-lg cursor-pointer hover:from-blue-800 hover:to-indigo-800 mb-4">Sign Up</button>
                            <div className="text-center">
                                <p className="text-gray-600">Don't have an account? <Link to="/login" className="text-indigo-600">Log In</Link></p>
                                <p className="text-indigo-600"><Link to="/">Back to Home</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp
