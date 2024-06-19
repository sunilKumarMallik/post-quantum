import React from "react";

const OurMembers = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 gap-8 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-[#f1f1f1] px-8">
            <div className=" flex justify-center mt-8 mb-2">
              <p className="text-base text-[#454545] tracking-widest font-medium title-font mb-1 bg-white rounded-full m-2 w-36 ">
                OUR TEAM
              </p>
            </div>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Meet the Team
            </h1>
            <p className="mb-4 leading-relaxed">
              Post Quantum("SQ"), a Indian Company headquatered in New Delhi,
              with extensive R&amp;D in the most prominent universities in
              India, has emerged as a trailblazer in quantum Communication
              specializing in cutting edge quantum-safe encryption technologies.
            </p>
            <div className="flex justify-center mb-8">
              <button className="flex mx-auto  text-white bg-[#656565] border-0  focus:outline-none  rounded-full text-sm p-2">
                SEE ALL MEMBERS
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded h-80 w-full"
              alt="hero"
              src="https://dummyimage.com/photo"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMembers;
