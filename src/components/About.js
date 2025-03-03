import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  // Inline styles
  const styles = {
    aboutSection: {
      background: "#000000", // Solid black
      padding: "3rem 0",
      minHeight: "100vh", // Full viewport height
      display: "flex",
      alignItems: "center", // Center vertically
      justifyContent: "center", // Center horizontally
    },
    title: {
      color: "#8F37B1", // #8F37B1
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      textAlign: "center", // Center title
    },
    accentText: {
      color: "#3623F", // #3623F
      fontWeight: "600",
    },
    divider: {
      width: "60px",
      height: "4px",
      background: "#3623F", // #3623F
      margin: "1rem auto", // Center divider
    },
    text: {
      color: "#FFFFFF", // White text for readability
      lineHeight: "1.8",
      fontSize: "1.1rem",
      textAlign: "center", // Center paragraph text
      maxWidth: "800px", // Limit paragraph width for better readability
      margin: "0 auto", // Center paragraph
    },
    responsiveTitle: {
      fontSize: "2rem",
    },
    responsiveText: {
      fontSize: "1rem",
    },
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="about" style={styles.aboutSection}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 style={styles.title}>
            About <span style={styles.accentText}>Me</span>
          </h2>
          <div style={styles.divider} />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="row justify-content-center"
        >
          <div className="col-lg-8">
            <p style={styles.text}>
              🎓 Hello! I'm{" "}
              <span style={styles.accentText}>Achumile Kondile</span>, a
              passionate developer with a diploma in{" "}
              <span style={{ fontWeight: "600", color: "#3623F" }}>
                ICT Application Development
              </span>
              . My technical skills include{" "}
              <span style={styles.accentText}>
                Java, Python, HTML, CSS, JavaScript, React.js, and SQL
              </span>
              . I enjoy learning about mobile app development and exploring
              emerging technologies to enhance my capabilities.
            </p>
            <p style={{ ...styles.text, marginBottom: "0" }}>
              I thrive in dynamic, team-oriented environments where I can
              contribute to innovative projects while honing my skills. My
              focus is on building scalable, user-friendly applications that
              meet both client expectations and industry standards. I am eager
              to leverage my{" "}
              <span style={styles.accentText}>
                technical expertise and problem-solving skills
              </span>{" "}
              to drive impactful projects and seize exciting new opportunities.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Inline CSS for animations and responsiveness */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            h2 {
              font-size: 2rem !important;
            }

            p {
              font-size: 1rem !important;
            }
          }

          @media (max-width: 576px) {
            h2 {
              font-size: 1.75rem !important;
            }

            p {
              font-size: 0.9rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;