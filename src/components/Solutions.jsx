import React, { useState } from "react";
import sol1 from "../asserts/images/sol1.png";
import sol2 from "../asserts/images/sol2.png";
import sol3 from "../asserts/images/sol3.png";
import sol4 from "../asserts/images/sol4.png";
import sol5 from "../asserts/images/sol5.png";
import sol6 from "../asserts/images/sol6.png";

const Solutions = () => {
    const [hoveredItem, setHoveredItem] = useState("sol1");

    const handleMouseEnter = (item) => {
        setHoveredItem(item);
    };

    return (
        <div className="flex flex-col lg:flex-row px-4 lg:px-8 py-4 lg:pb-20">
            {/* First div with heading and list */}
            <div className="w-full lg:w-1/2 xl:px-32 px-10">
                <h1 className="text-2xl lg:text-4xl mb-4">
                    Lorem ipsum
                    <br />
                    <span className="font-bold">connecter</span> Auctor
                </h1>

                <div className="text-xl xl:text-2xl mt-4 lg:mt-16 flex flex-col gap-4 lg:gap-8">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className={`flex flex-row text-[#808080] hover:text-black hover:border-black justify-between border-b border-gray-300 pb-2 lg:pb-9`}
                            onMouseEnter={() => handleMouseEnter(`sol${index + 1}`)}
                        >
                            <div>0{index + 1}</div>
                            <div>{itemLabels[index]}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Second div with image and description */}
            <div className="w-full lg:w-1/2 lg:pl-4 xl:px-32 px-10 xl:pt-20 pt-10">
                <img
                    src={images[hoveredItem]}
                    alt="Your Image"
                    className="mb-4 lg:mb-0 lg:max-w-full lg:h-auto transition duration-300 ease-in-out transform hover:scale-105"
                />
                <p className="text-[#4D4D4D] xl:pt-16 py-5 xl:text-xl">
                    Access to the right engineering staff and embedded control
                    <br /> systems expertise to design and integrate your product
                    <br /> correctly, the first time.
                </p>
            </div>
        </div>
    );
};

const images = { sol1, sol2, sol3, sol4, sol5, sol6 };
const itemLabels = [
    "Embedded Systems Development",
    "System Integration",
    "Test Automation",
    "Professional Services",
    "Application Development",
    "Verification and Validation",
];

export default Solutions;
