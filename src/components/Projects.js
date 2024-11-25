import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
              <div className="card-body">
                <h3 className="h5 text-primary">Portfolio Website</h3>
                <p className="text-muted mb-0">
                  A responsive personal portfolio website built with React.
                </p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h3 className="h5 text-primary">Task Manager</h3>
                <p className="text-muted mb-0">
                  A task management app built with React and Node.js.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
