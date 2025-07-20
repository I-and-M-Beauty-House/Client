import React from 'react';
import './Home.scss';

export default function Home() {
  return (
    <div className="home-container">
      <video autoPlay muted loop className="background-video">
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Optional content on top of the video */}
      <div className="overlay-content">
        <h1>Experience the Elegance of <br/>I & M Beauty House</h1>
        <p>Where Expert Care Meets Luxurious Services for a Transformative Beauty <br/> Experience in Sri Lanka.</p>
      </div>
    </div>
  );
}
