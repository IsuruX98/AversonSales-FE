import React from "react";
import hero from "../asserts/images/bg.png";
import Industries from "../components/Industries";

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

                <div className="absolute justify-end mb-36 inset-0 flex flex-col px-10 md:px-20 text-white">
                    <h1 className="2xl:text-[30px] lg:text-[20px] md:text-[20px] text-[15px] text-white mb-4 leading-[105%]">
                        Extra Aspirational
                    </h1>
                    <p className="2xl:text-[80px] lg:text-[70px] md:text-[60px] text-[33px] lg:leading-[81.25%] md:leading-[70.25%] ">
                        Avero. Pushing
                    </p>
                    <p className="2xl:text-[80px] lg:text-[70px] md:text-[60px] text-[33px] lg:leading-[81.25%] ">
                        engineering forward.
                    </p>
                </div>
            </div>

            <div id="industries">
                <Industries />
            </div>

        </div>
    );
};

export default Home;
