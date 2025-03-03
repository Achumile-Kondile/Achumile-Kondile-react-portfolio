import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import projectImage1 from "../assets/Portfolio.png";
import projectImage2 from "../assets/Expense Tracker.png";
import projectImage3 from "../assets/Salon.png";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      image: projectImage1,
      description: "A responsive personal portfolio website built with React. This website highlights my skills and projects as a software developer.",
      languages: ["React.js", "HTML5", "CSS3"],
    },
    {
      id: 2,
      title: "Expense Tracker",
      image: projectImage2,
      description: "A simple expense tracker app built with React and Node.js. This app allows users to track their expenses, manage categories, and view detailed reports.",
      languages: ["React.js", "Node.js"],
    },
    {
      id: 3,
      title: "Pearl Beauty Salon",
      image: projectImage3,
      description: "A stunning website for a beauty salon that showcases services and promotes a luxurious experience.",
      languages: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const toggleLanguages = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  // Inline styles
  const styles = {
    projectsSection: {
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
    cardImage: {
      height: "200px",
      objectFit: "cover",
      transition: "transform 0.3s ease",
    },
    cardTitle: {
      color: "#8F37B1", // #8F37B1
      fontSize: "1.5rem",
      fontWeight: "600",
    },
    cardDescription: {
      color: "#FFFFFF", // White text for readability
      fontSize: "0.95rem",
    },
    languageButton: {
      background: "transparent",
      border: "2px solid #3623F", // #3623F
      color: "#3623F", // #3623F
      borderRadius: "50px",
      padding: "0.5rem 1.5rem",
      fontSize: "0.9rem",
    },
    languageBadge: {
      background: "#3623F", // #3623F
      color: "white",
      padding: "8px 16px",
      fontSize: "0.85rem",
      borderRadius: "20px",
    },
    languageContainer: {
      background: "rgba(54, 35, 245, 0.1)", // #3623F with transparency
      borderRadius: "10px",
    },
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="py-5"
      style={styles.projectsSection}
      id="projects"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="container"
      >
        <div className="text-center mb-5">
          <h2 style={styles.heading}>My Projects</h2>
          <div style={styles.divider} />
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="col-md-6 col-lg-4"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.div
                className="card h-100 border-0 rounded-lg overflow-hidden"
                whileHover={{ y: -5 }}
                style={styles.card}
              >
                <div className="position-relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                    style={styles.cardImage}
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
                      opacity: 0.3,
                    }}
                  />
                </div>

                <div className="card-body p-4">
                  <h3 style={styles.cardTitle}>{project.title}</h3>
                  <p style={styles.cardDescription}>{project.description}</p>
                  <motion.button
                    className="btn rounded-pill"
                    onClick={() => toggleLanguages(project.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={styles.languageButton}
                  >
                    Languages
                  </motion.button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: activeProject === project.id ? "auto" : 0,
                      opacity: activeProject === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="mt-3 p-3 rounded-lg" style={styles.languageContainer}>
                      {project.languages.map((lang, index) => (
                        <span
                          key={index}
                          className="badge me-2 mb-2"
                          style={styles.languageBadge}
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </motion.div>
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

          .card:hover img {
            transform: scale(1.1);
          }

          @media (max-width: 768px) {
            h2 {
              font-size: 2rem !important;
            }
            .card-title {
              font-size: 1.25rem !important;
            }
            .card-description {
              font-size: 0.9rem !important;
            }
            .btn {
              font-size: 0.8rem !important;
              padding: 0.4rem 1rem !important;
            }
          }

          @media (max-width: 576px) {
            h2 {
              font-size: 1.75rem !important;
            }
            .card-title {
              font-size: 1.1rem !important;
            }
            .card-description {
              font-size: 0.85rem !important;
            }
            .btn {
              font-size: 0.75rem !important;
              padding: 0.3rem 0.8rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Projects;