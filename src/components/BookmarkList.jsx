import React, {useEffect, useState} from 'react'
import BookmarkCard from "./BookmarkCard.jsx";
import {account, collection_id, database_id, databases} from "../appwrite/appwriteConfig.js";
import Loader from "./Loader.jsx";
import {Query} from "appwrite";

const BookmarkList = ({refetchTrigger, filterCategory}) => {
    const[error, setError] = useState('');
    const[bookmarks, setBookmarks] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchBookmarks = async () => {
        try{
            setLoading(true);
            const currentUser = await account.get();
            const userId = currentUser.$id;
            const response = await databases.listDocuments(database_id, collection_id,
                [Query.equal('userId', userId)
                ]);
            setBookmarks(response.documents);
            console.log(response)
        }catch (e) {
            console.log("Error to fetch bookmarks: ",e)
            setError("Failed to fetch bookmarks. Please try again.");
        }finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchBookmarks()
    }, [refetchTrigger]);

    if (loading){
        return <Loader/>
    }

    const handleDelete = async (id) => {
        try{
            await databases.deleteDocument(database_id, collection_id, id)
            setBookmarks(prevBookmarks => prevBookmarks.filter(bookmark => bookmark.$id !== id));
        }catch (e) {
            console.log("Error deleting bookmark: ",e)
            setError("Failed to delete Bookmark. Please try again.");
        }

    }

    const filteredBookmarks = filterCategory === 'all'
        ? bookmarks
        : bookmarks.filter(bookmark => bookmark.category === filterCategory);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBookmarks.map((bookmark) => (
                <BookmarkCard
                    key={bookmark.$id}
                    title={bookmark.name}
                    url={bookmark.url}
                    category={bookmark.category}
                    handleDelete={()=>handleDelete(bookmark.$id)}
                />
            ))}
            <div className="mt-4">
                {error && <p className="text-red-500">{error}</p>}
                {bookmarks.length === 0 && <p className="text-gray-500 text-center">No bookmarks found.</p>}
            </div>
        </div>
    )
}
export default BookmarkList
