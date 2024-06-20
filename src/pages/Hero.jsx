import { RoundedCorner } from "@mui/icons-material";
import React from "react";
import ReactPlayer from "react-player";
const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mt-12">
        <div className="container mx-auto flex px-5 py-24  flex-col items-center">
          <div className=" lg:flex-grow  lg:pr-8 md:pr-8 lg:pl-16 md:pl-8  flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-8 font-bold text-gray-900 font-dmSans">
              Helping organisations become quantum-safe
              <br /> across their entire digital footprint
            </h1>
            <p className=" sm:text-base text-base mb-8 font-bold text-gray-900 font-dmSans ">
              Post-Quantum is upgrading the world to next-generation encryption.
              Our Quantum-Safe Platform includes modular software for Identity,
              Transmission and Encryption that protect organisations across
              their entire digital footprint. Products are interoperable,
              backward compatible and crypto-agile - ensuring a smooth
              transition to the next generation of encryption. Post-Quantum has
              worked with NATO for a number of years to ensure its
              communications are secure against quantum attack.
            </p>
            <p className=" sm:text-base text-base mb-8 font-bold text-gray-900 font-dmSans italic ">
              "Securing NATO's communications for the quantum era is paramount
              to our ability to operate effectively without fear of
              interception. With the threat of 'harvest now and decrypt later'
              looming over secure communications, this is an increasingly
              important effort to protect against current and future threats"
            </p>
            <strong className=" font-dmSans sm:text-base text-base mb-8 font-bold text-gray-900 ">
              Konrad Wrona, Principal Scientist, NATO Cyber Security Centre.
            </strong>
          </div>
        </div>
      </section>
      <div className="flex justify-center h-full w-full mb-4">
        <div className="overflow-hidden rounded-lg">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=V8eWxOLXLK8"
            className="react-player"
            playing={false}
            controls
          />
        </div>
      </div>
      <section className="text-gray-600 body-font mt-12">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-start">
          <div className="lg:flex-grow lg:pr-16 md:pr-8 lg:pl-16 md:pl-8 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-start text-left">
            <h1 className="font-dmSans sm:text-4xl text-4xl mb-8 text-gray-900 font-semibold text-center w-full">
              Quantum Computers pose an existential threat to our world
            </h1>
            <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
              Not in 10 years, today. Nation state adversaries are harvesting
              data now, to decrypt it later with a quantum computer.
            </p>
            <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
              Unless action is taken:
            </p>
            <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
              Government secrets will be exposed
            </p>
            <p className="sm:text-base text-base mb-4 font-dmSans text-[#686868]">
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
      </section>
    </div>
  );
};

export default Hero;
