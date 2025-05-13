import React from 'react'

const Navbar = () => {
    return (
      <nav className="bg-white fixed w-full shadow-sm z-10">
          <div className="container mx-auto justify-between items-center py-4 px-4 flex">
              <h1 className="text-2xl sm:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Bookmark Haven</h1>
              <div className="space-x-2 flex-row">
                  <a href="#features" className="text-md text-gray-600 sm:text-sm hover:text-indigo-600 transition">Features</a>
                  <a href="#login" className="text-md text-gray-600 sm:text-sm hover:text-indigo-600 transition">Login</a>
                  <a href="#sign" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Sign Up</a>
              </div>
          </div>
      </nav>
    )
}
export default Navbar
