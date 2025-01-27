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

  return (
    <div
      className="py-5"
      style={{
        fontFamily: "'Poppins', sans-serif",
        scrollMarginTop: "4rem",
        background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
      }}
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container"
      >
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold" style={{ color: "#2d3436" }}>
            My Projects
          </h2>
          <div 
            className="mx-auto" 
            style={{ 
              width: "60px", 
              height: "4px", 
              background: "#6c5ce7", 
              marginTop: "1rem" 
            }}
          />
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="card h-100 border-0 rounded-lg overflow-hidden"
                whileHover={{ y: -5 }}
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                }}
              >
                <div className="position-relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
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
                  <h3 className="h4 mb-3" style={{ color: "#6c5ce7" }}>
                    {project.title}
                  </h3>
                  <p className="text-muted mb-3" style={{ fontSize: "0.95rem" }}>
                    {project.description}
                  </p>
                  <motion.button
                    className="btn btn-outline-primary border-2 rounded-pill px-4"
                    onClick={() => toggleLanguages(project.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    languages
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
                    <div className="mt-3 p-3 rounded-lg" style={{ background: "rgba(108, 92, 231, 0.1)" }}>
                      {project.languages.map((lang, index) => (
                        <span
                          key={index}
                          className="badge me-2 mb-2"
                          style={{
                            background: "#6c5ce7",
                            color: "white",
                            padding: "8px 16px",
                            fontSize: "0.85rem",
                          }}
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
    </div>
  );
};

export default Projects;