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
            
        </div>
    )
}
export default BookmarkList
