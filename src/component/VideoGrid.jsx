import React from "react";
import ReactPlayer from "react-player";

const VideoGrid = () => {
  const videoUrls = [
    "https://www.youtube.com/watch?v=5qap5aO4i9A",
    "https://www.youtube.com/watch?v=5qap5aO4i9A",
    "https://www.youtube.com/watch?v=5qap5aO4i9A",
    "https://www.youtube.com/watch?v=5qap5aO4i9A",
    "https://www.youtube.com/watch?v=5qap5aO4i9A",
    "https://www.youtube.com/watch?v=5qap5aO4i9A",
    "https://www.youtube.com/watch?v=5qap5aO4i9A",
    "https://www.youtube.com/watch?v=5qap5aO4i9A",
  ];

  return (
    <section className="container mx-auto px-5 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {videoUrls.map((url, index) => (
          <div key={index} className="w-full h-64">
            <ReactPlayer
              url={url}
              width="80%"
              height="80%"
              className="react-player"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
