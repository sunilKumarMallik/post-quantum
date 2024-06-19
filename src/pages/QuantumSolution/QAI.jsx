import React from "react";
import Revolution from "../../assets/images/Revolution.png";
import bgred from "../../assets/images/bgred.jpg";
import { Link } from "react-router-dom";
import IconFC from "../../assets/images/righticon.png";

import { motion } from "framer-motion";
export default function QAI() {
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
              Quantum Artificial intelligence{" "}
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
                Pharma AI
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a
                href="#pharmaAI"
                className="mt-3 text-indigo-500 inline-flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  const pharmaAISection = document.getElementById("pharmaAI");
                  if (pharmaAISection) {
                    pharmaAISection.scrollIntoView({
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
                Fintech AI
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a
                href="#financeAI"
                className="mt-3 text-indigo-500 inline-flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  const financeAISection = document.getElementById("financeAI");
                  if (financeAISection) {
                    financeAISection.scrollIntoView({
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
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto ">
          <div
            id="pharmaAI"
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
            <div className="text-3xl not-italic font-bold leading-9 md:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left  font-heebo mt-5">
              <h2 className="mt-6 mb-2 text-red-500">
                {" "}
                Pharma/ Revolutionizing Healthcare with QAI{" "}
              </h2>
              <div className="flex items-start mb-4">
                <span className="flex-shrink-0">
                  <img
                    className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                    src={IconFC}
                    alt=""
                  />
                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white">
                  Embark on a groundbreaking journey in drug discovery and
                  healthcare innovation with Post Quantum's QAI solutions.
                  Our cutting-edge approach leverages quantum algorithms to:
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

              <div className="flex items-start mb-4">
                <span className="flex-shrink-0">
                  <img
                    className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                    src={IconFC}
                    alt=""
                  />
                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white">
                  Accelerate molecular simulations for faster drug development.
                </p>
              </div>
              <div className="flex items-start mb-4">
                <span className="flex-shrink-0">
                  <img
                    className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                    src={IconFC}
                    alt=""
                  />
                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white">
                  Design optimal drug candidates, leading to swifter market
                  entry and reduced costs.
                </p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0">
                  <img
                    className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                    src={IconFC}
                    alt=""
                  />
                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white">
                  Revolutionize the pharmaceutical landscape by bringing
                  life-saving treatments to patients sooner and more
                  efficiently.
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-xl not-italic font-bold leading-relaxed text-white">
                  Quantum Drug Discovery:
                </p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0">
                  <img
                    className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                    src={IconFC}
                    alt=""
                  />
                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white">
                  Efficient Simulations: Utilize quantum simulations and
                  optimization for faster, cost-effective complex molecular
                  simulations and compound screening.
                </p>
              </div>
              <div className="flex items-start mb-10">
                <span className="flex-shrink-0">
                  <img
                    className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                    src={IconFC}
                    alt=""
                  />
                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white">
                  Timely Market Entry: Significantly reduce time and cost to
                  market for new drugs through optimized drug discovery
                  timelines (up to 30% faster).
                </p>
              </div>
            </div>
          </div>

          <div
            id="financeAI"
            className="flex flex-col md:flex-row shadow-lg md:shadow-xl bg-[#212534] mt-10 group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg"
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
            <div className="text-3xl not-italic font-bold leading-9 md:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left  font-heebo mt-5 text-white">
              <h2 className="mt-6 mb-2 text-red-500 "> Finance </h2>
              <div className="flex items-start mb-4">
                <span className="flex-shrink-0">
                  <img
                    className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                    src={IconFC}
                    alt=""
                  />
                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white ">
                  Empower your financial future with Post Quantum's QAI
                  solutions. Our cutting-edge approach unlocks:
                </p>
              </div>

              <div className="flex items-start mb-4">
                <span className="flex-shrink-0">
                  <img
                    className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                    src={IconFC}
                    alt=""
                  />
                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white ">
                  Optimized portfolios: Leverage quantum machine learning and
                  optimization to maximize returns and make smarter investment
                  decisions.
                </p>
              </div>
              <div className="flex items-start mb-4">
                <span className="flex-shrink-0">
                  <img
                    className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                    src={IconFC}
                    alt=""
                  />
                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white ">
                  Enhanced risk management: Utilize advanced stochastic
                  modelling powered by quantum algorithms to mitigate risk and
                  stay ahead in a dynamic market.
                </p>
              </div>

              <div className="flex items-start mb-10">
                <span className="flex-shrink-0">
                  <img
                    className="p-1 w-6 h-6 mt-1 bg-white mr-2 "
                    src={IconFC}
                    alt=""
                  />
                </span>
                <p className="text-xl not-italic font-normal leading-relaxed text-white ">
                  Real-time fraud detection: Combat financial threats with
                  quantum algorithms that enable accurate and immediate anomaly
                  detection in banking.
                </p>
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
    </div>
  );
}
