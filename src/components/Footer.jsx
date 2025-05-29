import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-500 p-4">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm sm:text-base text-center md:text-left">
                    &copy; 2025 Bookmark Haven.
                </p>
                <span className="text-indigo-400 text-sm sm:text-base">Created by Ryan Chigwengwe.</span>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://github.com/rctrollex/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
                        <Github size={20} />
                    </a>
                    <a href="https://x.com/rctrollex" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
                        <Twitter size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/ryan-chigwengwe-3b594130a/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
