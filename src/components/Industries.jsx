import React, { useEffect, useState } from "react";
import img1 from "../asserts/images/img1.png";
import img2 from "../asserts/images/img2.png";
import img3 from "../asserts/images/img3.png";
import img4 from "../asserts/images/img4.png";
import { FiArrowRightCircle } from "react-icons/fi";

const Industries = () => {
    // State to track card hover status
    const [isCardHovered, setIsCardHovered] = useState([false, false, false, false]);

    // Styles for overlay, card, and hover effect
    const overlayStyle =
        "absolute inset-0 bg-black hover:bg-opacity-0 bg-opacity-40 transition duration-300";

    const cardStyle =
        "absolute bottom-0 left-0 right-0 bg-white md:p-5 p-2 opacity-0 transform translate-y-full transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0";

    const hoverStyle = {
        transition: "0.8s ease-in-out",
    };

    // Function to apply hover effect on image
    const imageHoverStyle = (index) => {
        return {
            transform: isCardHovered[index] ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.8s ease-in-out",
        };
    };

    // Event handlers for mouse enter and leave
    const handleMouseEnter = (index) => {
        const newIsCardHovered = [...isCardHovered];
        newIsCardHovered[index] = true;
        setIsCardHovered(newIsCardHovered);
    };

    const handleMouseLeave = (index) => {
        const newIsCardHovered = [...isCardHovered];
        newIsCardHovered[index] = false;
        setIsCardHovered(newIsCardHovered);
    };

    useEffect(() => {
        // to ensure that the state is updated before applying styles
    }, [isCardHovered]);

    return (
        <div className="">
            <div>
                <p className="lg:ml-72 md:px-20 px-10 md:py-20 pt-10 text-black lg:text-2xl font-normal leading-8">
                    Traditional: Avero delivers leading-edge and reliable safety-
                    <br />
                    critical electronics, software systems, expert resources, and
                    <br />
                    business-fortifying solutions.
                </p>
            </div>
            <div className="flex flex-row px-10 md:px-20 mt-10 gap-5 mb-20">
                {/* Nuclear */}
                <div className="text-black md:w-1/2">
                    <hr className="border-t-2 border-gray-500" />
                    <p className="text-[16px] py-7 font-bold">Nuclear</p>
                    <div className="flex gap-3">
                        <div
                            className={`w-1/2 relative overflow-hidden group lg:hover:rounded-3xl hover:rounded-xl`}
                            style={{ ...hoverStyle }}
                            onMouseEnter={() => handleMouseEnter(0)}
                            onMouseLeave={() => handleMouseLeave(0)}
                        >
                            <img
                                src={img1}
                                alt="Nuclear 1"
                                className="transition duration-300"
                                style={imageHoverStyle(0)}
                            />
                            <div className={overlayStyle}></div>
                            <div className={cardStyle} style={{ ...hoverStyle }}>
                                <div className="flex justify-between">
                                    <div>
                                        <p className="md:text-[16px] text-sm">Aerospace & Defence</p>
                                    </div>
                                    <div>
                                        <FiArrowRightCircle size={30} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`w-1/2 relative overflow-hidden group lg:hover:rounded-3xl hover:rounded-xl`}
                            style={{ ...hoverStyle }}
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={() => handleMouseLeave(1)}
                        >
                            <img
                                src={img2}
                                alt="Nuclear 2"
                                className="rounded-b-none transition duration-300"
                                style={imageHoverStyle(1)}
                            />
                            <div className={overlayStyle}></div>
                            <div className={cardStyle} style={{ ...hoverStyle }}>
                                <div className="flex justify-between">
                                    <div>
                                        <p>Digital health</p>
                                    </div>
                                    <div>
                                        <FiArrowRightCircle size={30} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Automotive */}
                <div className="text-black md:w-1/2">
                    <hr className="border-t-2 border-gray-500" />
                    <p className="text-[16px] py-7 font-bold">Automotive</p>
                    <div className="flex gap-3">
                        <div
                            className={`w-1/2 relative overflow-hidden group lg:hover:rounded-3xl hover:rounded-xl`}
                            style={{ ...hoverStyle }}
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={() => handleMouseLeave(2)}
                        >
                            <img
                                src={img3}
                                alt="Automotive 1"
                                className="rounded-b-none transition duration-300"
                                style={imageHoverStyle(2)}
                            />
                            <div className={overlayStyle}></div>
                            <div className={cardStyle} style={{ ...hoverStyle }}>
                                <div className="flex justify-between">
                                    <div>
                                        <p>Rail & Transportation</p>
                                    </div>
                                    <div>
                                        <FiArrowRightCircle size={30} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`w-1/2 relative overflow-hidden group lg:hover:rounded-3xl hover:rounded-xl`}
                            style={{ ...hoverStyle }}
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={() => handleMouseLeave(3)}
                        >
                            <img
                                src={img4}
                                alt="Automotive 2"
                                className="rounded-b-none transition duration-300"
                                style={imageHoverStyle(3)}
                            />
                            <div className={overlayStyle}></div>
                            <div className={cardStyle} style={{ ...hoverStyle }}>
                                <div className="flex justify-between">
                                    <div>
                                        <p>Medical Devices</p>
                                    </div>
                                    <div>
                                        <FiArrowRightCircle size={30} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Industries;
