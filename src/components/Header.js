import React from "react";
import headerImg from "../assets/Media.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useEffect } from "react";

// Ensure Bootstrap's JS is loaded to enable the collapse functionality
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            {/* Add brand name or logo here */}
            Achumile Kondile
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#technologies">
                  Technologies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacts">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section
        className="home py-5"
        id="home"
        style={{
          backgroundColor: "transparent", // Remove background color
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh", // Ensure it takes up the full viewport height
          display: "flex", // Center the content both vertically and horizontally
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container mt-0 pt-0">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <h1
                className="display-4 fw-bold text-dark"
                style={{
                  fontFamily: "'Poppins', sans-serif", // Apply Poppins font
                  fontSize: "3rem", // Adjust font size for large screens
                }}
              >
                Hi, I'm Achumile Kondile
              </h1>
              <h2
                className="h4 text-secondary mt-3"
                style={{
                  fontFamily: "'Poppins', sans-serif", // Apply Poppins font
                  fontSize: "1.5rem", // Adjust font size for smaller devices
                }}
              >
                A passionate Software Developer
              </h2>
              <p
                className="mt-3 text-muted"
                style={{
                  fontFamily: "'Poppins', sans-serif", // Apply Poppins font
                  fontSize: "1rem", // Adjust font size for readability
                }}
              >
                Welcome to my personal portfolio where I showcase my work, skills, and journey.
              </p>
            </div>

            {/* Image Section */}
            <div className="col-lg-6 text-center p-0">
              <img
                src={headerImg}
                alt="Portrait of Achumile Kondile, a Software Developer"
                style={{
                  width: "80%", // Image stretches to 80% of container's width
                  height: "auto", // Maintain aspect ratio
                  border: "none", // Remove any border or outline
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
