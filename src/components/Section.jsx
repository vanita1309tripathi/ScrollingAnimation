import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/Section.css';

const Section = ({ children, videoSrc, bgImage,rotateRange = [10, 0, -50] }) => {
  const ref = useRef();

  // Scroll progress for this section only
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // Starts animating as it enters
  });

  // Animate only while in viewport

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], rotateRange);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.section
      ref={ref}
      className="section"
      style={{
        rotate,
        opacity,
      }}
    >
      {videoSrc ? (
        <video
          className="background-video"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div
          className="background-image"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
     
      <div className="content">{children}</div>
      <div className="overlay" />
    </motion.section>
  );
};

export default Section;
