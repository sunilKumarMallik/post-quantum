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
import buildings from "../../assets/images/buildings.jpg";
import info from "../../assets/images/info.png";
import read from "../../assets/images/read.png";
import password from "../../assets/images/password.png";
import people from "../../assets/images/people.png";
import cloud from "../../assets/images/cloud.png";
import broswer from "../../assets/images/broswer.png";
import comment from "../../assets/images/comment.png";
import { FaUserShield, FaTruck, FaKey, FaLock } from "react-icons/fa";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
export default function Approval() {
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
              Approval as a Service: Quorum
            </h1>
            <p className=" sm:text-2xl text-2xl mb-8  text-[#686868] font-dmSans ">
              Secure, flexible, collaborative
            </p>
            <p className="sm:text-[16px] text-[16px] mb-8 text-[#686868] font-dmSans text-center items-center">
              Quorum is a quantum-safe, zero-knowledge system that combines the
              principles of threshold and homomorphic cryptography, so that
              multiple parties can cooperate with one another to take
              cryptographically verified actions.
              <br />
              By splitting an encryption key into fragments it’s possible to
              create a ‘Quorum’ where multiple stakeholders each need to submit
              their key fragment in order for an action to be taken e.g. to
              approve a junior staff to access and decrypt data. A simple quorum
              might require 3/5 key fragments before access to the data is
              granted.
              <br />
              Quorum provides a system of digital governance that can be used by
              multiple actors within a single organisation or multiple actors
              from disparate organisations. These actors may be individuals, or
              they could also be machines or IOT sensors, each being able to
              cast a ‘cryptographically secure and verified vote’ that
              contributes to a decision, outcome or action.
              <br />
              Unlike more rigid governance systems such as simple
              multi-signature schemes, Quorum is flexible, with the ability to
              disable or revoke and then reissue key fragments should an
              individual change job or if the governance structure needs to
              evolve. Similarly, each actor within a quorum can be assigned a
              specific weighting based on the governance structure you wish to
              create.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <h1 className="font-dmSans sm:text-4xl text-4xl mb-8 text-gray-900 font-semibold text-center w-full">
            Example use cases:
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:py-6 lg:w-full lg:pl-12 lg:text-left text-center">
            <div className="flex flex-row mb-10 lg:items-start items-center">
              <FaUserShield className="text-gray-900 w-10 h-10" />
              <div className="ml-4">
                <p>
                  Additional level of secure governance when accessing encrypted
                  data
                </p>
              </div>
            </div>
            <div className="flex flex-row mb-10 lg:items-start items-center">
              <FaTruck className="text-gray-900 w-10 h-10" />
              <div className="ml-4">
                <p>
                  *Ease requests for legal access to encrypted social networking
                  messages
                </p>
              </div>
            </div>
            <div className="flex flex-row mb-10 lg:items-start items-center">
              <FaUserShield className="text-gray-900 w-10 h-10" />
              <div className="ml-4">
                <p>
                  Secure autonomous vehicles with a quorum for firmware updates
                  or operation
                </p>
              </div>
            </div>
            <div className="flex flex-row mb-10 lg:items-start items-center">
              <FaKey className="text-gray-900 w-10 h-10" />
              <div className="ml-4">
                <p>
                  Cryptographic IoT consensus voting in a battlefield
                  environment
                </p>
              </div>
            </div>
            <div className="flex flex-row mb-10 lg:items-start items-center">
              <FaLock className="text-gray-900 w-10 h-10" />
              <div className="ml-4">
                <p>
                  A more secure and flexible alternative to multi-signature
                  cryptocurrency wallets
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="Frontline workers"
              className="object-cover object-center h-full w-full"
              src={buildings}
            />
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
