import React from 'react'
import {Link} from "react-router-dom";
import FormInput from "../components/FormInput.jsx";

const Dashboard = ({name}) => {
    return (
        <>
            <nav className="bg-white shadow-sm fixed w-full z-10">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="sm:text-lg lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Bookmark Haven
                    </h1>
                    <div className="flex space-x-4 items-center">
                        <span className="text-gray-600">Welcome, <span id="user-name">{name}</span></span>
                        <button id="logout-btn"
                                className="bg-red-600 text-white sm:px-1 sm:py-1 md:px-4 py-2 sm:text-sm rounded-lg hover:bg-red-700 transition">
                            Log Out
                        </button>
                    </div>
                </div>
            </nav>

            <section className="container mx-auto  px-4 pt-20 pb-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Your Bookmarks</h2>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <select id="category-filter"
                                className="p-2 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-blue-500">
                            <option value="all">All Categories</option>
                            <option value="Work">Work</option>
                            <option value="Learning">Learning</option>
                            <option value="Personal">Personal</option>
                        </select>
                        <button id="add-bookmark-btn"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                            Add Bookmark
                        </button>
                    </div>
                </div>
                <FormInput/>
            </section>


            </>
    )
}
export default Dashboard
