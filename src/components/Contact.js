import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  FaLinkedin, 
  FaGithub,
  FaChevronUp,
} from "react-icons/fa";

const ContactPage = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cet4phl",
        "template_0rvgwsp",
        form.current,
        "w8oNq9LzBuUiz1nUO"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const colors = {
    lightLavender: "#e6e6fa",
    softPink: "#ffb6c1",
    lightGray: "#f8f9fa",
    white: "#ffffff",
    purple: "#6f42c1",
    pinkAccent: "#ff69b4",
    mediumVioletRed: "#C71585",
    darkMagenta: "#8B008B",
    shadowPink: "rgba(255,105,180,0.2)",
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
  `;

  // Scroll function
  const scrollToPreviousSection = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
    }
  };

  const styles = {
    pageContainer: {
      background: `linear-gradient(135deg, ${colors.lightLavender} 0%, ${colors.softPink} 100%)`,
      position: "relative",
      minHeight: "100vh",
    },
    formSection: {
      padding: "2rem",
      borderRadius: "1rem",
      backgroundColor: colors.white,
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "500px",
      margin: "auto",
    },
    heading: {
      color: colors.purple,
      fontWeight: "bold",
      marginBottom: "1.5rem",
      textAlign: "center",
    },
    button: {
      backgroundColor: colors.pinkAccent,
      color: colors.white,
      border: "none",
      padding: "0.5rem 1.5rem",
      borderRadius: "2rem",
      fontWeight: "bold",
    },
    footer: {
      backgroundColor: colors.white,
      padding: "1rem 0",
      borderTop: `2px solid ${colors.pinkAccent}`,
      textAlign: "center",
      width: "100%",
    },
    footerIcon: {
      color: colors.purple,
      fontSize: "1.5rem",
      margin: "0 1rem",
    },
    footerIconHover: {
      scale: 1.2,
      color: colors.pinkAccent,
      transition: { duration: 0.3 },
    },
    footerText: {
      color: colors.purple,
      fontSize: "0.9rem",
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
    scrollText: {
      color: colors.darkMagenta,
      fontSize: "0.9rem",
      marginBottom: "8px",
      fontWeight: "500",
    },
    scrollButton: {
      backgroundColor: colors.pinkAccent,
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

  const scrollIndicatorAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { delay: 1.5, duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <>
      <style>{bounceKeyframes}</style>
      <div className="d-flex flex-column min-vh-100" style={styles.pageContainer} id="contact">
       
        <div className="flex-grow-1 d-flex align-items-center justify-content-center">
          <motion.section
            className="container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={styles.formSection}>
              <h2 style={styles.heading}>Contact Me</h2>
              {isSubmitted ? (
                <p className="text-success text-center fw-bold">
                  Thank you! Your message has been sent.
                </p>
              ) : (
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3">
                    <label htmlFor="user_name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="user_name"
                      name="user_name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="user_email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="user_email"
                      name="user_email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <motion.button
                      type="submit"
                      className="btn"
                      style={styles.button}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.section>
        </div>

        <footer style={styles.footer}>
          <div className="container">
            <div className="d-flex justify-content-center mb-3">
              <motion.a
                href="https://www.linkedin.com/in/achumile-kondile/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.footerIcon}
                whileHover={styles.footerIconHover}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/Achumile-Kondile"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.footerIcon}
                whileHover={styles.footerIconHover}
              >
                <FaGithub />
              </motion.a>
            </div>
            <p style={styles.footerText}>
              © {new Date().getFullYear()} Achumile Kondile. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactPage;