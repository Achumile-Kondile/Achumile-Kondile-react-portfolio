import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_l28y6sp',
        'template_u2zj1ho',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Achumile Kondile',
        },
        'kY5x3hJvaJQgTV4vX'
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Inline styles
  const styles = {
    contactSection: {
      background: "#000000", // Solid black
      padding: "3rem 0",
    },
    heading: {
      color: "#8F37B1", // #8F37B1
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    accentText: {
      color: "#3623F", // #3623F
    },
    divider: {
      width: "60px",
      height: "4px",
      background: "#3623F", // #3623F
      margin: "1rem auto",
    },
    card: {
      background: "rgba(255, 255, 255, 0.1)", // Semi-transparent white
      backdropFilter: "blur(10px)",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
      borderRadius: "10px",
      overflow: "hidden",
      border: "1px solid #3623F", // Subtle border
    },
    input: {
      background: "transparent",
      border: "1px solid #3623F", // #3623F
      color: "#FFFFFF", // White text
      padding: "0.8rem",
      borderRadius: "8px",
    },
    button: {
      background: "#3623F", // #3623F
      color: "white",
      borderRadius: "50px",
      padding: "0.75rem 1.5rem",
      fontSize: "1.1rem",
    },
    text: {
      color: "#FFFFFF", // White text
      lineHeight: "1.8",
    },
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contacts" style={styles.contactSection}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 style={styles.heading}>
            Contact <span style={styles.accentText}>Me</span>
          </h2>
          <div style={styles.divider} />
        </motion.div>

        <div className="row g-4">
          {/* Left Column - Form */}
          <motion.div
            className="col-lg-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="card border-0" style={styles.card}>
              <div className="card-body p-4">
                <h3 className="card-title text-center mb-4" style={{ color: "#8F37B1" }}>
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      style={styles.input}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      style={styles.input}
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Your Message"
                      required
                      style={styles.input}
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="btn btn-lg w-100"
                    style={styles.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="col-lg-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="card border-0 h-100" style={styles.card}>
              <div className="card-body p-4">
                <h3 className="card-title text-center mb-4" style={{ color: "#8F37B1" }}>
                  Get in Touch
                </h3>
                <p className="lead mb-4" style={styles.text}>
                  If you have any questions or would like to work together, feel free to reach out to me.
                  You can use the form, or connect via email or social media.
                </p>
                <div className="mb-4" style={styles.text}>
                  <p className="mb-1">
                    <strong style={{ color: "#3623F" }}>Phone:</strong> 072 589 5129
                  </p>
                  <p className="mb-0">
                    <strong style={{ color: "#3623F" }}>Location:</strong> Eastern Cape, King Williams Town
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </section>
  );
};

export default Contact;