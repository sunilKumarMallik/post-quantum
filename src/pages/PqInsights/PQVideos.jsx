import React from "react";
import VideoGrid from "../../component/VideoGrid";
import { Link } from "react-router-dom";
// import "./QCS.css";

import ReactPlayer from "react-player";
import { motion } from "framer-motion";
export default function PQVideos() {
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div>
      <section className="body-font mt-12">
        <div className="container mx-auto flex px-5 py-24  flex-col items-center">
          <div className=" lg:flex-grow  lg:pr-8 md:pr-8 lg:pl-16 md:pl-8  flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-8 font-bold font-dmSans ">
              Post Quantum Videos
            </h1>
          </div>
        </div>
      </section>
      <VideoGrid />
    </div>
  );
}
