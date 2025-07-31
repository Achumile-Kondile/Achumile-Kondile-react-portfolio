import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  FaGraduationCap, 
  FaBriefcase,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

const Experience = () => {
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

  const education = [
    {
      id: 1,
      institution: "Walter Sisulu University",
      degree: "Diploma in ICT Application Development",
      years: "2021 – 2023",
      description:
        "Completed a three-year diploma program focused on software development, systems analysis, and programming, providing a solid foundation in modern application development and IT practices.",
    },
    {
      id: 2,
      institution: "GirlCode",
      degree: "Python Bootcamp (Online)",
      years: "June 2024 – September 2024",
      description:
        "Participated in an intensive online bootcamp focused on Python fundamentals, coding best practices, and real-world problem-solving using Python. The program emphasized hands-on projects and collaborative learning in a virtual environment.",
    },
    {
      id: 3,
      institution: "Walter Sisulu University",
      degree: "Samsung Innovation Campus – Python & Artificial Intelligence",
      years: "2023",
      description:
        "Selected to be part of the Samsung Innovation Campus where I received training in Python programming and Artificial Intelligence. Recognized among the top 3 performers in the AI module and awarded a prize for excellence.",
    },
  ];

  const workExperience = [
    {
      id: 1,
      company: "CAPACITI",
      role: "Salesforce Administrator Candidate",
      duration: "March 2024 – September 2024 (7 months)",
      description:
        "As a Salesforce Administrator Candidate, I gained foundational experience in managing the Salesforce platform. This included data management, automation of business processes, and the creation of reports and dashboards. I also configured Salesforce to meet business requirements while adhering to best practices in data security and user access management. This role enhanced my ability to support organizational efficiency through effective CRM solutions.",
    },
    {
      id: 2,
      company:
        "Pan African Information Communication Technology Association (PAICTA)",
      role: "Software Development Intern",
      duration: "October 2024 – Present",
      description:
        "Currently serving as a Software Development Intern at PAICTA and seconded to the CSIR's SAMI Department in East London. In this role, I am gaining practical experience in both software development and networking. My responsibilities involve learning and applying technologies such as Linux (Ubuntu), Git, HTML, CSS, and JavaScript, with plans to begin working with ReactJS and Material UI. I am also contributing to a research and development project focused on Dynamic Spectrum Access beyond TV White Spaces (TVWS), applying my technical skills to real-world software challenges.",
    },
  ];

  const styles = {
    section: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: colors.white,
      padding: "4rem 2rem",
      minHeight: "100vh",
      color: colors.indigo,
      textAlign: "center",
      position: "relative",
    },
    heading: {
      color: colors.darkMagenta,
      fontSize: "3rem",
      fontWeight: "700",
      marginBottom: "1rem",
    },
    divider: {
      width: "80px",
      height: "5px",
      backgroundColor: colors.hotPink,
      margin: "0 auto 3rem",
      borderRadius: "3px",
    },
    card: {
      backgroundColor: colors.lightLavender,
      borderRadius: "15px",
      border: `1px solid ${colors.paleRose}`,
      boxShadow: `0 10px 30px ${colors.shadowPink}`,
      padding: "1.5rem",
      marginBottom: "2rem",
      maxWidth: "600px",  // limit width to 600px
      marginLeft: "auto",
      marginRight: "auto", // center horizontally
      cursor: "default",
      userSelect: "none",
    },
    cardTitle: {
      color: colors.mediumVioletRed,
      fontSize: "1.5rem",
      fontWeight: "700",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "0.5rem",
    },
    cardSubtitle: {
      color: colors.darkMagenta,
      fontSize: "1.1rem",
      fontWeight: "600",
      marginBottom: "0.3rem",
    },
    cardYears: {
      fontStyle: "italic",
      marginBottom: "1rem",
      color: colors.indigo,
      fontSize: "1rem",
    },
    cardDesc: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: colors.indigo,
      whiteSpace: "pre-line",
    },
    icon: {
      marginRight: "10px",
      color: colors.mediumVioletRed,
      minWidth: "22px",
      minHeight: "22px",
    },
    scrollUpIndicator: {
      position: "absolute",
      top: "30px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      zIndex: 10,
    },
    scrollDownIndicator: {
      position: "absolute",
      bottom: "30px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      zIndex: 10,
    },
    scrollText: {
      color: colors.darkMagenta,
      fontSize: "0.9rem",
      marginBottom: "8px",
      fontWeight: "500",
    },
    scrollButton: {
      backgroundColor: colors.hotPink,
      color: colors.white,
      border: "none",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.2rem",
      cursor: "pointer",
      boxShadow: `0 4px 15px ${colors.shadowPink}`,
      transition: "all 0.3s ease-in-out",
    },
  };

  // Bounce animation keyframes
  const bounceKeyframes = `
    @keyframes bounceUp {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-8px);
      }
      60% {
        transform: translateY(-4px);
      }
    }
    @keyframes bounceDown {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(8px);
      }
      60% {
        transform: translateY(4px);
      }
    }
  `;

  // Scroll functions
  const scrollToPreviousSection = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
    }
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('contact') || document.getElementById('footer');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  // Animation variants for playful hover effect
  const hoverAnimation = {
    scale: 1.05,
    rotate: [0, 2, -2, 2, -2, 0], // subtle wiggle rotation
    transition: { duration: 0.4, ease: "easeInOut" },
  };

  const scrollIndicatorAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { delay: 2, duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <>
      <style>{bounceKeyframes}</style>
      <section style={styles.section} id="experience">
        
        <h2 style={styles.heading}>My Experience</h2>
        <div style={styles.divider}></div>

        {/* Education Section */}
        <h3
          style={{
            ...styles.heading,
            fontSize: "2.2rem",
            marginBottom: "1.5rem",
            color: colors.darkMagenta,
          }}
        >
          Education
        </h3>

        {education.map((edu) => (
          <motion.div
            key={edu.id}
            style={styles.card}
            whileHover={hoverAnimation}
            tabIndex={0} // make cards focusable for accessibility
          >
            <h4 style={styles.cardTitle}>
              <FaGraduationCap style={styles.icon} />
              {edu.degree}
            </h4>
            <p style={styles.cardSubtitle}>{edu.institution}</p>
            <p style={styles.cardYears}>{edu.years}</p>
            <p style={styles.cardDesc}>{edu.description}</p>
          </motion.div>
        ))}

        {/* Work Experience Section */}
        <h3
          style={{
            ...styles.heading,
            fontSize: "2.2rem",
            marginBottom: "1.5rem",
            marginTop: "4rem",
            color: colors.darkMagenta,
          }}
        >
          Work Experience
        </h3>

        {workExperience.map((work) => (
          <motion.div
            key={work.id}
            style={styles.card}
            whileHover={hoverAnimation}
            tabIndex={0}
          >
            <h4 style={styles.cardTitle}>
              <FaBriefcase style={styles.icon} />
              {work.role}
            </h4>
            <p style={styles.cardSubtitle}>{work.company}</p>
            <p style={styles.cardYears}>{work.duration}</p>
            <p style={styles.cardDesc}>{work.description}</p>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default Experience;