import React from 'react'

const FormInput = () => {
    return (
        <div className="bg-white container mx-auto p-8 mt-5 text-gray-900 rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Add New Bookmark</h2>
            <div className="py-2">
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="block text-gray-600 mb-3">Name</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Tailwind Documentation"
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
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="category" className="block text-gray-600 mb-3">Category</label>
                        <select
                            id="category"
                            className="w-full bg-gray-100 p-4 rounded-lg shadow-md border-0 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-300"
                        >
                            <option value="work">Work</option>
                            <option value="ideas">Ideas</option>
                            <option value="personal">Personal</option>
                            <option value="learning">Learning</option>
                        </select>
                    </div>
                    <div className="mb-4 flex justify-start space-x-2">
                        <button className="bg-indigo-600 px-5 py-3 rounded-lg shadow-md hover:bg-indigo-800 cursor-pointer text-white inline" id="submit-bookmark">Save</button>
                        <button className="bg-gray-200 px-5 py-3 rounded-lg shadow-md hover:bg-gray-400 cursor-pointer text-gray-900 inline" id="submit-cancel">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default FormInput
