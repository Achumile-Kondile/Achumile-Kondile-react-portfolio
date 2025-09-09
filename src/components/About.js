import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython, FaNodeJs, FaBootstrap, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import profileImg from "../assets/Chumi-removebg-preview.png"; // <-- Add your image to src/assets/

const AboutPage = () => {
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

  const techStack = [
    { name: "React.js", icon: <FaReact color="#61DBFB" size={32} /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={32} /> },
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" size={32} /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" size={32} /> },
    { name: "Python", icon: <FaPython color="#3776AB" size={32} /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" size={32} /> },
    { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" size={32} /> },
    { name: "Flask", icon: <SiFlask color="#000000" size={32} /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" size={32} /> },
    { name: "Linux", icon: <FaLinux color="#333" size={32} /> }, // Added Linux
  ];

  return (
    <section id="about" className="py-5" style={{ background: colors.paleRose }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="p-4 shadow"
              style={{
                background: colors.white,
                borderRadius: "1.5rem",
                boxShadow: `0 4px 15px ${colors.shadowPink}`,
              }}
            >
              <div className="d-flex flex-column align-items-center mb-4">
                <img
                  src={profileImg}
                  alt="Achumile Kondile"
                  className="rounded-circle mb-3"
                  style={{
                    width: "180px", // Increased size
                    height: "180px", // Increased size
                    objectFit: "cover",
                    border: `4px solid ${colors.hotPink}`,
                    boxShadow: `0 2px 8px ${colors.shadowPink}`,
                  }}
                />
              </div>
              <div className="mb-4">
                <p className="text-center mb-3" style={{ color: colors.mediumVioletRed, fontSize: "1.1rem", fontWeight: "500" }}>
                  Hi! I'm Achumile Kondile, a passionate software developer with a strong foundation in web and Python development. I love building beautiful, functional applications and learning new technologies.
                </p>
                <p className="text-center" style={{ color: colors.mediumVioletRed, fontSize: "1.1rem", fontWeight: "500" }}>
                  I graduated from Walter Sisulu University with a Diploma in ICT Application Development and have completed several bootcamps, including Python and AI. My journey has been driven by curiosity and a desire to solve real-world problems. I enjoy collaborating with others, sharing knowledge, and continuously improving my skills. When I'm not coding, I love exploring new tech trends, mentoring, and contributing to open-source projects.
                </p>
              </div>
              <div className="row g-4">
                <div className="col-md-6">
                  <div
                    className="card h-100 border-0"
                    style={{
                      background: colors.lightLavender,
                      borderRadius: "1rem",
                      boxShadow: `0 2px 8px ${colors.shadowPink}`,
                    }}
                  >
                    <div className="card-body d-flex flex-column align-items-center">
                      <h5 className="mb-3" style={{ color: colors.hotPink, fontWeight: "bold" }}>Tech Stack</h5>
                      <div className="d-flex flex-wrap justify-content-center gap-3">
                        {techStack.map((tech, idx) => (
                          <div key={idx} className="d-flex flex-column align-items-center">
                            {tech.icon}
                            <span style={{ color: colors.indigo, fontWeight: "500", fontSize: "0.95rem", marginTop: "0.3em" }}>
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="card h-100 border-0"
                    style={{
                      background: colors.softPink,
                      borderRadius: "1rem",
                      boxShadow: `0 2px 8px ${colors.shadowPink}`,
                    }}
                  >
                    <div className="card-body d-flex flex-column align-items-center">
                      <h5 className="mb-3" style={{ color: colors.darkMagenta, fontWeight: "bold" }}>Contact Details</h5>
                      <ul className="list-unstyled w-100 text-center mb-0">
                        <li className="mb-2" style={{ color: colors.mediumVioletRed, fontWeight: "500" }}>
                          <span style={{ fontWeight: "bold" }}>Email:</span> achumilekondile@gmail.com
                        </li>
                        <li className="mb-2" style={{ color: colors.mediumVioletRed, fontWeight: "500" }}>
                          <span style={{ fontWeight: "bold" }}>LinkedIn:</span>{" "}
                          <a
                            href="https://www.linkedin.com/in/achumile-kondile/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: colors.indigo, textDecoration: "underline", fontWeight: "bold" }}
                          >
                            achumile-kondile
                          </a>
                        </li>
                        <li style={{ color: colors.mediumVioletRed, fontWeight: "500" }}>
                          <span style={{ fontWeight: "bold" }}>GitHub:</span>{" "}
                          <a
                            href="https://github.com/Achumile-Kondile"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: colors.indigo, textDecoration: "underline", fontWeight: "bold" }}
                          >
                            Achumile-Kondile
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
