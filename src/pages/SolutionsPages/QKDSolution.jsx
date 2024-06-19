


import React from "react";
import Revolution from "../../assets/images/Revolution.png";
import IconFC from "../../assets/images/righticon.png";
import bgred from "../../assets/images/bgred.jpg";
import MobileAppview from "../../assets/images/MobileAppview.png";
import { Link } from "react-router-dom";
// import "./QCS.css";
import Card from "../../Card/Card";
import HeartEmoji from "../../assets/images/smiley.jpeg";
import Glasses from "../../assets/images/smiley.jpeg";
import Humble from "../../assets/images/smiley.jpeg";


import { motion } from "framer-motion";
export default function QKDSolution() {
    const transition = {
        duration: 1,
        type: "spring",
    };
    return (
        <div className="bg-black">
            {/* {/ Section-1 /} */}
            <section
                className=" bg-no-repeat bg-center "
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${bgred})`,
                    backgroundsize: "cover",
                    height: "400px",
                }}
            >
                <nav
                    x-data="{ isOpen: false }"
                    className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex lg:hidden"></div>
                    </div>
                    {/* <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"></div> */}
                </nav>

                <div className="container px-6 py-16 mx-auto text-start">
                    <div className=" mx-auto">
                        <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo  text-white mt-8 dark:text-white ">
                            Quantum Key Distribution (QKD)
                        </h1>
                        <p className=" text-xl md:text-xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start ">
                            Democratizing Data Protection With Post Quantum Encryption
                            Technologies
                        </p>
                    </div>
                </div>
            </section>




            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto ">
                    <div
                        id="QKD"
                        className="flex flex-col md:flex-row shadow-lg md:shadow-xl  bg-[#212534] group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg"
                        data-aos="zoom-in-right"
                    >
                        <span
                            className="absolute h-0 w-0.5 right-0 top-0  bg-red-700 transition-all duration-500 ease-out group-hover:h-full"
                            aria-hidden="true"
                        />
                        <span
                            className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
                            aria-hidden="true"
                        />
                        <div className="md:max-w-lg md:w-1/4 w-full mb-10 md:mb-0 md:ml-20 px-3 py-10">
                            <img
                                className="object-cover object-center w-full h-full"
                                alt="hero"
                                src={Revolution}
                            />
                        </div>
                        <div className="text-3xl not-italic font-bold leading-9 md:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left  font-heebo mt-5 text-white">
                            <h2 className="mt-6 mb-2 text-red-500">
                                {" "}
                                solution 1: Free Space QKD
                            </h2>
                            <div className="flex items-start mb-4">
                                <span className="flex-shrink-0">
                                    {/* <img
                    className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                    src={IconFC}
                    alt=""
                  /> */}
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-white">
                                    In free-space QKD, quantum signals are transmitted through the
                                    atmosphere (typically using lasers) between two parties, such
                                    as a satellite and a ground station, or between two ground
                                    stations.
                                    <p className="text-3xl font-serif font-bold"> Advantages: </p>
                                    Long-distance communication: Free-space QKD, especially
                                    satellite-based QKD, is an appropriate solution for
                                    long-distance communication, allowing safe communication
                                    between distant places on Earth or in space. Low latency:
                                    Compared to fiber-based QKD, free-space QKD can offer lower
                                    latency, which is important for applications where real-time
                                    communication is critical, such as in military operations,
                                    secure communication in government agencies. Scalability:
                                    Free-space QKD may be scaled up to create secure communication
                                    networks that span huge areas, such as cities or regions, by
                                    deploying several nodes and satellites. Global coverage:
                                    Satellite-based free-space QKD can provide secure
                                    communication coverage around the world, even distant or
                                    isolated areas where other communication infrastructure may be
                                    restricted.
                                </p>
                                <span
                                    className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full"
                                    aria-hidden="true"
                                />
                                <span
                                    className="absolute w-0 h-0.5 right-0 top-0 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row shadow-lg md:shadow-xl bg-[#212534] mt-10 group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg" data-aos="zoom-in-right">
                        <span
                            className="absolute h-0 w-0.5 right-0 top-0  bg-red-700 transition-all duration-500 ease-out group-hover:h-full"
                            aria-hidden="true"
                        />
                        <span
                            className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
                            aria-hidden="true"
                        />
                        <div className="text-3xl not-italic font-bold leading-9 md:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left  font-heebo mt-5 text-white">
                            <h2 className="mt-6 mb-2 text-red-500 ">
                                Solution 2: Optical fiber based QKD{" "}
                            </h2>
                            <div className="flex items-start mb-4">
                                <span className="flex-shrink-0">

                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-white ">
                                    Optical fiber-based quantum key distribution (QKD) is a method
                                    of secure communication that utilizes the principles of
                                    quantum mechanics to exchange the cryptographic keys over a
                                    fiber-optic link.
                                    <p className="text-3xl font-serif font-bold">Advantages: </p>
                                    Compatibility: Fiber-based QKD is compatible with current
                                    fiber-optic communication infrastructure, making it simple to
                                    integrate into existing networks without requiring massive
                                    infrastructure upgrades. High key generation rates:
                                    Fiber-based QKD systems may reach high key generation rates,
                                    which enable secure communication at high speeds suited for
                                    many practical applications. Reliability: Fiber-based QKD
                                    systems are generally more reliable than free-space QKD
                                    systems, as they are less affected by atmospheric conditions
                                    and other environmental factors.
                                </p>
                                <span
                                    className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full"
                                    aria-hidden="true"
                                />
                                <span
                                    className="absolute w-0 h-0.5 right-0 top-0 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                        <div className="md:max-w-lg md:w-1/4 w-full mb-10 md:mb-0 md:ml-20 px-3 py-10">
                            <img
                                className="object-cover object-center w-full h-full"
                                alt="hero"
                                src={Revolution}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}