import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import projectImage1 from "../assets/Portfolio.png"; // Add the path to your image
import projectImage2 from "../assets/Expense Tracker.png"; // Add the path to your image

const Projects = () => {
  // State to manage visibility of languages
  const [showLanguages1, setShowLanguages1] = useState(false);
  const [showLanguages2, setShowLanguages2] = useState(false);

  const toggleLanguages1 = () => {
    setShowLanguages1((prev) => !prev);
    setShowLanguages2(false); // Close the second project languages if the first is opened
  };

  const toggleLanguages2 = () => {
    setShowLanguages2((prev) => !prev);
    setShowLanguages1(false); // Close the first project languages if the second is opened
  };

  return (
    <div
      className="bg-light min-vh-100"
      style={{
        fontFamily: "'Poppins', sans-serif",
        scrollMarginTop: "4rem", // Offset for the fixed navbar
      }}
      id="projects"
    >
      <section className="container py-5">
        <h2 className="text-center mb-5 display-6">My Projects</h2>
        <div className="row gy-4">
          {/* Project 1 */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <img
                src={projectImage1}
                alt="Portfolio Website"
                className="card-img-top"
                style={{
                  objectFit: "cover",
                  height: "200px",
                }}
              />
              <div className="card-body">
                <h3 className="h5 text-primary">Portfolio Website</h3>
                <p className="text-muted mb-0">
                  A responsive personal portfolio website built with React. This website highlights my skills and projects as a software developer.
                </p>
                <div className="mt-3">
                  <button
                    className="btn btn-outline-primary"
                    onClick={toggleLanguages1}
                  >
                    Languages Used
                  </button>
                  {showLanguages1 && (
                    <ul className="list-unstyled mt-2 bg-light p-2 border rounded">
                      <li className="text-primary">React.js</li>
                      <li className="text-primary">HTML5</li>
                      <li className="text-primary">CSS3</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <img
                src={projectImage2}
                alt="Expense Tracker"
                className="card-img-top"
                style={{
                  objectFit: "cover",
                  height: "200px",
                }}
              />
              <div className="card-body">
                <h3 className="h5 text-primary">Expense Tracker</h3>
                <p className="text-muted mb-0">
                  A simple expense tracker app built with React and Node.js. This app allows users to track their expenses, manage categories, and view detailed reports.
                </p>
                <div className="mt-3">
                  <button
                    className="btn btn-outline-primary"
                    onClick={toggleLanguages2}
                  >
                    Languages Used
                  </button>
                  {showLanguages2 && (
                    <ul className="list-unstyled mt-2 bg-light p-2 border rounded">
                      <li className="text-primary">React.js</li>
                      <li className="text-primary">Node.js</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
