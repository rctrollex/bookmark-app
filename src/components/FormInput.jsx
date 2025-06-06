import React, {useEffect, useState} from 'react'
import {account, collection_id, database_id, databases, ID, Permission, Role} from "../appwrite/appwriteConfig.js";
import BookmarkList from "./BookmarkList.jsx";

const FormInput = ({hideOrShowForm, onBookmarkSaved, onBookmarkUpdated, editingBookmark}) => {
    const [bookmarkTitle, setBookmarkTitle] = useState('');
    const [bookmarkUrl, setBookmarkUrl] = useState('');
    const [category, setCategory] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage]= useState('')

    useEffect(() => {
        if(editingBookmark){
            setBookmarkTitle(editingBookmark.name);
            setBookmarkUrl(editingBookmark.url);
            setCategory(editingBookmark.category);
        }else{
            setBookmarkTitle('');
            setBookmarkUrl('');
            setCategory('');
        }
    }, [editingBookmark]);
    const saveBookmark = async (e)=>{
        e.preventDefault();
        if(!bookmarkTitle || !bookmarkUrl || !category){
            return setErrorMessage("Please fill all fields.");
        }
        setErrorMessage('');
        setSuccessMessage('');

        try{
            if (editingBookmark){
                //Update bookmark
                const currentUser = await account.get();
                const userId = currentUser.$id;
                const updatedBookmark = await databases.updateDocument(
                    database_id,
                    collection_id,
                    editingBookmark.$id,
                    {
                        name: bookmarkTitle,
                        url: bookmarkUrl,
                        category: category,
                        userId: userId,
                    },
                )
                onBookmarkUpdated(updatedBookmark);
                console.log('Bookmark Updated ', updatedBookmark)
            }else{
                //Current user logged in
                const currentUser = await account.get();
                const userId = currentUser.$id;
                //Appwrite permissions
                const permissions = [
                    Permission.read(Role.user(userId)),
                    Permission.write(Role.user(userId)),
                    Permission.update(Role.user(userId)),
                    Permission.delete(Role.user(userId))
                ]

                //Save bookmark
                const response = await databases.createDocument(
                    database_id,
                    collection_id,
                    ID.unique(),
                    {
                        name: bookmarkTitle,
                        url: bookmarkUrl,
                        category: category,
                        userId: userId,
                    },
                    permissions
                )
                console.log(response)
                setSuccessMessage('Successfully saved bookmark.');
                onBookmarkSaved();
                setBookmarkUrl('');
                setBookmarkTitle('');
                setCategory('');
                hideOrShowForm();
            }
        }catch (e) {
            console.log("Error saving bookmarks... ",e);
            setErrorMessage("Failed to save bookmark. Please try again.");
        }


    }
    return (
        <div className="bg-white container mx-auto p-8 mt-5 text-gray-900 rounded-xl shadow-xl">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Add New Bookmark</h2>
            <div className="py-2">
                <form onSubmit={saveBookmark}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-600 mb-3 text-sm sm:text-base">Name</label>
                        <input
                            type="text"
                            id="title"
                            value={bookmarkTitle}
                            placeholder="Tailwind Documentation"
                            onChange={(e) => setBookmarkTitle(e.target.value)}
                            className="w-full bg-gray-100 p-3 sm:p-4 rounded-lg shadow-md border-0 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-300"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="url" className="block text-gray-600 mb-3 text-sm sm:text-base">URL</label>
                        <input
                            type="url"
                            id="url"
                            placeholder="https://tailwindcss.com/docs"
                            className="w-full bg-gray-100 p-3 sm:p-4 rounded-lg shadow-md border-0 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-300"
                            value={bookmarkUrl}
                            onChange={(e)=>setBookmarkUrl(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="category" className="block text-gray-600 mb-2 text-sm sm:text-base">Category</label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e)=>setCategory(e.target.value)}
                            className="w-full bg-gray-100 p-3 sm:p-4 rounded-lg shadow-md border-0 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-300"
                        >
                            <option value="">Select a category</option>
                            <option value="work">Work</option>
                            <option value="ideas">Ideas</option>
                            <option value="personal">Personal</option>
                            <option value="learning">Learning</option>
                        </select>
                    </div>
                    <div className="mb-4 flex justify-start gap-2 sm:gap-3">
                        <button className="bg-indigo-600 px-4 sm:px-5 py-2 sm:py-3 rounded-lg shadow-md hover:bg-indigo-800 cursor-pointer text-white inline text-sm sm:text-base" type="submit">Save</button>
                        <button className="bg-gray-200 px-4 sm:px-5 py-2 sm:py-3 rounded-lg shadow-md hover:bg-gray-400 cursor-pointer text-gray-900 inline text-sm sm:text-base" type = "button" onClick={hideOrShowForm}>Cancel</button>
                    </div>
                    <div className="mt-4">
                        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                        {successMessage && <p className="text-green-600">{successMessage}</p>}
                    </div>

                </form>
            </div>
        </div>
    )
}
export default FormInput
