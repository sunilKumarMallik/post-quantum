import React from "react";

const AboutSection = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-[#f1f1f1]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <div className=" flex justify-center">
              <p className="text-base text-[#454545] tracking-widest font-medium title-font mb-1 bg-white rounded-full m-2 w-36 ">
                KNOW ABOUT
              </p>
            </div>

            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
              About Us
            </h1>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Post Quantum(SQ) is at the forefront of the Quantum Revolution
              working <br /> on High Imapact Industry Solutions
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Our Suite of products and services will revolutionize major
              indutries including Goverment, Defence, Finance, Healthcare, Smart
              Cities, Energy, Telecom, Blockchain, AI and manymore.
            </p>
            <button className="flex mx-auto mt-8 text-white bg-[#656565] border-0 py-2 px-8 focus:outline-none  rounded-full text-lg">
              ABOUT US
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
