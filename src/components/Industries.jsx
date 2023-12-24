import React from "react";
import IndustryCard from "./IndustryCard";
import img1 from "../asserts/images/img1.png";
import img2 from "../asserts/images/img2.png";
import img3 from "../asserts/images/img3.png";
import img4 from "../asserts/images/img4.png";

const Industries = () => {
    return (
        <div className="">
            <div>
                <p className="lg:ml-72 md:px-20 px-10 md:py-20 pt-10 text-black lg:text-2xl font-normal leading-8">
                    Traditional: Avero delivers leading-edge and reliable safety- <br />
                    critical electronics, software systems, expert resources, and <br />
                    business-fortifying solutions.
                </p>
            </div>
            <div className="flex flex-row px-10 md:px-20 mt-10 gap-5 mb-20">
                {/* Nuclear */}
                <div className="text-black md:w-1/2">
                    <hr className="border-t-2 border-gray-500" />
                    <p className="text-[16px] py-7 font-bold">Nuclear</p>
                    <div className="flex gap-3">
                        <IndustryCard title="Aerospace & Defence" imageSrc={img1} content="Aerospace & Defence" />
                        <IndustryCard title="Digital health" imageSrc={img2} content="Digital health" />
                    </div>
                </div>
                {/* Automotive */}
                <div className="text-black md:w-1/2">
                    <hr className="border-t-2 border-gray-500" />
                    <p className="text-[16px] py-7 font-bold">Automotive</p>
                    <div className="flex gap-3">
                        <IndustryCard title="Rail & Transportation" imageSrc={img3} content="Rail & Transportation" />
                        <IndustryCard title="Medical Devices" imageSrc={img4} content="Medical Devices" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Industries;
