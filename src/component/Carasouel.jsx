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
              <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                The Race Is On to Fight a Cyber Threat That Doesn’t Exist
              </h2>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                A new set of algorithms chosen by the US government will allow
                organizations to start the long process of preparing for quantum
                attacks.
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1204x504"
                />
              </div>
              <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                Why Banks and NATO Are Worrying About a Future ‘Quantum Attack’
              </h2>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Investment and new milestones in quantum computing are bringing
                the prospect of an ultra-powerful computer that can crack any
                code closer to reality.
              </p>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1205x505"
                />
              </div>
              <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                NATO and White House recognize post-quantum threats and prepare
                for Y2Q
              </h2>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Over the past decade, encryption has emerged as one of the key
                solutions that organizations use to secure enterprise
                communications, services and applications.
              </p>
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
