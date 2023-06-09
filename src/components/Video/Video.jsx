import React from "react";
import ReactPlayer from "react-player";
import video from "../../assets/videos/Parabellum flim_2 2.mp4";

const Video = () => {
  return (
    <section className="video-section">
      <div className="container">
        <video controls autoPlay muted className="video ratio ratio-16x9">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Video;
