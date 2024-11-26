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

// Animation variants for bouncing icons
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const icons = [
    { Component: SiHtml5, color: "#E44D26", name: "HTML", duration: 2.5 },
    { Component: SiCss3, color: "#1572B6", name: "CSS", duration: 2.5 },
    { Component: SiJavascript, color: "#F7DF1E", name: "JavaScript", duration: 2.5 },
    { Component: SiReact, color: "#61DBFB", name: "React.js", duration: 2.5 },
    { Component: SiPython, color: "#306998", name: "Python", duration: 2.5 },
    { Component: FaJava, color: "#F8981D", name: "Java", duration: 2.5 },
    { Component: SiBootstrap, color: "#7952B3", name: "Bootstrap", duration: 2.5 },
    { Component: SiVisualstudiocode, color: "#007ACC", name: "VS Code", duration: 6 },
    { Component: SiIntellijidea, color: "#000000", name: "IntelliJ IDEA", duration: 2.5 },
    { Component: SiVisualstudio, color: "#5C2D91", name: "Visual Studio", duration: 6 },
  ];

  return (
    <div
      id="technologies"
      className="bg-gradient py-5 border-bottom"
      style={{
        fontFamily: "'Poppins', sans-serif",
        scrollMarginTop: "4rem", // Adjust scroll position for fixed navbar
      }}
    >
      {/* Section Title */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center mb-4"
      >
        <h1 className="display-4 text-dark font-weight-bold">
          Technologies
        </h1>
        <p className="lead text-muted"></p>
      </motion.div>

      {/* Icons Section */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="container"
        style={{
          position: "relative", // To prevent overlapping with other sections
          zIndex: 1, // Ensure it’s on top of other elements
        }}
      >
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
          {icons.map(({ Component, color, name, duration }, index) => (
            <motion.div
              key={index}
              variants={iconVariants(duration)}
              initial="initial"
              animate="animate"
              className="col text-center"
            >
              <div
                className="card border-0 shadow-lg rounded-lg overflow-hidden"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div className="card-body d-flex flex-column align-items-center text-center p-4">
                  <Component
                    style={{
                      color,
                      fontSize: "4rem",
                      transition: "transform 0.3s ease",
                    }}
                    className="mb-3"
                  />
                  <p className="card-text text-uppercase fw-semibold text-dark">
                    {name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
