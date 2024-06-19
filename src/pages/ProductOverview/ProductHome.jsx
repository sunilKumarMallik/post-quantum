/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from "react";
import Revolution from "../../assets/images/Revolution.png";
import bgred from "../../assets/images/bgred.jpg";
import { Link } from "react-router-dom";

export default function ProductHome() {
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
              Product Overview
            </h1>
            <p className=" text-xl md:text-xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start ">
              Democratizing Data Protection With Post Quantum Encryption
              Technologies
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 md:py-14 mx-auto">
          {/* One */}
          <div
            className="group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg"
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
            <div className="md:w-1/3 w-full md:max-w-sm mb-10 md:mb-0 md:ml-10 px-3 py-10">
              <img
                className="object-cover object-center w-full"
                alt="hero"
                src={Revolution}
              />
            </div>
            <div className="flex-1 px-4 md:px-8 py-6 md:py-10 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-red-500">
                Post-Quantum Cryptography (PQC)
              </h2>
              <p className="text-lg lg:text-xl font-normal leading-relaxed text-white mb-6">
                We have developed an end-to-end quantum proof encryption
                technology (based on NIST approved finalists) to provide highly
                secure infrastructure powering government (G2G) and enterprise
                (B2G) applications.
              </p>
              <Link to="/pqc">
                <div className="flex justify-start">
                  <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                    READ MORE
                    <span className="ml-2">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </Link>
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
          {/* Two */}
          <div
            className="group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg"
            data-aos="zoom-in-left"
          >
            <span
              className="absolute h-0 w-0.5 right-0 top-0  bg-red-700 transition-all duration-500 ease-out group-hover:h-full"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
              aria-hidden="true"
            />
            <div className="flex-1 px-4 md:px-8 py-6 md:py-10 flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2">
              <h2 className="text-2xl text-red-500 md:text-3xl lg:text-4xl font-bold mb-4">
                Quantum Key Distribution (QKD)
              </h2>
              <p className="text-lg lg:text-xl font-normal leading-relaxed text-white mb-6">
                Quantum Key Distribution (QKD) offers unbreakable encryption by
                using quantum mechanics to secure communication channels. It
                ensures that keys exchanged between parties are secure against
                any computational or eavesdropping attacks, providing ultimate
                data security.
              </p>
              <a href="/qkd" className="flex justify-start">
                <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                  READ MORE
                  <span className="ml-2">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </button>
              </a>
            </div>
            <div className="md:w-1/3 w-full md:max-w-sm mb-10 md:mb-0 md:mr-10 px-3 py-10 order-2 md:order-1">
              <img
                className="object-cover object-center w-full"
                alt="hero"
                src={Revolution}
              />
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

          <div
            className="group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg"
            data-aos="zoom-in-left"
          >
            <span
              className="absolute h-0 w-0.5 right-0 top-0  bg-red-700 transition-all duration-500 ease-out group-hover:h-full"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
              aria-hidden="true"
            />
            <div className="md:w-1/3 w-full md:max-w-sm mb-10 md:mb-0 md:ml-10 px-3 py-10">
              <img
                className="object-cover object-center w-full"
                alt="hero"
                src={Revolution}
              />
            </div>
            <div className="flex-1 px-4 md:px-8 py-6 md:py-10 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-2xl text-red-500 md:text-3xl lg:text-4xl font-bold mb-4">
                Quantum Random Number Generation (QRNG)
              </h2>
              <p className="text-lg lg:text-xl font-normal leading-relaxed text-white mb-6">
                Quantum Random Number Generation (QRNG) utilizes quantum
                phenomena to generate truly random numbers, essential for secure
                encryption and cryptographic applications. Unlike pseudo-random
                number generators, QRNGs provide unpredictable and inherently
                random sequences, ensuring the highest level of security for
                sensitive data and communications.
              </p>
              <Link to="/qrng">
                <div className="flex justify-start">
                  <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                    READ MORE
                    <span className="ml-2">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </Link>
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

          <div
            className="group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg"
            data-aos="zoom-in-left"
          >
            <span
              className="absolute h-0 w-0.5 right-0 top-0  bg-red-700 transition-all duration-500 ease-out group-hover:h-full"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
              aria-hidden="true"
            />
            <div className="flex-1 px-4 md:px-8 py-6 md:py-10 flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2">
              <h2 className="text-2xl text-red-500 md:text-3xl lg:text-4xl font-bold mb-4">
                Quantum Networks
              </h2>
              <p className="text-lg lg:text-xl font-normal leading-relaxed text-white mb-6">
                Quantum Networks harness the principles of quantum mechanics to
                transmit and process information securely. They enable quantum
                key distribution (QKD) and quantum teleportation,
                revolutionizing secure communication. By leveraging entanglement
                and superposition, quantum networks offer unprecedented security
                and computational capabilities, paving the way for the next
                generation of communication technologies.
              </p>
              <a href="/qn" className="flex justify-start">
                <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                  READ MORE
                  <span className="ml-2">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </button>
              </a>
            </div>
            <div className="md:w-1/3 w-full md:max-w-sm mb-10 md:mb-0 md:mr-10 px-3 py-10 order-2 md:order-1">
              <img
                className="object-cover object-center w-full"
                alt="hero"
                src={Revolution}
              />
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

          {/* Five */}
          <div
            className="group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg"
            data-aos="zoom-in-left"
          >
            <span
              className="absolute h-0 w-0.5 right-0 top-0  bg-red-700 transition-all duration-500 ease-out group-hover:h-full"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
              aria-hidden="true"
            />
            <div className="md:w-1/3 w-full md:max-w-sm mb-10 md:mb-0 md:ml-10 px-3 py-10">
              <img
                className="object-cover object-center w-full"
                alt="hero"
                src={Revolution}
              />
            </div>
            <div className="flex-1 px-4 md:px-8 py-6 md:py-10 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-2xl text-red-500 md:text-3xl lg:text-4xl font-bold mb-4">
                Quantum Secure Chip/Semi-conductor design and packaging
              </h2>
              <p className="text-lg lg:text-xl font-normal leading-relaxed text-white mb-6">
                Quantum Secure Chip/Semiconductor Design and Packaging involves
                leveraging quantum mechanics to design and package chips with
                enhanced security features. These chips use quantum properties
                to protect data and resist attacks, offering a new level of
                security for sensitive information. Quantum secure chips are
                designed to be tamper-resistant and can securely store and
                process data, making them ideal for applications requiring high
                levels of security, such as banking, defense, and
                communications.
              </p>
              <Link to="/qsc">
                <div className="flex justify-start">
                  <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                    READ MORE
                    <span className="ml-2">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </Link>
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
          {/* Six */}
          <div
            className="group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg"
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
            <div className="md:w-1/3 w-full md:max-w-sm mb-10 md:mb-0 md:ml-10 px-3 py-10">
              <img
                className="object-cover object-center w-full"
                alt="hero"
                src={Revolution}
              />
            </div>
            <div className="flex-1 px-4 md:px-8 py-6 md:py-10 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-2xl  text-red-500 md:text-3xl lg:text-4xl font-bold mb-4">
                Quantum Information Theory/Quantum Internet
              </h2>
              <p className="text-lg lg:text-xl font-normal leading-relaxed text-white mb-6">
                Quantum Information Theory explores the fundamental limits of
                information processing in quantum systems, leading to the
                development of quantum algorithms and protocols. Quantum
                Internet aims to establish a global network where quantum
                information can be transmitted securely using quantum
                communication protocols such as quantum key distribution (QKD)
                and quantum teleportation. These advancements hold the promise
                of revolutionizing communication, cryptography, and computation,
                ushering in a new era of secure and efficient information
                exchange.
              </p>
              <Link to="/qit">
                <div className="flex justify-start">
                  <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                    READ MORE
                    <span className="ml-2">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </Link>
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
          {/* Seven */}
          <div
            className="group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg"
            data-aos="zoom-in-left"
          >
            <span
              className="absolute h-0 w-0.5 right-0 top-0  bg-red-700 transition-all duration-500 ease-out group-hover:h-full"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
              aria-hidden="true"
            />
            <div className="md:w-1/3 w-full md:max-w-sm mb-10 md:mb-0 md:ml-10 px-3 py-10">
              <img
                className="object-cover object-center w-full"
                alt="hero"
                src={Revolution}
              />
            </div>
            <div className="flex-1 px-4 md:px-8 py-6 md:py-10 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-2xl text-red-500 md:text-3xl lg:text-4xl font-bold mb-4">
                Quantum AI
              </h2>
              <p className="text-lg lg:text-xl font-normal leading-relaxed text-white mb-6">
                At Post Quantum, we are driven by a singular mission: to empower businesses and society by tackling the world's most intricate computational challenges through the transformative power of quantum computing.<br />
                We recognize the immense potential of quantum technology to revolutionize the way we compute. Unlike traditional computers, quantum machines leverage the principles of quantum mechanics to solve problems that are currently intractable even for the most powerful supercomputers. This allows us to complement high-performance computing, unlocking entirely new possibilities for tackling the most valuable business problems across various industries.<br />
                Through strategic collaborations with leading companies, we are actively developing software solutions that directly address their pressing computational challenges. We strategically focus on areas where quantum computing holds the greatest early promise, including:<br />
                •	Life Sciences: Accelerating drug discovery and materials science advancements.<br />
                •	Financial Services: Optimizing risk management, anomaly detection and portfolio optimization strategies.<br />
                •	Logistics: Streamlining complex supply chain operations and improving efficiency.<br />
                We offer a comprehensive suite of solutions, designed to meet the specific needs of your organization.

              </p>
              <Link to="/qai">
                <div className="flex justify-start">
                  <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                    READ MORE
                    <span className="ml-2">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </Link>
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
        </div>
      </section>
    </div>
  );
}
