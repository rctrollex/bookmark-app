import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-500 p-4">
            <div className="container text-center flex-row mx-auto px-4">
                <p className="text-sm">Copyright &copy; 2025 Bookmark Haven. <span className="text-indigo-400">Created by Ryan Chigwengwe.</span></p>
                <div className="space-x-4 justify-center flex mt-4">
                    <a href="#" className="text-sm hover:text-indigo-600 transition">Privacy Policy</a>
                    <a href="#" className="text-sm hover:text-indigo-600 transition">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer
