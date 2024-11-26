import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import projectImage1 from "../assets/Portfolio.png"; // Add the path to your image
import projectImage2 from "../assets/Expense Tracker.png"; // Add the path to your image

const Projects = () => {
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
                  objectFit: "cover", // Ensures the image covers the area of the card
                  height: "200px", // Adjust the height to make the image fit properly
                }}
              />
              <div className="card-body">
                <h3 className="h5 text-primary">Portfolio Website</h3>
                <p className="text-muted mb-0">
                  A responsive personal portfolio website built with React. This website highlights my skills and projects as a software developer.
                </p>
                <div className="mt-3">
                  <strong>Languages Used:</strong>
                  <ul className="list-unstyled">
                    <li>React.js</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                  </ul>
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
                  objectFit: "cover", // Ensures the image covers the area of the card
                  height: "200px", // Adjust the height to make the image fit properly
                }}
              />
              <div className="card-body">
                <h3 className="h5 text-primary">Expense Tracker</h3>
                <p className="text-muted mb-0">
                  A simple expense tracker app built with React and Node.js. This app allows users to track their expenses, manage categories, and view detailed reports.
                </p>
                <div className="mt-3">
                  <strong>Languages Used:</strong>
                  <ul className="list-unstyled">
                    <li>React.js</li>
                    <li>Node.js</li>
                  </ul>
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
