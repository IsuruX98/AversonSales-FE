import React, {useRef, useState, useEffect} from "react";
import axios from "../apis/axios";

const Blogs = () => {
    // State for storing blog data
    const [blogData, setBlogData] = useState([]);

    // Ref for the container element
    const containerRef = useRef(null);
    // State to track dragging status
    const [isDragging, setIsDragging] = useState(false);
    // State to store initial mouse/touch position
    const [startX, setStartX] = useState(0);
    // State to store initial scroll position
    const [scrollLeft, setScrollLeft] = useState(0);

    // Fetch blog data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30");
                setBlogData(response.data.blogs);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }
        };

        fetchData();
    }, []);

    // Event handlers for mouse events
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Event handlers for touch events
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div className="lg:pb-24 py-6 overflow-hidden relative">
            <div className="flex flex-col justify-center gap-5">
                <div className="lg:p-8 xl:px-28 px-14">
                    <h1 className="text-[16px] mb-4">BLOGS</h1>
                    <h1 className="text-2xl lg:text-4xl mb-4">Insightful Insights</h1>
                </div>
                <div
                    ref={containerRef}
                    className="flex gap-2 sm:gap-6 md:px-8 px-6 xl:px-28 cursor-grab relative overflow-x-auto"
                    style={{
                        flex: "0 0 auto",
                        whiteSpace: "normal",
                        overflowX: "hidden",
                        overflowY: "hidden",
                        userSelect: isDragging ? "none" : "auto",
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {blogData.map((blog, index) => (
                        <div
                            key={index}
                            className="relative m-5 overflow-hidden w-80 cursor-pointer transition-transform transform hover:scale-105"
                            style={{
                                flex: "0 0 auto",
                                minWidth: "100px",
                                marginRight: "20px",
                            }}
                        >
                            <img
                                src={blog.photo_url}
                                alt={`blog-${index}`}
                                style={{width: "100%", height: "auto", maxHeight: "200px", objectFit: "cover"}}
                                className="rounded-lg"
                            />
                            <div className="p-4 bg-white rounded-b-lg">
                                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                                <p className="text-gray-700">{blog.content_text.slice(0, 150)}...</p>
                                <button
                                    className="mt-4 py-2 px-4 rounded-full flex items-center justify-center gap-2 bg-transparent border-2 border-black text-black hover:bg-[#1A1A1A] hover:text-white transition duration-300">Learn
                                    More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
