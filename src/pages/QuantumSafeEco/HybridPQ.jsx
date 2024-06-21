import React from "react";
import Revolution from "../../assets/images/Revolution.png";
import IconFC from "../../assets/images/righticon.png";
import bgred from "../../assets/images/bgred.jpg";
import MobileAppview from "../../assets/images/MobileAppview.png";
import { Link } from "react-router-dom";
import PQChat from "../../assets/images/PQchat.png";
// import "./QCS.css";
import Card from "../../Card/Card";
import HeartEmoji from "../../assets/images/smiley.jpeg";
import Glasses from "../../assets/images/smiley.jpeg";
import Humble from "../../assets/images/smiley.jpeg";
import rail from "../../assets/images/rail.jpg";
import info from "../../assets/images/info.png";
import read from "../../assets/images/read.png";
import comment from "../../assets/images/comment.png";
import { motion } from "framer-motion";
export default function HybridPQ() {
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div>
      <section className="body-font mt-12">
        <div className="container mx-auto flex px-5 py-24  flex-col items-center">
          <div className=" lg:flex-grow  lg:pr-8 md:pr-8 lg:pl-16 md:pl-8  flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-8 font-bold font-dmSans ">
              VPN: Hybrid PQ VPN
            </h1>
            <p className=" sm:text-2xl text-2xl mb-8  text-[#686868] font-dmSans ">
              Secure, simple, future-proof
            </p>
            <p className="sm:text-[16px] text-[16px] mb-8 text-[#686868] font-dmSans text-center items-center">
              Our Hybrid PQ VPN secures data-in-transit from traditional and
              quantum attack. Easily deployable to protect site-to-user,
              site-to-site and site-to-data centre links, our Hybrid PQ VPN is
              based on the IETF standards (which our team authored).
              <br /> Built on the principle of crypto-agility, the system is
              ready to operate with any of NISTs candidate post-quantum
              algorithms, as well as today’s traditional encryption standards.
              With easy backwards compatibility, the addition of our VPN has
              little-to-no impact on existing systems and is the simplest and
              quickest way for an enterprise to benefit from quantum-safe
              encryption.
              <br /> While our VPN is software based we are also able to offer a
              hardware version, through partnership with a defence-grade
              certified hardware provider.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <h1 className="font-dmSans sm:text-4xl text-4xl mb-8 text-gray-900 font-semibold text-center w-full">
            Example use cases:
          </h1>
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={rail}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-row mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>

              <h2 className="text-gray-900 text-lg title-font font-medium my-2 ml-4 items-center justify-center ">
                Secure data-in-transit from traditional and quantum attack
              </h2>
            </div>
            <div className="flex flex-row mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>

              <h2 className="text-gray-900 text-lg title-font font-medium my-2 ml-4 items-center justify-center ">
                Protect data transmitted between remote workers
              </h2>
            </div>
            <div className="flex flex-row mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>

              <h2 className="text-gray-900 text-lg title-font font-medium my-2 ml-4 items-center justify-center ">
                Secure data-in-transit from ‘harvest now, decrypt later’ quantum
                attack
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap mx-4">
        <div className="p-4 md:w-1/3 ">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <div className="flex justify-center object-center mt-8">
              <img className="lg:h-16 md:h-16 " src={info} alt="blog" />
            </div>

            <div className="p-6">
              <h1 className="font-dmSans sm:text-base text-base mb-8 text-gray-900 text-center w-full">
                Find out more about Hybrid PQ VPN
              </h1>

              <div className="flex justify-center items-center">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Contact Us
                </button>
              </div>
              {/* <div class="flex items-center flex-wrap">
                    <a class="text-black font-bold inline-flex items-center md:mb-2 lg:mb-0">
                      READ MORE
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div> */}
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <div className="flex justify-center object-center mt-8">
              <img className="lg:h-16 md:h-16 " src={read} alt="blog" />
            </div>

            <div className="p-6">
              <h1 className="font-dmSans sm:text-base text-base mb-8 text-gray-900 text-center w-full">
                Read out Blogs and Insights
              </h1>

              <div className="flex justify-center items-center">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  READ MORE
                </button>
              </div>
              {/* <div class="flex items-center flex-wrap">
                    <a class="text-black font-bold inline-flex items-center md:mb-2 lg:mb-0">
                      READ MORE
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div> */}
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <div className="flex justify-center object-center mt-8">
              <img className="lg:h-16 md:h-16 " src={comment} alt="blog" />
            </div>

            <div className="p-6">
              <h1 className="font-dmSans sm:text-base text-base mb-8 text-gray-900 text-center w-full">
                Find out more about PQ Chat
              </h1>

              <div className="flex justify-center items-center">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  READ MORE
                </button>
              </div>

              {/* <div class="flex items-center flex-wrap">
                    <a class="text-black font-bold inline-flex items-center md:mb-2 lg:mb-0">
                      READ MORE
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
