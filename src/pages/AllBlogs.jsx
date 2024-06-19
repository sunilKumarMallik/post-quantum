import React from "react";
import Carousel from "../component/Carasouel";
const AllBlogs = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container  py-24 flex flex-wrap items-center bg-gray-100 ">
          <div className="lg:w-1/5 md:w-1/4   rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0  ">
            <div className="flex flex-col text-center w-full mb-20   ">
              <div className=" flex justify-center  ">
                <p className="text-base text-[#454545] tracking-widest font-medium title-font mb-1 bg-white rounded-full m-2 w-36 boreder-4 border-green-800">
                  LATEST NEWS
                </p>
              </div>

              <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
                Blog
              </h1>

              <button className="flex mx-auto mt-8 text-white bg-[#656565] border-0 py-2 px-8 focus:outline-none  rounded-full text-lg">
                SEE ALL BLOGS
              </button>
            </div>
          </div>

          <div className="lg:w-3/4 md:w-1/2 ml-6 lg:pr-0 pr-0">
            <Carousel />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllBlogs;
