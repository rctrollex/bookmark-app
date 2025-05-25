import React from 'react'

const BookmarkCard = ({title, url, category}) => {
    const categoryColors = {
        work: {border: 'border-blue-400', bg: 'bg-blue-100', text: 'text-blue-400'},
        personal:{border: 'border-green-400', bg: 'bg-green-100', text: 'text-green-600'},
        ideas: {border: 'border-purple-400', bg: 'bg-purple-100', text: 'text-purple-600'},
        others: {border: 'border-gray-400', bg: 'bg-gray-100', text: 'text-gray-600'},
    }
    const colors = categoryColors[category] || categoryColors.others;
    return (
        <div className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${colors.border}`}>
            <h4 className="text-gray-900 font-semibold text-2xl block">{title}</h4>
            <a href={url} className="text-blue-600 hover:underline truncate block">{url}</a>
            <p className="text-gray-600 font-medium mb-4">Category: {category}</p>
            <div className="space-x-2 inline text-white">
                <button className="bg-blue-600 py-1 px-4 rounded-lg shadow-md hover:bg-indigo-800 cursor-pointer">Edit</button>
                <button className="bg-red-500 py-1 px-4 rounded-lg shadown-md hover:bg-red-600 cursor-pointer">Delete</button>
            </div>

        </div>
    )
}
export default BookmarkCard
