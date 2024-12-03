import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div
      id="about"
      className="py-5 mt-5 border-bottom bg-light"
      style={{ fontFamily: "'Poppins', sans-serif" }} // Apply Poppins globally to this section
    >
      {/* Section Title */}
      <div className="text-center mb-5">
        <h1
          className="display-4 font-weight-bold text-dark"
          style={{ fontFamily: "'Montserrat', sans-serif" }} // Specific font for the title
        >
          About <span className="text-primary">Me</span>
        </h1>
      </div>

      <div className="container px-3 px-lg-5">
        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="row justify-content-center align-items-center"
        >
          <div className="col-12 col-lg-8 p-4">
            <p
              className="lead text-muted"
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                fontFamily: "'Roboto', sans-serif", // Roboto for content text
              }}
            >
              🎓 Hello! I'm{" "}
              <span
                className="fw-bold text-primary"
                style={{ fontFamily: "'Montserrat', sans-serif" }} // Montserrat for highlights
              >
                Achumile Kondile
              </span>
              , a passionate developer with a diploma in{" "}
              <span className="fw-bold text-dark">
                ICT Application Development
              </span>
              . My technical skills include{" "}
              <span className="text-primary">
                Java, Python, HTML, CSS, JavaScript, React.js, and SQL
              </span>
              . I enjoy learning about mobile app development and exploring
              emerging technologies to enhance my capabilities. I thrive in
              dynamic, team-oriented environments where I can contribute to
              innovative projects while honing my skills. My focus is on
              building scalable, user-friendly applications that meet both
              client expectations and industry standards. Staying updated with
              the latest tools and best practices is a priority for me, as I
              aim to create forward-thinking solutions. I am eager to leverage
              my{" "}
              <span className="fw-bold text-primary">
                technical expertise and problem-solving skills
              </span>
              to drive impactful projects and seize exciting new opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
