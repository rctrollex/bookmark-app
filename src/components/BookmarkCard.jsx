import React from 'react';

const BookmarkCard = ({ title, url, category, handleEdit, handleDelete }) => {
    const categoryColors = {
        work: { border: 'border-blue-400', bg: 'bg-blue-100', text: 'text-blue-400' },
        personal: { border: 'border-green-400', bg: 'bg-green-100', text: 'text-green-600' },
        ideas: { border: 'border-purple-400', bg: 'bg-purple-100', text: 'text-purple-600' },
        others: { border: 'border-gray-400', bg: 'bg-gray-100', text: 'text-gray-600' },
    };
    const colors = categoryColors[category] || categoryColors.others;

    return (
        <div
            className={`bg-white rounded-lg shadow-lg p-4 sm:p-6 border-l-4 ${colors.border} w-full max-w-full sm:max-w-md mx-auto`}
        >
            <h4 className="text-gray-900 font-semibold text-lg sm:text-xl truncate">{title}</h4>
            <a
                href={url}
                className="text-blue-600 hover:underline text-sm sm:text-base truncate block mt-1"
                title={url}
            >
                {url}
            </a>
            <p className="text-gray-600 font-medium text-sm sm:text-base mt-2 mb-3">Category: {category}</p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
                <button
                    className="bg-blue-600 text-white py-2 px-4 sm:px-5 rounded-lg shadow-md hover:bg-indigo-800 transition text-sm sm:text-base"
                    onClick={handleEdit}
                >
                    Edit
                </button>
                <button
                    className="bg-red-500 text-white py-2 px-4 sm:px-5 rounded-lg shadow-md hover:bg-red-600 transition text-sm sm:text-base"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default BookmarkCard;