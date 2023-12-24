import React, {useRef, useState} from "react";
import work1 from "../asserts/images/work1.png";
import work2 from "../asserts/images/work2.png";
import work3 from "../asserts/images/work3.png";
import work4 from "../asserts/images/work4.png";

const Work = () => {
    // Array of work items with image and text
    const works = [
        {image: work1, text: "Consent Directive for Provincial\n Integrated Client Management System"},
        {image: work2, text: "Cancer Screening Reporting Portal Implementation in SharePoint"},
        {image: work3, text: "Automated Test Equipment for Landing Gear System Production"},
        {image: work4, text: "Automated Test Equipment for\nLanding Gear System Production"},
    ];

    // Ref for the container div
    const containerRef = useRef(null);

    // State to track dragging status and coordinates
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

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
        <div className="py-6 overflow-hidden relative">
            <div className="flex flex-col justify-center gap-5">
                {/* Title and subtitle */}
                <div className="lg:p-8 xl:px-40 px-14">
                    <h1 className="text-[16px] mb-4">OUR WORK</h1>
                    <h1 className="text-2xl lg:text-4xl mb-4">
                        vital component of global transportation,<br/>
                        connecting people and goods
                    </h1>
                </div>

                {/* Container for work items */}
                <div
                    ref={containerRef}
                    className="flex gap-6 sm:gap-20 p-8 xl:px-40 px-14 cursor-grab relative group"
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
                    {/* Individual work items */}
                    {works.map((work, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden xl:w-auto w-64 cursor-pointer transition-transform transform hover:scale-105"
                            style={{
                                flex: "0 0 auto",
                                minWidth: "100px",
                                marginBottom: "10px",
                            }}
                        >
                            {/* Work item image */}
                            <img
                                src={work.image}
                                alt={`work-${index}`}
                                style={{width: "100%", height: "auto", maxWidth: "100%"}}
                                className="rounded-2xl"
                            />

                            {/* Overlay with text */}
                            <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden">
                                <div
                                    className="w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
                                >
                                    <p
                                        className="text-white absolute bottom-5 left-0 right-0 mx-2 sm:mx-5"
                                        dangerouslySetInnerHTML={{__html: work.text}}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
