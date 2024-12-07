import React from 'react';
import './Hero.css';
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2 className="heading-hero">Welcome!!</h2>
        <div>
          <div className="hero-hand-icon">
            <p className="heading-hero-e-kart">AgroStop</p>
            <div className="log"></div>
          </div>
          <p></p>
          <p></p>
        </div>
      </div>
      <div className="hero-right">
        <div className="flip-card">
          <div className="card-front"></div>
          <div className="card-back">
            Welcome to EKart!!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
