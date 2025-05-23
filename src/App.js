import React from 'react';
import Section from './Section';
import TransitionVideoSection from './TransitionVideoSection';
import './App.css';

const App = () => {
  const firstVideo = 'https://www.w3schools.com/howto/rain.mp4';
  const transitionVideo = 'videos/forest.mp4';


  return (
    <>
      <Section videoSrc={firstVideo}>
        <h1>Welcome to Our Studio</h1>
      </Section>

      <TransitionVideoSection videoSrc="videos/sky.mp4" />

      <Section videoSrc="videos/sky2.mp4">
        <h1>About Us</h1>
        <p>We create beautiful, immersive experiences.</p>
      </Section>

      <TransitionVideoSection videoSrc={transitionVideo} />
      <Section bgImage='https://picsum.photos/id/1015/1920/1080'>
        <h1>Third Section</h1>
        <p>Keep Visiting for more information .</p>
      </Section>
    </>
  );
};

export default App;
