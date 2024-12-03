import React from "react";
import headerImg from "../assets/Media.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap's JS is loaded

const Header = () => {
  // Function to close the navbar
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
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
                <a className="nav-link" href="#about" onClick={closeNavbar}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects" onClick={closeNavbar}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#technologies"
                  onClick={closeNavbar}
                >
                  Technologies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacts" onClick={closeNavbar}>
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section
        className="home"
        id="home"
        style={{
          backgroundColor: "transparent",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh", // Full viewport height
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "56px", // Adjusted for fixed navbar height
        }}
      >
        <div className="container mt-0 pt-0">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <h1
                className="display-4 fw-bold"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "3rem",
                }}
              >
                Hi, I'm{" "}
                <span style={{ color: "#007bff" }}>Achumile Kondile</span>
              </h1>
              <h2
                className="h4 text-secondary mt-3"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.5rem",
                }}
              >
                A passionate Software Developer
              </h2>
              <p
                className="mt-3 text-muted"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1rem",
                }}
              >
                Welcome to my personal portfolio where I showcase my work,
                skills, and journey.
              </p>
              {/* Download CV Button */}
              <a
                href="/ACHUMILE_KONDILE_Curriculum_Vitae.pdf"
                download="ACHUMILE_KONDILE_Curriculum_Vitae.pdf"
                className="btn btn-primary btn-lg shadow"
              >
                Download My CV
              </a>
            </div>

            {/* Image Section */}
            <div className="col-lg-6 text-center p-0">
              <img
                src={headerImg}
                alt="Portrait of Achumile Kondile, a Software Developer"
                style={{
                  width: "80%",
                  height: "auto",
                  border: "none",
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
