import React from "react";
import ReactPlayer from "react-player";
import "../pages/heropage.css";

const Hero = () => {
  return (
    <div className="bg-[#e4ebf2]">
      {/* ReactPlayer section */}



      <div className="relative">
        <div className="relative bg-opacity-75 bg-[#007FA4]">
          <svg
            className="absolute inset-x-0 bottom-0 text-white"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-full mb-12 xl:mb-0 xl:pr-16 ">
                <h1 className="title-font sm:text-5xl text-4xl mb-8 font-bold text-white font-dmSans">
                  Helping organisations become quantum-safe
                  <br /> across their entire digital footprint
                </h1>
                <p className="sm:text-base text-base mb-8 font-bold text-white font-dmSans">
                  Post-Quantum is upgrading the world to next-generation encryption.
                  Our Quantum-Safe Platform includes modular software for Identity,
                  Transmission and Encryption that protect organisations across
                  their entire digital footprint. Products are interoperable,
                  backward compatible and crypto-agile - ensuring a smooth
                  transition to the next generation of encryption. Post-Quantum has
                  worked with NATO for a number of years to ensure its
                  communications are secure against quantum attack.
                </p>
                <p className="sm:text-base text-base mb-8 font-bold text-white font-dmSans italic">
                  "Securing NATO's communications for the quantum era is paramount
                  to our ability to operate effectively without fear of
                  interception. With the threat of 'harvest now and decrypt later'
                  looming over secure communications, this is an increasingly
                  important effort to protect against current and future threats"
                </p>
                <strong className="font-dmSans sm:text-base text-base font-bold text-white">
                  Konrad Wrona, Principal Scientist, NATO Cyber Security Centre.
                </strong>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="react-player-container overflow-hidden rounded-lg mt-10">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=V8eWxOLXLK8"
                className="react-player"
                playing={false}
                controls
              />
            </div>
          </div>
        </div>
      </div>




      {/* Section-2 */}
      <div className="relative">
        <div className="relative bg-opacity-75 bg-[#e4ebf2]">
          <svg
            className="absolute inset-x-0 bottom-0 text-white"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-full mb-12 xl:mb-0 xl:pr-16 ">
                <h1 className="title-font sm:text-5xl text-4xl mb-8 font-bold text-white font-dmSans">
                  Quantum Computers pose an existential threat to our world
                </h1>
                <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
                  Not in 10 years, today. Nation state adversaries are harvesting
                  data now, to decrypt it later with a quantum computer.
                </p>
                <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
                  Unless action is taken:
                </p>
                <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868] bullet-before">
                  Government secrets will be exposed
                </p>
                <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868] bullet-before">
                  Power networks will be disrupted
                </p>
                <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868] bullet-before">
                  Trust in the digital economy will collapse
                </p>
                <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
                  The US is leading the global response. The Quantum Computing
                  Cybersecurity Preparedness Act ​​requires US Federal Agencies to
                  upgrade to post-quantum <br className="hidden lg:block" />{" "}
                  encryption and to report their progress to Congress. In the coming
                  months, the foundations for a quantum-safe future will be laid.
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>




    </div>
  );
};

export default Hero;
