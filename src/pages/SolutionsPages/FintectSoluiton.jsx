import React from "react";
import Revolution from "../../assets/images/Revolution.png";
import bgred from "../../assets/images/bgred.jpg";
import { Link } from "react-router-dom";
import IconFC from "../../assets/images/righticon.png";

import { motion } from "framer-motion";

export default function FintectSoluiton() {
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
                            Fintech AI
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
                        id="financeAI"
                        className="flex flex-col md:flex-row shadow-lg md:shadow-xl bg-[#212534] mt-10 group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg"
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
                        <div className="text-3xl not-italic font-bold leading-9 md:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left  font-heebo mt-5 text-white">
                            <h2 className="mt-6 mb-2 text-red-500 "> Finance </h2>
                            <div className="flex items-start mb-4">
                                <span className="flex-shrink-0">
                                    <img
                                        className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                                        src={IconFC}
                                        alt=""
                                    />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-white ">
                                    Empower your financial future with Post Quantum's QAI
                                    solutions. Our cutting-edge approach unlocks:
                                </p>
                            </div>

                            <div className="flex items-start mb-4">
                                <span className="flex-shrink-0">
                                    <img
                                        className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                                        src={IconFC}
                                        alt=""
                                    />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-white ">
                                    Optimized portfolios: Leverage quantum machine learning and
                                    optimization to maximize returns and make smarter investment
                                    decisions.
                                </p>
                            </div>
                            <div className="flex items-start mb-4">
                                <span className="flex-shrink-0">
                                    <img
                                        className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                                        src={IconFC}
                                        alt=""
                                    />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-white ">
                                    Enhanced risk management: Utilize advanced stochastic
                                    modelling powered by quantum algorithms to mitigate risk and
                                    stay ahead in a dynamic market.
                                </p>
                            </div>

                            <div className="flex items-start mb-10">
                                <span className="flex-shrink-0">
                                    <img
                                        className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                                        src={IconFC}
                                        alt=""
                                    />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-white ">
                                    Real-time fraud detection: Combat financial threats with
                                    quantum algorithms that enable accurate and immediate anomaly
                                    detection in banking.
                                </p>
                            </div>
                            <span
                                className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full"
                                aria-hidden="true"
                            />
                            <span
                                className="absolute w-0 h-0.5 right-0 top-0 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"
                                aria-hidden="true"
                            />
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
