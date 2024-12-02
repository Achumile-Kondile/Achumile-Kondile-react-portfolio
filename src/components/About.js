import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div
      id="about"
      className="border-bottom pb-5 bg-light"
      style={{ fontFamily: "'Poppins', sans-serif" }} // Main font for the section
    >
      {/* Section Title */}
      <div className="text-center my-5">
        <h1 className="display-4 font-weight-bold text-dark">
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
            <p className="lead text-muted" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
              🎓 Hi, I'm <span className="fw-bold text-primary" style={{ fontFamily: "'Montserrat', sans-serif" }}>Achumile Kondile</span>, an aspiring developer with a strong foundation in <span className="fw-bold text-dark">ICT Application Development</span>. I hold a diploma in ICT, and my technical expertise spans <span className="text-primary">Java, Python, HTML, CSS, JavaScript, React.js, and SQL</span>. I'm gaining experience with mobile app development and always seeking new ways to expand my knowledge of emerging technologies. I thrive in collaborative and dynamic environments, contributing to innovative solutions while continuously improving my skills. My focus is on delivering user-friendly, scalable web and mobile applications that meet both client needs and industry standards. I'm committed to staying updated with the latest trends and best practices, ensuring forward-thinking solutions for every project. I am excited to bring my <span className="fw-bold text-primary">technical skills, problem-solving abilities</span>, and passion for innovation to impactful projects and new opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
