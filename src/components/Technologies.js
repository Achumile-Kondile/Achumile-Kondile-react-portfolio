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

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [-5, 5],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TechStack = () => {
  const icons = [
    { Component: SiHtml5, color: "#E44D26", name: "HTML", duration: 2 },
    { Component: SiCss3, color: "#1572B6", name: "CSS", duration: 2.2 },
    { Component: SiJavascript, color: "#F7DF1E", name: "JavaScript", duration: 2.4 },
    { Component: SiReact, color: "#61DBFB", name: "React.js", duration: 2.6 },
    { Component: SiPython, color: "#306998", name: "Python", duration: 2.8 },
    { Component: FaJava, color: "#F8981D", name: "Java", duration: 3 },
    { Component: SiBootstrap, color: "#7952B3", name: "Bootstrap", duration: 2.2 },
    { Component: SiVisualstudiocode, color: "#007ACC", name: "VS Code", duration: 2.4 },
    { Component: SiIntellijidea, color: "#000000", name: "IntelliJ IDEA", duration: 2.6 },
    { Component: SiVisualstudio, color: "#5C2D91", name: "Visual Studio", duration: 2.8 },
  ];

  return (
    <div
      id="tech-stack"
      className="py-5"
      style={{
        fontFamily: "'Poppins', sans-serif",
        scrollMarginTop: "4rem",
        background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
      }}
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-5"
      >
        <h2 className="display-4 fw-bold" style={{ color: "#2d3436" }}>
          Tech Stack
        </h2>
        <div className="mx-auto" style={{ width: "60px", height: "4px", background: "#6c5ce7", marginTop: "1rem" }}></div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="container"
      >
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 justify-content-center">
          {icons.map(({ Component, color, name, duration }, index) => (
            <motion.div
              key={index}
              variants={iconVariants(duration)}
              initial="initial"
              animate="animate"
              className="col"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="card h-100 border-0 rounded-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                }}
              >
                <div className="card-body d-flex flex-column align-items-center justify-content-center p-4">
                  <Component
                    style={{
                      color,
                      fontSize: "2.5rem",
                      marginBottom: "0.5rem",
                    }}
                  />
                  <p className="card-text mb-0 fw-medium" style={{ color: "#2d3436", fontSize: "0.9rem" }}>
                    {name}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TechStack;