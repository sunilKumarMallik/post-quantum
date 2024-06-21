





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
import Humble from "../../assets/images/smiley.jpeg"
import password from "../../assets/images/password.png";
import people from "../../assets/images/people.png";
import cloud from "../../assets/images/cloud.png";
import broswer from "../../assets/images/broswer.png";
import shutterstock from "../../assets/images/shutterstock.jpg";
import ReactPlayer from "react-player";
// import Humble from "../../assets/images/smiley.jpeg"
import Remoteworkers from "../../assets/images/remoteworkers.jpg"

import { motion } from "framer-motion";
export default function Company() {
    const transition = {
        duration: 1,
        type: "spring",
    };
    return (
        <div className="">
            {/* {/ Section-1 /} */}
            <div className="relative bg-[#56616b]">
                <div className="absolute inset-x-0 bottom-0">
                    <svg
                        viewBox="0 0 224 12"
                        fill="currentColor"
                        className="w-full -mb-1 text-white"
                        preserveAspectRatio="none"
                    >
                        <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                    </svg>
                </div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                        <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">

                            <br className="hidden md:block" />
                            {' '}
                            <span className="relative inline-block px-2">
                                <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                                <span className="relative text-teal-900"></span>
                            </span>
                        </h2>

                        <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">

                            <a
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-gray-100 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none text-[60px]"
                            >
                                Company
                            </a>
                        </form>
                        <p className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">

                        </p>

                    </div>
                </div>
            </div>



            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            <br className="hidden lg:inline-block" />
                        </h1>
                        <p className="mb-8 leading-relaxed">Since 2009 Post-Quantum has undertaken deep R&D to solve the post-quantum encryption challenge. This work is world-renowned and our algorithm is the only remaining finalist in the ‘code-based category’ of NISTs Post-Quantum Cryptography programme, which seeks to identify encryption algorithms that will form the basis of a new global public-key cryptography standard. This standard will be relied on to secure virtually all the world’s communications and applications from attack by a quantum computer.</p>

                        <p className="mb-8 leading-relaxed">Today we have progressed beyond R&D, having built a suite of usable quantum-safe products covering encryption, transmission and identity. These products protect data from the moment it is created, as it is transmitted and from adjacent risks like quantum identity attacks. Our technology combines to help organisations achieve a ‘quantum-safe ecosystem’ securing every point of vulnerability. .</p>


                    </div>
                    <div className="lg:max-w-lg lg:w-full ">
                        <img className="object-cover object-center rounded" alt="hero" src={Remoteworkers} />
                    </div>
                </div>
            </section>

            {/* Section-2 */}

            <section className="body-font ">
                <div className="container mx-auto flex   flex-col items-center">
                    <div className=" lg:flex-grow  lg:pr-8 md:pr-8 lg:pl-4 md:pl-4  flex flex-col md:items-center md:text-left  md:mb-0 items-center text-center">

                        <p className="sm:text-[16px] text-[16px] mb-8 text-[#686868] font-dmSans text-left items-center">
                            Our Hybrid PQ VPN is currently being trialled by NATO to secure data transmission between alliance members and our multi-factor biometric identity service, Nomidio, is in use at major companies like Hitachi Capital. We solve cyber security problems in every sector, with particular experience in financial services, critical national infrastructure, defence and national security.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16  justify-between mt-4">
                        <div className=" grid items-center justify-center  ">
                            <img
                                src={password}
                                alt="Image 1"
                                className="w-30 h-20 mx-auto "
                            />
                            <p className="sm:text-[20px] text-[20px] my-8 font-dmSans text-center items-center mx-auto">
                                Contact Us
                            </p>
                        </div>
                        <div className=" grid items-center justify-center  ">
                            <img src={broswer} alt="Image 1" className="w-30 h-20 mx-auto " />
                            <p className="sm:text-[20px] text-[20px] my-8 font-dmSans text-center items-center mx-auto">
                                Our Technology
                            </p>
                        </div>
                        <div className=" grid items-center justify-center  ">
                            <img src={people} alt="Image 1" className="w-30 h-20 mx-auto " />
                            <p className="sm:text-[20px] text-[20px] my-8 font-dmSans text-center items-center mx-auto">
                                Quantum Threat
                            </p>
                        </div>
                        <div className=" grid items-center justify-center  ">
                            <img src={cloud} alt="Image 1" className="w-30 h-20 mx-auto " />
                            <p className="sm:text-[20px] text-[20px] my-8 font-dmSans text-center items-center mx-auto">
                                Insights
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Section-3 */}

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            className="w-full h-auto"
                            controls
                        />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-row mb-10 lg:items-start items-center">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={shutterstock} alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Inside the Competition That will Save Bitcoin From Quantum Computers-Decrypt</h1>
                                    <p className="leading-relaxed mb-3">For The past 14 years, Cheng,now 57, has run Post-Quantum, a British company building an encryption algorithm resistant to quantum computers</p>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}
