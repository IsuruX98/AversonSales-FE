import React, { useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";

const IndustryCard = ({ title, imageSrc, content }) => {
    const [isCardHovered, setIsCardHovered] = useState(false);

    const overlayStyle =
        "absolute inset-0 bg-black hover:bg-opacity-0 bg-opacity-40 transition duration-300";

    const cardStyle =
        "absolute bottom-0 left-0 right-0 bg-white md:p-5 p-2 opacity-0 transform translate-y-full transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0";

    const hoverStyle = {
        transition: "0.8s ease-in-out",
    };

    const handleMouseEnter = () => {
        setIsCardHovered(true);
    };

    const handleMouseLeave = () => {
        setIsCardHovered(false);
    };

    return (
        <div className="w-1/2 relative overflow-hidden group lg:hover:rounded-3xl hover:rounded-xl" style={{ ...hoverStyle }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={imageSrc} alt={title} className="rounded-b-none transition duration-300" style={{ transform: isCardHovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.8s ease-in-out" }} />
            <div className={overlayStyle}></div>
            <div className={cardStyle} style={{ ...hoverStyle }}>
                <div className="flex justify-between">
                    <div>
                        <p className="md:text-[16px] text-sm">{content}</p>
                    </div>
                    <div>
                        <FiArrowRightCircle size={30} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustryCard;
