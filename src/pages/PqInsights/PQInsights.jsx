import React from "react";
import PQChat from "../../assets/images/PQchat.png";
import nato from "../../assets/images/nato.png";

import { Link } from "react-router-dom";
// import "./QCS.css";
import Card from "../../Card/Card";
import HeartEmoji from "../../assets/images/smiley.jpeg";
import Glasses from "../../assets/images/smiley.jpeg";
import Humble from "../../assets/images/smiley.jpeg";
import rail from "../../assets/images/rail.jpg";
import { motion } from "framer-motion";
export default function PQInsights() {
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <>
      <section className="body-font mt-12">
        <div className="container mx-auto flex px-5 py-24  flex-col items-center">
          <div className=" lg:flex-grow  lg:pr-8 md:pr-8 lg:pl-16 md:pl-8  flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-8 font-bold font-dmSans ">
              Blogs | Press Releases | In the News
            </h1>
          </div>
        </div>
      </section>
      <section>
        <h1 className="title-font sm:text-3xl text-2xl mb-8 font-dmSans ">
          Blogs & Press Releases
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gray-50">
              <div className="p-6">
                <h1 className="font-dmSans sm:text-xl text-xl mb-4 text-gray-900 font-semibold">
                  New algorithms selected for protecting world’s data from
                  quantum attack - now is the time to begin crypto upgrade,
                  urges Post-Quantum’s CEO
                </h1>
                <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
                  07 July 2022
                </p>
                <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
                  The National Institute of Science and Technology (NIST) has
                  been leading the hunt for quantum-safe encryption algorithms
                  since 2016.
                </p>
                <div className="flex justify-start">
                  <button
                    type="button"
                    className="text-gray-900 font-bold inline-flex items-center text-sm"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gray-50">
              <div className="p-6">
                <h1 className="font-dmSans sm:text-xl text-xl mb-4 text-gray-900 font-semibold">
                  New algorithms selected for protecting world’s data from
                  quantum attack - now is the time to begin crypto upgrade,
                  urges Post-Quantum’s CEO
                </h1>
                <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
                  07 July 2022
                </p>
                <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
                  The National Institute of Science and Technology (NIST) has
                  been leading the hunt for quantum-safe encryption algorithms
                  since 2016.
                </p>
                <div className="flex justify-start">
                  <button
                    type="button"
                    className="text-gray-900 font-bold inline-flex items-center text-sm"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gray-50">
              <div className="p-6">
                <h1 className="font-dmSans sm:text-xl text-xl mb-4 text-gray-900 font-semibold">
                  New algorithms selected for protecting world’s data from
                  quantum attack - now is the time to begin crypto upgrade,
                  urges Post-Quantum’s CEO
                </h1>
                <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
                  07 July 2022
                </p>
                <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
                  The National Institute of Science and Technology (NIST) has
                  been leading the hunt for quantum-safe encryption algorithms
                  since 2016.
                </p>
                <div className="flex justify-start">
                  <button
                    type="button"
                    className="text-gray-900 font-bold inline-flex items-center text-sm"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className=" mt-4 title-font sm:text-3xl text-2xl mb-8 font-dmSans ">
          In the News
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gray-50">
              <div className="p-6">
                <div>
                  <img src={nato} />
                </div>
                <h1 className="font-dmSans sm:text-xl text-xl mb-4 text-gray-900 font-semibold mt-4">
                  New algorithms selected for protecting world’s data from
                  quantum attack - now is the time to begin crypto upgrade,
                  urges Post-Quantum’s CEO
                </h1>
                <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
                  07 July 2022
                </p>
                <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
                  The National Institute of Science and Technology (NIST) has
                  been leading the hunt for quantum-safe encryption algorithms
                  since 2016.
                </p>
                <div className="flex justify-start">
                  <button
                    type="button"
                    className="text-gray-900 font-bold inline-flex items-center text-sm"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gray-50">
              <div className="p-6">
                <div>
                  <img src={nato} />
                </div>
                <h1 className="font-dmSans sm:text-xl text-xl mb-4 text-gray-900 font-semibold mt-4">
                  New algorithms selected for protecting world’s data from
                  quantum attack - now is the time to begin crypto upgrade,
                  urges Post-Quantum’s CEO
                </h1>
                <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
                  07 July 2022
                </p>
                <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
                  The National Institute of Science and Technology (NIST) has
                  been leading the hunt for quantum-safe encryption algorithms
                  since 2016.
                </p>
                <div className="flex justify-start">
                  <button
                    type="button"
                    className="text-gray-900 font-bold inline-flex items-center text-sm"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gray-50">
              <div className="p-6">
                <div>
                  <img src={nato} />
                </div>
                <h1 className="font-dmSans sm:text-xl text-xl mb-4 text-gray-900 font-semibold mt-4">
                  New algorithms selected for protecting world’s data from
                  quantum attack - now is the time to begin crypto upgrade,
                  urges Post-Quantum’s CEO
                </h1>
                <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
                  07 July 2022
                </p>
                <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
                  The National Institute of Science and Technology (NIST) has
                  been leading the hunt for quantum-safe encryption algorithms
                  since 2016.
                </p>
                <div className="flex justify-start">
                  <button
                    type="button"
                    className="text-gray-900 font-bold inline-flex items-center text-sm"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
