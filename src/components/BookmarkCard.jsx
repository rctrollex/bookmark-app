import React from 'react'

const BookmarkCard = ({title, url, category}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-gray-900 font-semibold text-2xl block">{title}</h4>
            <a href={url} className="text-blue-600 hover:underline truncate block">{url}</a>
            <p className="text-gray-600 font-medium mb-4">Category: {category}</p>
            <div className="space-x-2 inline">
                <button className="bg-indigo-600 py-1 px-4 rounded-lg shadow-md hover:bg-indigo-800 cursor-pointer">Edit</button>
                <button className="bg-red-500 py-1 px-4 rounded-lg shadown-md hover:bg-red-600 cursor-pointer">Delete</button>
            </div>

        </div>
    )
}
export default BookmarkCard
