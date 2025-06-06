import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput.jsx';
import { account } from '../appwrite/appwriteConfig.js';
import BookmarkList from '../components/BookmarkList.jsx';

const Dashboard = () => {
    const [userName, setUserName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [filterCategory, setFilterCategory] = useState('all');
    const [refreshTrigger, setRefreshTrigger] = useState(false);
    const [editBookmark, setEditBookmark] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await account.get();
                setUserName(user.name);
            } catch (e) {
                console.error('Error fetching user:', e);
                setErrorMessage('Failed to load user data. Please try logging in again');
                setTimeout(() => {
                    navigate('/login');
                }, 1500);
            }
        };
        fetchUser();
    }, [navigate]);

    const handleLogOut = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
        setIsLoading(true);
        try {
            await account.deleteSession('current');
            setSuccessMessage('Logging Out...');
            setTimeout(() => {
                navigate('/');
            }, 1500);
        } catch (e) {
            console.error('Log out error...', e);
            setErrorMessage('Failed to log out. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const hideOrShowForm = () => {
        setShowForm(!showForm);
        if (showForm) setEditBookmark(null); // Clear editBookmark when closing form
    };

    const handleBookmarkSaved = () => {
        setRefreshTrigger(!refreshTrigger);
        setShowForm(false);
        setEditBookmark(null); // Clear editBookmark after save
    };

    const handleBookmarkUpdated = () => {
        setRefreshTrigger(!refreshTrigger);
        setShowForm(false);
        setEditBookmark(null); // Clear editBookmark after update
    };

    const showFormForEdit = (bookmark) => {
        setEditBookmark(bookmark);
        setShowForm(true);
    };

    return (
        <>
            <nav className="bg-white shadow-sm fixed w-full z-10">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Bookmark Haven
                    </h1>
                    <div className="flex flex-row gap-2 space-x-4 items-center">
                        <form onSubmit={handleLogOut}>
                            <button
                                id="logout-btn"
                                disabled={isLoading}
                                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 sm:px-4 py-2 rounded-lg shadow-md hover:from-red-700 hover:to-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                            >
                                {isLoading ? 'Logging Out...' : 'Log Out'}
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            <section className="container mx-auto px-4 pt-20 pb-16">
                <div className="mb-0 mt-4">
                    <h4 className="text-gray-600 text-sm sm:text-base lg:text-xl ">Welcome, {userName}</h4>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 mt-4">
                    <h2 className="text-2xl sm:text-3xl  font-bold text-gray-900">Your Bookmarks</h2>
                    <div className="flex gap-2 sm:gap-4 mt-3 sm:mt-0">
                        <select
                            id="category-filter"
                            className="p-2 sm:p-3 bg-white rounded-lg border-0 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                            onChange={(e) => setFilterCategory(e.target.value)}
                        >
                            <option value="all">All Categories</option>
                            <option value="work">Work</option>
                            <option value="ideas">Ideas</option>
                            <option value="personal">Personal</option>
                            <option value="learning">Learning</option>
                        </select>
                        <button
                            id="add-bookmark-btn"
                            onClick={hideOrShowForm}
                            className="bg-blue-600 text-white px-3 sm:px-4 py-2 sm:py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer text-sm sm:text-base"
                        >
                            {showForm ? 'Hide Form' : 'Add Bookmark'}
                        </button>
                    </div>
                </div>

                {showForm && (
                    <FormInput
                        hideOrShowForm={hideOrShowForm}
                        onBookmarkSaved={handleBookmarkSaved}
                        onBookmarkUpdated={handleBookmarkUpdated}
                        editingBookmark={editBookmark}
                    />
                )}
                <div className="text-center mt-4">
                    {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                    {successMessage && <p className="text-green-600">{successMessage}</p>}
                </div>

                <div>
                    <BookmarkList
                        filterCategory={filterCategory}
                        refetchTrigger={refreshTrigger}
                        setEditBookmark={showFormForEdit} // Pass callback to open form
                    />
                </div>
            </section>
        </>
    );
};

export default Dashboard;