import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaPhone,
  FaEnvelope,
  FaBriefcase,
  FaGraduationCap,
  FaHourglassHalf,
} from "react-icons/fa";

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

  const componentStyles = {
    container: {
      minHeight: "100vh",
      background: `linear-gradient(135deg, ${colors.lightLavender} 0%, ${colors.paleRose} 100%)`,
      fontFamily: "'Poppins', sans-serif",
      padding: "4rem 2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    contentWrapper: {
      maxWidth: "1100px",
      width: "100%",
      display: "flex",
      gap: "3rem",
      flexWrap: "wrap",
    },
    leftColumn: {
      flex: "1 1 450px",
      color: colors.indigo,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    rightColumn: {
      flex: "1 1 350px",
      backgroundColor: colors.white,
      borderRadius: "20px",
      padding: "2rem",
      boxShadow: `0 10px 30px ${colors.shadowPink}`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      color: colors.indigo,
      minWidth: "320px",
    },
    title: {
      fontSize: "3.8rem",
      fontWeight: "700",
      color: colors.darkMagenta,
      marginBottom: "1rem",
      letterSpacing: "0.05em",
      textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
    },
    subtitle: {
      fontSize: "2rem",
      color: colors.mediumVioletRed,
      marginBottom: "1rem",
      fontWeight: "600",
      borderBottom: `3px solid ${colors.hotPink}`,
      paddingBottom: "0.3rem",
      width: "max-content",
    },
    paragraph: {
      fontSize: "1.2rem",
      lineHeight: "1.8",
      marginBottom: "1.5rem",
      userSelect: "none",
    },
    highlight: {
      fontWeight: "700",
      color: colors.mediumVioletRed,
    },
    techStackContainer: {
      marginTop: "1rem",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.7rem",
      justifyContent: "center",
    },
    techPill: {
      background: colors.hotPink,
      color: colors.white,
      padding: "0.6rem 1.3rem",
      borderRadius: "30px",
      fontWeight: "600",
      fontSize: "1rem",
      cursor: "pointer",
      userSelect: "none",
      boxShadow: `0 4px 10px ${colors.shadowPink}`,
      transition: "all 0.3s ease-in-out",
    },
    contactInfoLine: {
      display: "flex",
      alignItems: "center",
      marginBottom: "1rem",
      fontSize: "1.1rem",
      userSelect: "none",
    },
    contactIcon: {
      color: colors.hotPink,
      fontSize: "1.4rem",
      marginRight: "1rem",
      minWidth: "25px",
      textAlign: "center",
    },
    contactLabel: {
      fontWeight: "700",
      color: colors.darkMagenta,
      marginRight: "0.4rem",
      minWidth: "90px",
      textAlign: "right",
    },
  };

  const techPillHover = {
    scale: 1.1,
    backgroundColor: colors.mediumVioletRed,
    boxShadow: `0 6px 18px ${colors.shadowPink}`,
    transition: { duration: 0.3 },
  };

  return (
    <div style={componentStyles.container} id="about">
      <div style={componentStyles.contentWrapper}>
        {/* Left Column */}
        <div style={componentStyles.leftColumn}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={componentStyles.title}
          >
            About <span style={componentStyles.highlight}>Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={componentStyles.paragraph}
          >
            Hi, I'm <span style={componentStyles.highlight}>Achumile Kondile</span> — a
            beginner software developer with a strong desire to learn, grow, and
            contribute to impactful digital solutions. My journey in tech began
            with curiosity and turned into a real passion for turning ideas into
            interactive web experiences.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={componentStyles.paragraph}
          >
            Over the past year, I've immersed myself in web development,
            focusing on mastering both design and logic. I enjoy working with
            modern technologies and bringing designs to life using clean code
            and efficient tools.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            style={componentStyles.paragraph}
          >
            I've built several personal and collaborative projects that have
            taught me how to work with real-world challenges, and I'm always on
            the lookout for new opportunities to grow — whether that's through
            freelance work, internships, or mentorship.
          </motion.p>
        </div>

        {/* Right Column */}
        <div style={componentStyles.rightColumn}>
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            style={componentStyles.subtitle}
          >
            Tech Stack
          </motion.h3>
          <motion.div
            style={componentStyles.techStackContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React",
              "Python",
              "Bootstrap",
              "Visual Studio Code",
              "IntelliJ IDEA",
              "Visual Studio",
            ].map((tech, i) => (
              <motion.span
                key={i}
                style={componentStyles.techPill}
                whileHover={techPillHover}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            style={{ ...componentStyles.subtitle, marginTop: "3rem" }}
          >
            Contact Information
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div style={componentStyles.contactInfoLine}>
              <FaGraduationCap style={componentStyles.contactIcon} />
              <span style={componentStyles.contactLabel}>Name:</span> Achumile Kondile
            </div>
            <div style={componentStyles.contactInfoLine}>
              <FaHourglassHalf style={componentStyles.contactIcon} />
              <span style={componentStyles.contactLabel}>Level:</span> Beginner
            </div>
            <div style={componentStyles.contactInfoLine}>
              <FaBriefcase style={componentStyles.contactIcon} />
              <span style={componentStyles.contactLabel}>Experience:</span> 1 year
            </div>
            <div style={componentStyles.contactInfoLine}>
              <FaPhone style={componentStyles.contactIcon} />
              <span style={componentStyles.contactLabel}>Phone:</span> +27 72 589 5129
            </div>
            <div style={componentStyles.contactInfoLine}>
              <FaEnvelope style={componentStyles.contactIcon} />
              <span style={componentStyles.contactLabel}>Email:</span> achumilekondile@gmail.com
            </div>
            <div style={componentStyles.contactInfoLine}>
              <FaBriefcase style={componentStyles.contactIcon} />
              <span style={componentStyles.contactLabel}>Freelance:</span> Available
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
