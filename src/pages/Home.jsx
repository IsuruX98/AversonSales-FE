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

                <div className="absolute inset-0 flex flex-col px-32 text-white pt-[400px]">
                    <h1 className="lg:text-[20px] text-4xl text-white mb-4 leading-[105%]">
                        Extra Aspirational
                    </h1>
                    <p className="lg:text-[70px] leading-[81.25%]">
                        Avero. Pushing
                    </p>
                    <p className="lg:text-[70px] leading-[81.25%]">
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
