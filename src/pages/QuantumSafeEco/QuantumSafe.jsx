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

import { motion } from "framer-motion";
export default function QuantumSafe() {
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
              The Quantum-Safe Platform
            </h1>
            <p className=" sm:text-2xl text-2xl mb-8  text-[#686868] font-dmSans ">
              Towards a quantum-safe ecosystem
            </p>
            <p className="sm:text-[16px] text-[16px] mb-8 text-[#686868] font-dmSans text-center items-center">
              Quantum computing poses an existential risk that requires an
              end-to-end approach to cyber security. Our vision sees
              quantum-safe protection for data from the moment it is created,
              when it is stored at rest and as it is transmitted across
              networks.
              <br />
              Our vision sees quantum-safe protection for data from the moment
              it is created, when it is stored at rest and as it is transmitted
              across networks.
              <br />
              However, organisations must look beyond communications
              infrastructure and recognise adjacent risks like identity attacks.
              If an adversary can use a quantum computer to obtain user names
              and passwords they will gain ‘legitimate’ access without breaking
              any encryption.
              <br />
              At Post-Quantum we’re the world’s only company that has built a
              Quantum-Safe Platform to protect you across your entire digital
              footprint.
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
          <div className="flex flex-wrap w-full">
            <div className="w-full lg:w-1/2 grid gap-6 text-center lg:text-left">
              <div className="flex flex-col lg:flex-row mb-10 lg:items-start items-center">
                <FaUserShield className="text-gray-900 w-10 h-10" />
                <div className="ml-0 lg:ml-4 mt-4 lg:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium my-2">
                    Identity
                  </h2>
                  <p>
                    Organisations rely on our quantum-ready identity system
                    "Nomido" for secure passowordless sign-n to websites and
                    apps based on a unique multi-factor biometric approach.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row mb-10 lg:items-start items-center">
                <FaTruck className="text-gray-900 w-10 h-10" />
                <div className="ml-0 lg:ml-4 mt-4 lg:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium my-2">
                    Hybrid PQ VPN
                  </h2>
                  <p>
                    We authored the IETF standards for quantum-safe VPNs. Our
                    enterprise VPN is in use at NATO,securing data tranmission
                    from both quantum and traditional attack.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row mb-10 lg:items-start items-center">
                <FaUserShield className="text-gray-900 w-10 h-10" />
                <div className="ml-0 lg:ml-4 mt-4 lg:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium my-2">
                    Messaging
                  </h2>
                  <p>
                    Our PQ Chat app is used by organisations for quantum-safe,
                    end-to-end encrypted, messaging between employees and
                    partners.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row mb-10 lg:items-start items-center">
                <FaKey className="text-gray-900 w-10 h-10" />
                <div className="ml-0 lg:ml-4 mt-4 lg:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium my-2">
                    Approval as a Service
                  </h2>
                  <p>
                    Quorum is a quantum-ready governance system enabling
                    stakeholders to cast cryptographically verifiable votes to
                    sanction actions e.g. permission to access encrypted files.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row mb-10 lg:items-start items-center">
                <FaLock className="text-gray-900 w-10 h-10" />
                <div className="ml-0 lg:ml-4 mt-4 lg:mt-0">
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
            <div className="w-full lg:w-1/2 grid gap-6 text-center lg:text-left">
              <div className="flex flex-col lg:flex-row mb-10 lg:items-start items-center">
                <div className="ml-0 lg:ml-4 mt-4 lg:mt-0">
                  <p>
                    All our products are underpinned by 10+ years of deep
                    post-quantum cryptography R&D. Our submission to NIST’s Post
                    Quantum competition is the only remaining finalist in the
                    ‘code-based’ category and therefore stands a strong chance
                    of inclusion in NIST’s final standardisation. Despite the
                    success of our submission we remain committed to the
                    principle of ‘crypto-agility’ and our products have been
                    designed to work with whichever encryption algorithms are
                    selected by NIST. Most importantly and unlike the majority
                    of teams working in post-quantum encryption we don’t focus
                    solely on mathematics. We’re also engineers and our ethos is
                    applying cryptography to build usable quantum-safe products
                    that solve problems in high security environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
