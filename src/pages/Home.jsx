import React, { useEffect, useState } from "react";
import hero from "../asserts/images/bg.png";
import Industries from "../components/Industries";
import Solutions from "../components/Solutions";
import Difference from "../components/Difference";
import Careers from "../components/Careers";
import Work from "../components/Work";
import Blogs from "../components/Blogs";

const Home = () => {
    // State for dynamic gradient styling
    const [gradientStyle, setGradientStyle] = useState({
        background: "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 30%)",
    });

    // Effect to handle window resize and adjust gradient style
    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
            // Determine gradient style based on window width
            const newGradientStyle =
                window.innerWidth >= 768
                    ? { background: "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 30%)" }
                    : { background: "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)" };

            // Set the new gradient style
            setGradientStyle(newGradientStyle);
        };

        // Initial call to handleResize
        handleResize();

        // Event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup: Remove event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <div className="flex flex-col">
            {/* Hero section with dynamic background and overlay */}
            <div
                id="home"
                className="h-screen relative mt-[-96px]"
                style={{
                    backgroundImage: `url(${hero})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Dark fade overlay */}
                <div className="absolute inset-0" style={gradientStyle}></div>

                {/* Text content overlay */}
                <div className="absolute md:justify-end justify-center md:text-left text-center md:mb-28 inset-0 flex flex-col px-10 md:px-20 text-white">
                    <h1 className="2xl:text-[30px] lg:text-[20px] md:text-[20px] text-[22px] text-white mb-4 leading-[105%]">
                        Extra Aspirational
                    </h1>
                    <p className="2xl:text-[80px] lg:text-[70px] md:text-[60px] text-[42px] lg:leading-[81.25%] md:leading-[70.25%] ">
                        Avero. Pushing
                    </p>
                    <p className="2xl:text-[80px] lg:text-[70px] md:text-[60px] text-[42px] lg:leading-[81.25%] ">
                        engineering forward.
                    </p>
                </div>
            </div>

            {/* Sections for different components */}
            <div id="industries">
                <Industries />
            </div>
            <div id="solutions">
                <Solutions />
            </div>
            <div id="difference">
                <Difference />
            </div>
            <div id="work">
                <Work />
            </div>
            <div id="blogs">
                <Blogs />
            </div>
            <div id="careers">
                <Careers />
            </div>
        </div>
    );
};

export default Home;
