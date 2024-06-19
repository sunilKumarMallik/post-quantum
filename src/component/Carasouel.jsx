import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  // Slick carousel settings
  const settings = {
    dots: false, // If you want dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    prevArrow: <PrevArrow />, // Custom previous arrow
    nextArrow: <NextArrow />, // Custom next arrow
  };

  return (
    <div className="">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <Slider {...settings}>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1203x503"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Shooting Stars
              </h2>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1204x504"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                The Catalyzer
              </h2>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1205x505"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                The 400 Blows
              </h2>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
};

// Custom Previous arrow component
const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 flex items-center justify-center w-12 h-full text-gray-700 hover:text-gray-900 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

// Custom Next arrow component
const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 flex items-center justify-center w-12 h-full text-gray-700 hover:text-gray-900 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

export default Carousel;
