import React, {useState} from 'react'
import {collection_id, database_id, databases} from "../appwrite/appwriteConfig.js";

const FormInput = () => {
    const [bookmarkTitle, setBookmarkTitle] = useState('');
    const [bookmarkUrl, setBookmarkUrl] = useState('');
    const [category, setCategory] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage]= useState('')

    const saveBookmark = async (e)=>{
        e.preventDefault();
        if(!bookmarkTitle || !bookmarkUrl || !category){
            return setErrorMessage("Please fill all fields.");
        }
        setErrorMessage('');
        setSuccessMessage('');

        try{
         const response = await databases.createDocument(
             database_id,
             collection_id,
             'unique()',
             {
                 name: bookmarkTitle,
                 url: bookmarkUrl,
                 category: category
             }
         )
            setSuccessMessage('Successfully saved bookmark.');
        }catch (e) {
            console.log("Error saving bookmarks... ",e);
            setErrorMessage("Failed to save bookmark. Please try again.");
        }


    }
    return (
        <div className="bg-white container mx-auto p-8 mt-5 text-gray-900 rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Add New Bookmark</h2>
            <div className="py-2">
                <form onSubmit={saveBookmark}>
                    <div className="mb-3">
                        <label htmlFor="title" className="block text-gray-600 mb-3">Name</label>
                        <input
                            type="text"
                            id="title"
                            value={bookmarkTitle}
                            placeholder="Tailwind Documentation"
                            onChange={(e) => setBookmarkTitle(e.target.value)}
                            className="w-full bg-gray-100 p-4 rounded-lg shadow-md border-0 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-300"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="url" className="block text-gray-600 mb-3">URL</label>
                        <input
                            type="url"
                            id="url"
                            placeholder="https://tailwindcss.com/docs"
                            className="w-full bg-gray-100 p-4 rounded-lg shadow-md border-0 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-300"
                            value={bookmarkUrl}
                            onChange={(e)=>setBookmarkUrl(e.target.value)}
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="category" className="block text-gray-600 mb-3">Category</label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e)=>setCategory(e.target.value)}
                            className="w-full bg-gray-100 p-4 rounded-lg shadow-md border-0 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-300"
                        >
                            <option value="work">Work</option>
                            <option value="ideas">Ideas</option>
                            <option value="personal">Personal</option>
                            <option value="learning">Learning</option>
                        </select>
                    </div>
                    <div className="mb-4 flex justify-start space-x-2">
                        <button className="bg-indigo-600 px-5 py-3 rounded-lg shadow-md hover:bg-indigo-800 cursor-pointer text-white inline" type="submit">Save</button>
                        <button className="bg-gray-200 px-5 py-3 rounded-lg shadow-md hover:bg-gray-400 cursor-pointer text-gray-900 inline" id="submit-cancel">Cancel</button>
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
