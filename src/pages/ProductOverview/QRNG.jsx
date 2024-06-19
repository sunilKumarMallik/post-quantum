import React from "react";
import Revolution from "../../assets/images/Revolution.png";
import bgred from "../../assets/images/bgred.jpg";
import { Link } from "react-router-dom";
import IconFC from "../../assets/images/righticon.png";

import { motion } from "framer-motion";
export default function QKD() {
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
                            Quantum Random Number Generation (QRNG)
                        </h1>
                        <p className=" text-xl md:text-xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start ">
                            Democratizing Data Protection With Post Quantum Encryption
                            Technologies
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
