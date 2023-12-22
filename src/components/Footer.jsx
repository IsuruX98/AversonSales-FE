import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-white pt-10">
            <div className="container mx-auto flex flex-col xl:flex-row lg:justify-between px-6 md:px-10 md:py-10 py-5">
                {/* First Column */}
                <div className="w-full xl:w-1/3 mb-8 xl:mb-0 xl:pt-16">
                    <p className="md:text-base">
                        Avero Inc. is a multi-service engineering firm specializing in design, build, testing, certification, and support services for embedded flight systems & software, health technology, and advanced IT.
                    </p>
                </div>

                {/* Second Column */}
                <div className="w-full xl:w-1/3 mb-8 md:mb-0 xl:pl-56">
                    <h2 className="text-xl text-white font-bold mb-4">What we do</h2>
                    <ul className="text-[#B3B3B3] relative">
                        <li className="mb-3">Product development</li>
                        <li className="mb-3">System Integration</li>
                        <li className="mb-3">Test Automation</li>
                        <li className="mb-3">Independent Verification & Validation</li>
                        <li className="mb-3">Application Development</li>
                        <li className="mb-3">Professional Services</li>
                    </ul>
                </div>

                {/* Third Column */}
                <div className="w-full xl:w-1/3 xl:pl-56">
                    <h2 className="text-xl text-white font-bold mb-4">Industries</h2>
                    <ul className="text-[#B3B3B3] relative">
                        <li className="mb-3">Aerospace & Defense</li>
                        <li className="mb-3">Medical Devices</li>
                        <li className="mb-3">Digital Health</li>
                        <li className="mb-3">Rail & Transportation</li>
                    </ul>
                </div>
            </div>

            {/* Additional Content */}
            <div className="container mx-auto flex flex-col xl:flex-row lg:justify-between px-6 md:px-10 md:py-10 pt-5 pb-10">
                {/* First Column */}
                <div className="w-full xl:w-1/3 mb-8">
                    <div className="flex flex-row md:gap-10 gap-3">
                        <div>Terms & Conditions</div>
                        <div>Privacy Policy</div>
                    </div>
                </div>

                {/* Second Column */}
                <div className="w-full xl:w-1/3 mb-8 xl:pl-56">
                    <div className="flex flex-row md:gap-10 gap-3">
                        <div>Culture</div>
                        <div>Careers</div>
                    </div>
                </div>

                {/* Third Column */}
                <div className="w-full xl:w-1/3 xl:pl-56 mb-8 flex xl:gap-10 gap-3">
                    <FaFacebook size={24} className="text-white" />
                    <FaInstagram size={24} className="text-white" />
                    <FaTwitter size={24} className="text-white" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
