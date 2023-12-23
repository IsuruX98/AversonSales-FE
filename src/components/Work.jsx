import React, { useRef, useState } from "react";
import work1 from "../asserts/images/work1.png";
import work2 from "../asserts/images/work2.png";
import work3 from "../asserts/images/work3.png";
import work4 from "../asserts/images/work4.png";

const Work = () => {
    const works = [
        { image: work1, text: "Consent Directive for Provincial\n Integrated Client Management System" },
        { image: work2, text: "Cancer Screening Reporting Portal Implementation in SharePoint" },
        { image: work3, text: "Automated Test Equipment for Landing Gear System Production" },
        { image: work4, text: "Automated Test Equipment for\nLanding Gear System Production" },
    ];

    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust the multiplier for smoother scrolling
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust the multiplier for smoother scrolling
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div className="py-6 overflow-hidden relative">
            <div className="flex flex-col justify-center gap-5">
                <div className="lg:p-8 xl:px-40 px-14">
                    <h1 className="text-[16px] mb-4">OUR WORK</h1>
                    <h1 className="text-2xl lg:text-4xl mb-4">
                        vital component of global transportation,<br />
                        connecting people and goods
                    </h1>
                </div>
                <div
                    ref={containerRef}
                    className="flex gap-2 sm:gap-24 p-8 xl:px-40 px-14 cursor-grab relative"
                    style={{
                        flex: "0 0 auto",
                        whiteSpace: "normal", // Allow line breaks
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
                    {works.map((work, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden xl:w-auto w-64 cursor-pointer transition-transform transform"
                            style={{
                                flex: "0 0 auto",
                                minWidth: "100px",
                                marginBottom: "10px", // Add margin between works for smaller screens
                            }}
                        >
                            <img
                                src={work.image}
                                alt={`work-${index}`}
                                style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                                className="rounded-2xl"
                            />
                            <div className="absolute bottom-0 left-0 w-full rounded-2xl h-full bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100 hover:transition-opacity duration-300 ease-in-out">
                                <p
                                    className="text-white absolute bottom-5 left-0 right-0 mx-2 sm:mx-5"
                                    dangerouslySetInnerHTML={{ __html: work.text }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;