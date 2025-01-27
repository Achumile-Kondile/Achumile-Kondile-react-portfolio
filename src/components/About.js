import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div 
      id="about" 
      className="py-5"
      style={{ 
        background: "linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)"
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#2d3436" }}>
            About <span style={{ color: "#6c5ce7" }}>Me</span>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="row justify-content-center"
        >
          <div className="col-lg-8">
            <div 
              className="p-4 rounded-lg"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)"
              }}
            >
              <p className="lead" style={{ color: "#636e72", lineHeight: "1.8" }}>
                🎓 Hello! I'm <span style={{ color: "#6c5ce7", fontWeight: "600" }}>Achumile Kondile</span>,
                a passionate developer with a diploma in <span style={{ fontWeight: "600" }}>ICT Application Development</span>.
                My technical skills include <span style={{ color: "#6c5ce7" }}>Java, Python, HTML, CSS, JavaScript, React.js, 
                and SQL</span>. I enjoy learning about mobile app development and exploring emerging technologies to enhance 
                my capabilities.
              </p>
              <p className="lead mb-0" style={{ color: "#636e72", lineHeight: "1.8" }}>
                I thrive in dynamic, team-oriented environments where I can contribute to innovative projects while honing 
                my skills. My focus is on building scalable, user-friendly applications that meet both client expectations 
                and industry standards. I am eager to leverage my <span style={{ color: "#6c5ce7", fontWeight: "600" }}>
                technical expertise and problem-solving skills</span> to drive impactful projects and seize exciting new 
                opportunities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;