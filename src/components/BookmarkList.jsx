import React, {useEffect, useState} from 'react'
import BookmarkCard from "./BookmarkCard.jsx";
import {collection_id, database_id, databases} from "../appwrite/appwriteConfig.js";
import Loader from "./Loader.jsx";

const BookmarkList = ({refetchTrigger}) => {
    const[error, setError] = useState('');
    const[bookmarks, setBookmarks] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const fetchBookmarks = async () => {
        try{
            setLoading(true);
            const response = await databases.listDocuments(database_id, collection_id);
            setBookmarks(response.documents);
            console.log(response)
        }catch (e) {
            console.log("Error to fetch bookmarks: ",e)
            setError("Failed to fetch bookmarks. Please try again.");
        }
    }
    useEffect(() => {
        fetchBookmarks()
    }, [refetchTrigger]);

    if (loading){
        <Loader/>
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bookmarks.map((bookmark) => (
                <BookmarkCard
                    key={bookmark.$id}
                    title={bookmark.name}
                    url={bookmark.url}
                    category={bookmark.category}
                />
            ))}
            <div className="mt-4">
                {error && <p className="text-red-500">{error}</p>}
                {bookmarks.length === 0 && <p className="text-gray-500">No bookmarks found.</p>}
            </div>
        </div>
    )
}
export default BookmarkList
