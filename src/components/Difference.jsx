import React from "react";
import heroImage from "../asserts/images/difference.png"; // Replace with your image path

const Difference = () => {
    return (
        <div className="flex flex-row px-4 lg:px-8 py-4 lg:pb-20">
            {/* Left div with heading, description, and button */}
            <div className="p-8 xl:px-32 px-10 md:w-1/2 flex flex-col justify-center gap-8">
                <div>
                    <h1 className="text-2xl lg:text-4xl mb-4">
                        The Avero<br/>
                        Difference <span className="font-bold">embedded</span><br/>
                        <span className="font-bold">finance engine</span>
                    </h1>
                </div>
                <div>
                    <p className="text-lg text-black lg:text-xl mb-6">
                        Trusted experts who go the extra mile for customers<br/>
                        to provide turn-key solutions, complete system integration,<br/>
                        and comprehensive support.
                    </p>
                </div>
                <div>
                    <button
                        className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent border-2 border-black text-black hover:bg-[#1A1A1A] hover:text-white transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Right div with centered image */}
            <div className="md:w-1/2 p-8 xl:px-32 px-10 flex flex-row justify-center">
                <img
                    src={heroImage}
                    alt="Your Hero Image"
                    className=""
                />
            </div>
        </div>
    );
};

export default Difference;
