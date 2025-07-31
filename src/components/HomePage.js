import React from "react";
import { motion } from "framer-motion";
import headerImg from "../assets/Chumi-removebg-preview.png"; // Ensure this path is correct

const HomePage = () => {
  const colors = {
    softPink: "#FFB6C1",
    hotPink: "#FF69B4",
    darkMagenta: "#8B008B",
    mediumVioletRed: "#C71585",
    indigo: "#4B0082",
    white: "#FFFFFF",
    shadowPink: "rgba(255,105,180,0.2)",
    lightLavender: "#E6E6FA",
    paleRose: "#FFD1DC",
  };

  const styles = {
    homeSection: {
      background: `linear-gradient(135deg, ${colors.paleRose} 0%, ${colors.softPink} 100%)`,
      height: "100vh",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      position: "relative",
      padding: "1rem 0",
    },
    heading: {
      color: colors.darkMagenta,
      fontSize: "3.5rem",
      fontWeight: "bold",
      textAlign: "center",
      textShadow: "2px 2px 5px rgba(0,0,0,0.1)",
    },
    accentText: {
      color: colors.hotPink,
    },
    subHeading: {
      color: colors.mediumVioletRed,
      fontSize: "1.8rem",
      fontWeight: "600",
      textAlign: "center",
      marginBottom: "1rem",
    },
    downloadButton: {
      background: colors.hotPink,
      color: colors.white,
      borderRadius: "35px",
      padding: "1rem 2.5rem",
      fontSize: "1.1rem",
      marginTop: "2rem",
      border: "none",
      boxShadow: `0 8px 18px ${colors.shadowPink}`,
      transition: "all 0.3s ease-in-out",
      display: "inline-block",
      marginLeft: "auto",
      marginRight: "auto",
    },
    imageWrapper: {
      background: `linear-gradient(135deg, ${colors.paleRose} 0%, ${colors.softPink} 100%)`,
      borderRadius: "50%",
      width: "340px",
      height: "340px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: `0 10px 30px ${colors.shadowPink}`,
    },
    headerImage: {
      width: "90%",
      height: "auto",
      objectFit: "contain",
      borderRadius: "50%",
    },
    scrollDownIndicator: {
      position: "absolute",
      bottom: "30px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      zIndex: 10,
    },
    scrollText: {
      color: colors.darkMagenta,
      fontSize: "0.9rem",
      marginBottom: "8px",
      fontWeight: "500",
    },
    scrollArrow: {
      width: "0",
      height: "0",
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      borderTop: `12px solid ${colors.hotPink}`,
      animation: "bounce 2s infinite",
    },
  };

  // Add CSS keyframes for bounce animation
  const bounceKeyframes = `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }
  `;

  // Function to scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about'); // Assuming your next section has id="about"
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If no specific section, scroll down by viewport height
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const floatAnimation = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const colorChangeAnimation = {
    initial: { color: colors.darkMagenta },
    animate: {
      color: [colors.darkMagenta, colors.hotPink, colors.mediumVioletRed, colors.darkMagenta],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const scrollIndicatorAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 2, duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <>
      <style>{bounceKeyframes}</style>
      <section id="home" style={styles.homeSection}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            {/* Left Column */}
            <motion.div
              className="col-md-6 text-center"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <motion.h1
                style={styles.heading}
                initial="initial"
                animate="animate"
                variants={colorChangeAnimation}
              >
                Hi, I'm <span style={styles.accentText}>Achumile Kondile</span>
              </motion.h1>
              <h2 style={styles.subHeading}>A Junior Software Developer</h2>

              <motion.a
                href="/ACHUMILE_KONDILE_Curriculum_Vitae.pdf"
                download
                className="btn btn-lg"
                style={styles.downloadButton}
                initial="hidden"
                animate="visible"
                variants={scaleUp}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: colors.mediumVioletRed,
                  boxShadow: `0 12px 25px ${colors.shadowPink}`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                Download My CV
              </motion.a>
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="col-md-6 text-center mt-4 mt-md-0"
              initial="hidden"
              animate="visible"
              variants={scaleUp}
              transition={{ delay: 0.8, duration: 0.9 }}
            >
              <motion.div animate="float" variants={floatAnimation}>
                <div style={styles.imageWrapper}>
                  <img
                    src={headerImg}
                    alt="Achumile Kondile"
                    style={styles.headerImage}
                    className="img-fluid"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

     
      </section>
    </>
  );
};

export default HomePage;