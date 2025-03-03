import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiBootstrap,
  SiVisualstudiocode,
  SiIntellijidea,
  SiVisualstudio,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [-5, 5],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TechStack = () => {
  const icons = [
    { Component: SiHtml5, color: "#E44D26", name: "HTML", duration: 2 },
    { Component: SiCss3, color: "#1572B6", name: "CSS", duration: 2.2 },
    { Component: SiJavascript, color: "#F7DF1E", name: "JavaScript", duration: 2.4 },
    { Component: SiReact, color: "#61DBFB", name: "React.js", duration: 2.6 },
    { Component: SiPython, color: "#306998", name: "Python", duration: 2.8 },
    { Component: FaJava, color: "#F8981D", name: "Java", duration: 3 },
    { Component: SiBootstrap, color: "#7952B3", name: "Bootstrap", duration: 2.2 },
    { Component: SiVisualstudiocode, color: "#007ACC", name: "VS Code", duration: 2.4 },
    { Component: SiIntellijidea, color: "#000000", name: "IntelliJ IDEA", duration: 2.6 },
    { Component: SiVisualstudio, color: "#5C2D91", name: "Visual Studio", duration: 2.8 },
  ];

  // Inline styles
  const styles = {
    techStackSection: {
      fontFamily: "'Poppins', sans-serif",
      scrollMarginTop: "4rem",
      background: "#000000", // Solid black
      padding: "3rem 0",
    },
    heading: {
      color: "#8F37B1", // #8F37B1
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    divider: {
      width: "60px",
      height: "4px",
      background: "#3623F", // #3623F
      margin: "1rem auto",
    },
    card: {
      background: "rgba(255, 255, 255, 0.1)", // Semi-transparent white
      backdropFilter: "blur(10px)",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
      borderRadius: "10px",
      overflow: "hidden",
      border: "1px solid #3623F", // Subtle border
    },
    cardText: {
      color: "#FFFFFF", // White text for readability
      fontSize: "0.9rem",
      fontWeight: "500",
    },
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech-stack" // Ensure this matches the href in the header menu
      className="py-5"
      style={styles.techStackSection}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="text-center mb-5"
      >
        <h2 style={styles.heading}>Tech Stack</h2>
        <div style={styles.divider} />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="container"
      >
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 justify-content-center">
          {icons.map(({ Component, color, name, duration }, index) => (
            <motion.div
              key={index}
              variants={iconVariants(duration)}
              initial="initial"
              animate="animate"
              className="col"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="card h-100 border-0 rounded-lg"
                style={styles.card}
              >
                <div className="card-body d-flex flex-column align-items-center justify-content-center p-4">
                  <Component
                    style={{
                      color,
                      fontSize: "2.5rem",
                      marginBottom: "0.5rem",
                    }}
                  />
                  <p style={styles.cardText}>{name}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

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
            .card-text {
              font-size: 0.8rem !important;
            }
          }

          @media (max-width: 576px) {
            h2 {
              font-size: 1.75rem !important;
            }
            .card-text {
              font-size: 0.75rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default TechStack;