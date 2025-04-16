import React from "react";
import "./Hero.css";
import { Button } from "react-bootstrap";
import { FaEnvelopeOpenText } from "react-icons/fa";

const Hero: React.FC = () => {
  const heroText = "ROADTRIPPER CHRONICLES";
  const heroImg =
    "https://cms.travelnoire.com/wp-content/uploads/2023/09/pexels-nicolas-postiglioni-1537979.jpg";
  const cloudImg =
    "http://demos.creative-tim.com/paper-kit-2/assets/img/clouds.png";
  const fogImg =
    "http://demos.creative-tim.com/paper-kit-2/assets/img/fog-low.png";

  return (
    <div className="hero-wrapper">
      <div
        className="hero-background section-dark"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="overlay-filter"></div>
        <div className="content-center">
          <div className="hero-title-container">
            <div className="title-brand">
              <h1 className="hero-title">{heroText}</h1>
              <div className="fog-low">
                <img src={fogImg} alt="Fog" />
              </div>
              <div className="fog-low right">
                <img src={fogImg} alt="Fog" />
              </div>
              <h2 className="hero-subtitle">The Podcast</h2>
            </div>

            <Button
              className="contact-btn"
              href="mailto:hello@roadtripperchronicles.com"
              target="_blank"
            >
              <span className="btn-icon-text">
                <FaEnvelopeOpenText className="icon" />
                LET’S CHAT
              </span>
            </Button>
          </div>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: `url(${cloudImg})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
