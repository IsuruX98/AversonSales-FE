import React from 'react';

const BlogCard = ({ blog, index }) => {
    return (
        <div
            key={index}
            className="relative m-5 overflow-hidden w-80 cursor-pointer transition-transform transform hover:scale-105"
            style={{
                flex: '0 0 auto',
                minWidth: '100px',
                marginRight: '20px',
            }}
        >
            <img
                src={blog.photo_url}
                alt={`blog-${index}`}
                style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover' }}
                className="rounded-lg"
            />
            <div className="p-4 bg-white rounded-b-lg">
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-700">{blog.content_text.slice(0, 150)}...</p>
                <button
                    className="mt-4 py-2 px-4 rounded-full flex items-center justify-center gap-2 bg-transparent border-2 border-black text-black hover:bg-[#1A1A1A] hover:text-white transition duration-300"
                >
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default BlogCard;
