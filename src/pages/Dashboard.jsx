import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import FormInput from "../components/FormInput.jsx";
import {account} from "../appwrite/appwriteConfig.js";

const Dashboard = () => {
    const [userName, setUserName] = useState('');
    const[errorMessage, setErrorMessage] = useState('');
    const[successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await account.get();
                console.log(user)
                setUserName(user.name);
            }catch (e) {
                console.error('Error fetching user:', e);
                setErrorMessage('Failed to load user data. Please try logging again')
                setTimeout(()=>{
                    navigate('/login')
                }, 1500);
            }
        };
        fetchUser()
    }, [navigate]);
    const handleLogOut = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
        setIsLoading(true);
        try{
            await account.deleteSession('current')
            setSuccessMessage("Logging Out...");
            setTimeout(() => {
                navigate('/');
            },1500);
        }catch (e) {
            console.error("Log out error...",e)
            setErrorMessage('Failed to log out. Please try again.');
        }finally {
            setIsLoading(false);
        }
    }
    return (
        <>
            <nav className="bg-white shadow-sm fixed w-full z-10">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="sm:text-lg lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Bookmark Haven
                    </h1>
                    <div className="flex space-x-4 items-center">
                        <span className="text-gray-600">Welcome, {userName}</span>
                        <form onSubmit={handleLogOut}>
                            <button
                                id="logout-btn"
                                disabled={isLoading}
                                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg shadow-md hover:from-red-700 hover:to-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
                                {isLoading ? 'Logging Out...' : 'Log Out'}
                            </button>
                        </form>

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
                <div className="text-center mt-4">
                    {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                    {successMessage && <p className="text-green-600">{successMessage}</p>}
                </div>
            </section>


            </>
    )
}
export default Dashboard
