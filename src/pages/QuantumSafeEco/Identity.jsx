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
import workers from "../../assets/images/workers.jpg";
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
export default function Identity() {
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
              Nomidio Identity
            </h1>
            <p className=" sm:text-2xl text-2xl mb-8  text-[#686868] font-dmSans ">
              Secure, simple, self-sovereign
            </p>
            <p className="sm:text-[16px] text-[16px] mb-8 text-[#686868] font-dmSans text-center items-center">
              Nomidio is our quantum-ready multi-factor biometric identity
              system for secure passwordless sign-in. Users register once and
              use their Nomidio identity to sign-in to different websites and
              apps from any device, with their face and voice. <br />
              Offering self-sovereign identity, Nomidio harnesses our
              approval-as-a-service technology to ensure users remain in full
              control, and their identity is only decrypted when they provide
              consent. With tokenisation Nomidio further protects user privacy,
              allowing trusted authorities (e.g. government departments or
              banks) to attest for the user’s age, date of birth or address,
              without the need for the underlying data to be revealed.
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
                Password Free
              </p>
            </div>
            <div className=" grid items-center justify-center  ">
              <img src={broswer} alt="Image 1" className="w-30 h-20 mx-auto " />
              <p className="sm:text-[20px] text-[20px] my-8 font-dmSans text-center items-center mx-auto">
                Browser Based
              </p>
            </div>
            <div className=" grid items-center justify-center  ">
              <img src={people} alt="Image 1" className="w-30 h-20 mx-auto " />
              <p className="sm:text-[20px] text-[20px] my-8 font-dmSans text-center items-center mx-auto">
                No propagation of PII
              </p>
            </div>
            <div className=" grid items-center justify-center  ">
              <img src={cloud} alt="Image 1" className="w-30 h-20 mx-auto " />
              <p className="sm:text-[20px] text-[20px] my-8 font-dmSans text-center items-center mx-auto">
                Cloud Service Providers - SSO
              </p>
            </div>
          </div>
        </div>
      </section>
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
              <h2 className="text-gray-900 text-lg title-font font-medium my-2 ml-4 items-center justify-center">
                Nomidio is the only identity system in the world that combines
                multiple biometric factors such as voice and face with a
                patented system that authenticates the user based on ‘what they
                are asked to do’. This innovation combats the threat posed by
                deep fakes and with the addition of a quantum-ready
                architecture, Nomidio is ideal for high security authentication
                now and in the future.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <h1 className="font-dmSans sm:text-4xl text-4xl mb-8 text-gray-900 font-semibold text-center w-full">
            Nomidio Identity Use cases
          </h1>

          <div className="w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="Frontline workers"
              className="object-cover object-center h-full w-full"
              src={workers}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:py-6 lg:w-full lg:pl-12 lg:text-left text-center">
            <div className="flex flex-row mb-10 lg:items-start items-center">
              <FaUserShield className="text-gray-900 w-10 h-10" />
              <div className="ml-4">
                <h2 className="text-gray-900 text-lg title-font font-medium my-2">
                  Secure Sign in
                </h2>
                <p>Secure Sign in for employees working remotely</p>
              </div>
            </div>
            <div className="flex flex-row mb-10 lg:items-start items-center">
              <FaTruck className="text-gray-900 w-10 h-10" />
              <div className="ml-4">
                <h2 className="text-gray-900 text-lg title-font font-medium my-2">
                  Supply Chain
                </h2>
                <p>
                  Increase security of user access in supply-chain environments
                </p>
              </div>
            </div>
            <div className="flex flex-row mb-10 lg:items-start items-center">
              <FaUserShield className="text-gray-900 w-10 h-10" />
              <div className="ml-4">
                <h2 className="text-gray-900 text-lg title-font font-medium my-2">
                  Step-up Authentication
                </h2>
                <p>
                  Step-up authentication security for privileged system access
                </p>
              </div>
            </div>
            <div className="flex flex-row mb-10 lg:items-start items-center">
              <FaKey className="text-gray-900 w-10 h-10" />
              <div className="ml-4">
                <h2 className="text-gray-900 text-lg title-font font-medium my-2">
                  Prevent Credential Sharing
                </h2>
                <p>
                  Prevent credential sharing for auditability and reduced
                  leakage for subscription businesses
                </p>
              </div>
            </div>
            <div className="flex flex-row mb-10 lg:items-start items-center">
              <FaLock className="text-gray-900 w-10 h-10" />
              <div className="ml-4">
                <h2 className="text-gray-900 text-lg title-font font-medium my-2">
                  Eliminate Password-reset costs
                </h2>
                <p>
                  Eliminate password-reset costs and improve the efficiency of
                  workers in the field
                </p>
              </div>
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
