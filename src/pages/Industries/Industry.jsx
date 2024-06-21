import React from "react";
import workers from "../../assets/images/workers.jpg";
import info from "../../assets/images/info.png";
import read from "../../assets/images/read.png";
import password from "../../assets/images/password.png";
import people from "../../assets/images/people.png";
import cloud from "../../assets/images/cloud.png";
import broswer from "../../assets/images/broswer.png";
import comment from "../../assets/images/comment.png";
import { FaUserShield, FaTruck, FaKey, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
// import "./QCS.css";
import Card from "../../Card/Card";
import HeartEmoji from "../../assets/images/smiley.jpeg";
import Glasses from "../../assets/images/smiley.jpeg";
import Humble from "../../assets/images/smiley.jpeg";
import rail from "../../assets/images/rail.jpg";
import { motion } from "framer-motion";
export default function Industry() {
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
              Industries
            </h1>

            <p className="sm:text-[16px] text-[16px] mb-8 text-[#686868] font-dmSans text-center items-center">
              We have been active in post-quantum cyber security since 2009 and
              consulted across a range of industries. More recently, our
              portfolio of quantum-safe products have been deployed across a
              number of industries in some of the first examples of real-world
              post-quantum encryption.
              <br /> With end-user and server-side products for identity,
              transmission and encryption we can work with you to solve a wide
              range of cyber security problems. Our technology can be delivered
              flexibly as part of third-party solutions and as off-the-shelf
              products.
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
                Identity
              </p>
            </div>
            <div className=" grid items-center justify-center  ">
              <img src={broswer} alt="Image 1" className="w-30 h-20 mx-auto " />
              <p className="sm:text-[20px] text-[20px] my-8 font-dmSans text-center items-center mx-auto">
                Hybrid PQ VPN
              </p>
            </div>
            <div className=" grid items-center justify-center  ">
              <img src={people} alt="Image 1" className="w-30 h-20 mx-auto " />
              <p className="sm:text-[20px] text-[20px] my-8 font-dmSans text-center items-center mx-auto">
                Messaging
              </p>
            </div>
            <div className=" grid items-center justify-center  ">
              <img src={cloud} alt="Image 1" className="w-30 h-20 mx-auto " />
              <p className="sm:text-[20px] text-[20px] my-8 font-dmSans text-center items-center mx-auto">
                Approval as a Service
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={rail}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <h2 className="text-gray-900 text-lg title-font font-medium my-2  items-center justify-center ">
                Financial Services
              </h2>

              <p>
                Banks and financial institutions are preparing for a
                quantum-safe future by auditing existing infrastructure to
                identify traditional cryptography that will need to be upgraded.
                These multi-year programmes are some of the largest since Y2K in
                the late 1990’s. As custodians of client funds and sensitive
                information about asset ownership financial institutions are
                taking a proactive approach to post quantum cyber security. We
                are a product of the Barclays TechStars accelerator and our CEO
                is a former head of credit risk at JP Morgan giving us an
                intimate understanding of the cyber security challenges banks
                face. We have consulted with institutions to support
                post-quantum migration planning and our technology is in use
                across the industry at firms like Hitachi Capital.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
