import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import projectImage1 from "../assets/Portfolio.png";
import projectImage2 from "../assets/Expense Tracker.png";
import projectImage3 from "../assets/Salon.png";
import projectImage4 from "../assets/support chatbot.png"; // Add your fourth project image here

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
    {
      id: 4,
      title: "Technical Support Project",
      image: projectImage4,
      description:
        "A vibrant, modern, and youthful React chatbot for instant technical support. Features include animated gradient backgrounds, fun emoji mascot, confetti animation, quick actions, emoji reactions, copy-to-clipboard, connect with a human agent, scroll-to-bottom button, and a responsive accessible UI. Made with React.",
      projectLink:
        "https://github.com/Achumile-Kondile/technical-support-chatbot.git",
    },
  ];

  return (
    <section id="projects" className="py-5" style={{ background: colors.lightLavender }}>
      <div className="container">
        <h2 className="text-center mb-5" style={{ color: colors.darkMagenta, fontWeight: "bold" }}>
          Projects
        </h2>
        <div className="row g-4 justify-content-center">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4 d-flex" key={project.id}>
              <div className="card shadow-sm" style={{ width: "100%", borderRadius: "1rem", background: colors.white }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ color: colors.hotPink }}>{project.title}</h5>
                  <p className="card-text" style={{ color: colors.darkMagenta }}>{project.description}</p>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn mt-auto"
                    style={{
                      backgroundColor: colors.hotPink,
                      color: colors.white,
                      borderRadius: "2rem",
                      fontWeight: "bold",
                    }}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;