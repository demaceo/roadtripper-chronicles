import React from "react";
import "./Hero.css";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  cloudImage: string;
  fogImage: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  cloudImage,
  fogImage,
}) => {
  return (
    <div className="hero-wrapper">
      <div
        className="hero-background section-dark"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay-filter"></div>
        <div className="content-center">
          <div className="hero-title-container">
            <div className="title-brand">
              <h1 className="hero-title">{title}</h1>
              <div className="fog-low">
                <img src={fogImage} alt="Fog" />
              </div>
              <div className="fog-low right">
                <img src={fogImage} alt="Fog" />
              </div>
            </div>
            <h2 className="hero-subtitle">
              {subtitle} <br></br>hello@roadtripperchronicles.com
            </h2>
          </div>
        </div>
        <div
          className="moving-clouds"
          style={{ backgroundImage: `url(${cloudImage})` }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
