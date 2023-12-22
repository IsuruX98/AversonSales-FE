import React, {useEffect, useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {Link} from "react-scroll";

const Navbar = () => {
    const [isAtTop, setIsAtTop] = useState(true);
    const [visible, setVisible] = useState(true);
    const [nav, setNav] = useState(false);

    useEffect(() => {
        let prevScrollPosition = window.pageYOffset;

        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            if (currentPosition === 0) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }

            // Determine scroll direction
            if (currentPosition > prevScrollPosition) {
                // Scrolling down
                setVisible(true);
                setNav(false);
            } else if (currentPosition < prevScrollPosition) {
                // Scrolling up
                setVisible(false);
                setNav(false);
            }

            // Update previous scroll position
            prevScrollPosition = currentPosition;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <nav
            className={`flex justify-between w-full py-4 lg:px-20 px-12 sticky top-0 z-[999] ${
                isAtTop || visible
                    ? "top-[-100%] bg-transparent transition ease-in-out duration-500"
                    : "bg-[#F8F3ED] transition ease-in-out duration-500"
            }`}
        >

            <div className="cursor-pointer lg:hidden">
                {isAtTop ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"
                         fill="none">
                        <g clip-path="url(#clip0_762_142)">
                            <path
                                d="M28.0957 41.3722L32.0472 43.7513L35.9476 41.3455L32.0481 39.2935L28.0957 41.3722Z"
                                fill="white"/>
                            <path
                                d="M26.977 40.6974L27.7524 36.171L19.0685 29.3135L17.6738 35.0931L26.977 40.6974Z"
                                fill="white"/>
                            <path
                                d="M26.3418 24.0833L25.3034 27.1947L19.8843 28.5624L24.2061 31.8715L29.3872 31.1167L32.0468 25.7379L34.7054 31.1183L39.8873 31.8715L44.2063 28.5624L38.7864 27.1948C38.7864 27.1948 35.0995 15.6516 33.1971 15.6516C30.9076 15.6516 29.3938 15.6516 28.0101 15.6516C25.9232 15.6516 26.4979 18.1359 23.3863 18.1359C20.2757 18.1359 19.7129 21.875 19.7129 21.875C19.7129 21.875 20.8808 21.875 23.8611 21.875C26.8453 21.8749 26.3418 24.0833 26.3418 24.0833ZM27.8577 17.5103C28.2294 17.5103 28.5286 17.8095 28.5286 18.1793C28.5286 18.5487 28.2294 18.8497 27.8577 18.8497C27.4884 18.8497 27.1882 18.5487 27.1882 18.1793C27.1882 17.8096 27.4902 17.5103 27.8577 17.5103Z"
                                fill="white"/>
                            <path
                                d="M37.1071 40.6286L46.4216 34.8807L45.0308 29.3115L36.3438 36.171L37.1071 40.6286Z"
                                fill="white"/>
                            <path
                                d="M45.9648 28.7117L47.288 34.3557H57.6062C61.8393 34.3557 63.9999 28.7117 63.9999 28.7117H45.9648Z"
                                fill="white"/>
                            <path
                                d="M38.3809 41.4108H50.9035C55.1367 41.4108 58.3114 35.7666 58.3114 35.7666H47.0674L38.3809 41.4108Z"
                                fill="white"/>
                            <path
                                d="M32.0002 45.5401L27.6356 42.7041H12.832C12.832 42.7041 17.1973 48.3485 21.4301 48.3485H27.6782H36.3221H42.5699C46.8035 48.3485 51.1686 42.7041 51.1686 42.7041H36.3648L32.0002 45.5401Z"
                                fill="white"/>
                            <path
                                d="M16.7119 34.3554L18.0348 28.7114H0C0 28.7114 2.16062 34.3554 6.39406 34.3554H16.7119Z"
                                fill="white"/>
                            <path
                                d="M25.6181 41.4108L16.9317 35.7666H5.6875C5.6875 35.7666 8.86226 41.4108 13.0954 41.4108H25.6181Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_762_142">
                                <rect width="64" height="64" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"
                         fill="none">
                        <g clip-path="url(#clip0_762_84)">
                            <path
                                d="M28.0957 41.3722L32.0472 43.7513L35.9476 41.3455L32.0481 39.2935L28.0957 41.3722Z"
                                fill="#252525"/>
                            <path
                                d="M26.977 40.6974L27.7524 36.171L19.0685 29.3135L17.6738 35.0931L26.977 40.6974Z"
                                fill="#252525"/>
                            <path
                                d="M26.3418 24.0833L25.3034 27.1947L19.8843 28.5624L24.2061 31.8715L29.3872 31.1167L32.0468 25.7379L34.7054 31.1183L39.8873 31.8715L44.2063 28.5624L38.7864 27.1948C38.7864 27.1948 35.0995 15.6516 33.1971 15.6516C30.9076 15.6516 29.3938 15.6516 28.0101 15.6516C25.9232 15.6516 26.4979 18.1359 23.3863 18.1359C20.2757 18.1359 19.7129 21.875 19.7129 21.875C19.7129 21.875 20.8808 21.875 23.8611 21.875C26.8453 21.8749 26.3418 24.0833 26.3418 24.0833ZM27.8577 17.5103C28.2294 17.5103 28.5286 17.8095 28.5286 18.1793C28.5286 18.5487 28.2294 18.8497 27.8577 18.8497C27.4884 18.8497 27.1882 18.5487 27.1882 18.1793C27.1882 17.8096 27.4902 17.5103 27.8577 17.5103Z"
                                fill="#252525"/>
                            <path
                                d="M37.1071 40.6286L46.4216 34.8807L45.0308 29.3115L36.3438 36.171L37.1071 40.6286Z"
                                fill="#252525"/>
                            <path
                                d="M45.9648 28.7117L47.288 34.3557H57.6062C61.8393 34.3557 63.9999 28.7117 63.9999 28.7117H45.9648Z"
                                fill="#252525"/>
                            <path
                                d="M38.3809 41.4108H50.9035C55.1367 41.4108 58.3114 35.7666 58.3114 35.7666H47.0674L38.3809 41.4108Z"
                                fill="#252525"/>
                            <path
                                d="M32.0002 45.5401L27.6356 42.7041H12.832C12.832 42.7041 17.1973 48.3485 21.4301 48.3485H27.6782H36.3221H42.5699C46.8035 48.3485 51.1686 42.7041 51.1686 42.7041H36.3648L32.0002 45.5401Z"
                                fill="#252525"/>
                            <path
                                d="M16.7119 34.3554L18.0348 28.7114H0C0 28.7114 2.16062 34.3554 6.39406 34.3554H16.7119Z"
                                fill="#252525"/>
                            <path
                                d="M25.6181 41.4108L16.9317 35.7666H5.6875C5.6875 35.7666 8.86226 41.4108 13.0954 41.4108H25.6181Z"
                                fill="#252525"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_762_84">
                                <rect width="64" height="64" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>}
            </div>

            <div
                className={`items-center hidden space-x-12 lg:flex ${
                    isAtTop ? "text-white" : "text-black"
                }`}
            >
                <div
                    className={`flex items-center ${isAtTop ? "text-white" : "text-black"}`}
                >
                    <h3
                        className={`font-extrabold ${isAtTop ? "text-white" : "text-black"}`}
                    >
                        <Link to="home" spy={true} smooth={true} duration={500}>
                            <div className="cursor-pointer">
                                {isAtTop ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"
                                         fill="none">
                                        <g clip-path="url(#clip0_762_142)">
                                            <path
                                                d="M28.0957 41.3722L32.0472 43.7513L35.9476 41.3455L32.0481 39.2935L28.0957 41.3722Z"
                                                fill="white"/>
                                            <path
                                                d="M26.977 40.6974L27.7524 36.171L19.0685 29.3135L17.6738 35.0931L26.977 40.6974Z"
                                                fill="white"/>
                                            <path
                                                d="M26.3418 24.0833L25.3034 27.1947L19.8843 28.5624L24.2061 31.8715L29.3872 31.1167L32.0468 25.7379L34.7054 31.1183L39.8873 31.8715L44.2063 28.5624L38.7864 27.1948C38.7864 27.1948 35.0995 15.6516 33.1971 15.6516C30.9076 15.6516 29.3938 15.6516 28.0101 15.6516C25.9232 15.6516 26.4979 18.1359 23.3863 18.1359C20.2757 18.1359 19.7129 21.875 19.7129 21.875C19.7129 21.875 20.8808 21.875 23.8611 21.875C26.8453 21.8749 26.3418 24.0833 26.3418 24.0833ZM27.8577 17.5103C28.2294 17.5103 28.5286 17.8095 28.5286 18.1793C28.5286 18.5487 28.2294 18.8497 27.8577 18.8497C27.4884 18.8497 27.1882 18.5487 27.1882 18.1793C27.1882 17.8096 27.4902 17.5103 27.8577 17.5103Z"
                                                fill="white"/>
                                            <path
                                                d="M37.1071 40.6286L46.4216 34.8807L45.0308 29.3115L36.3438 36.171L37.1071 40.6286Z"
                                                fill="white"/>
                                            <path
                                                d="M45.9648 28.7117L47.288 34.3557H57.6062C61.8393 34.3557 63.9999 28.7117 63.9999 28.7117H45.9648Z"
                                                fill="white"/>
                                            <path
                                                d="M38.3809 41.4108H50.9035C55.1367 41.4108 58.3114 35.7666 58.3114 35.7666H47.0674L38.3809 41.4108Z"
                                                fill="white"/>
                                            <path
                                                d="M32.0002 45.5401L27.6356 42.7041H12.832C12.832 42.7041 17.1973 48.3485 21.4301 48.3485H27.6782H36.3221H42.5699C46.8035 48.3485 51.1686 42.7041 51.1686 42.7041H36.3648L32.0002 45.5401Z"
                                                fill="white"/>
                                            <path
                                                d="M16.7119 34.3554L18.0348 28.7114H0C0 28.7114 2.16062 34.3554 6.39406 34.3554H16.7119Z"
                                                fill="white"/>
                                            <path
                                                d="M25.6181 41.4108L16.9317 35.7666H5.6875C5.6875 35.7666 8.86226 41.4108 13.0954 41.4108H25.6181Z"
                                                fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_762_142">
                                                <rect width="64" height="64" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"
                                         fill="none">
                                        <g clip-path="url(#clip0_762_84)">
                                            <path
                                                d="M28.0957 41.3722L32.0472 43.7513L35.9476 41.3455L32.0481 39.2935L28.0957 41.3722Z"
                                                fill="#252525"/>
                                            <path
                                                d="M26.977 40.6974L27.7524 36.171L19.0685 29.3135L17.6738 35.0931L26.977 40.6974Z"
                                                fill="#252525"/>
                                            <path
                                                d="M26.3418 24.0833L25.3034 27.1947L19.8843 28.5624L24.2061 31.8715L29.3872 31.1167L32.0468 25.7379L34.7054 31.1183L39.8873 31.8715L44.2063 28.5624L38.7864 27.1948C38.7864 27.1948 35.0995 15.6516 33.1971 15.6516C30.9076 15.6516 29.3938 15.6516 28.0101 15.6516C25.9232 15.6516 26.4979 18.1359 23.3863 18.1359C20.2757 18.1359 19.7129 21.875 19.7129 21.875C19.7129 21.875 20.8808 21.875 23.8611 21.875C26.8453 21.8749 26.3418 24.0833 26.3418 24.0833ZM27.8577 17.5103C28.2294 17.5103 28.5286 17.8095 28.5286 18.1793C28.5286 18.5487 28.2294 18.8497 27.8577 18.8497C27.4884 18.8497 27.1882 18.5487 27.1882 18.1793C27.1882 17.8096 27.4902 17.5103 27.8577 17.5103Z"
                                                fill="#252525"/>
                                            <path
                                                d="M37.1071 40.6286L46.4216 34.8807L45.0308 29.3115L36.3438 36.171L37.1071 40.6286Z"
                                                fill="#252525"/>
                                            <path
                                                d="M45.9648 28.7117L47.288 34.3557H57.6062C61.8393 34.3557 63.9999 28.7117 63.9999 28.7117H45.9648Z"
                                                fill="#252525"/>
                                            <path
                                                d="M38.3809 41.4108H50.9035C55.1367 41.4108 58.3114 35.7666 58.3114 35.7666H47.0674L38.3809 41.4108Z"
                                                fill="#252525"/>
                                            <path
                                                d="M32.0002 45.5401L27.6356 42.7041H12.832C12.832 42.7041 17.1973 48.3485 21.4301 48.3485H27.6782H36.3221H42.5699C46.8035 48.3485 51.1686 42.7041 51.1686 42.7041H36.3648L32.0002 45.5401Z"
                                                fill="#252525"/>
                                            <path
                                                d="M16.7119 34.3554L18.0348 28.7114H0C0 28.7114 2.16062 34.3554 6.39406 34.3554H16.7119Z"
                                                fill="#252525"/>
                                            <path
                                                d="M25.6181 41.4108L16.9317 35.7666H5.6875C5.6875 35.7666 8.86226 41.4108 13.0954 41.4108H25.6181Z"
                                                fill="#252525"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_762_84">
                                                <rect width="64" height="64" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>}

                            </div>
                        </Link>
                    </h3>
                </div>
                <Link to="about" spy={true} smooth={true} duration={500}>
                    <div className="cursor-pointer hover:text-xl hover:font-extrabold">
                        About
                    </div>
                </Link>
                <Link to="services" spy={true} smooth={true} duration={500}>
                    <div className="cursor-pointer hover:text-xl hover:font-extrabold">
                        Solutions
                    </div>
                </Link>
                <Link to="menu" spy={true} smooth={true} duration={500}>
                    <div className="cursor-pointer hover:text-xl hover:font-extrabold">
                        Our Work
                    </div>
                </Link>
                <Link to="herbs" spy={true} smooth={true} duration={500}>
                    <div className="cursor-pointer hover:text-xl hover:font-extrabold">
                        Resources
                    </div>
                </Link>
            </div>
            <div className={`items-center hidden space-x-12 lg:flex ${
                isAtTop ? "text-white" : "text-black"
            }`}>
                <button
                    className={`flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 ${
                        isAtTop ? "border-white text-white" : "border-black text-black"
                    } rounded-full ${
                        isAtTop ? "hover:bg-white hover:text-black" : "hover:bg-[#1A1A1A] hover:text-white"
                    }  transition duration-300`}
                >
                    Talk to an Expert
                </button>

            </div>

            <div
                onClick={handleNav}
                className={`flex items-center justify-center lg:hidden ${isAtTop ? "text-white" : "text-black"}`}
            >
                <div className="">{nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}</div>

            </div>

            <div
                className={
                    !nav
                        ? "fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray bg-white ease-in-out duration-500 md:hidden"
                        : "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray ease-in-out bg-white duration-500 md:hidden"
                }
            >
                <h1 className="font-bold m-8 text-black">
                    <Link
                        to="home"
                        onClick={() => {
                            setNav(false);
                        }}
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                            <g clip-path="url(#clip0_762_84)">
                                <path
                                    d="M28.0957 41.3722L32.0472 43.7513L35.9476 41.3455L32.0481 39.2935L28.0957 41.3722Z"
                                    fill="#252525"/>
                                <path d="M26.977 40.6974L27.7524 36.171L19.0685 29.3135L17.6738 35.0931L26.977 40.6974Z"
                                      fill="#252525"/>
                                <path
                                    d="M26.3418 24.0833L25.3034 27.1947L19.8843 28.5624L24.2061 31.8715L29.3872 31.1167L32.0468 25.7379L34.7054 31.1183L39.8873 31.8715L44.2063 28.5624L38.7864 27.1948C38.7864 27.1948 35.0995 15.6516 33.1971 15.6516C30.9076 15.6516 29.3938 15.6516 28.0101 15.6516C25.9232 15.6516 26.4979 18.1359 23.3863 18.1359C20.2757 18.1359 19.7129 21.875 19.7129 21.875C19.7129 21.875 20.8808 21.875 23.8611 21.875C26.8453 21.8749 26.3418 24.0833 26.3418 24.0833ZM27.8577 17.5103C28.2294 17.5103 28.5286 17.8095 28.5286 18.1793C28.5286 18.5487 28.2294 18.8497 27.8577 18.8497C27.4884 18.8497 27.1882 18.5487 27.1882 18.1793C27.1882 17.8096 27.4902 17.5103 27.8577 17.5103Z"
                                    fill="#252525"/>
                                <path
                                    d="M37.1071 40.6286L46.4216 34.8807L45.0308 29.3115L36.3438 36.171L37.1071 40.6286Z"
                                    fill="#252525"/>
                                <path
                                    d="M45.9648 28.7117L47.288 34.3557H57.6062C61.8393 34.3557 63.9999 28.7117 63.9999 28.7117H45.9648Z"
                                    fill="#252525"/>
                                <path
                                    d="M38.3809 41.4108H50.9035C55.1367 41.4108 58.3114 35.7666 58.3114 35.7666H47.0674L38.3809 41.4108Z"
                                    fill="#252525"/>
                                <path
                                    d="M32.0002 45.5401L27.6356 42.7041H12.832C12.832 42.7041 17.1973 48.3485 21.4301 48.3485H27.6782H36.3221H42.5699C46.8035 48.3485 51.1686 42.7041 51.1686 42.7041H36.3648L32.0002 45.5401Z"
                                    fill="#252525"/>
                                <path
                                    d="M16.7119 34.3554L18.0348 28.7114H0C0 28.7114 2.16062 34.3554 6.39406 34.3554H16.7119Z"
                                    fill="#252525"/>
                                <path
                                    d="M25.6181 41.4108L16.9317 35.7666H5.6875C5.6875 35.7666 8.86226 41.4108 13.0954 41.4108H25.6181Z"
                                    fill="#252525"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_762_84">
                                    <rect width="64" height="64" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </h1>
                <ul className="p-4 mt-20 text-black">
                    <li className="p-4 border-b border-gray-600 hover:text-xl hover:font-extrabold">
                        <Link
                            to="about"
                            onClick={() => {
                                setNav(false);
                            }}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <div className="cursor-pointer hov">About</div>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600 hover:text-xl hover:font-extrabold">
                        <Link
                            to="services"
                            onClick={() => {
                                setNav(false);
                            }}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <div className="cursor-pointer">Solutions</div>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600 hover:text-xl hover:font-extrabold">
                        <Link
                            to="menu"
                            onClick={() => {
                                setNav(false);
                            }}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <div className="cursor-pointer">Our Work</div>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600 hover:text-xl hover:font-extrabold">
                        <Link
                            to="herbs"
                            onClick={() => {
                                setNav(false);
                            }}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <div className="cursor-pointer">Resources</div>
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
