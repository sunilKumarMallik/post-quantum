import React from "react";
import IEFT from "../assets/images/IETF.png";
import nist from "../assets/images/nist.png";
const AboutSection = () => {
  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <div className="justify-center items-center flex">
              <img src={nist} className="h-40 mr-3 mt-2" />
            </div>

            <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
              Post-Quantum is the co-inventor of NIST Round 4 candidate
              algorithm ‘Classic McEliece’, which is already <br /> recommended
              by the German and Dutch governments.
            </p>
            <div className="justify-center items-center flex mb-4">
              <img src={IEFT} className="h-40 mr-3 mt-2" />
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Post-Quantum is the original author of IETF standards for a Hybrid
              Post-Quantum VPN
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
