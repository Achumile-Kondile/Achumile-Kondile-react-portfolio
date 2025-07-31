import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import projectImage1 from "../assets/Portfolio.png";
import projectImage2 from "../assets/Expense Tracker.png";
import projectImage3 from "../assets/Salon.png";

const Projects = () => {
  const colors = {
    softPink: "#FFB6C1",
    hotPink: "#FF69B4",
    darkMagenta: "#8B008B",
    mediumVioletRed: "#C71585",
    indigo: "#4B0082",
    white: "#FFFFFF",
    shadowPink: "rgba(255,105,180,0.15)",
    lightLavender: "#E6E6FA",
    paleRose: "#FFD1DC",
  };

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      image: projectImage1,
      description:
        "A responsive personal portfolio website built with React. This website highlights my skills and projects as a software developer. Languages used: React.js, HTML5, CSS3.",
      projectLink: "https://achumile-kondile-portfolio.onrender.com/",
    },
    {
      id: 2,
      title: "Expense Tracker",
      image: projectImage2,
      description:
        "A simple expense tracker app built with React and Node.js. This app allows users to track their expenses, manage categories, and view detailed reports. Languages used: React.js, Node.js.",
      projectLink:
        "https://github.com/Achumile-Kondile/Expense-Tracker.git",
    },
    {
      id: 3,
      title: "Pearl Beauty Salon",
      image: projectImage3,
      description:
        "A stunning website for a beauty salon that showcases services and promotes a luxurious experience. Languages used: HTML, CSS, JavaScript.",
      projectLink:
        "https://github.com/Achumile-Kondile/Pearl-Beauty-Salon.git",
    },
  ];

  const styles = {
    projectsSection: {
      fontFamily: "'Poppins', sans-serif",
      scrollMarginTop: "4rem",
      background: `linear-gradient(135deg, ${colors.paleRose} 0%, ${colors.lightLavender} 100%)`,
      padding: "5rem 1.5rem",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    heading: {
      color: colors.darkMagenta,
      fontSize: "3.2rem",
      fontWeight: "800",
      textAlign: "center",
      marginBottom: "1rem",
      letterSpacing: "0.06em",
      textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
    },
    divider: {
      width: "90px",
      height: "6px",
      background: colors.hotPink,
      margin: "0 auto 3rem",
      borderRadius: "4px",
      boxShadow: `0 0 15px ${colors.hotPink}`,
    },
    card: {
      background: colors.white,
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: `0 8px 20px ${colors.shadowPink}`,
      display: "flex",
      flexDirection: "column",
      height: "100%",
      transition: "all 0.35s ease",
      cursor: "pointer",
      userSelect: "none",
    },
    cardHover: {
      y: -15,
      boxShadow: `0 18px 45px ${colors.shadowPink}`,
      borderColor: colors.hotPink,
      scale: 1.02,
    },
    cardImage: {
      height: "220px",
      objectFit: "cover",
      borderRadius: "20px 20px 0 0",
      transition: "transform 0.5s ease",
    },
    cardImageHover: {
      scale: 1.07,
    },
    cardBody: {
      padding: "1.8rem 1.6rem 2.2rem",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    cardTitle: {
      color: colors.mediumVioletRed,
      fontSize: "1.9rem",
      fontWeight: "700",
      marginBottom: "1rem",
    },
    cardDescription: {
      color: colors.indigo,
      fontSize: "1.05rem",
      lineHeight: "1.6",
      marginBottom: "2rem",
      flexGrow: 1,
      userSelect: "text",
    },
    buttonContainer: {
      textAlign: "center",
    },
    viewProjectButton: {
      background: `linear-gradient(45deg, ${colors.mediumVioletRed}, ${colors.hotPink})`,
      color: colors.white,
      borderRadius: "35px",
      padding: "0.75rem 2.2rem",
      fontSize: "1.1rem",
      fontWeight: "600",
      border: "none",
      boxShadow: `0 7px 20px ${colors.shadowPink}`,
      transition: "all 0.3s ease-in-out",
      display: "inline-block",
      userSelect: "none",
    },
    viewProjectButtonHover: {
      transform: "translateY(-4px) scale(1.05)",
      boxShadow: `0 12px 30px ${colors.shadowPink}`,
      opacity: 0.95,
    },
    scrollUpIndicator: {
      position: "absolute",
      top: "30px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      zIndex: 10,
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
    scrollButton: {
      backgroundColor: colors.hotPink,
      color: colors.white,
      border: "none",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.2rem",
      cursor: "pointer",
      boxShadow: `0 4px 15px ${colors.shadowPink}`,
      transition: "all 0.3s ease-in-out",
    },
  };

  // Bounce animation keyframes
  const bounceKeyframes = `
    @keyframes bounceUp {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-8px);
      }
      60% {
        transform: translateY(-4px);
      }
    }
    @keyframes bounceDown {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(8px);
      }
      60% {
        transform: translateY(4px);
      }
    }
  `;

  // Scroll functions
  const scrollToPreviousSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
    }
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('contact') || document.getElementById('footer');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scrollIndicatorAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { delay: 1.8, duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <>
      <style>{bounceKeyframes}</style>
      <section style={styles.projectsSection} id="projects">
      

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="container"
        >
          <h2 style={styles.heading}>My Projects</h2>
          <div style={styles.divider} />

          <div className="row g-4 justify-content-center">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="col-md-6 col-lg-4"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.15 + project.id * 0.15, duration: 0.8 }}
                whileHover={styles.cardHover}
                style={{ height: "100%" }}
              >
                <motion.div style={styles.card} whileHover={{ scale: 1.02 }}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    style={styles.cardImage}
                    whileHover={styles.cardImageHover}
                    transition={{ duration: 0.5 }}
                  />
                  <div style={styles.cardBody}>
                    <h3 style={styles.cardTitle}>{project.title}</h3>
                    <p style={styles.cardDescription}>{project.description}</p>
                    <div style={styles.buttonContainer}>
                      <motion.a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.viewProjectButton}
                        whileHover={styles.viewProjectButtonHover}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Projects;