/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  // faLinkedin,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./NavBar.css";

declare global {
  interface Window {
    bootstrap: any;
  }
}

const NavBar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [carStopped, setCarStopped] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (window.bootstrap) {
      document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
        new window.bootstrap.Tooltip(el);
      });
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarStopped(true);
    }, 4000); // Matches animation duration in CSS

    return () => clearTimeout(timer);
  }, []);

  return (
    <Navbar
      expand="md"
      fixed="top"
      className={`navbar-transparent ${isNavOpen ? "nav-open" : ""}`}
    >
      <Container className="nav-links-container">
        <Navbar.Brand
          className="navbar-logo"
          href="https://www.roadtripperchronicles.com"
        >
          {/* LOGO */}
          <div className={`car ${carStopped ? "car-stopped" : ""}`}>
            <img
              className="rv-img"
              src={`${
                carStopped
                  ? "https://i.ibb.co/9brYSZv/3.png"
                  : "https://i.ibb.co/XtcwJ1H/4.png"
              }`}
              alt="logo"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarToggler" onClick={toggleNavbar}>
          {/* <span className="navbar-toggler-bar"></span> */}
          {/* <span className="navbar-toggler-bar"></span> */}
          <span className="navbar-toggler-bar"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarToggler">
          <Nav className="ms-auto">
            {/* <Nav.Link
              href="https://www.linkedin.com/groups/13117416/"
              target="_blank"
              title="Connect with us on LinkedIn"
              data-bs-toggle="tooltip"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Nav.Link> */}

            <Nav.Link
              href="https://www.instagram.com/roadtripperchronicles"
              target="_blank"
              title="Follow us on Instagram"
              data-bs-toggle="tooltip"
            >
              <FontAwesomeIcon icon={faInstagram} />
              {/* <p className="hidden-lg-up">Instagram</p> */}
            </Nav.Link>

            <Nav.Link
              href="https://www.tiktok.com/@roadtripperchronicles?lang=en"
              target="_blank"
              title="Follow us on TikTok"
              data-bs-toggle="tooltip"
            >
              <FontAwesomeIcon icon={faTiktok} />
              {/* <p className="hidden-lg-up">TikTok</p> */}
            </Nav.Link>
            <Nav.Link
              href="https://www.youtube.com/@roadtripperchronicles"
              target="_blank"
              title="Subcribe to our Youtube Channel"
              data-bs-toggle="tooltip"
            >
              <FontAwesomeIcon icon={faYoutube} />
              {/* <p className="hidden-lg-up">TikTok</p> */}
            </Nav.Link>
            <Nav.Link
              href="https://open.spotify.com/show/53JJiTRGinHdvf48OVeN5b?si=1f30e55557e04d3a"
              target="_blank"
              title="Listen to us on Spotify"
              data-bs-toggle="tooltip"
            >
              <FontAwesomeIcon id="spotify-icon" icon={faSpotify} />
              {/* <p className="hidden-lg-up">Spotify</p> */}
            </Nav.Link>

            {/* <Button
              variant="danger"
              className="btn-round"
              href="http://www.roadtripperchronicles.com"
              target="_blank"
            >
              
            </Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
