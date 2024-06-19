import React from "react";
import Revolution from "../../assets/images/Revolution.png";
import IconFC from "../../assets/images/righticon.png";
import bgred from "../../assets/images/bgred.jpg";
import MobileAppview from "../../assets/images/MobileAppview.png";
import { Link } from "react-router-dom";
import "./QCS.css";
import Card from "../../Card/Card";
import HeartEmoji from "../../assets/images/smiley.jpeg";
import Glasses from "../../assets/images/smiley.jpeg";
import Humble from "../../assets/images/smiley.jpeg";


import { motion } from "framer-motion";
export default function QCS() {
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
              Quantum Communication Solution
            </h1>
            <p className=" text-xl md:text-xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start ">
              Democratizing Data Protection With Post Quantum Encryption
              Technologies
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 ">
              <h2 className="text-gray-200 text-4xl title-font font-medium mb-2">
                Post quantum cryptography (PQC)
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a
                href="#PQC"
                className="mt-3 text-indigo-500 inline-flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  const PQCSection = document.getElementById("PQC");
                  if (PQCSection) {
                    PQCSection.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-200 text-4xl title-font font-medium mb-2">
                Quantum Key Distribution (QKD)
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a
                href="#QKD"
                className="mt-3 text-indigo-500 inline-flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  const QKDSection = document.getElementById("QKD");
                  if (QKDSection) {
                    QKDSection.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 ">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <circle cx={6} cy={6} r={3} />
                <circle cx={6} cy={18} r={3} />
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
              </svg>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 sm:flex-row flex-col mb-10 ">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-200 text-4xl title-font font-medium mb-2">
                Quantum Random number generator (QRNG)
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a
                href="#QRNG"
                className="mt-3 text-indigo-500 inline-flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  const QRNGSection = document.getElementById("QRNG");
                  if (QRNGSection) {
                    QRNGSection.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-200 text-4xl title-font font-medium mb-2">
                Quantum Network
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 ">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <circle cx={6} cy={6} r={3} />
                <circle cx={6} cy={18} r={3} />
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
              </svg>
            </div>
          </div>

          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 sm:flex-row flex-col mb-10 ">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-200 text-4xl title-font font-medium mb-2">
                Quantum Information Theory/Quantum Internet
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto ">
          <div
            id="PQC"
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
            <div className="md:max-w-lg md:w-1/4 w-full mb-10 md:mb-0 md:ml-20 px-3 py-10">
              <img
                className="object-cover object-center w-full h-full"
                alt="hero"
                src={Revolution}
              />
            </div>
            <div className="text-3xl not-italic font-bold leading-9 md:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left  font-heebo mt-5 text-white">
              <h2 className="mt-6 mb-2 text-red-500 ">
                {" "}
                Solution 1 : PQE Messaging Application{" "}
              </h2>
              <div className="flex items-start mb-4">
                <span className="flex-shrink-0">

                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white">
                  Quartz- SQ is an Instant messaging service platform that
                  promises End to End Post Quantum Encryption on your
                  smartphones Quartz offers a comprehensive solution to address
                  all your communication requirements. Our platform ensures
                  communication integrity and cohesion, with controls tailored
                  to your functional structure. We prioritize operational
                  confidentiality and security, utilizing encryption and
                  in-premises data security measures. Administrative control
                  over all communication, coupled with monitoring, auditing, and
                  a robust repository, ensures a secure environment. Our
                  platform offers easy integration, efficient and speedy
                  performance, and a secure architecture that is not
                  resource-intensive. Utilizing NIST-approved algorithms, we
                  provide wide utilization and implementation avenues. Our
                  implementation covers both client and server sides, ensuring
                  secure key exchange and a quantum-secure tunnel. We also offer
                  effective message encryption for a smooth chat experience,
                  along with PQE implementation for efficient app performance
                  and security. With regular upgrades and updates, we address
                  variabilities to keep your communication secure and
                  efficient."
                </p>
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
          </div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
              <div className="text-center mb-14">

                <h1 className="text-3xl not-italic font-bold leading-9 font-heebo title-font sm:text-4xl text-center text-white my-10">
                  <span className="font-heebo text-primary text-4xl sm:text-[40px] uppercase">
                    Use Case-{" "}
                    <span className="border-b-2 border-secondary text-red-500 uppercase">
                      Indian Air
                    </span>
                    <span className="text-white uppercase"> Force QROOM</span>
                  </span>
                </h1>


              </div>
              <div className="flex flex-wrap  place-content-center ">
                <div className=" flex m-auto mb-6 lg:w-full md:w-1/2 sm:w-1/4  place-content-center">
                  <img
                    className="object-non object-center w-auto "
                    alt="hero"
                    src={MobileAppview}
                  />
                </div>
                {/* <div className=" flex m-auto mb-28 w-1/4  place-content-center">
                  <img className="object-cover w-auto" alt="hero" src={MobileApp} />
                </div> */}
                {/* <div className=" m-auto flex m-auto mb-28 w-1/4  place-content-center">
                    <img className="object-cover w-auto " alt="hero" src={sc3} />
                  </div>
                  <div className=" flex m-auto mb-28 w-1/4  place-content-center">
                    <img className="object-cover w-auto " alt="hero" src={sc4} />
                  </div> */}
              </div>
            </div>
          </section>

          <div className="flex flex-col md:flex-row shadow-lg md:shadow-xl bg-[#212534] mt-10 group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg  " data-aos="zoom-in-left">


            <span
              className="absolute h-0 w-0.5 right-0 top-0  bg-red-700 transition-all duration-500 ease-out group-hover:h-full"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
              aria-hidden="true"
            />
            <div className="text-3xl not-italic font-bold leading-9 md:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left  font-heebo mt-5 text-white">
              <h2 className="mt-6 mb-2 text-red-500">
                Solution 2 : Data centre Security{" "}
              </h2>
              <div className="flex items-start mb-4">
                <span className="flex-shrink-0">
                  {/* <img
                    className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                    src={IconFC}
                    alt=""
                  /> */}
                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white ">
                  A fully integrated Post Quantum encrypted data at rest within
                  the data center. Additionally, critical data when transported
                  over the air to any device will be post-quantum encrypted and
                  available for reading only to authorized personnel on
                  pre-authorized devices. This must be done with the latest NIST
                  approved Quantum Algorithms (with a plugin on server side and
                  on client applications) and with low Latency. The entire
                  system functions irrespective of the algorithms used. It has
                  been designed as a plug-and-play whereby any post-quantum
                  encryption can be plugged into the system. Post Quantum
                  through its R&D lab is continuously improving the efficiencies
                  of the algorithm used. As and when we identify a more suitable
                  post-quantum encryption algorithm, we will immediately upgrade
                  the system and provide all updates & training within 7 days .
                </p>
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
            <div className="md:max-w-lg md:w-1/4 w-full mb-10 md:mb-0 md:ml-20 px-3 py-10">
              <img
                className="object-cover object-center w-full h-full"
                alt="hero"
                src={Revolution}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row shadow-lg md:shadow-xlbg-[#212534] mt-10 group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg" data-aos="zoom-in-right">
            <span
              className="absolute h-0 w-0.5 right-0 top-0  bg-red-700 transition-all duration-500 ease-out group-hover:h-full"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
              aria-hidden="true"
            />

            <div className="md:max-w-lg md:w-1/4 w-full mb-10 md:mb-0 md:ml-20 px-3 py-10">
              <img
                className="object-cover object-center w-full h-full"
                alt="hero"
                src={Revolution}
              />
            </div>
            <div className="text-3xl not-italic font-bold leading-9 md:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left  font-heebo mt-5 text-white">

              <h2 className="mt-6 mb-2 text-red-500">
                {" "}
                Solution 3 : Secure VPN & Web Browser{" "}
              </h2>
              <div className="flex items-start mb-4">
                <span className="flex-shrink-0">

                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white">
                  Quartz offers a comprehensive solution to address all your
                  communication requirements. Our platform ensures communication
                  integrity and cohesion, with controls tailored to your
                  functional structure. We prioritize operational
                  confidentiality and security, utilizing encryption and
                  in-premises data security measures. Administrative control
                  over all communication, coupled with monitoring, auditing, and
                  a robust repository, ensures a secure environment. Our
                  platform offers easy integration, efficient and speedy
                  performance, and a secure architecture that is not
                  resource-intensive. Utilizing NIST-approved algorithms, we
                  provide wide utilization and implementation avenues. Our
                  implementation covers both client and server sides, ensuring
                  secure key exchange and a quantum-secure tunnel. We also offer
                  effective message encryption for a smooth chat experience,
                  along with PQE implementation for efficient app performance
                  and security. With regular upgrades and updates, we address
                  variabilities to keep your communication secure and
                  efficient."
                </p>
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
          </div>

          <div className="flex flex-col md:flex-row shadow-lg md:shadow-xl bg-[#212534] mt-10 
          group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg" data-aos="zoom-in-right">
            <span
              className="absolute h-0 w-0.5 right-0 top-0  bg-red-700 transition-all duration-500 ease-out group-hover:h-full"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
              aria-hidden="true"
            />
            <div className="text-3xl not-italic font-bold leading-9 md:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left  font-heebo mt-5 text-white">
              <h2 className="mt-6 mb-2 text-red-500">
                Solution 4: Secure 5G communication{" "}
              </h2>
              <div className="flex items-start mb-4">
                <span className="flex-shrink-0">
                  {/* <img
                    className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                    src={IconFC}
                    alt=""
                  /> */}
                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white ">
                  The research, development, and delivery of a fully working
                  end-to-end post quantum encrypted secure chips for digital
                  security applications (integrated security platforms for RoT,
                  microcontrollers, NFCs, secure smart cards, IoT, Blockchain
                  and AI). Once embedded with the private key, these secure
                  elements cannot be hacked or tampered with, guaranteeing that
                  these private keys cannot be read or copied. A layer of post
                  quantum encryption and quantum tunneling guarantees the data
                  being sent between two such elements. These secure elements
                  guarantee the authentication of the components (eg servers,
                  mobile phones, IoT platforms, etc). The military applications
                  are many where secure authentication between 2 systems is
                  required. This could be between command-center and any mobile
                  units (e.g tanks, infantry, aircraft, drones etc). This could
                  also be for secure communication between hand-held devices and
                  servers.
                </p>
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

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto ">
          <div
            id="QKD"
            className="flex flex-col md:flex-row shadow-lg md:shadow-xl  bg-[#212534] group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg"
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
            <div className="md:max-w-lg md:w-1/4 w-full mb-10 md:mb-0 md:ml-20 px-3 py-10">
              <img
                className="object-cover object-center w-full h-full"
                alt="hero"
                src={Revolution}
              />
            </div>
            <div className="text-3xl not-italic font-bold leading-9 md:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left  font-heebo mt-5 text-white">
              <h2 className="mt-6 mb-2 text-red-500">
                {" "}
                solution 1: Free Space QKD
              </h2>
              <div className="flex items-start mb-4">
                <span className="flex-shrink-0">
                  {/* <img
                    className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                    src={IconFC}
                    alt=""
                  /> */}
                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white">
                  In free-space QKD, quantum signals are transmitted through the
                  atmosphere (typically using lasers) between two parties, such
                  as a satellite and a ground station, or between two ground
                  stations.
                  <p className="text-3xl font-serif font-bold"> Advantages: </p>
                  Long-distance communication: Free-space QKD, especially
                  satellite-based QKD, is an appropriate solution for
                  long-distance communication, allowing safe communication
                  between distant places on Earth or in space. Low latency:
                  Compared to fiber-based QKD, free-space QKD can offer lower
                  latency, which is important for applications where real-time
                  communication is critical, such as in military operations,
                  secure communication in government agencies. Scalability:
                  Free-space QKD may be scaled up to create secure communication
                  networks that span huge areas, such as cities or regions, by
                  deploying several nodes and satellites. Global coverage:
                  Satellite-based free-space QKD can provide secure
                  communication coverage around the world, even distant or
                  isolated areas where other communication infrastructure may be
                  restricted.
                </p>
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

          </div>

          <div className="flex flex-col md:flex-row shadow-lg md:shadow-xl bg-[#212534] mt-10 group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg" data-aos="zoom-in-right">
            <span
              className="absolute h-0 w-0.5 right-0 top-0  bg-red-700 transition-all duration-500 ease-out group-hover:h-full"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
              aria-hidden="true"
            />
            <div className="text-3xl not-italic font-bold leading-9 md:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left  font-heebo mt-5 text-white">
              <h2 className="mt-6 mb-2 text-red-500 ">
                Solution 2: Optical fiber based QKD{" "}
              </h2>
              <div className="flex items-start mb-4">
                <span className="flex-shrink-0">

                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white ">
                  Optical fiber-based quantum key distribution (QKD) is a method
                  of secure communication that utilizes the principles of
                  quantum mechanics to exchange the cryptographic keys over a
                  fiber-optic link.
                  <p className="text-3xl font-serif font-bold">Advantages: </p>
                  Compatibility: Fiber-based QKD is compatible with current
                  fiber-optic communication infrastructure, making it simple to
                  integrate into existing networks without requiring massive
                  infrastructure upgrades. High key generation rates:
                  Fiber-based QKD systems may reach high key generation rates,
                  which enable secure communication at high speeds suited for
                  many practical applications. Reliability: Fiber-based QKD
                  systems are generally more reliable than free-space QKD
                  systems, as they are less affected by atmospheric conditions
                  and other environmental factors.
                </p>
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
            <div className="md:max-w-lg md:w-1/4 w-full mb-10 md:mb-0 md:ml-20 px-3 py-10">
              <img
                className="object-cover object-center w-full h-full"
                alt="hero"
                src={Revolution}
              />
            </div>
          </div>

          <div
            id="QRNG"
            className="flex flex-col md:flex-row shadow-lg md:shadow-xl  bg-[#212534] mt-10 group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg" data-aos="zoom-in-right"
          >
            <span
              className="absolute h-0 w-0.5 right-0 top-0  bg-red-700 transition-all duration-500 ease-out group-hover:h-full"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
              aria-hidden="true"
            />
            <div className="md:max-w-lg md:w-1/4 w-full mb-10 md:mb-0 md:ml-20 px-3 py-10 ">
              <img
                className="object-cover object-center w-full h-full"
                alt="hero"
                src={Revolution}
              />
            </div>
            <div className="text-3xl not-italic font-bold leading-9 md:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left  font-heebo mt-5 text-white">
              <h2 className="mt-6 mb-2 text-red-500 ">
                {" "}
                Solution 1: Post Quantum QRNG Hardware Based Powered By
                Quantum Dice, UK
              </h2>
              <div className="flex items-start mb-4">
                <span className="flex-shrink-0">
                  {/* <img
                    className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                    src={IconFC}
                    alt=""
                  /> */}
                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white">
                  We offer a range of reliable and high-performance hardware
                  based QRNG devices to meet the diverse needs of our clients.
                  Our product provides
                  <p className="text-3xl font-serif font-bold">
                    Ultimate Security:{" "}
                  </p>
                  Thanks to the built-in DISCTM protocol, VERTEX QRNG QD-1100
                  performs a continuous entropy evaluation on each key providing
                  live quantum assurance.
                  <p className="text-3xl font-serif font-bold">
                    Ultra-fast generation rates :{" "}
                  </p>
                  In standard operating conditions, VERTEX QRNG QD-1100 is
                  capable of generating fully postprocessed numbers at a
                  market-leading rate of 2.66 Gb/s.
                  <p className="text-3xl font-serif font-bold">
                    Compact footprint :{" "}
                  </p>
                  Thanks to the standard half-length PCIe card form factor,
                  VERTEX QRNG QD-1100 can be easily integrated within servers,
                  PCs and hardware security systems.
                </p>
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
          </div>

          <div className="flex flex-col md:flex-row shadow-lg md:shadow-xl bg-[#212534] mt-10 group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg ">
            <span
              className="absolute h-0 w-0.5 right-0 top-0  bg-red-700 transition-all duration-500 ease-out group-hover:h-full"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
              aria-hidden="true"
            />
            <div className="text-3xl not-italic font-bold leading-9 md:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left  font-heebo mt-5 text-white">
              <h2 className="mt-6 mb-2 text-red-500">
                Solution 2: Post Quantum Cloud Based RNGPowered by Quantinuum
              </h2>
              <div className="flex items-start mb-4">
                <span className="flex-shrink-0">
                  {/* <img
                    className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                    src={IconFC}
                    alt=""
                  /> */}
                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white ">
                  The research, development, and delivery of a fully working
                  end-to-end post quantum encrypted secure chips for digital
                  security applications (integrated security platforms for RoT,
                  microcontrollers, NFCs, secure smart cards, IoT, Blockchain
                  and AI). Once embedded with the private key, these secure
                  elements cannot be hacked or tampered with, guaranteeing that
                  these private keys cannot be read or copied. A layer of post
                  quantum encryption and quantum tunneling guarantees the data
                  being sent between two such elements. These secure elements
                  guarantee the authentication of the components (eg servers,
                  mobile phones, IoT platforms, etc). The military applications
                  are many where secure authentication between 2 systems is
                  required. This could be between command-center and any mobile
                  units (e.g tanks, infantry, aircraft, drones etc). This could
                  also be for secure communication between hand-held devices and
                  servers.
                </p>
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
            <div className="md:max-w-lg md:w-1/4 w-full mb-10 md:mb-0 md:ml-20 px-3 py-10">
              <img
                className="object-cover object-center w-full h-full"
                alt="hero"
                src={Revolution}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row shadow-lg md:shadow-xl  bg-[#212534] mt-10  group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg" data-aos="zoom-in-right">
            <span
              className="absolute h-0 w-0.5 right-0 top-0  bg-red-700 transition-all duration-500 ease-out group-hover:h-full"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
              aria-hidden="true"
            />
            <div className="md:max-w-lg md:w-1/4 w-full mb-10 md:mb-0 md:ml-20 px-3 py-10 ">
              <img
                className="object-cover object-center w-full h-full"
                alt="hero"
                src={Revolution}
              />
            </div>
            <div className="text-3xl not-italic font-bold leading-9 md:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left  font-heebo mt-5 text-white">
              <h2 className="mt-6 mb-2 text-red-500 ">
                Solution 3: Secure 5G communication{" "}
              </h2>
              <div className="flex items-start mb-4">
                <span className="flex-shrink-0">
                  {/* <img
                    className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                    src={IconFC}
                    alt=""
                  /> */}
                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white">
                  The research, development, and delivery of a fully working
                  end-to-end post quantum encrypted secure chips for digital
                  security applications (integrated security platforms for RoT,
                  microcontrollers, NFCs, secure smart cards, IoT, Blockchain
                  and AI). Once embedded with the private key, these secure
                  elements cannot be hacked or tampered with, guaranteeing that
                  these private keys cannot be read or copied. A layer of post
                  quantum encryption and quantum tunneling guarantees the data
                  being sent between two such elements. These secure elements
                  guarantee the authentication of the components (eg servers,
                  mobile phones, IoT platforms, etc). The military applications
                  are many where secure authentication between 2 systems is
                  required. This could be between command-center and any mobile
                  units (e.g tanks, infantry, aircraft, drones etc). This could
                  also be for secure communication between hand-held devices and
                  servers.
                </p>
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
          </div>
        </div>
      </section>
    </div>
  );
}
