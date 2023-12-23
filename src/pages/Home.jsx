import React from "react";
import hero from "../asserts/images/bg.png";
import Industries from "../components/Industries";
import Solutions from "../components/Solutions";
import Difference from "../components/Difference";
import Careers from "../components/Careers";
import Work from "../components/Work";
import Blogs from "../components/Blogs";

const Home = () => {
    const gradientStyle = {
        background: "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
    };

    return (
        <div className="flex flex-col">
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

                <div className="absolute md:justify-end justify-center md:text-left text-center md:mb-36 inset-0 flex flex-col px-10 md:px-20 text-white">
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
