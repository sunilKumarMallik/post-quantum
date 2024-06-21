import React from "react";
import Carousel from "../component/Carasouel";

const AllBlogs = () => {
  return (
    <div className="bg-[#e4ebf2] min-h-screen">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5 py-24">
          <div className="grid grid-cols-10 gap-4">
            <div className="col-span-9">
              <Carousel />
            </div>
            <div className="col-span-1 flex flex-col items-center justify-center">
              <button className="flex mx-auto text-black border-0 py-2 px-8 focus:outline-none text-lg">
                Read our Press Insights
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllBlogs;
