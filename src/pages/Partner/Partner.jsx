import React, { useEffect } from "react";
import bgred from "../../assets/images/bgred.jpg";
import Lottie from "lottie-react";
import helpCenter from "../../assets/json/helpCenter.json";
import phone from "../../assets/json/phone.json";
import email from "../../assets/json/email.json";
import map from "../../assets/images/map.jpeg";
import cdot from "../../assets/images/cdot.png";
import cdac from "../../assets/images/CDAC.jpg";
import quantumd from "../../assets/images/quantumdice.jpg";
import quantinum from "../../assets/images/Quantinuum.png";
import Works from "../../component/Works";

export default function Partner() {
  return (
    <div className="bg-black">
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
            {/* <a href="#">
                            <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt />
                        </a> */}
            {/* Mobile menu button */}
            <div className="flex lg:hidden"></div>
          </div>
          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        </nav>

        <div className="container px-6 py-16 mx-auto text-start">
          <div className=" mx-auto">
            <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo  text-white dark:text-white mt-8 ">
              Partner
            </h1>
          </div>
          <div
            className="flex items-center justify-center  bg-cover bg-no-repeat "
            style={{
              background: ` url(${map}) `,
            }}
          ></div>
        </div>
      </section>

      <section className="text-gray-600 body-font  rounded-tl-[50px] rounded-br-[50px] overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div
            className=" bg-[#162227] rounded-xl mx-auto p-8 mb-12"
            data-aos="flip-left"
          >
            <h1 className="text-3xl not-italic font-bold leading-9 font-heebo title-font sm:text-4xl text-center text-white my-10">
              <span className="font-heebo text-primary text-4xl sm:text-[40px]">
                Enga
                <span className="border-b-2 border-secondary text-red-500">
                  ge
                </span>
                <span className="text-white">ment</span>
              </span>
            </h1>
            <p className="text-xl md:text-xl lg:text-xl content-center  my-16 lg:mt-6 text-white  font-medium tracking-wide font-heebo w-full  italic text-justify">
              Post Quantum fosters collaboration and innovation through
              strategic partnerships with leading organizations. These alliances
              empower us to accelerate advancements in quantum technology,
              leverage diverse expertise, and deliver impactful solutions across
              various industries.
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2" data-aos="flip-left">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-tr-[50px] overflow-hidden shadow-lg md:shadow-xl ">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center "
                  src={cdot}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-white  mb-3">
                    C-DOT :
                  </h1>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-white mb-3 text-justify">
                    C-DOT, India's leading telecom technology pioneer, is at the
                    forefront of shaping the future of communications. Our
                    partnership explores the integration of cutting-edge quantum
                    technologies in the telecommunications sector, driving
                    innovative solutions that will transform the landscape of
                    connectivity.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2" data-aos="flip-right">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-tr-[50px] overflow-hidden shadow-lg md:shadow-xl ">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={cdac}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-white mb-3">
                    CDAC :
                  </h1>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-white mb-3 text-justify">
                    India's premier R&D organization, CDAC, plays a crucial role
                    in driving national advancements in quantum technology. Our
                    collaboration with CDAC focuses on accelerating the adoption
                    of advanced quantum solutions, empowering India's journey
                    towards becoming a global leader in the quantum age.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2" data-aos="flip-left">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-tr-[50px] overflow-hidden shadow-lg md:shadow-xl ">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={quantumd}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-white mb-3">
                    Quantum Dice :
                  </h1>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-white mb-3 text-justify">
                    A pioneer in quantum random number generation, Quantum Dice
                    holds the key to unlocking secure communication and advanced
                    cryptography. By joining forces, we aim to unlock the full
                    potential of quantum technologies in these areas, ensuring
                    robust security and reliable communication infrastructure.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2" data-aos="flip-right">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-tr-[50px] overflow-hidden shadow-lg md:shadow-xl ">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={quantinum}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-white mb-3">
                    Quantaniuum :
                  </h1>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-white mb-3 text-justify">
                    Quantanium, a leading quantum computing hardware and
                    software company, is at the forefront of developing
                    cutting-edge solutions. Our collaboration focuses on
                    harnessing this expertise to develop and integrate advanced
                    quantum solutions across various industries, shaping the
                    future of quantum computing and its applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Works />
      </section>
    </div>
  );
}
