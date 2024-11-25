import React from "react";
import headerImg from "../assets/Media.png"; // Ensure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            
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
          backgroundColor: "#C8A2C8", // Lilac background color
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container mt-5 pt-5">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <h1
                className="display-4 fw-bold text-dark"
                style={{
                  fontFamily: "'Poppins', sans-serif", // Apply Poppins font
                }}
              >
                Hi, I'm Achumile Kondile
              </h1>
              <h2
                className="h4 text-secondary mt-3"
                style={{
                  fontFamily: "'Poppins', sans-serif", // Apply Poppins font
                }}
              >
                A passionate Software Developer
              </h2>
              <p
                className="mt-3 text-muted"
                style={{
                  fontFamily: "'Poppins', sans-serif", // Apply Poppins font
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
                className="img-fluid rounded-circle shadow-lg"
                style={{
                  width: "80%", // Image stretches to full width of the container
                  height: "auto", // Maintain aspect ratio
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
