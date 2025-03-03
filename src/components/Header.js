import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import headerImg from "../assets/Media.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show");
    }
  };

  const navItems = [
    { href: "#about", text: "About" },
    { href: "#projects", text: "Projects" },
    { href: "#tech-stack", text: "Tech Stack" },
    { href: "#contacts", text: "Contact" },
  ];

  // Inline styles
  const styles = {
    navbar: {
      background: "rgba(0, 0, 0, 0.95)", // Solid black with transparency
      backdropFilter: "blur(10px)",
      boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
    },
    brand: {
      color: "#8F37B1", // #8F37B1
      fontSize: "1.4rem",
      fontWeight: "bold",
    },
    navLink: {
      color: "#8F37B1", // #8F37B1
      fontWeight: "500",
    },
    homeSection: {
      background: "#000000", // Solid black
      paddingTop: "5rem",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
    },
    heading: {
      color: "#8F37B1", // #8F37B1
      fontSize: "3.5rem",
      fontWeight: "bold",
      textAlign: "left", // Align text to the left
    },
    accentText: {
      color: "#3623F", // Deep blue accent
    },
    subHeading: {
      color: "#3623F", // Deep blue accent
      fontSize: "1.5rem",
      fontWeight: "500",
      textAlign: "left", // Align text to the left
    },
    paragraph: {
      color: "#8F37B1", // #8F37B1
      fontSize: "1.1rem",
      textAlign: "left", // Align text to the left
      marginBottom: "1.5rem", // Added margin to separate from icons
    },
    downloadButton: {
      background: "#8F37B1", // Vibrant purple
      color: "white",
      borderRadius: "50px",
      padding: "0.75rem 1.5rem",
      fontSize: "1.1rem",
      marginTop: "1.5rem", // Added margin to separate from icons
      alignSelf: "flex-start", // Align button to the left
    },
    headerImage: {
      maxWidth: "80%",
      filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.15))",
    },
    socialIcon: {
      background: "white",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      borderRadius: "50%",
      padding: "0.5rem",
      margin: "0 0.5rem 0 0", // Added margin to the right only
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
    },
    socialIconsContainer: {
      display: "flex",
      justifyContent: "flex-start", // Align icons to the left
      gap: "1rem",
      margin: "1.5rem 0", // Added margin to separate from text and button
    },
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleUp = {
    hidden: { scale: 0.9 },
    visible: { scale: 1 },
  };

  const floatAnimation = {
    float: {
      y: [0, -10, 0], // Floating effect
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const colorChangeAnimation = {
    initial: { color: "#8F37B1" },
    animate: {
      color: ["#8F37B1", "#3623F", "#624343", "#8F37B1"], // Color cycle
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const gradientAnimation = {
    initial: { background: "linear-gradient(90deg, #8F37B1, #3623F)" },
    animate: {
      background: [
        "linear-gradient(90deg, #8F37B1, #3623F)",
        "linear-gradient(90deg, #3623F, #624343)",
        "linear-gradient(90deg, #624343, #8F37B1)",
        "linear-gradient(90deg, #8F37B1, #3623F)",
      ],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const bounceAnimation = {
    hover: {
      y: [0, -10, 0], // Bounce effect
      transition: {
        duration: 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top" style={styles.navbar}>
        <div className="container">
          <motion.a
            className="navbar-brand fw-bold"
            href="#home"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            style={styles.brand}
          >
            Achumile Kondile
          </motion.a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="nav-item"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <a
                    className="nav-link px-3"
                    href={item.href}
                    onClick={closeNavbar}
                    style={styles.navLink}
                  >
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" style={styles.homeSection}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column - Text Content */}
            <motion.div
              className="col-lg-6 text-lg-start"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                style={styles.heading}
                initial="initial"
                animate="animate"
                variants={colorChangeAnimation}
              >
                Hi, I'm <span style={styles.accentText}>Achumile Kondile</span>
              </motion.h1>
              <h2 style={styles.subHeading}>A passionate Software Developer</h2>
              <p style={styles.paragraph}>
                Welcome to my personal portfolio where I showcase my work, skills,
                and journey.
              </p>

              {/* Social Media Icons */}
              <motion.div
                style={styles.socialIconsContainer}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <motion.a
                  href="https://www.linkedin.com/in/achumile-kondile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover="hover"
                  variants={bounceAnimation}
                  style={styles.socialIcon}
                >
                  <FaLinkedin className="text-primary" />
                </motion.a>
                <motion.a
                  href="https://github.com/Achumile-Kondile"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover="hover"
                  variants={bounceAnimation}
                  style={styles.socialIcon}
                >
                  <FaGithub className="text-dark" />
                </motion.a>
                <motion.a
                  href="https://wa.me/0725895129"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover="hover"
                  variants={bounceAnimation}
                  style={styles.socialIcon}
                >
                  <FaWhatsapp className="text-success" />
                </motion.a>
                <motion.a
                  href="mailto:achumilekondile@gmail.com"
                  whileHover="hover"
                  variants={bounceAnimation}
                  style={styles.socialIcon}
                >
                  <FaEnvelope className="text-danger" />
                </motion.a>
              </motion.div>

              {/* Download My CV Button */}
              <motion.a
                href="/ACHUMILE_KONDILE_Curriculum_Vitae.pdf"
                download
                className="btn btn-lg"
                style={styles.downloadButton}
                initial="hidden"
                animate="visible"
                variants={scaleUp}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.05, backgroundColor: "#3623F" }}
                whileTap={{ scale: 0.95 }}
              >
                Download My CV
              </motion.a>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              className="col-lg-6 text-center mt-5 mt-lg-0"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div
                animate="float"
                variants={floatAnimation}
              >
                <img
                  src={headerImg}
                  alt="Achumile Kondile"
                  className="img-fluid"
                  style={styles.headerImage}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;