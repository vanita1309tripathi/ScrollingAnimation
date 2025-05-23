import React from 'react';
import './TransitionVideo.css';

const TransitionVideoSection = ({ videoSrc }) => {
  return (
    <section className="transition-video">
      <video
        className="video-element"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
};

export default TransitionVideoSection;
