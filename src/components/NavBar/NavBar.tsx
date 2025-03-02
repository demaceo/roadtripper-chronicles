/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faLinkedin,
  faInstagram,
  faTiktok,
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

  return (
    <Navbar
      expand="md"
      fixed="top"
      className={`navbar-transparent ${isNavOpen ? "nav-open" : ""}`}
    >
      <Container className="nav-links-container">
        <Navbar.Brand
          className="navbar-logo"
          href="www.roadtripperchronicles.com"
        >
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarToggler" onClick={toggleNavbar}>
          <span className="navbar-toggler-bar"></span>
          <span className="navbar-toggler-bar"></span>
          <span className="navbar-toggler-bar"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarToggler">
          <Nav className="ms-auto">
            <Nav.Link
              href="https://www.linkedin.com/groups/13117416/"
              target="_blank"
              title="Connect with us on LinkedIn"
              data-bs-toggle="tooltip"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              {/* <p className="hidden-lg-up">LinkedIn</p> */}
            </Nav.Link>

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
              href="https://open.spotify.com/user/31s4sb53ykk5hutlenwk3myfjdgy"
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
              <FontAwesomeIcon id="spotify-icon" icon={faSpotify} />
              <p className="hidden-lg-up">Spotify</p>
            </Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
