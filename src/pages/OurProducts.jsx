import React from "react";
import PQChat from "../assets/images/PQchat.png";
import "../pages/heropage.css";
const OurProducts = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="font-dmSans sm:text-4xl text-4xl mb-8 text-gray-900 font-semibold text-center w-full">
            Quantum-Safe Platform: become quantum-safe today
          </h1>
          <div className=" flex justify-center grid-flow-row mb-12">
            <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
              Post-Quantum has been preparing for this day since the company was
              founded in 2009. Our Quantum Safe Platform protects organisations
              from Harvest Now, Decrypt Later attacks today. With products for
              Identity, Virtual Private Networks and Messaging, companies can
              secure their entire digital footprint.
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="flex justify-center object-center mt-8">
                  <img className="lg:h-16 md:h-16 " src={PQChat} alt="blog" />
                </div>

                <div className="p-6">
                  <h1 className="font-dmSans sm:text-4xl text-4xl mb-8 text-gray-900 font-semibold text-center w-full">
                    PQ Chat
                  </h1>
                  <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
                    Secure, seamless, end-to-end. The world’s first
                    quantum-safe, secure, end-to-end encrypted messaging app.
                  </p>
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
                  <img className="lg:h-16 md:h-16 " src={PQChat} alt="blog" />
                </div>

                <div className="p-6">
                  <h1 className="font-dmSans sm:text-4xl text-4xl mb-8 text-gray-900 font-semibold text-center w-full">
                    Hybrid PQ VPN
                  </h1>
                  <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
                    Secure, simple, future proof. our Hybrid PQ VPN secures
                    data-in-transit from traditional and quantum attack.
                  </p>
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
                  <img className="lg:h-16 md:h-16 " src={PQChat} alt="blog" />
                </div>

                <div className="p-6">
                  <h1 className="font-dmSans sm:text-4xl text-4xl mb-8 text-gray-900 font-semibold text-center w-full">
                    Nomidio Identity
                  </h1>
                  <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
                    Nomidio is our quantum-ready multi-factor biometric identity
                    system for secure passwordless sign-in
                  </p>
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
          <div className="mt-8">
            <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]  bullet-before">
              <strong>Interoperable: </strong>so you can establish secure
              communications with partners irrespective of the encryption
              algorithms they use.
            </p>
            <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]  bullet-before">
              <strong>Backward compatible: </strong>so quantum-safe encryption
              can be introduced seamlessly across your existing IT systems.
            </p>
            <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]  bullet-before">
              <strong>Crypto-agile:</strong> so you can use any combination of
              NIST’s post-quantum algorithms or traditional encryption.
            </p>
            <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]  bullet-before">
              <strong>Uniquely,</strong> our multi-factor biometric service
              ‘Nomidio’ ensures adversaries cannot side-step your encryption by
              compromising employee log-in credentials.
            </p>
            <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
              Our products are already helping organisations in defence,
              critical national infrastructure and financial services make the
              transition to post-quantum encryption.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProducts;
